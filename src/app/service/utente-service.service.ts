import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { User } from '../model/User';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSLogin(utente: User): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.getAPI_ENDPOINT + EndPoint.API_UTENTE + "login", utente );
  }

  getOBSSignIn(utente: User): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.getAPI_ENDPOINT + EndPoint.API_UTENTE + "save", utente);
  }

  getOBSDelete(utente: User): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.post(ServiceCore.getAPI_ENDPOINT + EndPoint.API_UTENTE + "delete", utente);
  }
}
