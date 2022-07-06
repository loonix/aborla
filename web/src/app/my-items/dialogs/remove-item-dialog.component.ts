import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-remove-item-dialog',
    templateUrl: 'remove-item-dialog.component.html',
    styleUrls: ['./remove-item-dialog.component.scss']
  })
  export class RemoveItemDialogComponent {
    constructor(public dialogRef: MatDialogRef<RemoveItemDialogComponent>) {}
  }