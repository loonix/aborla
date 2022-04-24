import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item, TypeOfRequest } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-add-edit-list-item',
  templateUrl: './add-edit-list-item.component.html',
  styleUrls: ['./add-edit-list-item.component.scss']
})
export class AddEditListItemComponent implements OnInit {
  form: FormGroup;
  titleFormControl: FormControl;
  categoryFormControl: FormControl;
  descriptionFormControl: FormControl;
  expirationDateFormControl: FormControl;
  acceptsTradeFormControl: FormControl;

  validationMessages = {
    title: {
      required: "required"
    },
   
  };
  isEdit: boolean;
  item:Item;
  modalTitle;
  cards = [
    {
      title: 'Destacar anuncio no site',
      icon: 'fa-solid fa-earth-europe',
      days: 3,
      ammount: 3.00,
    },
    {
      title: 'Destacar anuncio na app',
      icon: 'fa-solid fa-mobile-button',
      days: 3,
      ammount: 3.00,
    },
    {
      title: 'Destacar anuncio no site na app',
      icon: null,
      iconStacked1: 'fa-solid fa-earth-europe fa-stack-2x',
      iconStacked2: 'fab fa-solid fa-mobile-button fa-stack-1x fa-inverse',
      days: 3,
      ammount: 5.00,
    },
    {
      title: 'Nao destacar anuncio',
      icon: 'fa-solid fa-circle-xmark',
      days: 0,
      ammount: 0.00,
    },
  ];
  constructor(
    @Optional() public dialogRef: MatDialogRef<AddEditListItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.setData(data);
  }
  ngOnInit(): void {
    this.titleFormControl = new FormControl(this.isEdit ? this.item.title : '', Validators.required);
    this.descriptionFormControl = new FormControl(this.isEdit ? this.item.description : '', Validators.required);
    this.categoryFormControl = new FormControl(this.isEdit ? this.item.categoryId : '', Validators.required);
    this.expirationDateFormControl = new FormControl(this.isEdit ? this.item.expirationDate : '', Validators.required);
    this.acceptsTradeFormControl = new FormControl(this.isEdit ? this.item.typeOfRequest == TypeOfRequest.Trade: '', Validators.required);
   
    this.form = new FormGroup({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
      category: this.categoryFormControl,
      expirationDate: this.expirationDateFormControl,
      acceptsTrade: this.acceptsTradeFormControl
    });
  }

