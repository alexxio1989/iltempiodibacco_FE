import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { StripeService, StripeCardComponent } from 'ngx-stripe';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripeCardElementOptions, StripeElement, StripeElementsOptions } from '@stripe/stripe-js';
import { ModPagamentoService } from 'src/app/service/mod-pagamento.service';
import { ModalConfermaAcquistoComponent } from 'src/app/modals/modal-conferma-acquisto/modal-conferma-acquisto.component';
import { AcquistoService } from 'src/app/service/acquisto.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

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
  error: any;
  complete = false;
  element: StripeElement;
  isUtenteLogged: boolean;

  modPagamentoSelezionato: ModPagamento = new ModPagamento;
  
  listModPagamento: [] ;
  utente: User = new User();

  constructor(private mps: ModPagamentoService , 
    private stripeService: StripeService,
    private cs: CarrelloServiceService ,
     private ds: DelegateServiceService,
     public dialog: MatDialog ,
      private fb: FormBuilder,
      private as: AcquistoService) {

    this.mps.getOBSGetAll().subscribe(next => {
      this.ds.updateSpinner(false);
      this.listModPagamento = next.list;
    })

    this.cs.getOBSCarrello().subscribe(next=>{
      this.carrello = next;
      this.carrello.prodotti.forEach(prodotto => {
        let x = +(this.tot + (prodotto.qnt * prodotto.prezzo)).toFixed(2);
        this.tot = x
      })
    })

    this.ds.getOBSUser().subscribe(next => {
      this.utente = next;
    });

  }

  get disableAcquista(): boolean{
    if('CC' === this.modPagamentoSelezionato.codice){
      return this.acquisto.stripeToken === undefined || this.acquisto.stripeToken === null;
    } else if('RIN' === this.modPagamentoSelezionato.codice) {
      return this.negozioSelected === undefined || (this.acquisto.dataRitiro=== undefined || this.acquisto.dataRitiro === null)
    } else if('PAC' === this.modPagamentoSelezionato.codice) {
      return false;
    }
  }

  cardUpdated(result) {
    this.element = result.element;
    this.complete = result.complete;
    this.error = undefined;
  }

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        color: '#303238',
        fontSize: '16px',
        fontFamily: '"Open Sans", sans-serif',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#CFD7DF',
        },
      },
      invalid: {
        color: '#e5424d',
        ':focus': {
          color: '#303238',
        },
      },
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'it'
  };

  stripeTest: FormGroup;

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
  
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    const localUser = localStorage.getItem('USER');
    let LoggedUtente = JSON.parse(localUser);
    if(LoggedUtente !== undefined && LoggedUtente !== null){
      this.utente = LoggedUtente;
      this.isUtenteLogged = this.utente !== undefined && this.utente !== null;
    }
      

  }

  openDialogAcquisto() {
    const dialogRef = this.dialog.open(ModalConfermaAcquistoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContentModalLoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  acquista(){
    if(this.isUtenteLogged){
      this.acquisto.utente = this.utente;
      this.acquisto.prodotti = this.carrello.prodotti;
      this.acquisto.totale = this.tot;
      this.acquisto.modalitaPagamento = this.modPagamentoSelezionato;
      this.as.acquisto = this.acquisto;
      this.openDialogAcquisto()
    } else {
      this.openDialog();
    }
  }

  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          this.acquisto.stripeToken = result.token.id;
          this.acquista();
        } else if (result.error) {
          console.log(result.error.message);
        }
      });
  }
  

}
