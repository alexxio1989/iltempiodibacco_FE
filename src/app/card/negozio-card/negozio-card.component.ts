import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Dominio } from 'src/app/model/Dominio';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';

@Component({
  selector: 'app-negozio-card',
  templateUrl: './negozio-card.component.html',
  styleUrls: ['./negozio-card.component.css']
})
export class NegozioCardComponent implements OnInit {

  @Input() negozio: Negozio;


  tipoSelected: Dominio;

  isMobile: boolean;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {

    this.isMobile = this.deviceService.isMobile();

    
    if(this.negozio !== undefined && this.negozio.magazino.tipiAssociati.length > 0){
      this.tipoSelected = this.negozio.magazino.tipiAssociati[0];
    }

  }


}
