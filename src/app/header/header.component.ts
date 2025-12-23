import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router, private sharedService: SharedServiceService){}

  logo_call(): void {
    console.log(this.sharedService.getLoggedStatus());
    (this.sharedService.getLoggedStatus()) ? this.router.navigate(['/home']) : this.router.navigate(['/'])
  }

  logout(): void {
    this.sharedService.setLoggedStatus(false);
    this.router.navigate(['/']);

  }

}
