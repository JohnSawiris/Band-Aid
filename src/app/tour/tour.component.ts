import { Component, OnInit } from '@angular/core';
import { TourService } from './../tour.service';


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  providers: [TourService]
})

export class TourComponent implements OnInit {
  artists: any[]=null;
  constructor(private tourService: TourService) { }

  ngOnInit() {

  }

  getArtistTour(name: string) {
    this.tourService.getByArtistName(name).subscribe(response => {
      this.artists = response.json();
      console.log(this.artists);
    })
  }

}
