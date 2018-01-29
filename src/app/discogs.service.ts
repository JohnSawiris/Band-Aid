import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { discogsAuth } from '../api-keys';

@Injectable()
export class DiscogsService {

  constructor(
    private http: Http
  ) { }

  searchByQuery(query: string) {
    console.log(`URL: https://api.discogs.com/database/search?q=${query}&key=${discogsAuth.key}&secret=${discogsAuth.secret}`)
    return this.http.get(`https://api.discogs.com/database/search?q=${query}&key=${discogsAuth.key}&secret=${discogsAuth.secret}`);
  }

  getReleasesByArtistId(artistId: string) {
    return this.http.get(`https://api.discogs.com/artists/${artistId}/releases?key=${discogsAuth.key}&secret=${discogsAuth.secret}`);
  }

  getAlbumByMasterId(albumId: string) {
    return this.http.get(`https://api.discogs.com/masters/${albumId}?key=${discogsAuth.key}&secret=${discogsAuth.secret}`);
  }

}
