import { Timestamp } from '@angular/fire/firestore/firebase';
import { TypeOfRequest } from '@app/@shared/models/item.model';

export interface Message {
  senderId: string;
  message: string;
  timestamp: Timestamp;
}

// create class model from interface message  
export class MessageModel {
  messageId: string;
  itemId: string;
  requestType: TypeOfRequest | null;
  buyerId: string;
  sellerId: string;
  messages: Message[];
  items: string[];
  constructor() {
    this.buyerId = '';
    this.sellerId = '';
    this.messages = [];
    this.items = [];
    this.itemId = '';
    this.requestType = null;
    this.messageId = '';
  }
}