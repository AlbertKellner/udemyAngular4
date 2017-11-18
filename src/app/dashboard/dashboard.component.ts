import { Component, OnInit } from '@angular/core';
import { StockService } from './../stock.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    console.log('test');
    this.getAllStocks();
  }

  constructor(private StockService: StockService) {

  }

  getAllStocks() {
    this.StockService.getStocksApi()
      .subscribe(
      data => console.log(JSON.stringify(data)),
      error => console.log('server error')
      );
  }

}
