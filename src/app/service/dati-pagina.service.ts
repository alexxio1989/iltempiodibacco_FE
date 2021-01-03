import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class DatiPaginaService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSDatiPageAdmin(): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl + EndPoint.API_DATI_PAGINA + "admin");
  }

  getOBSDatiPageHome(): Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl + EndPoint.API_DATI_PAGINA + "home");
  }
}
