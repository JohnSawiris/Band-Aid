import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  currentRoute: string = this.currRoute.url;

  @Input() childSearchList;

  constructor(
    private currRoute: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  addToWishlist(id, title, img) {
    console.log(id);
    console.log(title);
    console.log(img);
  }

}
