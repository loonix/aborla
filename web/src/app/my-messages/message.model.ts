import { Timestamp } from '@angular/fire/firestore/firebase';
import { TypeOfRequest } from '@app/@shared/models/item.model';

export interface Message {
  senderId: string;
  message: string;
  timestamp: Timestamp;
}

export enum RequestStatus {
  PENDING,
  ACCEPTED,
  REJECTED,
  CANCELLED,
  FINISHED,
  UNKNOWN,
}

// create class model from interface message  
export class MessageModel {
  status: RequestStatus;
  messageId: string;
  itemId: string;
  requestType: TypeOfRequest | null;
  buyerId: string;
  sellerId: string;
  messages: Message[];
  items: string[];
  constructor() {
    this.status = RequestStatus.UNKNOWN;
    this.buyerId = '';
    this.sellerId = '';
    this.messages = [];
    this.items = [];
    this.itemId = '';
    this.requestType = null;
    this.messageId = '';
  }
}