import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewNegozioModalContentComponent } from 'src/app/modals/new-negozio-modal/new-negozio-modal-content/new-negozio-modal-content.component';
import { Negozio } from 'src/app/model/Negozio';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';

@Component({
  selector: 'app-card-info-negozio',
  templateUrl: './card-info-negozio.component.html',
  styleUrls: ['./card-info-negozio.component.css']
})
export class CardInfoNegozioComponent implements OnInit {

  negoziForm: FormGroup;

  negozioSel: Negozio;
  @Input() edit: boolean;
  negozi: Negozio[];
  @Output() negozioSelected = new EventEmitter<Negozio>();
  showInfo: boolean;

  constructor(public dialog: MatDialog , 
    private ns: NegozioServiceService , 
    private ds: DelegateServiceService ,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.negoziForm = this.fb.group({
			negoziForm: [null, Validators.required]
    });
    
    this.ds.getOBSNegozi().subscribe(next => {
      this.negozi = next;
      if(this.negozi.length === 1){
        this.negozioSel = this.negozi[0];
        this.negozioSelected.emit(this.negozi[0]);
        this.negoziForm.get('negoziForm').setValue(this.negozioSel);
      }
    })

  }

  openDialog() {
    this.ns.negozioSelected = this.negozioSel;
    const dialogRef = this.dialog.open(NewNegozioModalContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
