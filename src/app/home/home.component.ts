import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SharedServiceService } from '../shared-service.service';
import { MatDividerModule } from '@angular/material/divider';
import { ViewAllComponent } from '../view-all/view-all.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MatDividerModule, ViewAllComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  popular: any;
  trending: any;
  theater: any;
  loopCount: number[] = Array(5).fill(0).map((x, i) => i);
  

  constructor(private sharedService: SharedServiceService, private route: Router){}

  ngOnInit(): void {
    console.log(this.loopCount);
    this.sharedService.getPopularMovies().subscribe(movies => {
      console.log(movies)
      this.popular = movies;
    })

    this.sharedService.getTrendingMovies().subscribe(movies => {
      console.log(movies)
      this.trending = movies;
    })

    this.sharedService.getTheaterMovies().subscribe(movies => {
      console.log(movies)
      this.theater = movies;
    })
  }


  movie_detail(movie: any){
    console.log(movie);
    const navigationExtras: NavigationExtras = {
      state: {
        data : movie
      }
    }
    console.log(navigationExtras);
    this.route.navigate(['/movie'], navigationExtras);

  }
}


