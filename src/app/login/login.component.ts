import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatChipsModule, MatButtonModule, 
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  invalidCred: boolean = false;

  constructor(private router: Router, private sharedService: SharedServiceService){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  image_movies = 'movie_picture.jpeg'

  homePage(): void {
    console.log(this.loginForm);
    (this.sharedService.getLoginDetails(this.loginForm.value)) ? this.router.navigate(['/home']) : this.invalidCred = true;
  
  }

}
