import { Timestamp } from '@angular/fire/firestore/firebase';
import { TypeOfRequest } from '@app/@shared/models/item.model';

export interface Message {
  senderId: string;
  message: string;
  timestamp: Timestamp;
}

// create class model from interface message  
export class MessageModel implements Message {
  senderId: string;
  message: string;
  typeOfRequest: TypeOfRequest;
  items: string[];
  timestamp: Timestamp;
  constructor() {
    this.senderId = '';
    this.message = '';
    this.timestamp = Timestamp.now();
  }
}