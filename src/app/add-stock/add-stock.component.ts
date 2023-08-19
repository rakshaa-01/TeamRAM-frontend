import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Stock } from '../dataModel/Stock';
import { RestRequestsService } from '../services/rest-requests.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
constructor(private restService: RestRequestsService) {}

    errorMessage1= "";
    errorMessage2= "";
    errorMessage3= "";
    errorMessage4= "";
    errorMessage5= "";
    newStockForm = new FormGroup
    ({
    stockTicker: new FormControl(''),
    price: new FormControl(0),
    volume: new FormControl(0),
    buyOrSell: new FormControl(''),
    statusCode: new FormControl(0)
  });

   handleSubmit() {
    this.errorMessage1= "";
    this.errorMessage2= "";
    this.errorMessage3= "";
    this.errorMessage4= "";
    this.errorMessage5= "";
    if(this.newStockForm.value.stockTicker == '')
    {
      this.errorMessage1 = " Stock Label cannot be empty!";
    }
    else if(this.newStockForm.value.price == null || this.newStockForm.value.price == 0)
    {
      this.errorMessage2 = " Price cannot be empty or zero!";
    }
    else if(this.newStockForm.value.volume == null || this.newStockForm.value.volume == 0)
    {
      this.errorMessage3 = " Volume cannot be empty or zero!";
    }
    else if(this.newStockForm.value.buyOrSell == '')
    {
      this.errorMessage4 = " Buy or Sell value cannot be empty!";
    }
    else if(this.newStockForm.value.statusCode == null)
    {
      this.errorMessage5 = " Status Code cannot be empty!";
    }
  
    else{
      this.errorMessage1= "";
      this.errorMessage2= "";
      this.errorMessage3= "";
      this.errorMessage4= "";
      this.errorMessage5= "";
      
     const stock: Stock={
     id: 0, 
     stockTicker: this.newStockForm.value.stockTicker!,
     price: this.newStockForm.value.price ?? 0,
     volume: this.newStockForm.value.volume ?? 0,
     buyOrSell: this.newStockForm.value.buyOrSell!,
     statusCode: this.newStockForm.value.statusCode ?? 0
    };
     // shortcut: 
     // const stock1: Stock = {id:0, ...this.newStockForm.value}
     // console.log(stock1)

     this.restService.addStock(stock).subscribe(
      { next: data => alert("Stock added with ID: " + data.id),
        error: error => alert("Something went wrong! " + error)
      })

     console.log(stock);
    }
    
  }
}


