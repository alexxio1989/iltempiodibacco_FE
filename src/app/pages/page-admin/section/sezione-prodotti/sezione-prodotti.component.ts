import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dominio } from 'src/app/model/Dominio';
import { Prodotto } from 'src/app/model/Prodotto';
import { SubDominio } from 'src/app/model/SubDominio';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { ProdottoServiceService } from 'src/app/service/prodotto-service.service';
import { SottoTipoServiceService } from 'src/app/service/sotto-tipo-service.service';
import { TipoServiceService } from 'src/app/service/tipo-service.service';

@Component({
  selector: 'app-sezione-prodotti',
  templateUrl: './sezione-prodotti.component.html',
  styleUrls: ['./sezione-prodotti.component.css']
})
export class SezioneProdottiComponent implements OnInit {


  listUnita: string[] = ["lt ( litro )","pz ( pezzo )" , "Kg ( Kilo )" , "Bottiglia"];
  @Input() listTipi: Dominio[];
  @Output() adviceProdotto = new EventEmitter<boolean>();

  editTipo: boolean;

  editSottoTipo: boolean;

  newTipo: Dominio = new Dominio();

  newSottoTipo: SubDominio = new SubDominio();

  constructor(private ps: ProdottoServiceService,
    private ds: DelegateServiceService,
    private ts: TipoServiceService,
    private sts: SottoTipoServiceService) {

  }



  ngOnInit(): void {
  }

  save(sottoTipo: SubDominio, prodotto: Prodotto) {
    let newTipo = new SubDominio();
    newTipo.id = sottoTipo.id;
    prodotto.tipo = newTipo
    if (prodotto.edit) {
      this.ps.getOBSUpdate(prodotto).subscribe(next => {
        this.ds.updateResultService(next.status);
        this.adviceProdotto.emit(true);
      }, error => {
        this.ds.updateResultService(error.status);
        this.ds.updateSpinner(false);
      })
    } else {
      this.ps.getOBSSave(prodotto).subscribe(next => {
        this.ds.updateResultService(next.status);
        this.adviceProdotto.emit(true);
      }, error => {
        this.ds.updateResultService(error.status);
        this.ds.updateSpinner(false);
      })

    }
  }

  addProdotto(tipo: Dominio, sottoTipo: SubDominio) {
    let newprodotto = new Prodotto();

    this.listTipi.forEach(tipoIterate => {
      if (tipoIterate.id === tipo.id) {
        tipoIterate.sottoTipi.forEach(sottoTipoIterate => {
          if (sottoTipoIterate.id === sottoTipo.id) {
            sottoTipoIterate.prodottiAssociati.push(newprodotto);
          }
        })
      }
    });

  }

  fileChange(event, prodotto: Prodotto) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      prodotto.image = reader.result as string;
    };
  }

  salvaTipo(){

    this.ts.getOBSSave(this.newTipo).subscribe(next=>{
      this.adviceProdotto.emit(true);
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    },error=>{
      this.ds.updateResultService(error.status);
        this.ds.updateSpinner(false);
    })

  }

  salvaSottoTipo(dominioPadre: Dominio){
    this.newSottoTipo.tipoPadre.id = dominioPadre.id;
    this.sts.getOBSSave(this.newSottoTipo).subscribe(next=>{
      this.adviceProdotto.emit(true);
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    },error=>{
      this.ds.updateResultService(error.status);
        this.ds.updateSpinner(false);
    })
  }

  deleteTipo(tipo: Dominio){

  }

  deleteSottoTipo(tipo: SubDominio){

  }

}
