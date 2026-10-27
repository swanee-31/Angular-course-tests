import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {interval, map, Observable} from 'rxjs';


@Component({
  imports: [AsyncPipe],
  selector: 'app-async-pipe',
  styleUrl: './async-pipe.css',
  templateUrl: './async-pipe.html',
})
export class AsyncTest {

  timer$: Observable<number> = interval(1000);
}

