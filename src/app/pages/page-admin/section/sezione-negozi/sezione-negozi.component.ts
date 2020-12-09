import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Negozio } from 'src/app/model/Negozio';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';

@Component({
  selector: 'app-sezione-negozi',
  templateUrl: './sezione-negozi.component.html',
  styleUrls: ['./sezione-negozi.component.css']
})
export class SezioneNegoziComponent implements OnInit {

  toppings = new FormControl();

  negozi: Negozio[];

  negozioSelected: Negozio;

  constructor(private ns: NegozioServiceService , private ds: DelegateServiceService) {
    this.ns.getOBSGetAll().subscribe(next => {
      this.negozi = next.list;
      if(next.list.length === 1){
        this.negozioSelected = next.list[0];
      }
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    });

    this.ds.getOBSNegozi().subscribe(next => {
      this.negozi = next;
    });
  }
  ngOnInit(): void {
  }

  addNegozio(){

  }

}
