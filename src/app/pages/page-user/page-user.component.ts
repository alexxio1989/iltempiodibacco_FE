import { Component, OnInit } from '@angular/core';
import { Acquisto } from 'src/app/model/Acquisto';
import { User } from 'src/app/model/User';
import { AcquistoService } from 'src/app/service/acquisto.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  acquisti: Acquisto[];
  utente: User = new User();

  constructor(private as: AcquistoService,private ds: DelegateServiceService) { }

  ngOnInit(): void {
    const localUser = localStorage.getItem('USER');
    let LoggedUtente = JSON.parse(localUser);
    if(LoggedUtente !== undefined && LoggedUtente !== null){
      this.utente = LoggedUtente;
    }
    this.as.getOBSGetAllUtente(this.utente.id).subscribe(next => {
      this.acquisti = next;
      this.ds.updateSpinner(false);
    });
  }

}
