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

  pageIndex: number = 0;
  pageSize: number = 1;
  lowValue: number = 0;
  highValue: number = 1;

  constructor(private as: AcquistoService,private ds: DelegateServiceService) { }

  ngOnInit(): void {
    const localUser = localStorage.getItem('USER');
    let LoggedUtente = JSON.parse(localUser);
    if(LoggedUtente !== undefined && LoggedUtente !== null){
      this.utente = LoggedUtente;
    }
    this.as.getOBSGetAllUtente(this.utente.id).subscribe(next => {
      this.acquisti = next;
      if(this.acquisti !== undefined && this.acquisti !== null && this.acquisti.length > 0){
        this.acquisti.sort((a,b) => a.id - b.id).reverse();
      }
      this.ds.updateSpinner(false);
    },error=>{
      this.ds.updateSpinner(false);
    }); 
  }

  getPaginatorData(event){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
   else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
     }   
      this.pageIndex = event.pageIndex;
  }

}
