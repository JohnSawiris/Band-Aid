import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DiscogsService } from '../discogs.service';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.scss'],
  providers: [DiscogsService]
})

export class ArtistAlbumListComponent implements OnInit {
  artistId: string;
  artistDetails;
  albumsToDisplay;

  constructor(
    private route: ActivatedRoute,
    private discogsService: DiscogsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.artistId = urlParameters['id'];
    });
    this.discogsService.getArtistDetailsByArtistId(this.artistId).subscribe(artist => {
      this.artistDetails = artist.json();
      this.discogsService.getReleasesByArtistId(this.artistDetails.name).subscribe(artistAlbums => {
        this.albumsToDisplay = artistAlbums.json().results;
        console.log(this.albumsToDisplay);
      });
    });
  }

  goToAlbumDetails(album) {
    this.router.navigate(['album-details', album.id]);
  }
}
