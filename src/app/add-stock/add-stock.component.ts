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
constructor(private restService: RestRequestsService){}

  newStockForm = new FormGroup({
    stockTicker: new FormControl(''),
    price: new FormControl(0),
    volume: new FormControl(0),
    buyOrSell: new FormControl(0),
    statusCode: new FormControl(0)
  });

    errorMessage= ""

   handleSubmit() {
    if(this.newStockForm.value.stockTicker==null){this.errorMessage='You must provide a value'}
    if(this.newStockForm.value.price==null){this.errorMessage='You must provide a value'}
    if(this.newStockForm.value.volume==null){this.errorMessage='You must provide a value'}
    if(this.newStockForm.value.buyOrSell==null){this.errorMessage='You must provide a value'}
    if(this.newStockForm.value.statusCode==null){this.errorMessage='You must provide a value'}
    
      // error is displayed
    

  
    else{
      this.errorMessage="";
    const stock: Stock={id: 0, 
     stockTicker: this.newStockForm.value.stockTicker!,
     price: this.newStockForm.value.price!,
     volume: this.newStockForm.value.volume!,
     buyOrSell: this.newStockForm.value.buyOrSell!,
     statusCode: this.newStockForm.value.statusCode!
    }
     // shortcut: 
     // const stock1 = {id:0, ...this.newStockForm.value}
     // console.log(stock1)

     this.restService.addStock(stock).subscribe(
      { next: data =>alert("Stock added with id "+data.id),
        error: error => alert("something went wrong"+error)
      }
     )

     console.log(stock);



    }
    
  }

}


