import { Component, OnInit } from '@angular/core';
import { AddEditListItemComponent } from '@app/feed/add-edit-list-item/add-edit-list-item.component';
import { Item } from 'src/app/@shared/models/item.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SeoService } from '@app/@shared/seo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DetailPageComponent } from '@app/feed/detail-page/detail-page.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
 
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
