import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/model/User';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { UtenteServiceService } from 'src/app/service/utente-service.service';




@Component({
  selector: 'app-content-modal-signin',
  templateUrl: './content-modal-signin.component.html',
  styleUrls: ['./content-modal-signin.component.css']
})
export class ContentModalSigninComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  utente: User = new User();

  constructor(private ds: DelegateServiceService , private us: UtenteServiceService) { }

  ngOnInit(): void {
  }

  save() {
    this.us.getOBSSignIn(this.utente).subscribe(next =>{
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    },error => {
      this.ds.updateResultService(error.status);
      this.ds.updateSpinner(false);
    });
 
}

}
