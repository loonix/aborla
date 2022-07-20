import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { Storage, StorageReference, UploadTask } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from '@app/@shared/form-group/form.component';
import { AdPackages, DateExpiration, Item, ItemModel, TypeOfRequest } from '@app/@shared/models/item.model';
import { LocationDetails, LocationPTAPI } from '@app/@shared/models/location.model';
import { User } from '@app/@shared/models/user.model';
import { AuthService } from '@app/@shared/services/auth.service';
import { errorMessages } from '@app/@shared/validators/error-messages';
import { combineLatest, finalize } from 'rxjs';
import { FeedDataService } from '../feed-data.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-edit-list-item',
  templateUrl: './add-edit-list-item.component.html',
  styleUrls: ['./add-edit-list-item.component.scss'],
})
export class AddEditListItemComponent extends FormComponent implements OnInit {
  form: FormGroup;
  titleFormControl: FormControl;
  categoryFormControl: FormControl;
  descriptionFormControl: FormControl;
  expirationDateFormControl: FormControl;
  acceptsTradeFormControl: FormControl;
  postcodeFormControl: FormControl;
  typeOfRequestFormControl: FormControl;
  // adPackageFormControl: FormControl;
  itemImagesAvaliable: boolean;
  validationMessages = {
    title: {
      required: errorMessages.required,
    },
    description: {
      required: errorMessages.required,
    },
    postcode: {
      required: errorMessages.required,
    },
    category: {
      required: errorMessages.required,
    },
    expirationDate: {
      required: errorMessages.required,
    }
  };
  isEdit: boolean;
  item: Item;
  modalTitle: any;
  cards: any = [
    {
      title: 'Destacar anuncio no site',
      icon: 'public',
      days: 3,
      amount: 3.0,
      id: AdPackages.SiteOnly,
    },
    {
      title: 'Destacar anuncio na app',
      icon: 'smartphone',
      days: 3,
      amount: 3.0,
      id: AdPackages.AppOnly,
    },
    {
      title: 'Destacar anuncio no site na app',
      icon: null,
      iconStacked1: 'public',
      iconStacked2: 'smartphone',
      days: 3,
      amount: 5.0,
      id: AdPackages.SiteAndApp,
    },
    {
      title: 'Nao destacar anuncio',
      icon: 'close',
      days: 0,
      amount: 0.0,
      id: AdPackages.None,
    },
  ];

  dates = [
    {
      id: DateExpiration.THREEDAYS,
      name: '3 Days',
    },
    {
      id: DateExpiration.SEVENDAYS,
      name: '7 Days',
    }
  ]

  locationDetails: LocationDetails;
  dbName = 'feed';
  typeOfRequest = TypeOfRequest;

  imagesToUpdate: string[] = [];

  selectedFile: any = null;
  allCategories: any;
  categories: any;
  feed: any;
  users: User[];
  selectedAd: AdPackages = AdPackages.None;
  ref: StorageReference;
  task: UploadTask;
  imageFiles: any[] = [];
  uploadPercent: any
  constructor(
    @Optional() public dialogRef: MatDialogRef<AddEditListItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private db: AngularFirestore,
    public authService: AuthService,
    public feedService: FeedDataService,
    private storage: AngularFireStorage,
  ) {
    super();
    this.setData(data);
  }
  override ngOnInit(): void {
    console.log(this.item)
    // if the item is empty then it creates a new empty item else it loads the item
    if (this.item === undefined) {
      this.item = new ItemModel();
      this.isEdit = false;
    }

    const obsFeed$ = this.db
      .collection('feed')
      .valueChanges({ idField: 'id' });

    const obsUsers$ = this.db
      .collection('users')
      .valueChanges({ idField: 'id' });

    const obsAds$ = this.db
      .collection('users')
      .valueChanges({ idField: 'id' });

    const obs$ = combineLatest(
      [obsFeed$, obsUsers$]
    );

    obs$.subscribe((latest: any) => {
      this.feed = latest[0];
      this.allCategories = this.feed.map((item: any) => item.category);
      // remove duplicates from allCategories
      const removeDupCategories = this.item = this.allCategories.filter((el: any, i: any, a: string | any[]) => i === a.indexOf(el));
      this.allCategories = removeDupCategories;
      this.categories = this.allCategories;
      this.users = latest[1];
    });


    this.item = this.item ? this.item : new ItemModel();
    this.areImagesAvailable();
    this.titleFormControl = new FormControl(this.isEdit ? this.item.title : '', [Validators.required]);
    this.descriptionFormControl = new FormControl(this.isEdit ? this.item.description : '', [Validators.required]);
    this.postcodeFormControl = new FormControl(this.isEdit ? this.item.location?.postcode : '', [Validators.required]);

    this.categoryFormControl = new FormControl(this.isEdit ? this.item.category : '', [Validators.required]);
    this.expirationDateFormControl = new FormControl(this.item.expirationDate, [Validators.required]);
    this.acceptsTradeFormControl = new FormControl(
      this.isEdit ? this.item.typeOfRequest == TypeOfRequest.Trade : '', []
    );
    this.typeOfRequestFormControl = new FormControl(this.item.typeOfRequest, [Validators.required]);

    // this.adPackageFormControl = new FormControl(this.item.adPackage, [Validators.required]);

    if (this.isEdit) {
      this.selectedAd = this.item.adPackage;
    }

    this.form = new FormGroup({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
      category: this.categoryFormControl,
      expirationDate: this.expirationDateFormControl,
      acceptsTrade: this.acceptsTradeFormControl,
      postcode: this.postcodeFormControl,
      typeOfRequest: this.typeOfRequestFormControl,
      // adPackage: this.adPackageFormControl,
    });
    super.ngOnInit();

    //detect changes on categories
    this.categoryFormControl.valueChanges.subscribe((value: any) => {
      // if empt categories will be allCategories
      if (value === '') {
        this.categories = this.allCategories;
      }
      // else filter the categories
      else {
        this.categories = this.allCategories.filter((item: any) => item.toLowerCase().includes(value.toLowerCase()));
      }
    });

    this.typeOfRequestFormControl.patchValue(this.isEdit ? this.item.typeOfRequest.toString() : TypeOfRequest.Request.toString());

  }

