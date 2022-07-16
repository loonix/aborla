import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedDataService } from '../feed-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';
import { Item, TypeOfRequest } from 'src/app/@shared/models/item.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SeoService } from '@app/@shared/seo.service';
import { ContactUserComponent } from '../contact-user/contact-user.component';
declare var google: any;

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  @ViewChildren('map') mapElement: any;
  itemId: any;
  item: Item | any;
  map: any;
<<<<<<< HEAD
  gridColumns = 5;
=======
  featuredItems: any;
  lat = 41.1359;
  lng = -8.63319;
  markers = [
    { lat: 41.1359, lng: -8.63319 },
  ];
>>>>>>> b9e197ae1db32f91a39adaacecf0ece49d31ecad

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public data: FeedDataService,
<<<<<<< HEAD
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
=======
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
>>>>>>> b9e197ae1db32f91a39adaacecf0ece49d31ecad
    this.data.getFeed(this.itemId).subscribe((prod: Item) => {
      this.seo.generateTags({
        title: prod.title,
        description: prod.description,
        image: prod.images[0],
      });
      this.item = prod;
      this.generateMaps();
    });
    this.getFeaturedItems();
  }

  getFeaturedItems() {
    const $obs = this.db
      .collection('feed')
      .valueChanges({ idField: 'id' });

    $obs.subscribe((data: any) => {
      // excludes the selected item
      const limitedData = data.filter((d: { id: any; }) => d.id !== this.itemId);
      // limits to 3 items only
      this.featuredItems = limitedData.slice(limitedData.length - 3);
      // TODO: show only featured items
    });
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

  onAnswer(item: Item): void {
    const dialogRef = this.dialog.open(ContactUserComponent, {
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

<<<<<<< HEAD

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
=======
  generateMaps(): void {
    this.mapElement.changes.subscribe((changes: any) => {
      if (!changes) return;
      const mapProperties = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(changes.first.nativeElement, mapProperties);
      this.markers.forEach(location => {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(location.lat, location.lng),
          map: this.map
        });
>>>>>>> b9e197ae1db32f91a39adaacecf0ece49d31ecad
      });
    });
  }

<<<<<<< HEAD
  
=======
>>>>>>> b9e197ae1db32f91a39adaacecf0ece49d31ecad
}


