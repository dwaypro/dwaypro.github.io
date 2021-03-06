import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Poster } from './poster';
import { Term } from './term';

import { environment } from '../environments/environment';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable()
export class MoviesService {

  private moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`;

  private searchUrl = Term.output;

  constructor(
  	private http: HttpClient,
  ) { }

  requestMovies() {
  	return this.http.get(this.moviesUrl)
  }

  searchMovies(url) {
    return this.http.get(url)
  }

}
