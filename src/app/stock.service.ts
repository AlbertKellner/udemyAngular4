import { Injectable } from '@angular/core'

@Injectable()

export class StockService {
    getStocks(): string[] {
        return ['APPL', 'IMB', 'GOOG', 'UDEMY'];
    };
}