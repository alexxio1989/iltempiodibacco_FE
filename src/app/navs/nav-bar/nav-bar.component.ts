import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private ds: DelegateServiceService,private route: Router) { }

  ngOnInit(): void {}

  openSideBar(){
    this.ds.updateSideBar(!this.ds.isOpenSideBar);
    this.ds.isOpenSideBar = !this.ds.isOpenSideBar;
  }

  goToAdminPage(){
    this.route.navigate(['/cart']);
    this.ds.updateSideBar(false);
  }

}
