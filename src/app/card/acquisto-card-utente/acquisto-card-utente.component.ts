import { Component, Input, OnInit } from '@angular/core';
import { Acquisto } from 'src/app/model/Acquisto';
import { AcquistoService } from 'src/app/service/acquisto.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';


@Component({
  selector: 'app-acquisto-card-utente',
  templateUrl: './acquisto-card-utente.component.html',
  styleUrls: ['./acquisto-card-utente.component.css']
})
export class AcquistoCardUtenteComponent implements OnInit {

  @Input() acquisto: Acquisto;

  displayedColumns: string[] = ['nomeprodotto', 'qnt', 'prezzo'];

  constructor(private as: AcquistoService,private ds: DelegateServiceService) { }

  ngOnInit(): void {
  }

}
