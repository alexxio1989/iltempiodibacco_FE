import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { DelegateServiceService } from 'src/app/services/delegate-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  openSideBar: boolean;
  utente: User;

  constructor(private ds: DelegateServiceService) { 
    this.ds.getOBSSideBar().subscribe(next=>{
      this.openSideBar = next;
    })
    
  }

  ngOnInit(): void {
  }

  get isUtenteLogged(): boolean{
    const localUser = localStorage.getItem('USER');
    this.utente = JSON.parse(localUser);
    return localUser !== undefined && localUser !== null;
  }

  logout() {}

}
