import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { DiscogsService } from '../discogs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [DiscogsService]
})

export class SearchComponent implements OnInit {

  searchList: any[] = null;

  constructor(
    private discogsService: DiscogsService,
    private router: Router
  ) { }

  getSearchList(name: string) {
    this.router.navigate(['artist-list', name]);
  }

  ngOnInit() {
  }
}
