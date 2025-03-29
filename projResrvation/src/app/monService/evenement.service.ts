import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Categorie } from '../monClass/categorie';
import { evenements } from '../monClass/evenement';


@Injectable({
  providedIn: 'root'
})

//integration => connexion

export class EvenementService {
  urlpath = "http://localhost:5000/api"  //url back

  constructor(private http:HttpClient) { } 

//methode =>liaison entre front * back

  

// Evennement => liste , ajout

public listEvenement():Observable <evenements[]>
{
  return this.http.get<evenements[]>(`${this.urlpath+"/evenements"}`)
}
public ajoutEvenement(event : evenements):Observable <evenements>{
  return this.http.post<evenements>(`${this.urlpath}/evenements`, event).pipe(
    catchError(this.gestionErreur)
  )
}

// affiche evendetail event par id

getEvenementById(id: number): Observable<any> {
  return this.http.get<any>(`${this.urlpath}/evenements/${id}`);
}

//gestion d'erreur
private gestionErreur(erreur:HttpErrorResponse){
  let msgErreur = 'erreur inconnu'
  if (erreur.error instanceof ErrorEvent){
    msgErreur = `erreur coté client : ${erreur.error.message}`
  } 
  else{
    msgErreur = `erreur coté serveur : ${erreur.error.message}`
  }
  return throwError(()=>new Error(msgErreur))
}
}
