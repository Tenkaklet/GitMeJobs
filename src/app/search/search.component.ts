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
    this.router.navigate(['result', this.input]);
  }

}
