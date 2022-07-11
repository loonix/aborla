import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
