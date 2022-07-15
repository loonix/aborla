import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of, Subscription } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageDataService {
  messages: any = null;
  subscription: Subscription = new Subscription();
  dbName = 'messages';

  constructor(private db: AngularFirestore) { }

  subscribeToMessages(typeOfRequest?: any[]) {
    if (!this.messages) {
      this.subscription = this.db
        .collection(this.dbName, this.queryFn(typeOfRequest))
        .valueChanges({ idField: 'id' })
        .subscribe((data: any) => {
          this.messages = data;
        });
    }
  }
  queryFn(typeOfRequest: any[] | undefined) {
    return (ref: any) => {
      let query = ref;
      if (typeOfRequest) {
        query = query.where('typeOfRequest', '==', typeOfRequest[0]);
      }
      // if(type) { query = query.where('field2', '==', value2) };
      return query;
    };
  }

  getMessage(id: string) {
    if (this.messages) {
      const cached = this.messages.find((v: { id: string }) => v.id === id);
      console.log(this.messages);
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      console.log('id', id);
      return this.db.collection(this.dbName).doc(id).valueChanges();
    }
  }

  sendMessage(messageId: string , message: Message) {
    this.db.collection(this.dbName).doc(messageId).update(message);
  }

 
  dispose() {
    this.subscription.unsubscribe();
    this.messages = null;
  }
}
