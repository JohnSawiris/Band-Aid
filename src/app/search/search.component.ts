import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    private discogsService: DiscogsService
  ) { }

  getSearchList(query: string, type: string) {
    this.discogsService.searchByQuery(query, type).subscribe(response => {
      this.searchList = response.json().results;
      console.log(this.searchList)
    });
  }

  ngOnInit() {
  }
}
