import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="score-board">
      <h2>Score : <span data-testid="score-value">{{ score() }}</span></h2>
      <button data-testid="increment-btn" (click)="increment()">+1 Point</button>
    </div>
  `
})
export class CounterComponent {
  score = signal(0);

  increment() {
    this.score.update(val => val + 1);
  }
}