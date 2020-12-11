import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/Prodotto';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-prodotto-card-carrello',
  templateUrl: './prodotto-card-carrello.component.html',
  styleUrls: ['./prodotto-card-carrello.component.css']
})
export class ProdottoCardCarrelloComponent implements OnInit {

  @Input() prodotto: Prodotto;

  public _step: number = 0.1;
  public _min: number = 0;
  public _max: number = Infinity;
  public _wrap: boolean = false;

  constructor(private cs: CarrelloServiceService , private ds: DelegateServiceService) { }

  ngOnInit(): void {
  }

  countQuantityToCart(count: number){
    this.prodotto.qnt = count;
    this.cs.aggiungiProdotto(this.prodotto , count)
  }

}
