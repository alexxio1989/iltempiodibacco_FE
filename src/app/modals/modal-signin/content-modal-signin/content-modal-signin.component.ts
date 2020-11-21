import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/model/User';




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

  constructor() { }

  ngOnInit(): void {
  }

}
