import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <h1>Welcome to {{ title }}!</h1>
              <router-outlet />
  @for(title of productTitles; track title){
    <a [routerLink] = "['details', $index]">{{title}}</a> <!-- $index is a built-in variable that gives the index of the current item in the loop -->
    @if (Number(title[8]) == 1){
    <p>Carrots</p>
    }
      @else if (Number(title[8]) == 2) {
      <p>Broccoli</p>
      }
      @else {
      <p>Spinach</p>
    }
    <p> - - </p>
  }
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
  protected readonly Number = Number;
}
