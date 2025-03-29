import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/categorie';
import { evenements } from 'src/app/monClass/evenement';
import { CategorieService } from 'src/app/monService/categorie.service';
import { EvenementService } from 'src/app/monService/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit{
goToDetailsEvent(id: number) {
this.router.navigate(['/detailEvenement',{id}])
}
  listCategory: Categorie[];
  listEvenement: evenements[];
    constructor(private catService:CategorieService ,  private router:Router , private evnService: EvenementService ){}
  
  ngOnInit(): void {  // recuperer liste de tout les categorie
     this.catService.listCategorie().subscribe((rep:Categorie[])=>{ 
        this.listCategory = rep
        console.log(this.listCategory)
      })
      this.evnService.listEvenement().subscribe((rep:evenements[])=>{ 
        this.listEvenement = rep

        console.log(this.listEvenement)
      })

      
  }

  
} 
