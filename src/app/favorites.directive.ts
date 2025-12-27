import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFavorites]',
  standalone: true
})
export class FavoritesDirective implements OnInit{

  @Input('rating') rating!: number;
  @Input('item') item! : number;

  private e1: ElementRef | undefined;

  constructor(e1: ElementRef) {
    this.e1 = e1;
   }

  ngOnInit(): void {
    console.log(this.item);
    console.log(this.rating);
    if(this.e1) {
      (this.item > this.rating) ? this.e1.nativeElement.style.color = '#d0cdcd' 
      : this.e1.nativeElement.style.color = 'red';
    }
    
  }

}
