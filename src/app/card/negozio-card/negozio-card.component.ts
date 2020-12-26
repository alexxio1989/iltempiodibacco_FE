import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  prodottiForm: FormGroup;

  @Input() negozio: Negozio;


  tipoSelected: Dominio;

  isMobile: boolean;

  constructor(private deviceService: DeviceDetectorService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.isMobile = this.deviceService.isMobile();

    this.prodottiForm = this.fb.group({
			prodottiForm: [null, Validators.required]
    });
    
    if(this.negozio !== undefined && this.negozio.magazino.tipiAssociati.length > 0){
      this.tipoSelected = this.negozio.magazino.tipiAssociati[0];
      this.prodottiForm.get('prodottiForm').setValue(this.tipoSelected );
    }

  }


}
