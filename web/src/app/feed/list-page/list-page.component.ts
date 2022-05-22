import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 

import { FeedDataService } from '../feed-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';
import { SeoService } from '@app/@shared/seo.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  feed:any;
  search = 'Procure artigos';

  title = 'Card View Demo';
  selectedType: any;

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  constructor(
    private seo: SeoService,
    private db: AngularFirestore,
    public data: FeedDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.seo.generateTags({
      title: 'Lista de artigos',
      description: 'A lista completa de todos os artigos disponiveis',
    });

    // this.customers = this.db.collection('customers').valueChanges({ idField: 'id' });

    this.data.subscribeToFeed();
    console.log(this.data);
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

  onSelectedType(val: []) {
    this.selectedType = val;
    let test: any[] = [];
    val.forEach((el) => {
      test.push(Number(el));
    });
    console.log(val);
    this.data.subscribeToFeed(test);
  }
}
