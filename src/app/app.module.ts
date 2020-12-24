import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxStarsModule } from 'ngx-stars';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavBarComponent } from './navs/nav-bar/nav-bar.component';
import { SideBarComponent } from './navs/side-bar/side-bar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerComponent } from './varie/spinner/spinner.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentModalLoginComponent } from './modals/modal-login/content-modal-login/content-modal-login.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { ModalSigninComponent } from './modals/modal-signin/modal-signin.component';
import { ModalProdottoComponent } from './modals/modal-prodotto/modal-prodotto.component';
import { ModalPrenotazioneComponent } from './modals/modal-prenotazione/modal-prenotazione.component';
import { ContentModalSigninComponent } from './modals/modal-signin/content-modal-signin/content-modal-signin.component';
import {MatInputModule} from '@angular/material/input';
import { DelegateServiceService } from './service/delegate-service.service';
import { UtenteServiceService } from './service/utente-service.service';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { ProdottoServiceService } from './service/prodotto-service.service';
import { NegozioServiceService } from './service/negozio-service.service';
import { MagazinoServiceService } from './service/magazino-service.service';
import { NegozioCardComponent } from './card/negozio-card/negozio-card.component';
import {MatSelectModule} from '@angular/material/select';
import { ProdottoCardComponent } from './card/prodotto-card/prodotto-card.component';
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { AdminNegozioCardComponent } from './card/admin-negozio-card/admin-negozio-card.component';
import {MatListModule} from '@angular/material/list';
import { SezioneProdottiComponent } from './pages/page-admin/section/sezione-prodotti/sezione-prodotti.component';
import { SezioneNegoziComponent } from './pages/page-admin/section/sezione-negozi/sezione-negozi.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { NewNegozioModalComponent } from './modals/new-negozio-modal/new-negozio-modal.component';
import { NewNegozioModalContentComponent } from './modals/new-negozio-modal/new-negozio-modal-content/new-negozio-modal-content.component';
import {MatMenuModule} from '@angular/material/menu';
import { CarrelloServiceService } from './service/carrello-service.service';
import { IncrementerComponent } from './varie/incrementer/incrementer.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ProdottoCardCarrelloComponent } from './card/prodotto-card-carrello/prodotto-card-carrello.component';
import {MatTableModule} from '@angular/material/table';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { GiorniLavorativiComponent } from './varie/giorni-lavorativi/giorni-lavorativi.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CardInfoNegozioComponent } from './card/card-info-negozio/card-info-negozio.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxStripeModule } from 'ngx-stripe';
import { ModalConfermaAcquistoComponent } from './modals/modal-conferma-acquisto/modal-conferma-acquisto.component';
import { AcquistoService } from './service/acquisto.service';
import { AcquistoCardAdminComponent } from './card/acquisto-card-admin/acquisto-card-admin.component';
import { AcquistoCardUtenteComponent } from './card/acquisto-card-utente/acquisto-card-utente.component';
import { SezioneAcquistiComponent } from './pages/page-admin/section/sezione-acquisti/sezione-acquisti.component';
import { BoldTextPipe } from './pipe/bold-text.pipe';
import { FindAcquistoComponent } from './varie/find-acquisto/find-acquisto.component';
import { FormatTextPipe } from './pipe/format-text.pipe';




const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageHomeComponent,
    SideBarComponent,
    SpinnerComponent,
    ModalLoginComponent,
    ModalSigninComponent,
    ModalProdottoComponent,
    ModalPrenotazioneComponent,
    ContentModalLoginComponent,
    ContentModalSigninComponent,
    PageAdminComponent,
    PageUserComponent,
    NegozioCardComponent,
    ProdottoCardComponent,
    PageCartComponent,
    AdminNegozioCardComponent,
    SezioneProdottiComponent,
    SezioneNegoziComponent,
    NewNegozioModalComponent,
    NewNegozioModalContentComponent,
    IncrementerComponent,
    ProdottoCardCarrelloComponent,
    GiorniLavorativiComponent,
    CardInfoNegozioComponent,
    ModalConfermaAcquistoComponent,
    AcquistoCardUtenteComponent,
    AcquistoCardAdminComponent,
    SezioneAcquistiComponent,
    BoldTextPipe,
    FindAcquistoComponent,
    FormatTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxStarsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDividerModule,
    MatExpansionModule,
    SwiperModule,
    BrowserModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    MatTableModule,
    NgxMaterialTimepickerModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxStripeModule.forRoot("pk_test_s8tEdMSkAYFFxo6AkOmhFyQc0050euNRAW")
  ],
  providers: [
    DelegateServiceService,
    UtenteServiceService,
    ProdottoServiceService,
    NegozioServiceService,
    MagazinoServiceService,
    CarrelloServiceService,
    AcquistoService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
