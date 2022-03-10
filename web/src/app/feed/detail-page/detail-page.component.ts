import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo.service';
import { FeedDataService } from '../feed-data.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  productId: string;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public data: FeedDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    // this.customer = this.db
    //   .collection('customers')
    //   .doc<any>(customerId)
    //   .valueChanges()
    debugger;
    this.data.getFeed(this.productId).subscribe(prod => {
      this.seo.generateTags({
        title: prod.title,
        description: prod.description,
        image: prod.images[0],
      })
      this.product = prod;
      console.log(prod);
    });

    console.log(this.productId);
    console.log(this.product);
  }

  openBoardDialog(): void {
    const dialogRef = this.dialog.open(AddEditListItemComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
