import { Component, OnInit } from '@angular/core';
import { Acquisto } from 'src/app/model/Acquisto';
import { Dominio } from 'src/app/model/Dominio';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';
import { Status } from 'src/app/model/Status';
import { AcquistoService } from 'src/app/service/acquisto.service';
import { DatiPaginaService } from 'src/app/service/dati-pagina.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';
import { ProdottoServiceService } from 'src/app/service/prodotto-service.service';
import { TipoServiceService } from 'src/app/service/tipo-service.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  negozi: Negozio[];
  listTipi: Dominio[];
  acquisti: Acquisto[];
  listStatus: Status[] = [];

  constructor(private ps: ProdottoServiceService,
    private ns: NegozioServiceService,
    private ds: DelegateServiceService,
    private ts: TipoServiceService,private as: AcquistoService,
    private dps: DatiPaginaService) {
      

    this.dps.getOBSDatiPageAdmin().subscribe(next => {
      this.negozi = next.list;
      this.listTipi = next.listTipo;
      this.acquisti = next.listAcquisti;
      this.listStatus = next.listStatus;
      this.ds.updateNegozi(this.negozi);
      localStorage.removeItem('NEGOZI');
      localStorage.setItem('NEGOZI', JSON.stringify(next.list))
      this.ds.updateSpinner(false);
      this.ds.updateResultService('Recupero dati pagina admin avvenuto con successo');
    },error=> {
      this.ds.updateResultService('Recupero dati pagina in errore');
      this.ds.updateSpinner(false);
    });
    


    this.as.getOBSUpdateAcquisti().subscribe(next => {
      this.acquisti = next;
      this.ds.updateSpinner(false);
    })
  }

  ngOnInit(): void {
  }

  adviceProdotto(event: boolean) {
    this.getTipi();
  }

  adviceNegozio(event: boolean) {
    this.getNegozi();
  }

  adviceAcquisti(event: boolean) {
    this.getAcquisti();
  }

  private getNegozi() {
    this.ns.getOBSGetAll().subscribe(next => {
      this.negozi = next.list;
      this.ds.updateNegozi(this.negozi);
      this.ds.updateSpinner(false);
    },error=>{
      this.ds.updateSpinner(false);
      this.ds.updateResultService(error.status)
    });
  }

  private getTipi() {
    this.ts.getOBSGetAll().subscribe(next => {
      this.listTipi = next.list;
      this.ds.updateSpinner(false);
    },error=>{
      this.ds.updateSpinner(false);
      this.ds.updateResultService(error.status)
    });
  }

  private getAcquisti(){
    this.as.getOBSGetAll().subscribe(next => {
      this.acquisti = next.list;
      if(this.acquisti !== undefined && this.acquisti !== null && this.acquisti.length > 0){
        this.acquisti.sort((a,b) => a.id - b.id).reverse();
      }
      this.listStatus = next.listStatus;
      this.ds.updateSpinner(false);
      this.ds.updateResultService("Recupero acquisti avvenuta con successo")
    },error=>{
      this.ds.updateSpinner(false);
      this.ds.updateResultService("Recupero acquisti in errore")
    });
  }



}
