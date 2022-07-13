import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '@app/@shared/models/item.model';

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.scss'],
})
export class ContactUserComponent  implements OnInit {
  isEdit: boolean;
  item: Item;
  modalTitle: any;
  itemImagesAvaliable: boolean;
  userItems = new FormControl('');
  userItemsList: any = [];

  constructor(
    @Optional() public dialogRef: MatDialogRef<ContactUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.setData(data);
  }
   ngOnInit(): void {
  }

  setData(data: any) {
    this.isEdit = data.isEdit;
    this.modalTitle = `Answer`;
    if (this.isEdit) this.item = this.data?.item;
    this.userItemsList.push(this.item); // TODO: Add here the user's items to be able to trade
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
