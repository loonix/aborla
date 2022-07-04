import { Component, OnInit } from '@angular/core';
import { AddEditListItemComponent } from '@app/feed/add-edit-list-item/add-edit-list-item.component';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
  dialog: any;

  constructor() { }

  ngOnInit() {
  }
  
  edit() {
    const dialogRef = this.dialog.open(AddEditListItemComponent, {
      data: {
        isEdit: false,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
