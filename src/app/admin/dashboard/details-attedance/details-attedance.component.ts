import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DetailsAttedancefilterComponent } from '../details-attedancefilter/details-attedancefilter.component';
@Component({
  selector: 'app-details-attedance',
  templateUrl: './details-attedance.component.html',
  styleUrls: ['./details-attedance.component.css']
})
export class DetailsAttedanceComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DetailsAttedancefilterComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
