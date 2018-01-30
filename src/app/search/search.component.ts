import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DiscogsService } from '../discogs.service';
import { Router } from '@angular/router';

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
