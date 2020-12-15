import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewNegozioModalContentComponent } from 'src/app/modals/new-negozio-modal/new-negozio-modal-content/new-negozio-modal-content.component';
import { Negozio } from 'src/app/model/Negozio';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';

@Component({
  selector: 'app-card-info-negozio',
  templateUrl: './card-info-negozio.component.html',
  styleUrls: ['./card-info-negozio.component.css']
})
export class CardInfoNegozioComponent implements OnInit {

  @Input() negozio: Negozio;
  @Input() edit: boolean;
  showInfo: boolean;

  constructor(public dialog: MatDialog , 
    private ns: NegozioServiceService , 
    private ds: DelegateServiceService ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.ns.negozioSelected = this.negozio;
    const dialogRef = this.dialog.open(NewNegozioModalContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
