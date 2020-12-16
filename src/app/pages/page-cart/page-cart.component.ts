import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { utils } from 'protractor';
import { ContentModalLoginComponent } from 'src/app/modals/modal-login/content-modal-login/content-modal-login.component';
import { Acquisto } from 'src/app/model/Acquisto';
import { Carrello } from 'src/app/model/Carrello';
import { ModPagamento } from 'src/app/model/ModPagamento';
import { Negozio } from 'src/app/model/Negozio';
import { User } from 'src/app/model/User';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  carrello: Carrello = new Carrello();

  tot: number = 0;

  public _step: number = 0.1;
  public _min: number = 0;
  public _max: number = Infinity;
  public _wrap: boolean = false;
  negozi: Negozio[];
  negozioSelected: Negozio;
  acquisto: Acquisto = new Acquisto();
  errorCalendar: string;

  modPagamentoSelezionato: ModPagamento = new ModPagamento;
  
  listModPagamento = [{"codice":"CC","descrizione":"Carta di Credito"},{"codice":"RIN","descrizione":"Ritiro in Negozio"},{"codice":"PAC","descrizione":"Pagamento alla consegna"}];
  utente: User = new User();

  constructor(private cs: CarrelloServiceService , private ds: DelegateServiceService,public dialog: MatDialog) {


    this.cs.getOBSCarrello().subscribe(next=>{
      this.carrello = next;
      this.carrello.prodotti.forEach(prodotto => {
        let x = +(this.tot + (prodotto.qnt * prodotto.prezzo)).toFixed(2);
        this.tot = x
      })
    })

  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    let giorno = this.negozioSelected.giorniLavorativi.find(g => g.day === day);
    return !giorno.chiuso;
  }

  ngOnInit(): void {
    this.tot = 0;
    let negozi = localStorage.getItem("NEGOZI");
    this.negozi = JSON.parse(negozi);
    this.carrello = this.cs.getCarrello();
      this.carrello.prodotti.forEach(prodotto => {
        let x = +(this.tot + (prodotto.qnt * prodotto.prezzo)).toFixed(2);
        this.tot = x
      })

  }

  get isUtenteLogged(): boolean{
    const localUser = localStorage.getItem('USER');
    let LoggedUtente = JSON.parse(localUser);
    if(LoggedUtente !== undefined && LoggedUtente !== null){
      this.utente = LoggedUtente;
    }
    return localUser !== undefined && localUser !== null;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContentModalLoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  acquista(){
    if(this.isUtenteLogged){

    } else {
      this.openDialog();
    }
  }

  

}
