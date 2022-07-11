import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/';

import { FeedDataService } from '../feed-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';
import { SeoService } from '@app/@shared/seo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  feed: any;
  subscription: Subscription = new Subscription();

  title = 'Card View Demo';
  selectedType: any;
  searchText = "";
  tempFeed: any;

  gridColumns = 3;
  loading = true;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 1 : 3;
  }

  constructor(
    private seo: SeoService,
    private db: AngularFirestore,
    public data: FeedDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Lista de artigos',
      description: 'A lista completa de todos os artigos disponiveis',
    });

    // this.customers = this.db.collection('customers').valueChanges({ idField: 'id' });

    const $obs = this.db
      .collection('feed')
      .valueChanges({ idField: 'id' });

    $obs.subscribe((data: any) => {
      this.feed = data;
      this.tempFeed = data;
      this.loading = false;

      console.log(this.data);
      console.log(this.feed);
      console.log(this.tempFeed);
    });

  
  }

  search(clear?: boolean) {
    if(clear) this.searchText = '';
    if (clear || this.searchText === '' || this.searchText == null) this.tempFeed = this.data;
    this.tempFeed = this.feed.filter((item: any) =>
      item.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    )
  }

  create() {
    const dialogRef = this.dialog.open(AddEditListItemComponent, {
      data: {
        isEdit: false,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSelectedType(val: any[]) {
    console.log(val);
    if(val.length === 3) {
      this.tempFeed;
    }
    
    // this.selectedType = val;
    // let test: any[] = [];
    // val.forEach((el) => {
    //   test.push(Number(el));
    // });
    // console.log(val);
    // this.data.subscribeToFeed(test);
  }
}
