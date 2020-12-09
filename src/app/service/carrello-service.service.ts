import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Carrello } from '../model/Carrello';

@Injectable({
  providedIn: 'root'
})
export class CarrelloServiceService {

  private _sbjCarrello = new Subject();

  constructor() { }

  updateCarrello(obj: Carrello){
    this._sbjCarrello.next(obj);
  }

  getOBSCarrello(): Observable<any>{
    return this._sbjCarrello.asObservable();
  }
}
