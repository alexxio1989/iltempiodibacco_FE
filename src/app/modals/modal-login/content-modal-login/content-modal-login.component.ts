import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { UtenteServiceService } from 'src/app/service/utente-service.service';

@Component({
  selector: 'app-content-modal-login',
  templateUrl: './content-modal-login.component.html',
  styleUrls: ['./content-modal-login.component.css']
})
export class ContentModalLoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  utente: User = new User();

  constructor(private ds: DelegateServiceService , private us: UtenteServiceService) { }

  ngOnInit(): void {
  }

  login() {
    this.us.getOBSLogin(this.utente).subscribe(next =>{
      this.ds.updateResultService(next.status);
      //localStorage.setItem('JWT_TOKEN',next.headers.get('JWT_TOKEN'));
      localStorage.setItem('USER',JSON.stringify(next.utente));
      this.ds.utente = next.utente;
      this.ds.updateUser(next.utente);
      this.ds.updateSideBar(false);
      this.ds.updateSpinner(false);
    },error => {
      this.ds.updateResultService(error.status);
      this.ds.updateSpinner(false);
    });
}

}
