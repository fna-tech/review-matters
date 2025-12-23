import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent {
  
  viewAll() {
    console.log('view all called');
  }

}
