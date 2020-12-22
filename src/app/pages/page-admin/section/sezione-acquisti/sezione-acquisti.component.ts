import { Component, Input, OnInit } from '@angular/core';
import { Acquisto } from 'src/app/model/Acquisto';
import { Status } from 'src/app/model/Status';
import { User } from 'src/app/model/User';
import { AcquistoService } from 'src/app/service/acquisto.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-sezione-acquisti',
  templateUrl: './sezione-acquisti.component.html',
  styleUrls: ['./sezione-acquisti.component.css']
})
export class SezioneAcquistiComponent implements OnInit {

  @Input() acquisti: Acquisto[] = [];
  @Input() listStatus: Status[];

  pageIndex: number = 0;
  pageSize: number = 1;
  lowValue: number = 0;
  highValue: number = 1;

  constructor(private as: AcquistoService,private ds: DelegateServiceService) { }

  ngOnInit(): void {
   
    
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
