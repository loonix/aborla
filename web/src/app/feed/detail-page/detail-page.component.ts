import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FeedDataService } from '../feed-data.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';
import { Item } from 'src/app/@shared/models/item.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SeoService } from '@app/@shared/seo.service';
declare var google: any;

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  itemId: any;
  item: Item | any;
  map: any;
  gridColumns = 5;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public data: FeedDataService,
    public dialog: MatDialog,
    public router: Router
   
    
  ) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');

    this.data.subscribeToFeed();
    console.log(this.data);
    // this.customer = this.db
    //   .collection('customers')
    //   .doc<any>(customerId)
    //   .valueChanges()
    this.data.getFeed(this.itemId).subscribe((prod: Item) => {
      this.seo.generateTags({
        title: prod.title,
        description: prod.description,
        image: prod.images[0],
      });
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
        item: item,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /**
   * Creates a new board for the current user
   */
  async createFeed() {
    // const user = await this.afAuth.currentUser;
    return this.db.collection('feed').add({
      adPackage: '12312312333',
      categoryId: 'ZlkX8zngMC91VYM8wnTy',
      description: 'Uma boa bicicleta',
      // expirationDate:
      images: [
        'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/20/00108451201738____1__640x640.jpg',
        'https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/1573143514034-5FHMY4QBVYI0DWRA00Q5/DSC_4093+edit.jpg?format=2500w',
      ],
      location: 'Vila Nova de Gaia',
      title: "Bicicleta de passeio Urban 26'' B-PRO",
      typeOfRequest: 1,
    });
  }


  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  onView(item: Item): void {
    this.router.navigate(['feed', item.id]);
  }

  
  @ViewChild('map') mapElement: any;
  lat = 41.1359;
  lng = -8.63319;
  markers = [
    { lat: 41.1359, lng: -8.63319 },
  ];


  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.markers.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map
      });
    });
  }

  
}
