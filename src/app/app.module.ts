import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { highlightDirective } from './hightlight.directive';
import { StockService } from "./stock.service";
import { DateFormatterPipe } from './date-formatter.pipe';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from "./Currency.service";
import { BondsDirective } from './bonds.directive';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockDirectiveDirective,
    highlightDirective,
    DateFormatterPipe,
    DashboardComponent,
    BondsDirective,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
