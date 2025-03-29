import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  adminURL = 'http://localhost:5000/api/utilisateur/clients'

  constructor(private http:HttpClient) { }
  
  getListClient():Observable<any>{
    return this.http.get<any>(`${this.adminURL}`)
  }
}
