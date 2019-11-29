import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  searchJobs(job: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${job}`);
  }

  searchByLocation(lat, long, job) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${job}&lat=${lat}&long=${long}`);
  }
}
