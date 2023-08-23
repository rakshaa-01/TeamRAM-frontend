import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Stock } from '../dataModel/Stock';
import { RestRequestsService } from '../services/rest-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit{
apiUrl = 'http://localhost:8080/check-ticker';
emailService = emailjs;
stockId: number;

constructor(private restService: RestRequestsService, private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.stockId = +params.get('id');
      console.log('Stock ID:', this.stockId);
    });
  }
 
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
    const stockTicker = this.newStockForm.value.stockTicker;
    const formData = this.newStockForm.value;
    this.errorMessage1= "";
    this.errorMessage2= "";
    this.errorMessage3= "";
    this.errorMessage4= "";
    this.errorMessage5= "";


    this.httpClient.get<string>(`${this.apiUrl}?stockTicker=${stockTicker}`)
    .subscribe(
      response => {
        if (response) {
          this.errorMessage1 = "";
          console.log('Stock label is present in the list.');
          if(stockTicker == '')
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

           if(this.stockId)
           {
            //Update stock logic
            this.restService.updateStock(this.stockId, stock).subscribe(
              { next: data => 
                {
                  alert("Stock updated with ID: " + data.id);
                  //this.sendEmailNotification(formData); //DO NOT UNCOMMENT, mail feature is limited to 10 mails, already 4 used
                  this.router.navigate(['/view']);
                },
                error: error => alert("Something went wrong! " + error)
            });
           }
      else
      {
           this.restService.addStock(stock).subscribe(
            { next: data => 
              {
                alert("Stock added with ID: " + data.id);
                //this.sendEmailNotification(formData); //DO NOT UNCOMMENT, mail feature is limited to 10 mails, already 4 used
              },
              error: error => alert("Something went wrong! " + error)
            })
      }

           console.log(stock);
          }
      } 
      else {
          this.errorMessage1 = " Stock label is not valid!";
          console.log('Stock label is not present in the list.');
      }
    });

   }
  sendEmailNotification(formData: any){
    let str: string = "";
    if(formData.buyOrSell == "BUY" || formData.buyOrSell == "buy")
      str = " Stock bought";
    else if(formData.buyOrSell == "SELL" || formData.buyOrSell == "sell")
      str = " Stock sold";
    const templateParams = {
      to_name: 'User_01', 
      from_name: 'Rakshaa', 
      message: `Confirmation:  ${formData.stockTicker} - ${str} at Price: $ ${formData.price}`
  };

    const serviceID = 'service_gv154qq'; 
    const templateID = 'template_v81lyvp'; 
    const userID = '-MeW1meg0waZdxgKc';

    this.emailService.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
          console.log('Email sent successfully:', response);
      })
      .catch((error) => {
          console.error('Error sending email:', error);
      });
  }

}


