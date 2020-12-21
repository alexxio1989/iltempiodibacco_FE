import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EndPoint } from '../Constants';
import { Acquisto } from '../model/Acquisto';
import { Negozio } from '../model/Negozio';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class AcquistoService {

  acquisto: Acquisto;

  private _sbjAcquisti= new Subject();

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSSave(obj: Acquisto): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_ACQUISTO + "save", obj);
  }

  getOBSGetAllUtente(idUtente: number): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_ACQUISTO + "getallutente", idUtente);
  }

  getOBSGetAll(): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl + EndPoint.API_ACQUISTO + "getall");
  }

  getOBSUpdate(obj: Acquisto): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_ACQUISTO + "update", obj);
  }

  updateAcquisti (acquisti: Acquisto[]){
    this._sbjAcquisti.next(acquisti);
  }

  getOBSUpdateAcquisti(): Observable<any>{
    return this._sbjAcquisti.asObservable();
  }
}
