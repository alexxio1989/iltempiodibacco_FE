import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { Prodotto } from '../model/Prodotto';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProdottoServiceService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSSave(obj: Prodotto): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_PRODOTTO + "save", obj);
  }

  getOBSUpdate(obj: Prodotto): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_PRODOTTO + "update", obj);
  }

  getOBSGet(obj: Prodotto): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_PRODOTTO + "get", obj);
  }

  getOBSDelete(obj: Prodotto): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_PRODOTTO + "delete", obj);
  }

  getOBSGetAll(): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl  + EndPoint.API_PRODOTTO + "getall");
  }
}