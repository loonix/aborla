import { Component, OnInit, Type } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/';

import { FeedDataService } from '../feed-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';
import { SeoService } from '@app/@shared/seo.service';
import { Subscription } from 'rxjs';
import { Item, TypeOfRequest } from '@app/@shared/models/item.model';

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

  typeOfRequest:any;
  category: any
  postcode:any;
  picker:any;
  selectedDueIn:any;
  county: any;

  counties:any;
  categories: any;
  // list of all request typeOfRequest
  typeOfRequests: any[] = [
    { value: '', viewValue: 'All' },
    { value: TypeOfRequest.Request, viewValue: 'Request' },
    { value: TypeOfRequest.Offer, viewValue: 'Offer' },
    { value: TypeOfRequest.Trade, viewValue: 'Trade' }
  ];

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 1 : 3;
  }

  displayFn(item: Item): string {
    return item && item.title ? item.title : '';
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
      this.counties = this.feed.map((item: Item) => item.location.county);
      this.counties = this.counties.filter((item: any, index: number) =>
        this.counties.indexOf(item) === index
      );

      this.categories = this.feed.map((item: any) => item.category);
      this.categories = this.categories.filter((item: any, index: number) =>
        this.categories.indexOf(item) === index
      );


      console.log(this.data);
      console.log(this.feed);
      console.log(this.tempFeed);
    });

  }

  search(clear?: boolean) {
    if (clear) this.searchText = '';
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
    if (val.length === 3) {
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
