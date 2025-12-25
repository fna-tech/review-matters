import { Injectable } from '@angular/core';
import {LoginDetail } from './model/loginDetail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  postReview(value: any) {
    console.log(value);
    return true;
  }
  
  isLoggedIn: any = false;

  constructor(private http: HttpClient) { }

  getLoginDetails(formDetail: LoginDetail){
    if (formDetail.username.toLowerCase() === 'femina' && formDetail.password === 'azmi') {
      this.isLoggedIn = true;
      return true 
    } else {
      return false
    }
  }

  getMovies() {
    return this.http.get('https://api.github.com/users');
  }

  getPopularMovies() {
    return this.http.get('http://localhost:4200/data/popular_movies.json');
  }

  getTrendingMovies() {
    return this.http.get('http://localhost:4200/data/trending_movies.json');
  }

  getTheaterMovies() {
    return this.http.get('http://localhost:4200/data/theater_movies.json');
  }

  setLoggedStatus(value: boolean): void {
    this.isLoggedIn = value
  }

  getLoggedStatus(): boolean {
    return this.isLoggedIn;
  }
}
