import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Carrello } from 'src/app/model/Carrello';
import { Prodotto } from 'src/app/model/Prodotto';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';

@Component({
  selector: 'app-prodotto-card',
  templateUrl: './prodotto-card.component.html',
  styleUrls: ['./prodotto-card.component.css'],
  animations: [
    trigger('scroll', [
      state('on', style({left: '-100px'})),
      transition('* => *', [
        style({right: '-100px'}),
        animate(10000, style({right: '100%'}))
      ])
    ])
  ]
})
export class ProdottoCardComponent implements OnInit {

  @Input() prodotto: Prodotto;

  state = 0;
  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  _max: number = Infinity;
  _wrap: boolean = false;

  quantityToCart: number;

  constructor(private cs: CarrelloServiceService) { }

  ngOnInit(): void {
  }

  scrollDone() {
    this.state++;
  }

  aggiungiAlCarrello(){
    let carrello = undefined;
    console.log("prodotto aggiunto")
    let cart = localStorage.getItem("CART");
    let carrelloPharse = JSON.parse(cart);
    if(carrelloPharse !== undefined && carrelloPharse !== null){
      carrello = carrelloPharse;
      localStorage.removeItem("CART");
      if(carrello.prodotti !== undefined && carrello.prodotti !== null && carrello.prodotti.length > 0){
        carrello.prodotti.forEach(element => {
          if(element.id === this.prodotto.id){
            element.qnt =element.qnt + this.quantityToCart;
          }
        });
      }
        
    } else {
      this.prodotto.qnt = this.quantityToCart;
      carrello = new Carrello();
      carrello.prodotti.push(this.prodotto)
    }
    localStorage.setItem("CART", JSON.stringify(carrello));
    this.cs.updateCarrello(carrello);
  }

  countQuantityToCart(count: number){
    this.quantityToCart = count;
  }

}
