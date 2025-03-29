import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/monClass/categorie';
import { evenements } from 'src/app/monClass/evenement';
import { EvenementService } from 'src/app/monService/evenement.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit{
  event: evenements ={
    id: 0,
    nomEvenement: '',
    dateEvenement: '',
    typeEvenement: '',
    PrixEvenement: '',
    adresseEvenement: '',
    categori: new Categorie
  }; 

  // appel service evenement
  constructor(
    private evenementService: EvenementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // declare const eventId  from url 
    const eventId = +this.route.snapshot.paramMap.get('id')!;

    // recherche par id 
    this.evenementService.getEvenementById(eventId).subscribe((data) => {
      this.event = data; 
  })
}

}