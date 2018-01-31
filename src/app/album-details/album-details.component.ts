import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DiscogsService } from '../discogs.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
  providers: [DiscogsService]
})
export class AlbumDetailsComponent implements OnInit {
  albumId: string;
  albumDetailsToDisplay;

  constructor(
    private route: ActivatedRoute,
    private discogsService: DiscogsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.albumId = urlParameters['id'];
    });

    this.discogsService.getAlbumByMasterId(this.albumId).subscribe(albumReturned => {
      this.albumDetailsToDisplay = albumReturned.json();
      console.log(this.albumDetailsToDisplay);
    })
  }

}
