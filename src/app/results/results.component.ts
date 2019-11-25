import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private ghService: GithubService, private route: ActivatedRoute) { }

  pageDimmed = true;
  searched: string;
  results: [];

  ngOnInit() {
    this.route.params.subscribe(res => {
      setTimeout(() => {
        this.pageDimmed = false;
      }, 4500);
      this.searched = res.result;
    });
    this.ghService.searchJobs(this.searched)
    .subscribe((res:any) => {
      this.results = res;
      console.log(this.results);
    });
  }

}
