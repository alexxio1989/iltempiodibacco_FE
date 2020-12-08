import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { Dominio } from '../model/Dominio';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class TipoServiceService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSSave(obj: Dominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_TIPO + "save", obj);
  }

  getOBSUpdate(obj: Dominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_TIPO + "update", obj);
  }

  getOBSGet(obj: Dominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_TIPO + "get", obj);
  }

  getOBSDelete(obj: Dominio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_TIPO + "delete", obj);
  }

  getOBSGetAll(): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl  + EndPoint.API_TIPO + "getall");
  }
}
