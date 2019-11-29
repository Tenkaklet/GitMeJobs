import { Component, OnInit } from "@angular/core";
import { GithubService } from "../github.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  constructor(
    private ghService: GithubService,
    private route: ActivatedRoute
  ) {}
  input: any;
  pageDimmed = true;
  searched: string;
  results: [];
  useLocation: boolean;

  ngOnInit() {
    this.route.params.subscribe(res => {
      setTimeout(() => {
        this.pageDimmed = false;
      }, 4500);
      this.searched = res.result;
    });
    this.ghService.searchJobs(this.searched).subscribe((res: any) => {
      this.results = res;
      this.input = this.searched;
      console.log(this.results);
    });
  }

  apply(url: string) {
    window.open(url, "_blank");
  }

  search() {
    if (this.useLocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        this.ghService.searchByLocation(latitude, longitude, this.input)
        .subscribe((res: any) => {
          this.pageDimmed = true;
          setTimeout(() => {
          this.pageDimmed = false;
          this.results = res;
          this.searched = this.input;
        }, 4500);
        });
      });
    } else {
      this.ghService.searchJobs(this.input).subscribe((res: any) => {
        this.pageDimmed = true;
        setTimeout(() => {
          this.pageDimmed = false;
          this.results = res;
          this.searched = this.input;
        }, 4500);
      });
    }
  }
}
