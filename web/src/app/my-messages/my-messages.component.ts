import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, Timestamp } from '@angular/fire/firestore';
import { Item, TypeOfRequest } from '@app/@shared/models/item.model';
import { AuthService } from '@app/@shared/services/auth.service';
import { combineLatest, interval, Subscription } from 'rxjs';
import { MessageDataService } from './message-data.service';
import { Message, RequestStatus } from './message.model';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {
  dbName = 'messages';
  messages: any;
  feed: any;
  users: any;
  loading = true;
  messagesToShow: any;
  selectedUser: any;
  currentUser: any;
  selectedMessage: any;
  message: string;
  typeOfRequest = TypeOfRequest;
  timerCalled: boolean;
  sub: Subscription;
  status = RequestStatus;
  itemInfo: Item;
  get isBuyerViewing() {
    return this.selectedMessage.buyerId === this.currentUser.uid;
  }

  get isSellerViewing() {
    return this.selectedMessage.sellerId === this.currentUser.uid;
  }

  get showMessageControls() {
    return this.selectedMessage && this.selectedMessage.status === this.status.ACCEPTED;
  }

  get activateCancelButton() {
    return this.selectedMessage.status === this.status.PENDING && this.isBuyerViewing;
  }

  get activateAcceptButton() {
    return this.selectedMessage.status === this.status.PENDING && this.isSellerViewing;
  }

  get activateRejectButton() {
    return this.selectedMessage.status === this.status.PENDING && this.isSellerViewing;
  }

  get activateReActivateRequest() {
    return (this.selectedMessage.status === this.status.REJECTED && this.isSellerViewing) ||
      this.selectedMessage.status === this.status.CANCELLED && this.isBuyerViewing;
  }

  get activateFinishButton() {
    return this.selectedMessage.status === this.status.ACCEPTED;
  }



  constructor(
    private db: AngularFirestore,
    public authService: AuthService,
    public data: MessageDataService,
  ) { }

  ngOnInit() {
    const $obsMessage = this.db
      .collection('messages')
      .valueChanges({ idField: 'id' });

    const $obsUsers = this.db
      .collection('users')
      .valueChanges({ idField: 'id' });

    const $obsFeed = this.db
      .collection('feed')
      .valueChanges({ idField: 'id' });

    this.currentUser = this.authService.GetUser();

    const obs$ = combineLatest(
      [$obsMessage, $obsUsers, $obsFeed,]
    );

    obs$.subscribe((latest: any) => {
      this.messages = latest[0];
      this.users = latest[1];
      this.feed = latest[2];

      this.messagesToShow = this.messages.filter((message: any) => message.buyerId == this.currentUser.uid || message.sellerId == this.currentUser.uid);
      this.loading = false;
      if (!this.selectedMessage) {
        this.selectedMessage = this.messagesToShow.length ? this.messagesToShow[0] : null;
      }
      this.itemInfo = this.feed.find((item: Item) => item.id === this.selectedMessage.itemId);
    });
    this.timerCalledFunction();
  }

  // TODO: fix this - currently not refreshing the messages
  timerCalledFunction() {
    if (this.timerCalled == true) return;
    this.timerCalled = true;
    this.sub = (interval(5000)
      .subscribe((val) => { this.ngOnInit(); }));

  }

  sendMessage() {
    console.log(this.message);
    if (this.message) {
      const message: Message = {
        message: this.message,
        timestamp: Timestamp.now(),
        senderId: this.currentUser.uid,
      }
      this.selectedMessage.messages.push(message);
      this.data.sendMessage(this.selectedMessage.id, this.selectedMessage);
      this.message = '';
    }
  }

  getUserName(userId: string) {
    return this.users.find((user: User) => user.uid === userId).displayName;
  }

  getSellerName(sellerId: string, buyerId: string) {
    const sellerUser = this.users.find((u: User) => u.uid === sellerId);
    if (sellerUser.uid === this.currentUser.uid) {
      const buyerUser = this.users.find((u: User) => u.uid === buyerId);
      return buyerUser.displayName;
    }
    return sellerUser.displayName;
  }

  getRequestTypeName(type: TypeOfRequest) {
    switch (type) {
      case TypeOfRequest.Offer:
        return 'Offer';
      case TypeOfRequest.Trade:
        return 'Trade';
      case TypeOfRequest.Request:
        return 'Request';
      default:
        return 'N/D'
    }

  }

  getProductTitleFromId(itemId: string) {
    const item = this.feed.find((item: Item) => item.id === itemId);
    return item.title;
  }

  // gets the messageId and finds in messagesToShow then if the uid matches it will set that message as selectedMessage
  selectMessageFromId(messageId: string) {
    const message = this.messagesToShow.find((m: any) => m.id === messageId);
    this.selectedMessage = message;
  }

  getTimeSinceMessage(timestamp: any) {
    var date = timestamp.toDate();
    const time = Date.now() - date;
    const minutes = Math.floor(time / 60000);
    const hours = Math.floor(time / 3600000);
    const days = Math.floor(time / 86400000);
    if (minutes < 1) {
      return 'Just now';
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days == 1) {
      return `Yesterday at ${date.getHours()}:${date.getMinutes()}`;
    } else {
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
    }
  }

  acceptRequest() {
    this.selectedMessage.status = this.status.ACCEPTED;
    this.updateStatus();

  }

  rejectRequest() {
    this.selectedMessage.status = this.status.REJECTED;
    this.updateStatus();

  }

  cancelRequest() {
    this.selectedMessage.status = this.status.CANCELLED;
    this.updateStatus();

  }

  finishRequest() {
    this.selectedMessage.status = this.status.FINISHED;
    this.updateStatus();
  }

  reActivateRequest() {
    this.selectedMessage.status = this.status.PENDING;
    this.updateStatus();
  }

  updateStatus() {
    this.db.collection(this.dbName).doc(this.selectedMessage.messageId).update(this.selectedMessage);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
