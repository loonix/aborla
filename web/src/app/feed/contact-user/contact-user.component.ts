import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item, TypeOfRequest } from '@app/@shared/models/item.model';
import { User } from '@app/@shared/models/user.model';
import { AuthService } from '@app/@shared/services/auth.service';
import { MessageModel } from '@app/my-messages/message.model';
import { combineLatest } from 'rxjs';

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
  userItemsList: any = [];
  users: User[];
  isLoading = true;
  feed: Item[];
  currentUser: User;
  selectedUserItems: any;
  message: string;
  typeOfRequest = TypeOfRequest
  serverError: string;
  constructor(
    @Optional() public dialogRef: MatDialogRef<ContactUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public db: AngularFirestore,
    public authService: AuthService,
  ) {
    this.setData(data);
  }
  ngOnInit(): void {
    const obsUsers$ = this.db
      .collection('users')
      .valueChanges({ idField: 'id' });

    const obsFeed$ = this.db
      .collection('feed')
      .valueChanges({ idField: 'id' });

    const obs$ = combineLatest(
      [obsUsers$, obsFeed$]
    );

    obs$.subscribe((latest: any) => {
      this.users = latest[0];
      this.currentUser = this.authService.GetUser();
      console.log(this.currentUser);
      console.log(latest[1]);
      this.feed = latest[1].filter((item: Item) => item.userId === this.currentUser.uid);
      this.userItemsList = this.feed;
      console.log(this.userItemsList);
      this.isLoading = false;
    });
  }

  setData(data: any) {
    this.isEdit = data.isEdit;
    this.modalTitle = `Answer`;
    if (this.isEdit) this.item = this.data?.item;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayFn(option: any): string {
    return option ? option.title : '';
  }

  getUserFromId(id: string) {
    return this.users.find((user) => user.uid === id)?.displayName;
  }

  onSubmit() {
    console.log(this.message);
    console.log(this.selectedUserItems);
    switch (this.item.typeOfRequest) {
      case this.typeOfRequest.Request:
      case this.typeOfRequest.Offer:
        break;
      case this.typeOfRequest.Trade:
        if (!this.selectedUserItems) {
          this.serverError = 'Please select at least one item';
          return;
        }
        break;
    }
    var message: MessageModel = {
      messageId: this.db.createId(),
      itemId: this.item.id,
      requestType: this.item.typeOfRequest,
      buyerId: this.currentUser.uid,
      sellerId: this.item.userId,
      messages: [
        {
          senderId: this.currentUser.uid,
          message: this.message,
          timestamp: Timestamp.now(),

        },
      ],
      items: this.selectedUserItems,
    };
    this.db.collection('messages').doc(message.messageId).set(message);
    this.dialogRef.close();

  }

  onSelectedItemChange(item: any) {
    const itemIds = item.value;
    this.selectedUserItems = itemIds;
  }

}
