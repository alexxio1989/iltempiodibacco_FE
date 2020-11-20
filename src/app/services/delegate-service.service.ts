import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Dominio } from '../model/Dominio';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class DelegateServiceService {

  constructor() { }

  utente: User;

  isOpenSideBar: boolean;

  private _sbjSpinner = new Subject();
  private _sbjResultService = new Subject();
  private _sbjSideBar = new Subject();
  private _sbjTipiCorso= new Subject();
  private _sbjUser = new Subject();

  updateSideBar (update: boolean){
    this._sbjSideBar.next(update);
  }

  getOBSSideBar (): Observable<any>{
    return this._sbjSideBar.asObservable();
  }

 
}
