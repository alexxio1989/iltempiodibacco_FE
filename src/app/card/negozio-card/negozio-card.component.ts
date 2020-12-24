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

  pageIndex: number = 0;
  pageSize: number = 0;
  lowValue: number = 0;
  highValue: number = 0;

  tipoSelected: Dominio;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {

    const isMobile = this.deviceService.isMobile();

    if(isMobile){

      this.pageSize = 1;
      this.highValue = 1;
    } else {
      this.pageSize = 3;
      this.highValue = 3;
    }
    
    if(this.negozio !== undefined && this.negozio.magazino.tipiAssociati.length > 0){
      this.tipoSelected = this.negozio.magazino.tipiAssociati[0];
    }

  }

  getPaginatorData(event){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
   else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
     }   
      this.pageIndex = event.pageIndex;
  }

}
