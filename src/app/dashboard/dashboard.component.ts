import { Component, OnInit } from '@angular/core';
import { StockService } from './../stock.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: string[];
  selectedStock: any;
  updateEnable = false;

  ngOnInit() {
    this.getAllStocks();
  }

  constructor(private StockService: StockService) {

  }

  getAllStocks() {
    this.StockService.getStocksApi()
      .subscribe(
      data => this.stocks = data,
      error => console.log('server error')
      );
  }

  createStock(newStockCode: string, newName: string) {
    this.StockService.createStock(newStockCode, newName).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  updateStock(newStockCode: string, newName: string) {
    this.StockService.updateStock(this.selectedStock.id, newStockCode, newName).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  deleteStock(stockId: string) {
    this.StockService.deleteStock(stockId).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  loadDetails(stock: any) {
    this.updateEnable = true;
    this.selectedStock = stock;
  }

}