  areImagesAvailable() {
    this.itemImagesAvaliable = !!(this.item && this.item.images && this.item.images.length > 0);
  }

  uploadFile(file: File, itemId: string, position: number) {
    return new Promise((resolve, reject) => {
      const filePath = itemId + '/' + position;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file)
      resolve(task);
    });
  }


  compressImage(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let image = new Image();
        image.src = reader.result as any;
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          (ctx as any).drawImage(image, 0, 0);
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;
          let width = image.width;
          let height = image.height;
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx2 = canvas.getContext('2d');
          (ctx2 as any).drawImage(image, 0, 0, width, height);
          const dataurl = canvas.toDataURL('image/jpeg');
          resolve(dataurl);
        }
      }
    });
  }



  onSubmit() {
    if (this.validateForm()) {
      const guid = this.db.createId();

      const user = this.authService.GetUser();

      this.getLocationDetails(this.postcodeFormControl.value).then((loc) => {
        let imgUrls: string[] = [];

        this.imageFiles.forEach((imageFile: File, index: number) => {

          const filePath = (this.item && this.item.id ? this.item.id : guid) + '/' + index;
          const ref = this.storage.ref(filePath);
          const task = ref.put(imageFile)
          this.uploadPercent = task.percentageChanges();
          console.log(this.uploadPercent);
          // get notified when the download URL is available
          task.snapshotChanges().pipe(
            finalize(() => {
              ref.getDownloadURL().subscribe((url: string) => {
                imgUrls.push(url);
              });
            }))
        })
        const item: Item = {
          timestamp: this.isEdit ? this.item.timestamp : Timestamp.now(),
          title: this.titleFormControl.value,
          description: this.descriptionFormControl.value,
          categoryId: this.categoryFormControl.value,
          expirationDate: this.expirationDateFormControl.value,
          category: this.categoryFormControl.value, // todo
          typeOfRequest: this.typeOfRequestFormControl.value ? Number(this.typeOfRequestFormControl.value) : TypeOfRequest.Request,
          location: loc,
          id: this.item.id,
          images: imgUrls.length ? imgUrls : this.item.images,
          adPackage: this.isEdit ? this.item.adPackage : this.selectedAd, //this.adPackageFormControl.value,
          userId: user.uid,
        };

        // if it is editing an existing item
        if (this.isEdit) {
          this.db.collection(this.dbName).doc(this.item.id).update(item);
          this.dialogRef.close();
        } else {
          item.id = guid;
          this.db.collection(this.dbName).add(item);
          this.dialogRef.close();
        }
        console.log(item);
        return;

      }).catch((err) => {
        console.log(err);
        this.serverError = err;
      });
    }
  }

  setData(data: any) {
    this.isEdit = data.isEdit;
    const type = this.isEdit ? 'Editar' : 'Adicionar';
    this.modalTitle = `${type} Artigo`;
    if (this.isEdit) this.item = this.data?.item;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeSpecialCharacters(str: string) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
  }

  getLocationDetails(postcode: string) {
    var onlyNumbersPostCode = this.removeSpecialCharacters(postcode);
    const url = `https://api.duminio.com/ptcp/v2/ptapi62d153960d1157.90152558/${onlyNumbersPostCode}`;
    return fetch(url)
      .then(response => response.json())
      .then((data: LocationPTAPI[]) => {
        console.log(data);
        if (data && data.length) {
          this.locationDetails = {
            ID: data[0].ID,
            postcode: data[0].CodigoPostal,
            address: data[0].Morada,
            doorNumber: data[0].NumeroPorta,
            place: data[0].Localidade,
            parish: data[0].Freguesia,
            county: data[0].Concelho,
            countyCode: data[0].CodigoDistrito,
            district: data[0].Distrito,
            latitude: data[0].Latitude,
            longitude: data[0].Longitude,
          } as LocationDetails;
        }
        return this.locationDetails;
      });
  }

  convertFileToBase64(file: File): any {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  convertBase64ToFile(base64: string, fileName: string): File {
    const arr = base64.split(',');
    const mime = (arr as any)[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  }

  async onFileSelected(event: any, position: number): Promise<void> {
    const compressedImage: any = await this.compressImage(event.target.files[0]);
    const file = this.convertBase64ToFile(compressedImage, event.target.files[0].name);

    this.imageFiles[position] = file;
    if (!this.item.images) {
      this.item.images = ['', '', ''];
    }
    this.item.images[position] = compressedImage;
    this.selectedFile = event.target.files[0] ?? null;
    this.areImagesAvailable();
  }

  displayFn(option: any): string {
    return option ? option : '';
  }

}