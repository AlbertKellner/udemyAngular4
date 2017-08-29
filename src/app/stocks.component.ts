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

        <hr>

        <ul>
            <li *ngFor="let stocksMarket of stocksMarkets">
                {{stocksMarket}}
            </li>
        </ul>
    `
})

export class StocksComponent {
    title = 'list of Stocks';
    //stocks = ['APPL', 'IMB', 'GOOG', 'UDEMY'];
    stocks;

    stocksMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE']

    constructor(stockService: StockService) {
        this.stocks = stockService.getStocks();
    }
}