import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedDataService {
  feed:any = null;
  subscription: Subscription = new Subscription;
  dbName = 'feed';

  constructor(private db: AngularFirestore) {}

  subscribeToFeed(typeOfRequest?: any[]) {
    if (!this.feed) {
      this.subscription = this.db
        .collection(this.dbName, this.queryFn(typeOfRequest))
        .valueChanges({ idField: 'id' })
        .subscribe((data: any) => {
          this.feed = data;
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

  getFeed(id: string) {
    if (this.feed) {
      const cached = this.feed.find((v: { id: string; }) => v.id === id);
      console.log(this.feed);
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      console.log('id', id);
      return this.db.collection(this.dbName).doc(id).valueChanges();
    }
  }

  dispose() {
    this.subscription.unsubscribe();
    this.feed = null;
  }
}
