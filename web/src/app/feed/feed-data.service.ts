import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedDataService {
  feed = null;
  subscription;
  dbName = 'feed';

  constructor(private db: AngularFirestore) { }

  subscribeToFeed() {
    if (!this.feed) {
      this.subscription = this.db.collection(this.dbName).valueChanges({idField: 'id'})
      .subscribe(data =>  {
        this.feed = data;
      });
    }
  }

  getFeed(id: string) {
    debugger;
    if (this.feed) {
      const cached = this.feed.find(v => v.id === id);
      console.log(this.feed)
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      console.log('id', id);
      debugger;
      return this.db.collection(this.dbName).doc(id).valueChanges();
    }
  }

  dispose() {
    this.subscription.unsubscribe();
    this.feed = null;
  }
}
