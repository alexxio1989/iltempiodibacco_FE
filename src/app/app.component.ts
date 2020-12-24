import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DelegateServiceService } from './service/delegate-service.service';
import { PrjtserviceService } from './service/prjtservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iltempiodibacco';

  showSpinner: false;

  isProjectEnable: boolean;

  constructor(private ds: DelegateServiceService , private _snackBar: MatSnackBar , private prjts: PrjtserviceService){
    
    this.ds.getOBSSpinner().subscribe(next => {
      this.showSpinner = next;
    })
    this.ds.getOBSResultService().subscribe(next => {
      this.openSnackBar(next);
    })

    this.prjts.getOBSEnableProject().subscribe(next => {
      this.ds.updateSpinner(false);
      this.isProjectEnable = next;
    })
    
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
