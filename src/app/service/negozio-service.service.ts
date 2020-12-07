import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { Negozio } from '../model/Negozio';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class NegozioServiceService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSSave(obj: Negozio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_NEGOZIO + "save", obj);
  }

  getOBSUpdate(obj: Negozio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_NEGOZIO + "update", obj);
  }

  getOBSGet(obj: Negozio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_NEGOZIO + "get", obj);
  }

  getOBSDelete(obj: Negozio): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_NEGOZIO + "delete", obj);
  }

  getOBSGetAll(): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl + EndPoint.API_NEGOZIO + "getall");
  }
}
