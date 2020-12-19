import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../Constants';
import { ServiceCore } from './core/ServiceCore';
import { DelegateServiceService } from './delegate-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModPagamentoService {

  constructor(private http: HttpClient , private ds: DelegateServiceService) { }

  getOBSGetAll():Observable<any>{
    this.ds.updateSpinner(true);
    return this.http.get(ServiceCore.baseURl + EndPoint.API_MOD_PAGAMENTO + "getall");
  }
}
