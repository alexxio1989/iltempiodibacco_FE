import { Component, Input, OnInit } from '@angular/core';
import { Acquisto } from 'src/app/model/Acquisto';

@Component({
  selector: 'app-find-acquisto',
  templateUrl: './find-acquisto.component.html',
  styleUrls: ['./find-acquisto.component.css']
})
export class FindAcquistoComponent implements OnInit {

  @Input() acquisti: Acquisto[];

  code: String;

  constructor() { }

  ngOnInit(): void {
  }

}
