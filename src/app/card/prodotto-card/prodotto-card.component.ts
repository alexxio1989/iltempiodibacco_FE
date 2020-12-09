import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/Prodotto';

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

  constructor() { }

  ngOnInit(): void {
  }

  scrollDone() {
    this.state++;
  }

}
