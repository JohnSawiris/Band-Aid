import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DiscogsService } from './discogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DiscogsService]
})

export class AppComponent {
  title = 'app';
  searchList: any[] = null;

  constructor(
    private discogsService: DiscogsService
  ) { }

  getSearchList(query: string) {
    this.discogsService.searchByQuery(query).subscribe(response => {
      this.searchList = response.json().results;
      console.log(this.searchList);
    });
  }

}
