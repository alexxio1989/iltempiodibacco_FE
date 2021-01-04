import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-result-acquisto',
  templateUrl: './modal-result-acquisto.component.html',
  styleUrls: ['./modal-result-acquisto.component.css']
})
export class ModalResultAcquistoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  continua(){
    this.route.navigate(['/user']);
  }

}
