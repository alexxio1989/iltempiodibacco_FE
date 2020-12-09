import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewNegozioModalContentComponent } from './new-negozio-modal-content/new-negozio-modal-content.component';

@Component({
  selector: 'app-new-negozio-modal',
  templateUrl: './new-negozio-modal.component.html',
  styleUrls: ['./new-negozio-modal.component.css']
})
export class NewNegozioModalComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(NewNegozioModalContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
