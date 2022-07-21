import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from '@app/@shared/form-group/form.component';
import { Item } from '@app/@shared/models/item.model';
import { User } from '@app/@shared/models/user.model';

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.scss'],
})
export class ContactUserComponent extends FormComponent implements OnInit {
  validationMessages: { [key: string]: { [key: string]: string; }; };
  isEdit: boolean;
  item: Item;
  modalTitle: any;
  itemImagesAvaliable: boolean;
  userItems: FormControl;
  comment: FormControl;
  userItemsList: any = [];
  users: User[];
  isLoading = true;
  form: FormGroup;
  commentFormControl: FormControl;
  userItemsFormControl: FormControl;
  constructor(
    @Optional() public dialogRef: MatDialogRef<ContactUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public db: AngularFirestore,
  ) {
    super();
    this.setData(data);
  }
  override ngOnInit(): void {
    const $obs = this.db
      .collection('users')
      .valueChanges({ idField: 'id' });

    $obs.subscribe((users: any) => {
      this.users = users;
      this.isLoading = false;
    });

    this.comment = new FormControl('', [Validators.required]);
    this.userItems = new FormControl('', [Validators.required]);

    this.form = new FormGroup({
      comment: this.commentFormControl,
      userItems: this.userItemsFormControl
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
    return this.users.find((user) => user.uid === id)?.displayName;
  }

}
