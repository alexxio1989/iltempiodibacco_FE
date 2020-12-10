import { Component, Input, OnInit } from '@angular/core';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';

@Component({
  selector: 'app-negozio-card',
  templateUrl: './negozio-card.component.html',
  styleUrls: ['./negozio-card.component.css']
})
export class NegozioCardComponent implements OnInit {

  @Input() negozio: Negozio;

  constructor() { }

  ngOnInit(): void {}

}
