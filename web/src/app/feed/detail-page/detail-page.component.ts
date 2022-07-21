import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedDataService } from '../feed-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListItemComponent } from '../add-edit-list-item/add-edit-list-item.component';
import { AdPackages, Item, ItemModel, TypeOfRequest } from 'src/app/@shared/models/item.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SeoService } from '@app/@shared/seo.service';
import { ContactUserComponent } from '../contact-user/contact-user.component';
import { AuthService } from '@app/@shared/services/auth.service';
import { ImageDialogComponent } from '@app/@shared/components/image-dialog/image-dialog.component';
declare var google: any;

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChildren('map') mapElement: any;
  itemId: any;
  item: Item | any;
  map: any;
  gridColumns = 3;
  featuredItems: any;
  lat = 41.1359;
  lng = -8.63319;
  //markers = [
   // { lat: 41.1359, lng: -8.63319 },
  //];
  showEditOptions: boolean = false;
  relatedItems: any;
  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    public data: FeedDataService,
    public dialog: MatDialog,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.reloadData();
  }

  reloadData() {
    this.data.subscribeToFeed();
    this.data.getFeed(this.itemId).subscribe((itm: Item) => {
      this.seo.generateTags({
        title: itm.title,
        description: itm.description,
        image: itm.images[0],
      });
      this.item = itm;
      const user = this.authService.GetUser();

      // checks if the user id matches the user id on the item and if so, shows the edit options
      if (itm && user && itm.userId === user.uid) {
        this.showEditOptions = true;
      }
    });
    this.getFeaturedItems();
    this.getRelatedItems();
  }

  getFeaturedItems() {
    const $obs = this.db
      .collection('feed')
      .valueChanges({ idField: 'id' });

    $obs.subscribe((data: any) => {
      // excludes the selected item
      const limitedData = data.filter((d: ItemModel) =>
        d.id !== this.itemId && (d.adPackage === AdPackages.SiteAndApp || d.adPackage === AdPackages.SiteOnly));
      // limits to 3 items only
      this.featuredItems = limitedData.length >= 3 ? limitedData.slice(limitedData.length - 3) : limitedData;
    });
  }

  getRelatedItems() {
    const $obs = this.db
      .collection('feed')
      .valueChanges({ idField: 'id' });

    $obs.subscribe((data: any) => {
      // excludes the selected item
      const limitedData = data.filter((d: ItemModel) => this.item && (
        d.id !== this.itemId && d.category === this.item.category));
      // limits to 3 items only
      this.relatedItems = limitedData.length >= 3 ? limitedData.slice(limitedData.length - 3) : limitedData;
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
      this.reloadData();
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

  toggleGridColumns() {
    this.gridColumns = 3;
  }

  onView(item: Item): void {
    this.router.navigate(['feed', item.id]);
  }

  ngAfterViewChecked(): void {
    this.generateMaps();
  }

  generateMaps(): void {
    this.mapElement.changes.subscribe((changes: any) => {
      if (!changes) return;
      const mapProperties = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(changes.first.nativeElement, mapProperties);
      // this.markers.forEach(location => {
      //   var marker = new google.maps.Marker({
      //     position: new google.maps.LatLng(location.lat, location.lng),
      //     map: this.map
      //   });
      // });
    });
  }

  onImageClick(item: Item, position: number): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: {
        images: item.images,
        position: position,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  navigateToItem(itemId: string) {
    this.item = null;
    this.router.navigate(['feed', itemId]);
    this.itemId = itemId
    this.reloadData();
  }

  ngOnDestroy() {
    this.mapElement.changes.unsubscribe();
  }
}


