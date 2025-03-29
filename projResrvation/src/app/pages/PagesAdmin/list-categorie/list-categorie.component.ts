import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CategorieService } from 'src/app/monService/categorie.service';
import { Categorie } from 'src/app/monClass/categorie';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})


export class ListCategorieComponent implements OnInit{
  listCategory: Categorie[];
  msgErreur : string;

  constructor(private catService:CategorieService ){

  }

ngOnInit(): void {
  this.catService.listCategorie().subscribe((rep:Categorie[])=>{ // =>appel methode pour affiche liste
    this.listCategory = rep
    console.log(this.listCategory)
  })
}
cat: Categorie={
  id: 0,
  nomCategori: ''
};

ajoutCategorie(form:NgForm) { // fn ajout cat
  this.catService.ajoutCategorie(this.cat).subscribe({
    next:(rep)=>{
      alert('category ajoutée avec succée')
      location.reload() // actualisation
      this.msgErreur = '' //clear
    },

    error: (error)=>{
      this.msgErreur = error.message
      alert(this.msgErreur)
    }
    
  })
}

}
