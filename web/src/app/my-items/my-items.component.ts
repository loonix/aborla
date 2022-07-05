import { Component, OnInit } from '@angular/core';
import { Item } from '@angular/fire/analytics';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/@shared/seo.service';
import { AddEditListItemComponent } from '@app/feed/add-edit-list-item/add-edit-list-item.component';
import { DetailPageComponent } from '@app/feed/detail-page/detail-page.component';


@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
 
  itemId: any;
  item: Item | any;


  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
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
    const dialogRef = this.dialog.open(DetailPageComponent, {
      data: {
        isEdit: true,
        item: item,
      },
    });
  }
}
