import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})

export class ResultsListComponent implements OnInit {

  @Input() childSearchList;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  addToWishlist(id, title, img) {
    console.log(id);
    console.log(title);
    console.log(img);
  }

  goToArtistsAlbums(result) {
    this.router.navigate(['artist-list', result.id])
  }
}
