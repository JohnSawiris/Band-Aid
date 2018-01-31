import { Component, OnInit } from '@angular/core';
import { TourService } from './../tour.service';


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  providers: [TourService]
})

export class TourComponent implements OnInit {
  tours: any[]=null;
  constructor(private tourService: TourService) { }

  ngOnInit() {
      this.tourService.getByArtistName("sza").subscribe(response => {
        this.tours = response.json();
        console.log(this.tours);
      })


  }


}
