import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from '@app/@shared/form-group/form.component';
import { Item, TypeOfRequest } from '@app/@shared/models/item.model';
import { LocationDetails, LocationPTAPI } from '@app/@shared/models/location.model';
import { AuthService } from '@app/@shared/services/auth.service';
import { errorMessages } from '@app/@shared/validators/error-messages';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

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
    },
    {
      title: 'Destacar anuncio na app',
      icon: 'smartphone',
      days: 3,
      amount: 3.0,
    },
    {
      title: 'Destacar anuncio no site na app',
      icon: null,
      iconStacked1: 'public',
      iconStacked2: 'smartphone',
      days: 3,
      amount: 5.0,
    },
    {
      title: 'Nao destacar anuncio',
      icon: 'close',
      days: 0,
      amount: 0.0,
    },
  ];

  dates = [
    '3 Days',
    '7 Days',
  ]

  locationDetails: LocationDetails;
  dbName = 'feed';

  constructor(
    @Optional() public dialogRef: MatDialogRef<AddEditListItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private db: AngularFirestore,
    public authService: AuthService
  ) {
    super();
    this.setData(data);
  }
  override ngOnInit(): void {
console.log(this.item)
    this.itemImagesAvaliable = !!(this.item && this.item.images && this.item.images.length);
    this.titleFormControl = new FormControl(this.isEdit ? this.item.title : '', [Validators.required]);
    this.descriptionFormControl = new FormControl(this.isEdit ? this.item.description : '', [Validators.required]);
    this.postcodeFormControl = new FormControl(this.isEdit ? this.item.location?.postcode : '', [Validators.required]);

    this.categoryFormControl = new FormControl(this.isEdit ? this.item.categoryId : '', [Validators.required]);
    this.expirationDateFormControl = new FormControl(this.isEdit ? this.item.expirationDate : '', [Validators.required]);
    this.acceptsTradeFormControl = new FormControl(
      this.isEdit ? this.item.typeOfRequest == TypeOfRequest.Trade : '', []
    );
    this.typeOfRequestFormControl = new FormControl( this.isEdit ? this.item.typeOfRequest : '', [Validators.required]);


    this.form = new FormGroup({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
      category: this.categoryFormControl,
      expirationDate: this.expirationDateFormControl,
      acceptsTrade: this.acceptsTradeFormControl,
      postcode: this.postcodeFormControl,
      typeOfRequest: this.typeOfRequestFormControl,
    });
    super.ngOnInit();
  }

  onSubmit() {
    if (this.validateForm()) {
      const user = this.authService.GetUser();
      this.getLocationDetails(this.postcodeFormControl.value).then(() => {
        const item: Item = {
          title: this.titleFormControl.value,
          description: this.descriptionFormControl.value,
          categoryId: this.categoryFormControl.value,
          expirationDate: this.expirationDateFormControl.value,
          typeOfRequest: this.acceptsTradeFormControl.value ? TypeOfRequest.Trade : TypeOfRequest.Request,
          location: this.locationDetails,
          username: this.item.username,
          id: this.item.id,
          images: this.item.images,
          adPackage: this.item.adPackage,
          userId: user.uid,
        };

        // if it is editing an existing item
        if(this.isEdit) {
          this.db.collection(this.dbName).doc(this.item.id).update(item);
        } else {
          const guid = this.db.createId();
          item.id = guid;
          this.db.collection(this.dbName).add(item);
        }
        console.log(item);
        return;
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

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
