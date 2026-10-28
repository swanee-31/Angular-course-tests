import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  imports: [], // plus besoin d'importer AsyncPipe
  selector: 'app-signal-test',
  styleUrl: './signal-test.css',
  templateUrl: './signal-test.html',
})
export class SignalTest {
// 1. On crée le flux RxJS classique
  private interval$ = interval(1000);

  // 2. On le convertit en Signal. 
  // On doit fournir une valeur initiale car un Signal ne peut pas être "vide".
  timer = toSignal(this.interval$, { initialValue: 0 });
}
