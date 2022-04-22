import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-list-item',
  templateUrl: './add-edit-list-item.component.html',
  styleUrls: ['./add-edit-list-item.component.scss']
})
export class AddEditListItemComponent {
  isEdit: boolean;
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
    this.setPageTitle(data);
  }

  setPageTitle(data) {
    this.isEdit = data.isEdit;
    const type = this.isEdit ? 'Editar' : 'Adicionar';
    this.modalTitle = `${type} Artigo`;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

