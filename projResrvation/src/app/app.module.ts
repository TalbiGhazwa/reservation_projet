import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { EvenementComponent } from './pages/PagesClient/evenement/evenement.component';
import { PanierComponent } from './pages/PagesClient/panier/panier.component';
import { DetailEventComponent } from './pages/PagesClient/detail-event/detail-event.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './pages/header/header.component';
import { ListCategorieComponent } from './pages/PagesAdmin/list-categorie/list-categorie.component';
import { ListClientComponent } from './pages/PagesAdmin/list-client/list-client.component';
import { ListEvenementComponent } from './pages/PagesAdmin/pEvenements/list-evenement/list-evenement.component';

import { InscriptionComponent } from './pages/PageAuthentif/inscription/inscription.component';
import { ConnexionComponent } from './pages/PageAuthentif/connexion/connexion.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { PayementComponent } from './pages/PagesClient/payement/payement.component';
import { AjoutEvenementComponent } from './pages/PagesAdmin/pEvenements/ajout-evenement/ajout-evenement.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NoAutoriserComponent } from './pages/no-autoriser/no-autoriser.component';




@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    EvenementComponent,
    PanierComponent,
    DetailEventComponent,
    IndexComponent,
    HeaderComponent,
    ListCategorieComponent,
    ListClientComponent,
    InscriptionComponent,
    ConnexionComponent,
    ListEvenementComponent,
    PayementComponent,
    AjoutEvenementComponent,
    FooterComponent,
    NoAutoriserComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
