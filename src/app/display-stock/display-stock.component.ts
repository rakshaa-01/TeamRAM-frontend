import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../dataModel/Stock';
import { RestRequestsService } from '../services/rest-requests.service';

@Component({
  selector: 'app-display-stock',
  templateUrl: './display-stock.component.html',
  styleUrls: ['./display-stock.component.css']
})
export class DisplayStockComponent implements OnInit {

  constructor(private restService: RestRequestsService, private router: Router){}
  stocks: Array<Stock> = [];
  errorMessage: string = "";


  ngOnInit(): void {
    this.restService.getStocks().subscribe(
      {next: data => {this.stocks = data},
       error: error=> {this.errorMessage = error}}
    )
  }

  editStock(id: number): void {
    this.router.navigate(['/add', id]);
  }


}
