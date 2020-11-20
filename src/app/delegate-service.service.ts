import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelegateServiceService {

  isOpenSideBar: boolean;

  private _sbjSideBar = new Subject();

  constructor() { }

  getOBSSideBar(): Observable<any>{
    return this._sbjSideBar.asObservable();
  }
  updateSideBar(status: boolean){
    this._sbjSideBar.next(status);
  }
}
