import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo.service';
import { FeedDataService } from '../feed-data.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  itemId: string;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public data: FeedDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');

    // this.customer = this.db
    //   .collection('customers')
    //   .doc<any>(customerId)
    //   .valueChanges()
    this.data.getFeed(this.itemId).subscribe(prod => {
      this.seo.generateTags({
        title: prod.title,
        description: prod.description,
        image: prod.images[0],
      })
      this.item = prod;
      console.log(prod);
    });

    console.log(this.itemId);
    console.log(this.item);
  }

  onEdit(item: Item): void {
    const dialogRef = this.dialog.open(AddEditListItemComponent, {
      data: { 
        isEdit: true,
        item: item
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

    /**
   * Creates a new board for the current user
   */
    async createFeed() {
      // const user = await this.afAuth.currentUser;
      return this.db.collection('feed').add({
        adPackage: "12312312333",
        categoryId: "ZlkX8zngMC91VYM8wnTy",
        description: "Uma boa bicicleta",
        // expirationDate:
        images: [
        "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg",
        "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w",
      ],
        location: "Vila Nova de Gaia",
        title: "Bicicleta de passeio Urban 26'' B-PRO",
        typeOfRequest: 1
      });
    }
}

