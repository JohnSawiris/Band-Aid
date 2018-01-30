import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TourService {

  constructor(
    private http: Http
  ) { }

  getByArtistName(name: string) {
    return this.http.get(`https://rest.bandsintown.com/artists/${name}/events?app_id=BandAid`)
  }

}
