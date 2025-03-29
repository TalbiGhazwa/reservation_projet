import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DetailEventComponent } from './pages/PagesClient/detail-event/detail-event.component';
import { EvenementComponent } from './pages/PagesClient/evenement/evenement.component';
import { PanierComponent } from './pages/PagesClient/panier/panier.component';
import { PayementComponent } from './pages/PagesClient/payement/payement.component';


import { ListCategorieComponent } from './pages/PagesAdmin/list-categorie/list-categorie.component';
import { ListClientComponent } from './pages/PagesAdmin/list-client/list-client.component';

import { ListEvenementComponent } from './pages/PagesAdmin/pEvenements/list-evenement/list-evenement.component';


import { ConnexionComponent } from './pages/PageAuthentif/connexion/connexion.component';
import { InscriptionComponent } from './pages/PageAuthentif/inscription/inscription.component';
import { AjoutEvenementComponent } from './pages/PagesAdmin/pEvenements/ajout-evenement/ajout-evenement.component';
import { NoAutoriserComponent } from './pages/no-autoriser/no-autoriser.component';


const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"index",component:IndexComponent},
  {path:"detailEvenement",component:DetailEventComponent},
  {path:"evenement",component:EvenementComponent},
  {path:"panier",component:PanierComponent},
  {path:"payer",component:PayementComponent},

  {path:"admin/listeCategorie",component:ListCategorieComponent},
  {path:"admin/listeClient",component:ListClientComponent},
  {path:"admin/listeEvenement",component:ListEvenementComponent},

// ajout de component pEvenement {path:"admin/pEvenement",component:pEvenementComponent},

  {path:"admin/pEvenement/ajoutEvenement",component:AjoutEvenementComponent},
  {path:"admin/pEvenement/modifEvenement",component:AjoutEvenementComponent},

  {path:"connexion",component:ConnexionComponent},
  {path:"inscription", component:InscriptionComponent},
  {path:"noAutoriser", component:NoAutoriserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
