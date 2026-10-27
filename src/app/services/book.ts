import { Service } from '@angular/core';

@Service()
export class Book {

    constructor() {}   

    hello() {
        console.log('Hello from Book service');
    }
}
