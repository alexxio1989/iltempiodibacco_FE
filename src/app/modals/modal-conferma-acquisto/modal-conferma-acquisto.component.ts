import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acquisto } from 'src/app/model/Acquisto';
import { Carrello } from 'src/app/model/Carrello';
import { AcquistoService } from 'src/app/service/acquisto.service';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-modal-conferma-acquisto',
  templateUrl: './modal-conferma-acquisto.component.html',
  styleUrls: ['./modal-conferma-acquisto.component.css']
})
export class ModalConfermaAcquistoComponent implements OnInit {

  acquisto: Acquisto;
  constructor(private as: AcquistoService,private ds: DelegateServiceService,private cs: CarrelloServiceService, private route: Router) { }

  ngOnInit(): void {
    this.acquisto = this.as.acquisto;
  }

  acquista(){
    this.as.getOBSSave(this.acquisto).subscribe(next=>{
      this.ds.updateSpinner(false);
      this.cs.rimuoviCarrelloAll();
      this.cs.updateCarrello(new Carrello());
      this.route.navigate(['/user']);
    })
  }

}
