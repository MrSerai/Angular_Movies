import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-movies';
  title = 'any value';

  duplicateNumber(n: number) {
    return n * 2;
  }

  movies = [{
    title: 'únswnko',
    releaseDate: new Date(), price: 10.25
  }, {
    title: 'isitha',
    releaseDate: new Date(), price: 10.25
  }, {
    title: 'generations',
    releaseDate: new Date(/*'14/11/2016'*/), price: 10.25
  }, {
    title: '3talk',
    releaseDate: new Date(), price: 10.25
  }, {
    title: 'skeem saam',
    releaseDate: new Date(), price: 10.25
  }]
}
