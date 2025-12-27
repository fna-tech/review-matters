import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '../model/MovieModel';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { SharedServiceService } from '../shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { FavoritesDirective } from '../favorites.directive';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent, FormsModule, DatePipe, DecimalPipe, CommonModule, ReactiveFormsModule, FavoritesDirective,
    MatInputModule, MatFormFieldModule, MatButton, MatCardModule, MatIcon],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  navigation: any;
  movie!: MovieModel;
  loopCount = Array(5).fill(0).map((x, i) => i);
  user_rating: number = 0;
  review_form!: FormGroup;
  constructor(private route: Router, private sharedService: SharedServiceService){
    this.navigation = this.route.getCurrentNavigation();
    console.log(this.navigation);
    
    this.movie = (this.navigation?.extras.state.data) ? this.navigation?.extras?.state?.data : null;
    console.log(this.movie);

    this.review_form = new FormGroup({
      'author': new FormControl(null, [Validators.required]),
      'rating': new FormControl(null, [Validators.required]),
      'review': new FormControl(null, [Validators.required])
    })

  }

  ngOnInit(): void {
    console.log(this.loopCount);
    console.log(this.route);
    console.log(history.state.data);
   
  }

  rateMovie(rating: number){
    this.user_rating = rating+1;
    console.log(this.user_rating);
    this.review_form.patchValue({'rating' : this.user_rating})
  }

  submitRating(){
    if(this.review_form.valid) {
      this.sharedService.postReview(this.review_form.value);
      const dialog = this.dialog.open(SuccessDialogComponent);
      dialog.afterClosed().subscribe(result => {
        console.log(result);
        this.route.navigate(['home'])
      });
    }
    
  }

}
