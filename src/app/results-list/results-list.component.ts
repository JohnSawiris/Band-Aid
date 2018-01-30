import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {

  @Input() childSearchList;

  constructor() { }

  ngOnInit() {
  }

  addToWishlist(id, title, img) {
    console.log(id);
    console.log(title);
    console.log(img);
  }

}
