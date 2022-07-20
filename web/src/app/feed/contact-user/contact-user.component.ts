import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '@app/@shared/models/item.model';
import { User } from '@app/@shared/models/user.model';

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.scss'],
})
export class ContactUserComponent implements OnInit {
  isEdit: boolean;
  item: Item;
  modalTitle: any;
  itemImagesAvaliable: boolean;
  userItems = new FormControl('');
  userItemsList: any = [];
  users: User[];
  isLoading = true;
  constructor(
    @Optional() public dialogRef: MatDialogRef<ContactUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public db: AngularFirestore,
  ) {
    this.setData(data);
  }
  ngOnInit(): void {
    const $obs = this.db
      .collection('users')
      .valueChanges({ idField: 'id' });

    $obs.subscribe((users: any) => {
      this.users = users;
      this.isLoading = false;
    });

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

  getUserFromId(id: string) {
    return this.users.find((user) => user.uid === id);
  }

}
