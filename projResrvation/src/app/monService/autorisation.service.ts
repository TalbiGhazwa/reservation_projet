import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {
  private urlAPI = 'http://localhost:500/api'

  constructor( private http : HttpClient) { }

remplissage(doneeUtilisateur:any) : Observable<any>{
    return this.http.post (`${this.urlAPI}/inscription`, doneeUtilisateur)
  }

isAuthentifi():boolean{
  return !! localStorage.getItem('access_token') && !! localStorage.getItem('role')
}

connecter(infoIdentif : any) : Observable <any> {
  return this.http.post (`${this.urlAPI}/connexion`, infoIdentif)

}

deconnecter():void{
  localStorage.removeItem('access_token')
  localStorage.removeItem('role')
}

getRole(): string | null{
 return localStorage.getItem('role')
}

isAdmin():boolean{
  return this.getRole() === 'ADMIN'
}

_isClickEvent():boolean{
  return this.getRole() === 'CLIENT'
}
}