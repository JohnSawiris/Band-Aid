import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DiscogsService } from '../discogs.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [DiscogsService]
})
export class ArtistListComponent implements OnInit {
  artistName: string;
  artistsToDisplay;

  constructor(
    private route: ActivatedRoute,
    private discogsService: DiscogsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.artistName = urlParameters['name'];
    });

    this.discogsService.getArtistsByName(this.artistName).subscribe(artists => {
      this.artistsToDisplay = artists.json().results;
      console.log(this.artistsToDisplay);
   });
  }

  goToArtistsAlbums(result) {
    this.router.navigate(['artist-album-list', result.id])
  }
}
