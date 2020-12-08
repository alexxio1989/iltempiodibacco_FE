import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { SubDominio } from '../model/SubDominio';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class SottoTipoServiceService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSSave(obj: SubDominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_SOTTOTIPO + "save", obj);
  }

  getOBSUpdate(obj: SubDominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_SOTTOTIPO + "update", obj);
  }

  getOBSGet(obj: SubDominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_SOTTOTIPO + "get", obj);
  }

  getOBSDelete(obj: SubDominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_SOTTOTIPO + "delete", obj);
  }

  getOBSGetAll(): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl  + EndPoint.API_SOTTOTIPO + "getall");
  }
}
