import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DiscogsService } from '../discogs.service';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.scss'],
  providers: [DiscogsService]
})

export class ArtistAlbumListComponent implements OnInit {
  artistId: string;
  albumsToDisplay;

  constructor(
    private route: ActivatedRoute,
    private discogsService: DiscogsService
  ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.artistId = urlParameters['id'];
    });
      this.discogsService.getReleasesByArtistId(this.artistId).subscribe(artistAlbums => {
        this.albumsToDisplay = artistAlbums.json().releases;
        console.log(this.albumsToDisplay);
     });
  }
}
