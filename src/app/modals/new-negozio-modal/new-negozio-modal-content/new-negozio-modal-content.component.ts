import { Component, OnInit } from '@angular/core';
import { CittaEnums } from 'src/app/enums/CittaEnums';
import { Negozio } from 'src/app/model/Negozio';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';

@Component({
  selector: 'app-new-negozio-modal-content',
  templateUrl: './new-negozio-modal-content.component.html',
  styleUrls: ['./new-negozio-modal-content.component.css']
})
export class NewNegozioModalContentComponent implements OnInit {

  constructor(private ns: NegozioServiceService , private ds: DelegateServiceService) { }

  negozio: Negozio = new Negozio();

  citta = CittaEnums.citta;

  ngOnInit(): void {
  }

  salva(){

    this.ns.getOBSSave(this.negozio).subscribe(next => {
      this.ds.updateNegozi(next.list)
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    },error => {
      this.ds.updateResultService(error.status);
      this.ds.updateSpinner(false);
    })

  }

}
