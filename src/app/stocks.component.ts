import { Component } from '@angular/core';
import { StockService } from "./stock.service";

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
    //stocks = ['APPL', 'IMB', 'GOOG', 'UDEMY'];
    stocks;

    constructor(stockService: StockService) {
        this.stocks = stockService.getStocks();
    }
}