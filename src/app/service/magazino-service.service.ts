import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { Magazino } from '../model/Magazino';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class MagazinoServiceService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSSave(obj: Magazino): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_MAGAZINO + "save", obj);
  }

  getOBSUpdate(obj: Magazino): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_MAGAZINO + "update", obj);
  }

  getOBSGet(obj: Magazino): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl  + EndPoint.API_MAGAZINO + "get", obj);
  }

  getOBSDelete(obj: Magazino): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.baseURl + EndPoint.API_MAGAZINO + "delete", obj);
  }
}
