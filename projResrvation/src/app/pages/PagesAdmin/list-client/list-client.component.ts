import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/monService/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{
  router: any;
clients: any[];

constructor(private clientService : ClientService){}



  ngOnInit(): void {
    this.getClient()

  }
getClient(): void{
  this.clientService.getListClient().subscribe({
    next: (data) =>{
      this.clients = data
    },
    error:(erreur) =>{
      console.error('erreur lors de la recuperation du client: ', erreur)
    }

  })
}
  ajoutClient() {
    this.router.navigate(['/admin/listeClient'])
    
    }

}