  setData(data) {
    this.isEdit = data.isEdit;
    const type = this.isEdit ? 'Editar' : 'Adicionar';
    this.modalTitle = `${type} Artigo`;
    if(this.isEdit) this.item = this.data?.item;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

[
  {
      "typeOfRequest": 1,
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "location": "Vila Nova de Gaia",
      "description": "Uma boa bicicleta",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "adPackage": "12312312333",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "id": "31CGn1I0FHOMTf04WTFT"
  },
  {
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "description": "Uma boa bicicleta",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "location": "Vila Nova de Gaia",
      "adPackage": "12312312333",
      "typeOfRequest": 1,
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "id": "41h38O8tOayPUnh4gOuk"
  },
  {
      "typeOfRequest": 1,
      "description": "Uma boa bicicleta",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "location": "Vila Nova de Gaia",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "adPackage": "12312312333",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "id": "49Gyw5RZjVOWI8oALRcD"
  },
  {
      "location": "Vila Nova de Gaia",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "adPackage": "12312312333",
      "description": "Uma boa bicicleta",
      "typeOfRequest": 1,
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "id": "9L3vtMp4fPDomUz2OxGz"
  },
  {
      "location": "Vila Nova de Gaia",
      "typeOfRequest": 1,
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "description": "Uma boa bicicleta",
      "adPackage": "12312312333",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "id": "EePoq9SlKqHe4uStjhGo"
  },
  {
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "adPackage": "12312312333",
      "location": "Vila Nova de Gaia",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "typeOfRequest": 1,
      "description": "Uma boa bicicleta",
      "id": "Hud8phuOwhxGS9wTPZMW"
  },
  {
      "location": "Vila Nova de Gaia",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "typeOfRequest": 1,
      "description": "Uma boa bicicleta",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "adPackage": "12312312333",
      "id": "NlwScp9ATFyd6i2ks4zu"
  },
  {
      "adPackage": "12312312333",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "location": "Vila Nova de Gaia",
      "description": "Uma boa bicicleta",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "typeOfRequest": 1,
      "id": "OnrnVnYyuAcAycBNGzQ1"
  },
  {
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "description": "Uma boa bicicleta",
      "title": "Bicicleta BMX jante 20",
      "location": "Vila Nova de Gaia",
      "expirationDate": {
          "seconds": 1645956000,
          "nanoseconds": 0
      },
      "typeOfRequest": 1,
      "adPackage": "12312312333",
      "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrajfV8T6ZJQgqEXozsI2TLQa8GZ4JY3or2A&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2jDLQUjow-p5M6WDdg6WRj_xs1c3YGO3Fg&usqp=CAU"
      ],
      "id": "PaT1wzcVn009gQOnmaFg"
  },
  {
      "typeOfRequest": 1,
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "adPackage": "12312312333",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "location": "Vila Nova de Gaia",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____3__640x640.jpg"
      ],
      "description": "Uma boa bicicleta",
      "id": "TcfHSalz5K6wsaRpVsw5"
  },
  {
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "description": "Uma boa bicicleta",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "location": "Vila Nova de Gaia",
      "typeOfRequest": 1,
      "adPackage": "12312312333",
      "id": "UN0c01yis2cDlRvDyS7a"
  },
  {
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "location": "Vila Nova de Gaia",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "adPackage": "12312312333",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "description": "Uma boa bicicleta",
      "typeOfRequest": 1,
      "id": "V7tO1Ll3vn2fULGPqRLk"
  },
  {
      "location": "Vila Nova de Gaia",
      "typeOfRequest": 1,
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "description": "Uma boa bicicleta",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "adPackage": "12312312333",
      "id": "Vtdua1bbC59kF1tyu1ii"
  },
  {
      "typeOfRequest": 1,
      "adPackage": "12312312333",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "location": "Vila Nova de Gaia",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "description": "Uma boa bicicleta",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "id": "XcOVc4GOG55dDAQApxFJ"
  },
  {
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "location": "Vila Nova de Gaia",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "typeOfRequest": 1,
      "adPackage": "12312312333",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "description": "Uma boa bicicleta",
      "id": "bNarVLt4K386hxxWDk7Z"
  },
  {
      "description": "Uma boa bicicleta",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "typeOfRequest": 1,
      "adPackage": "12312312333",
      "location": "Vila Nova de Gaia",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "id": "eZ04ibMU75FfW0H8hDZi"
  },
  {
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "description": "Uma boa bicicleta",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "typeOfRequest": 1,
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "location": "Vila Nova de Gaia",
      "adPackage": "12312312333",
      "id": "lDyAsAZ0f9916FoJyFVS"
  },
  {
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "typeOfRequest": 1,
      "location": "Vila Nova de Gaia",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "description": "Uma boa bicicleta",
      "adPackage": "12312312333",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "id": "mx8U671wiK6T5BBEy5L7"
  },
  {
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "description": "Uma boa bicicleta",
      "adPackage": "12312312333",
      "location": "Vila Nova de Gaia",
      "typeOfRequest": 1,
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "id": "qqzrlZkxDcAxaN29PROx"
  },
  {
      "typeOfRequest": 1,
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "location": "Vila Nova de Gaia",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "description": "Uma boa bicicleta",
      "adPackage": "12312312333",
      "id": "s6z22kJUyUvyDLCnu2To"
  },
  {
      "adPackage": "12312312333",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "description": "Uma boa bicicleta",
      "typeOfRequest": 1,
      "location": "Vila Nova de Gaia",
      "id": "sGxzH2ALd03OfymvdALt"
  },
  {
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "location": "Vila Nova de Gaia",
      "adPackage": "12312312333",
      "typeOfRequest": 1,
      "description": "Uma boa bicicleta",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "id": "tN2AyCj46LBGfsI4gpqi"
  },
  {
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "description": "Uma boa bicicleta",
      "typeOfRequest": 1,
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "location": "Vila Nova de Gaia",
      "adPackage": "12312312333",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "id": "uK0s14nTfnlJ3oJqERBN"
  },
  {
      "location": "Vila Nova de Gaia",
      "description": "Uma boa bicicleta",
      "categoryId": "ZlkX8zngMC91VYM8wnTy",
      "title": "Bicicleta de passeio Urban 26'' B-PRO",
      "adPackage": "12312312333",
      "images": [
          "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
          "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w"
      ],
      "typeOfRequest": 1,
      "id": "v1vmSKqruVFbSLJG1UKI"
  }
]