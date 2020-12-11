import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Carrello } from '../model/Carrello';
import { Prodotto } from '../model/Prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloServiceService {

  private _sbjCarrello = new Subject();

  private _sbjCardProdotto= new Subject();

  constructor() { }

  rimuoviCarrello(prodotto: Prodotto){
    
    
    let carrelloPharse = this.getCarrello();
    if(prodotto !== undefined && prodotto !== null && carrelloPharse !== undefined && carrelloPharse !== null){
      if(carrelloPharse.prodotti.length > 0){
        carrelloPharse.prodotti.splice(carrelloPharse.prodotti.findIndex(p => p.id === prodotto.id), 1);
        localStorage.removeItem("CART");
        localStorage.setItem("CART", JSON.stringify(carrelloPharse));
      }
    }
    
    this.updateCardProdotto();
    this.updateCarrello(carrelloPharse);
  }

  getCarrello(): Carrello{
    let cart = localStorage.getItem("CART");
    return JSON.parse(cart);
  }

  ricavaQntProdotto(prodotto: Prodotto): number{
    let carrelloPharse = this.getCarrello();
    if(prodotto !== undefined && prodotto !== null && carrelloPharse !== undefined && carrelloPharse !== null){
      carrelloPharse.prodotti.forEach(element => {
        if(element.id === prodotto.id){
          return element.qnt;
        }
      });
    }
    return 0;
  }


  aggiungiProdotto(prodotto: Prodotto , quantityToCart: number){
    let carrello = undefined;
    console.log("prodotto aggiunto")
    let carrelloPharse = this.getCarrello();
    if(carrelloPharse !== undefined && carrelloPharse !== null && carrelloPharse.prodotti.length > 0){
      carrello = carrelloPharse;
      localStorage.removeItem("CART");
      if(carrello.prodotti !== undefined && carrello.prodotti !== null && carrello.prodotti.length > 0){
      
        if (carrello.prodotti.some(el => el.id === prodotto.id)){
          carrello.prodotti.forEach(element => {
            if(element.id === prodotto.id){
              element.qnt = quantityToCart;
            }
          });

        } else {
          prodotto.qnt = quantityToCart;
          carrello.prodotti.push(prodotto)
        }
       
      }
        
    } else {
      prodotto.qnt = quantityToCart;
      carrello = new Carrello();
      carrello.prodotti.push(prodotto)
    }
    localStorage.setItem("CART", JSON.stringify(carrello));
    this.updateCardProdotto();
    this.updateCarrello(carrello);
  }

  updateCarrello(obj: Carrello){
    this._sbjCarrello.next(obj);
  }

  getOBSCarrello(): Observable<any>{
    return this._sbjCarrello.asObservable();
  }

  updateCardProdotto(){
    this._sbjCardProdotto.next();
  }

  getOBSCardProdotto(): Observable<any>{
    return this._sbjCardProdotto.asObservable();
  }
}
