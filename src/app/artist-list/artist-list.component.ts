import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DiscogsService } from '../discogs.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [DiscogsService]
})
export class ArtistListComponent implements OnInit {
  artistId: string;
  artistsToDisplay;

  constructor(
    private route: ActivatedRoute,
    private discogsService: DiscogsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.artistId = urlParameters['name'];
    });

    this.discogsService.getArtistsByName(this.artistId).subscribe(artists => {
      this.artistsToDisplay = artists.json().results;
      console.log(this.artistsToDisplay);
   });
  }

  goToArtistsAlbums(result) {
    this.router.navigate(['artist-album-list', result.id])
  }
}
