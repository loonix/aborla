import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item, TypeOfRequest } from '@app/@shared/models/item.model';
import { AuthService } from '@app/@shared/services/auth.service';
import { combineLatest, forkJoin } from 'rxjs';
import { MessageDataService } from './message-data.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {
  messages: any;
  feed: any;
  users: any;
  loading = true;
  messagesToShow: any;
  selectedUser: any;
  currentUser: any;
  selectedMessage: any;

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

    // forkJoin([$obsMessage, $obsUsers, $obsFeed]).subscribe(data => {
    //   console.log(data);
    // })

    this.currentUser = this.authService.GetUser()
    const obs$ = combineLatest(
      [$obsMessage, $obsUsers, $obsFeed,]
    );

    obs$.subscribe((latest: any) => {
      this.messages = latest[0];
      this.users = latest[1];
      this.feed = latest[2];

      this.messagesToShow = this.messages.filter((message: any) => message.buyerId == this.currentUser.uid || message.sellerId == this.currentUser.uid);
      console.log(this.messagesToShow);
      this.loading = false;
      console.log(this.data);
      this.selectedMessage = this.messagesToShow.length ? this.messagesToShow[0] : null;
    });
    // const message = `<li class=${
    //   username === messages.username ? "sent" : "receive"
    // }><span>${messages.username}: </span>${messages.message}</li>`;
  }

  // send message to db
  sendMessage() {
    // e.preventDefault();

    // // get values to be submitted
    // const timestamp = Date.now();
    // const messageInput = document.getElementById("message-input");
    // const message = messageInput.value;

    // // clear the input box
    // messageInput.value = "";

    // //auto scroll to bottom
    // document
    //   .getElementById("messages")
    //   .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    // // create db collection and send in the data
    // db.ref("messages/" + timestamp).set({
    //   username,
    //   message,
    // });
  }

  getSellerName(sellerId: string, buyerId: string) {
    const sellerUser = this.users.find((u: User) => u.uid === sellerId);
    if(sellerUser.uid === this.currentUser.uid) {
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

  selectMessage(messageId: string) {
    this.selectedMessage = null;
    const message = this.messagesToShow.find((m:any) => m.uid === messageId);
    this.selectedMessage = message;
  }

}
