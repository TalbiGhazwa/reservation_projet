import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/categorie';
import { evenements } from 'src/app/monClass/evenement';
import { CategorieService } from 'src/app/monService/categorie.service';
import { EvenementService } from 'src/app/monService/evenement.service';

@Component({
  selector: 'app-ajout-evenement',
  templateUrl: './ajout-evenement.component.html',
  styleUrls: ['./ajout-evenement.component.css']
})
export class AjoutEvenementComponent implements OnInit {


msg : string=''
  id: any;
  msgErreur: any;
  
  event: any={
    id: 0,
    nomEvenement: '',
    dateEvenement: '',
    typeEvenement: '',
    PrixEvenement: '',
    adresseEvenement: '',
    categori: ''
  };
categorie: Categorie[];


constructor(private activatedRoute : ActivatedRoute,private catService:CategorieService, private router : Router, private evnService: EvenementService){}
ngOnInit(): void {
  this.msg = "Bienvenue !! c la page d'ajout d'evennement"

  this.id = this.activatedRoute.snapshot.params["id"]
  console.log(this.id)
  this.catService.listCategorie().subscribe((rep:Categorie[])=>{ // =>appel methode pour affiche liste
    this.categorie = rep
    console.log(this.categorie)
  })
} 

ajoutEvenement(form: NgForm) {
  console.log(form.value)

this.evnService.ajoutEvenement(this.event).subscribe({
   next:(rep)=>{
    alert('evennement ajouter avec succée')
    this.router.navigate(['/admin/listeEvenement']) // redirection vers url /admin/evenement
  },
  error: (error)=>{
    this.msgErreur = error.message
    alert(this.msgErreur)
  }
})
}

}
