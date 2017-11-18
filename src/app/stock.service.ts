import { observable } from 'rxjs/symbol/observable';
import { InputDecorator } from '@angular/core/src/metadata/directives';
import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()

export class StockService {
    constructor(private http: Http) {

    }

    getStocksApi(): Observable<any> {
        return this.http.get("http://localhost:3000/stocks")
            .map((res: Response) => res.json())
            .catch((error: any) => observable.throw(error.json().error || 'Server Error'));
    }

    getStocks(): string[] {
        return ['APPL', 'IMB', 'GOOG', 'UDEMY'];
    };
}
