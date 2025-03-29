import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorisationService } from 'src/app/monService/autorisation.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  infoIdentif={
    email:'',
    motPasse:''
  }

  constructor(private autorisationService : AutorisationService, private router : Router){}

toConnect():void {
  this.autorisationService.connecter(this.infoIdentif).subscribe({
    next : (resultat)=>{
      console.log(resultat)
      localStorage.setItem('access_token',resultat.access_token)
      localStorage.setItem('role', resultat.role)
      const role = resultat.role
      alert ('Connexion effectuer avec succée' + role)
      this.router.navigate(['/'])
    },
    error:()=>{
      alert('Email ou mot de passe est incorrect')
    }
  })
}


}
