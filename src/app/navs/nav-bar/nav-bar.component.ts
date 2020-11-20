import { Component, OnInit } from '@angular/core';
import { DelegateServiceService } from 'src/app/delegate-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private ds: DelegateServiceService) { }

  ngOnInit(): void {}

  openSideBar(){
    this.ds.updateSideBar(!this.ds.isOpenSideBar);
    this.ds.isOpenSideBar = !this.ds.isOpenSideBar;
  }

}
