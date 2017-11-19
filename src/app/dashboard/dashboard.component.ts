import { Component, OnInit } from '@angular/core';
import { StockService } from './../stock.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: string[];

  ngOnInit() {
    this.getAllStocks();
  }

  constructor(private StockService: StockService) {

  }

  createStock() {

  }

  getAllStocks() {
    this.StockService.getStocksApi()
      .subscribe(
      data => this.stocks = data,
      error => console.log('server error')
      );
  }

}
