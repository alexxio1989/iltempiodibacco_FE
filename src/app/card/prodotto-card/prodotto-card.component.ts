import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/Prodotto';

@Component({
  selector: 'app-prodotto-card',
  templateUrl: './prodotto-card.component.html',
  styleUrls: ['./prodotto-card.component.css']
})
export class ProdottoCardComponent implements OnInit {

  @Input() prodotto: Prodotto;

  constructor() { }

  ngOnInit(): void {
  }

}
