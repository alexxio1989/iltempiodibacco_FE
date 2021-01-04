import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Acquisto } from 'src/app/model/Acquisto';
import { Carrello } from 'src/app/model/Carrello';
import { AcquistoService } from 'src/app/service/acquisto.service';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { ModalResultAcquistoComponent } from '../modal-result-acquisto/modal-result-acquisto.component';

@Component({
  selector: 'app-modal-conferma-acquisto',
  templateUrl: './modal-conferma-acquisto.component.html',
  styleUrls: ['./modal-conferma-acquisto.component.css']
})
export class ModalConfermaAcquistoComponent implements OnInit {

  acquisto: Acquisto;
  constructor(private as: AcquistoService,private ds: DelegateServiceService,private cs: CarrelloServiceService, public dialog: MatDialog) { } 

  ngOnInit(): void {
    this.acquisto = this.as.acquisto;
  }

  acquista(){
    this.as.getOBSSave(this.acquisto).subscribe(next=>{
      this.ds.updateResultService(next.status)
      this.cs.rimuoviCarrelloAll();
      this.cs.updateCarrello(new Carrello());
      this.openDialogConfermaAcquisto();
    },error => {
      this.ds.updateSpinner(false);
      this.ds.updateResultService("ERRORE DURANTE L'ACQUISTO")
    })
  }
  
  openDialogConfermaAcquisto() {
    const dialogRef = this.dialog.open(ModalResultAcquistoComponent);
    
    this.ds.updateSpinner(false);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
