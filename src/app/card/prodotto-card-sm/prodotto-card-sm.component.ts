import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/Prodotto';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';

@Component({
  selector: 'app-prodotto-card-sm',
  templateUrl: './prodotto-card-sm.component.html',
  styleUrls: ['./prodotto-card-sm.component.css']
})
export class ProdottoCardSmComponent implements OnInit {

  @Input() prodotto: Prodotto;

  state = 0;
  public _value: number;
  public _step: number = 0.1;
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
    if (this.prodotto !== undefined && 
        this.prodotto !== null && 
        carrelloPharse !== undefined && 
        carrelloPharse !== null && 
        carrelloPharse.prodotti.length > 0 &&
        carrelloPharse.prodotti.some(el => el.id === this.prodotto.id)) {
      
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

  rimuoviCarrello(prodotto: Prodotto){
    this.cs.rimuoviCarrello(prodotto);
  }

  countQuantityToCart(count: number){
    this.quantityToCart = count;
  }

}
