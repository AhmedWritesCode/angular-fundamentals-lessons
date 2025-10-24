import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `       <!-- This article element represents and entire listing -->
  <article class="listing">
    <div class="image-parent">
      <img class="product-image" src="https://placehold.co/100x100" />
    </div>
    <section class="details">
      <p class="title">{{ car.make + ' ' + car.model }}</p>
      <hr />
      <p class="detail">
        <span>Year</span>
        <span>{{ car.year }}</span>
      </p>
      <div class="detail">
        <span>Transmission</span>
        <span>{{ car.transmission }}</span>
      </div>
      <p class="detail">
        <span>Mileage</span>
        <span>{{ car.miles }}</span>
      </p>
      <p class="detail">
        <span>Price</span>
        <span>{{ car.price }}</span>
      </p>
    </section>
  </article>
  <button (click) = "handleCarSave()"> Save </button>
  <!-- end car listing markup -->
  `,
  styles: ``,
})
export class ListingComponent {
  @Input({required: true}) car!: Car; // ! indicates that this property will be definitely assigned

  @Output() carSaved = new EventEmitter<Car>(); // carSaved is an EventEmitter, this is supposed to emit

  handleCarSave() {
    this.carSaved.emit(this.car);
  }
}
