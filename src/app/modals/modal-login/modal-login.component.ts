import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentModalLoginComponent } from './content-modal-login/content-modal-login.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {


  
  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ContentModalLoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
