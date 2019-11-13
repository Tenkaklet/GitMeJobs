import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  searchJobs(job: string) {
    return;
  }

  searchByLocation(lat, long, job) {
    console.log(lat, long, job);
  }
}
