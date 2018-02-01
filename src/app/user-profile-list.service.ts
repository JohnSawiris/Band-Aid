import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import { Album } from './album.model';
import { masterFirebaseConfig } from '../api-keys';
import { UserProfile } from './user.model';

@Injectable()
export class UserProfileListService {

  profiles: FirebaseListObservable<any[]>;
  private profileKey: string;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('userProfiles');
  }

  getProfiles(){
    return this.profiles
  }

  getProfilesById(userKey: string) {
    return this.database.object(`userProfiles/${userKey}`);
  }

  getCollectionByUserKey(userKey: string) {
    return this.database.list(`userProfiles/${userKey}/collection`);
  }

  getWishlistByUserKey(userKey: string) {
    return this.database.list(`userProfiles/${userKey}/wishlist`);
  }

  addAlbumToCollection(userKey: string, albumToAdd: Album) {
    let collection = this.getCollectionByUserKey(userKey);
    let collectedAlbums;
    let wishlist = this.getWishlistByUserKey(userKey);
    let wishlistedAlbums;

    collection.subscribe(albumsInCollection => {
      collectedAlbums = albumsInCollection
    });

    wishlist.subscribe(albumsInWishlist => {
      wishlistedAlbums = albumsInWishlist
    });

    if(!collectedAlbums.length && !wishlistedAlbums.length) {
      collection.push(albumToAdd);
    } else {
      const albumIsCollected = collectedAlbums.find((thisAlbumInCollection) => thisAlbumInCollection.id === albumToAdd.id);
      const albumIsWishlisted = wishlistedAlbums.find((thisAlbumInWishlist) => thisAlbumInWishlist.id === albumToAdd.id)
      if(albumIsCollected) {
        alert("This album is already in your collection!");
      } else if(albumIsWishlisted) {
        if(confirm("This album is in your wishlist. Would you like to move it to your collection?")) {
          this.database.object(`userProfiles/${userKey}/wishlist/${albumIsWishlisted.$key}`).remove();
          collection.push(albumToAdd);
        };
      } else if (!albumIsCollected && !albumIsWishlisted){
        collection.push(albumToAdd);
      } else {
        alert("There was an error processing your request. Please contact the system administrator.");
      }
    }
  }

  addAlbumToWishlist(userKey: string, albumToAdd: Album) {
    let collection = this.getCollectionByUserKey(userKey);
    let collectedAlbums;
    let wishlist = this.getWishlistByUserKey(userKey);
    let wishlistedAlbums;

    collection.subscribe(albumsInCollection => {
      collectedAlbums = albumsInCollection
    });

    wishlist.subscribe(albumsInWishlist => {
      wishlistedAlbums = albumsInWishlist
    });

    if(!collectedAlbums.length && !wishlistedAlbums.length) {
      wishlist.push(albumToAdd);
    } else {
      const albumIsCollected = collectedAlbums.find((thisAlbumInCollection) => thisAlbumInCollection.id === albumToAdd.id);
      const albumIsWishlisted = wishlistedAlbums.find((thisAlbumInWishlist) => thisAlbumInWishlist.id === albumToAdd.id)
      if(albumIsWishlisted) {
        alert("This album is already in your wishlist.");
      } else if(albumIsCollected) {
        alert("This album is already in your collection!");
      } else if (!albumIsCollected && !albumIsWishlisted){
        wishlist.push(albumToAdd);
      } else {
        alert("There was an error processing your request. Please contact the system administrator.");
      }
    }
  }

  addNewProfile(newUser: UserProfile) {
    this.profiles.push(newUser);
  }

  updateProfile(profile){
    var profileEntry = this.getProfilesById(profile.$key);
    profileEntry.update({name: profile.name});
  }

  addToCollection(userKey: string, album: Album) {
    this.database.list(`userProfiles/${userKey}/collection`).push(album);
  }

  addToWishlist(userKey: string, album: Album) {
    this.database.list(`userProfiles/${userKey}/wishlist`).push(album);
  }
}
