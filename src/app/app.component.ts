import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DelegateServiceService } from './service/delegate-service.service';
import { PrjtserviceService } from './service/prjtservice.service';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'iltempiodibacco';

  showSpinner: false;

  isProjectEnable: boolean;

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;

  constructor(private ds: DelegateServiceService , private _snackBar: MatSnackBar , private prjts: PrjtserviceService , private ccService: NgcCookieConsentService){
    
    this.ds.getOBSSpinner().subscribe(next => {
      this.showSpinner = next;
    })
    this.ds.getOBSResultService().subscribe(next => {
      this.openSnackBar(next);
    })

   

    // this.prjts.getOBSEnableProject().subscribe(next => {
    //   this.ds.updateSpinner(false);
    //   this.isProjectEnable = next;
    // })
    
  }


  ngOnInit() {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.initializeSubscription = this.ccService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {

        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {

        localStorage.setItem("COOKIE_CONSENT" , "true");
        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
      this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });

      if(localStorage.getItem("COOKIE_CONSENT") !== undefined && localStorage.getItem("COOKIE_CONSENT") !== null){
        this.ccService.fadeOut();
      } 
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
