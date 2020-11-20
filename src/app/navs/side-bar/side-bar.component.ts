import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DelegateServiceService } from 'src/app/delegate-service.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  openSideBar: boolean;
  utente: User;

  constructor(private ds: DelegateServiceService , private route: Router) { 
    this.ds.getOBSSideBar().subscribe(next => {
      console.error(next);
      this.openSideBar = next
    },error => {
      console.error(error);
    })
  }

  ngOnInit(): void {
  }

  get isUtenteLogged(): boolean{
    const localUser = localStorage.getItem('USER');
    this.utente = JSON.parse(localUser);
    return localUser !== undefined && localUser !== null;
  }

  logout(){
    localStorage.removeItem('USER');
    this.route.navigate(['/']);
    this.ds.updateSideBar(false);
  }

}
