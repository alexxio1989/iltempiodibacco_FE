import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrello } from 'src/app/model/Carrello';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  private carrello: Carrello = new Carrello();

  badgeCount: number = 0;

  constructor(private ds: DelegateServiceService,private route: Router , private cs: CarrelloServiceService) { 
    this.cs.getOBSCarrello().subscribe(next=>{
      this.carrello = next;
      this.badgeCount = this.carrello.prodotti.length;
    })
  }

  ngOnInit(): void {
    let cart = localStorage.getItem("CART");
    this.carrello = JSON.parse(cart);
    if(this.carrello !== undefined && this.carrello !== null){
      this.badgeCount = this.carrello.prodotti.length;

    }
  }


  openSideBar(){
    this.ds.updateSideBar(!this.ds.isOpenSideBar);
    this.ds.isOpenSideBar = !this.ds.isOpenSideBar;
  }

  goToCartPage(){
    this.route.navigate(['/cart']);
    this.ds.updateSideBar(false);
  }

}
