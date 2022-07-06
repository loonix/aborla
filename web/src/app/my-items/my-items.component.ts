import { Component, OnInit } from '@angular/core';
import { Item } from '@angular/fire/analytics';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '@app/@shared/seo.service';
import { AddEditListItemComponent } from '@app/feed/add-edit-list-item/add-edit-list-item.component';
import { DetailPageComponent } from '@app/feed/detail-page/detail-page.component';
import { FeedDataService } from '@app/feed/feed-data.service';
import { RemoveItemDialogComponent } from './dialogs/remove-item-dialog.component';


@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {

  itemId: any;
  item: Item | any;
  gridColumns = 3;


  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public data: FeedDataService,
    public router: Router,
    public dialog: MatDialog
  ) { }


  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  ngOnInit() {
    this.data.subscribeToFeed();
    console.log(this.data);
  }

  onEdit(item: Item): void {
    const dialogRef = this.dialog.open(AddEditListItemComponent, {
      data: {
        isEdit: true,
        item: item,
      },
    });
  }

  onView(item: Item): void {
    this.router.navigate(['feed', item.id]);
  }

  onRemove(item: Item): void {
    this.dialog.open(RemoveItemDialogComponent, {
      width: '250px',
    });
  }
}

