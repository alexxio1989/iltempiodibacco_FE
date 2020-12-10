
import { Component, Input, OnInit } from '@angular/core';
import { Carrello } from 'src/app/model/Carrello';
import { Prodotto } from 'src/app/model/Prodotto';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';

@Component({
  selector: 'app-prodotto-card',
  templateUrl: './prodotto-card.component.html',
  styleUrls: ['./prodotto-card.component.css']
})
export class ProdottoCardComponent implements OnInit {

  @Input() prodotto: Prodotto;

  state = 0;
  public _value: number;
  public _step: number = 1;
  public _min: number = 0;
  public _max: number = Infinity;
  public _wrap: boolean = false;

  qntInCart: number;

  quantityToCart: number;

  isProdottoInCart: boolean;

  constructor(private cs: CarrelloServiceService) { 
     this.cs.getOBSCardProdotto().subscribe(next => {
       this.retrieveQntProdottoFromCart();
     });
  }

  ngOnInit(): void {
    this._value = 0;
    this.retrieveQntProdottoFromCart();
  }

  

  private retrieveQntProdottoFromCart() {
    let cart = localStorage.getItem("CART");
    let carrelloPharse = JSON.parse(cart);
    if (this.prodotto !== undefined && this.prodotto !== null && carrelloPharse !== undefined && carrelloPharse !== null) {
      carrelloPharse.prodotti.forEach(element => {
        if (element.id === this.prodotto.id) {
          this._value = element.qnt;
          this.qntInCart = element.qnt;
          this.isProdottoInCart = true;
        }
      });
    } else {
      this._value = 0;
      this.quantityToCart = 0;
      this.qntInCart = 0;
      this.isProdottoInCart = false;
    }
  }


  aggiungiCarrello(){
    this.cs.aggiungiProdotto(this.prodotto , this.quantityToCart);
  }

  rimuoviCarrello(){
    this.cs.rimuoviCarrello();
  }

  countQuantityToCart(count: number){
    if(count === 0 && this.isProdottoInCart){
      this.cs.rimuoviCarrello();
    }
    this.quantityToCart = count;
  }

}
