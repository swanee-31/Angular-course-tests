import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { delay, Observable } from 'rxjs';

@Component({
  imports: [AsyncPipe, JsonPipe],
  selector: 'app-ap-http-client',
  styleUrl: './ap-http-client.css',
  templateUrl: './ap-http-client.html',
})
export class APHttpClient {
  // On injecte le client HTTP standard d'Angular
  private http = inject(HttpClient);
  private readonly simulatedNetworkDelayMs = 3000; // Simule un délai réseau de 3 secondes

  // On crée un flux qui va interroger une API publique test
  // (Typé en 'any' ici pour faire simple, idéalement on créerait une interface User)
  user$: Observable<any> = this.http
    .get('https://jsonplaceholder.typicode.com/users/1')
    .pipe(delay(this.simulatedNetworkDelayMs)); // On simule un délai réseau
}
