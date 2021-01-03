import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Acquisto } from 'src/app/model/Acquisto';
import { Status } from 'src/app/model/Status';
import { AcquistoService } from 'src/app/service/acquisto.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-acquisto-card-admin',
  templateUrl: './acquisto-card-admin.component.html',
  styleUrls: ['./acquisto-card-admin.component.css']
})
export class AcquistoCardAdminComponent implements OnInit {

  @Input() acquisto: Acquisto;
  @Input() listStatus: Status[];
  @Output() adviceAcquisti= new EventEmitter<boolean>();

  statusSelected: Status;
  dataConsegna: Date;

  displayedColumns: string[] = ['nomeprodotto', 'qnt', 'prezzo'];
  
  disAggiorna: boolean = true;

  constructor(private as: AcquistoService,private ds: DelegateServiceService) { }

  ngOnInit(): void {
    this.statusSelected = this.acquisto.status;
    this.dataConsegna = this.acquisto.dataCosegnaPrevista;
  }

  edit(){
    this.acquisto.status = this.statusSelected;
    this.acquisto.dataCosegnaPrevista = this.dataConsegna;
    this.as.getOBSUpdate(this.acquisto).subscribe(next => {
      this.as.updateAcquisti(next.list);
      this.ds.updateSpinner(false);
      this.ds.updateResultService(next.status)
      this.adviceAcquisti.emit(true);
    },error=>{
      this.ds.updateSpinner(false);
      this.ds.updateResultService(error.status)
    })
  }

  get disableAggiorna(): boolean{
    if(this.statusSelected === undefined){
      this.disAggiorna = true;
    } else if(this.statusSelected.codice === this.acquisto.status.codice){
      this.disAggiorna = true
    } else if(this.acquisto.modalitaPagamento.codice === 'CC' || this.acquisto.modalitaPagamento.codice === 'PAC'){
      this.disAggiorna = this.dataConsegna === undefined || this.dataConsegna === null;
    } else {
      this.disAggiorna = false;
    }
    return this.disAggiorna;
  }

}
