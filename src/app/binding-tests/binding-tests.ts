import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../services/book';

@Component({
  imports: [FormsModule],
  selector: 'app-binding-tests',
  styleUrl: './binding-tests.css',
  templateUrl: './binding-tests.html',
})
export class BindingTests {
  
  pseudo: string = 'Batman';
  avatar: string = 'batman.png';
  estFatigue: boolean = true;

  constructor() {
    console.log('BindingTests component initialized');
    this.bookService.hello();
  }

  private bookService: Book = inject(Book);

  rechargeEnergie() {
    this.estFatigue = false;
    alert('Énergie rechargée !');
  }
}
