import { Component } from '@angular/core';

@Component({
    selector: 'stocks',
    template: `<h1>Stock</h1>
        {{title}}
        <ul>
            <li *ngFor="let stock of stocks">
                {{stock}}
            </li>
        </ul>
    `
})

export class StocksComponent {
    title = 'list of Stocks';
    stocks = ['APPL', 'IMB', 'GOOG', 'UDEMY'];

}