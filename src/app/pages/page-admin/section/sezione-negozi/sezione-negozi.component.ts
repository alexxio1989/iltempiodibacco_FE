import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewNegozioModalContentComponent } from 'src/app/modals/new-negozio-modal/new-negozio-modal-content/new-negozio-modal-content.component';
import { Dominio } from 'src/app/model/Dominio';
import { Negozio } from 'src/app/model/Negozio';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';

@Component({
  selector: 'app-sezione-negozi',
  templateUrl: './sezione-negozi.component.html',
  styleUrls: ['./sezione-negozi.component.css']
})
export class SezioneNegoziComponent implements OnInit {

  toppings = new FormControl();

  @Input() negozi: Negozio[]; 
  @Input() listTipi: Dominio[];

  negozioSelected: Negozio;

  constructor(public dialog: MatDialog , private ns: NegozioServiceService , private ds: DelegateServiceService) {
    

    this.ds.getOBSNegozi().subscribe(next => {
      this.negozi = next;
    });
  }
  ngOnInit(): void {
  }

  addNegozio(){

  }

  openDialog() {
    this.ns.negozioSelected = this.negozioSelected;
    const dialogRef = this.dialog.open(NewNegozioModalContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
