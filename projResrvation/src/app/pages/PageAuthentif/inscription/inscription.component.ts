import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutorisationService } from 'src/app/monService/autorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  utilisateur = {
    nomUtilisateur :'',
    prenomUtilisateur : '',
    email : '',
    motPasse:'',
    role:'CLIENT'
  }

constructor(private autorisationService : AutorisationService, private router : Router){}

Remplissages():void {
  this.autorisationService.remplissage(this.utilisateur).subscribe({
    next: ()=>{
      alert('inscription enregistrer avec succée')
      this.router.navigate(['/connexion'])
    },
    error: (erreur) =>{
      alert(erreur.error.error || 'Une erreur est se produit');
      

    }
  })
}
}




