import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { masterDiscogsAuth } from '../api-keys'

export const discogsAuth = {
  key: masterDiscogsAuth.key,
  secret: masterDiscogsAuth.secret
}

@Injectable()
export class DiscogsService {

  constructor(
    private http: Http
  ) { }

  getArtistsByName(name: string) {
    return this.http.get(`https://api.discogs.com/database/search?q=${name}&type=artist&key=${discogsAuth.key}&secret=${discogsAuth.secret}`);
  }

  getArtistDetailsByArtistId(artistId: string) {
    return this.http.get(`https://api.discogs.com/artists/${artistId}?key=${discogsAuth.key}&secret=${discogsAuth.secret}`);
  }

  getReleasesByArtistId(artistName: string) {
    return this.http.get(`https://api.discogs.com/database/search?artist=${artistName}&type=master&strict=true&per_page=100&key=${discogsAuth.key}&secret=${discogsAuth.secret}`);
  }

  getAlbumByMasterId(albumId: string) {
    return this.http.get(`https://api.discogs.com/masters/${albumId}?key=${discogsAuth.key}&secret=${discogsAuth.secret}`);
  }

}
