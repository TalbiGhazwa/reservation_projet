import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Categorie } from '../monClass/categorie';
import { evenements } from '../monClass/evenement';


@Injectable({
  providedIn: 'root'
})

//integration => connexion

export class CategorieService {
  urlpath = "http://localhost:5000/api"  //url back

  constructor(private http:HttpClient) { } 

//methode =>liaison entre front * back

// Categorie => liste , ajout

  public listCategorie():Observable<Categorie[]>{  //methode permet d'afficher la liste des categorie => notre class
    return this.http.get<Categorie[]>(`${this.urlpath+"/categori"}`)
  }

  public ajoutCategorie(cat:Categorie):Observable<Categorie>{          //  => ajout categorie
    return this.http.post<Categorie>(`${this.urlpath}/categori`,cat).pipe(
      catchError(this.gestionErreur)
    )
  }

  

//gestion d'erreur
private gestionErreur(erreur:HttpErrorResponse){
  let msgErreur = 'erreur unconnu'
  if (erreur.error instanceof ErrorEvent){
    msgErreur = `erreur coté client : ${erreur.error.message}`
  } 
  else{
    msgErreur = `erreur coté serveur : ${erreur.error.message}`
  }
  return throwError(()=>new Error(msgErreur))
}
}
