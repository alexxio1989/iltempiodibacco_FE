import { Component, OnInit } from '@angular/core';
import { Carrello } from 'src/app/model/Carrello';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  carrello: Carrello = new Carrello();

  constructor(private cs: CarrelloServiceService , private ds: DelegateServiceService) {

    this.cs.getOBSCarrello().subscribe(next=>{
      this.carrello = next;
    })

  }

  ngOnInit(): void {

    this.carrello = this.cs.getCarrello();

  }

}
