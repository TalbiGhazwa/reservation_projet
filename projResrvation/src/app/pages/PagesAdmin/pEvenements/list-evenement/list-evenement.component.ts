import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { evenements } from 'src/app/monClass/evenement';
import { EvenementService } from 'src/app/monService/evenement.service';


@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css']
})
export class ListEvenementComponent implements OnInit {
supprimEvent() {
throw new Error('Method not implemented.');
}

ajoutEvent() {
this.router.navigate(['/admin/pEvenement/ajoutEvenement'])
}

  listEvenement: evenements[];

  constructor(private router : Router, private evnService: EvenementService){} //appel categorie service

  ngOnInit():void {
    this.evnService.listEvenement().subscribe((rep:evenements[])=>{ 
        this.listEvenement = rep

        console.log(this.listEvenement)
      })

  }
  modifEvenement(id: number) {
this.router.navigate(['/admin/listeEvenement', {id} ])
    }

}
