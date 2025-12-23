import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '../model/MovieModel';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent, MatIcon, MatInputModule, MatFormFieldModule ,MatButton, FormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  navigation: any;
  movie!: MovieModel;
  loopCount = Array(5).fill(0).map((x, i) => i);
  constructor(private route: Router){
    this.navigation = this.route.getCurrentNavigation();
    console.log(this.navigation);
    
    this.movie = (this.navigation?.extras.state.data) ? this.navigation?.extras?.state?.data : null;
    console.log(this.movie);

  }

  ngOnInit(): void {
    console.log(this.loopCount);
    console.log(this.route);
    console.log(history.state.data);
   
  }

}
