import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewNegozioModalContentComponent } from 'src/app/modals/new-negozio-modal/new-negozio-modal-content/new-negozio-modal-content.component';
import { Dominio } from 'src/app/model/Dominio';
import { Magazino } from 'src/app/model/Magazino';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';
import { SubDominio } from 'src/app/model/SubDominio';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { MagazinoServiceService } from 'src/app/service/magazino-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';

@Component({
  selector: 'app-sezione-negozi',
  templateUrl: './sezione-negozi.component.html',
  styleUrls: ['./sezione-negozi.component.css']
})
export class SezioneNegoziComponent implements OnInit {

  displayedColumns: string[] = ['Prodotto','Prezzo','buttonAdd'];

  toppings = new FormControl();

  @Input() negozi: Negozio[]; 
  @Input() listTipi: Dominio[];
  @Output() adviceNegozio= new EventEmitter<boolean>();

  tipoSelezionato: Dominio;

  sottoTipoSelezionato: SubDominio;

  negozioSelected: Negozio;

  isAddProdotto: boolean;

  constructor(public dialog: MatDialog , 
              private ns: NegozioServiceService , 
              private ds: DelegateServiceService , 
              private ms: MagazinoServiceService) {
    

    this.ds.getOBSNegozi().subscribe(next => {
      this.negozi = next;
    });
  }
  ngOnInit(): void {
  }



  addNegozio(){

  }

  openDialog() {
    this.ns.negozioSelected = this.negozioSelected;
    const dialogRef = this.dialog.open(NewNegozioModalContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addProdotto(prodotto: Prodotto){

    let newMagazino = new Magazino();
    newMagazino.idNegozio = this.negozioSelected.id;
    newMagazino.prodottoSelected = prodotto;
    this.ms.getOBSSave(newMagazino).subscribe(next => {
      this.adviceNegozio.emit(true);
    });
  }

}
