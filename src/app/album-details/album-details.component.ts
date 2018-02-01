import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Album } from '../album.model';
import { AuthenticationService } from '../authentication.service';
import { DiscogsService } from '../discogs.service';
import { UserProfileListService } from '../user-profile-list.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
  providers: [
    AuthenticationService,
    DiscogsService,
    UserProfileListService]
})

export class AlbumDetailsComponent implements OnInit {
  private currentUser;
  private userFirebaseProfile;
  albumId: string;
  albumToDisplay: Album;

  constructor(
    public authService: AuthenticationService,
    private discogsService: DiscogsService,
    private route: ActivatedRoute,
    private router: Router,
    private userProfileListService: UserProfileListService
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (!user) {
        this.currentUser = null;
      } else if (user) {
        this.currentUser = user;
      }

      this.userProfileListService.getProfiles().subscribe(profilesReturned => {
        this.userFirebaseProfile = profilesReturned.find((profile) => {
          return profile.id === user.uid;
        });
      });
    });

    this.route.params.forEach(urlParameters => {
      this.albumId = urlParameters[`id`];
    });

    this.discogsService.getAlbumByMasterId(this.albumId).subscribe(albumReturned => {
      const albumDetails = albumReturned.json();
      this.albumToDisplay = new Album(albumDetails.artists[0].name, albumDetails.title, albumDetails.id, albumDetails.images[0].uri);
    });
  }

  addCurrentAlbumToCollection(album: Album) {
    this.userProfileListService.addAlbumToCollection(this.userFirebaseProfile.$key, album);
  };

  addCurrentAlbumToWishlist(album: Album) {
    this.userProfileListService.addAlbumToWishlist(this.userFirebaseProfile.$key, album);
  };
}
