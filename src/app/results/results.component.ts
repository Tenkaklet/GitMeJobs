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




  ngOnInit() {

    this.route.params.subscribe(res => {
      setTimeout(() => {
        this.pageDimmed = false;
      }, 3000);
      const result = JSON.parse(res.result);
      console.log(result.location);
    });
  }

}
