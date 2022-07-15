import { Timestamp } from '@angular/fire/firestore/firebase';

export interface Message {
    senderId: string;
    message: string;
    timestamp: Timestamp;
  }