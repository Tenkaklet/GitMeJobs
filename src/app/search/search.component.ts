import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  input = '';
  useLocation = false;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  search() {
    let data = {};
    if(this.useLocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        data = {
          lat,
          long,
          search: this.input,
          location: true
        };
        this.router.navigate(['result', JSON.stringify(data)]);
      });
    }
    data = {
      search: this.input,
      location: false
    };
    this.router.navigate(['result', JSON.stringify(data)]);
  }

}
