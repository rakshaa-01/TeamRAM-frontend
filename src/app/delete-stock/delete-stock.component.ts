import { Component } from '@angular/core';
import { RestRequestsService } from '../services/rest-requests.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-stock',
  templateUrl: './delete-stock.component.html',
  styleUrls: ['./delete-stock.component.css']
})
export class DeleteStockComponent{
 
  constructor(private restService: RestRequestsService) {}
  errormsg = "";
  deleteStockForm = new FormGroup
  ({
    id: new FormControl(0)
  });
  
 handleDelete() 
 {
  if(this.deleteStockForm.value.id == 0)
    {
      this.errormsg = " ID cannot be 0!";
    }
  else{
   this.errormsg = "";
   console.log(this.deleteStockForm.value.id);
   this.restService.delStock(this.deleteStockForm.value.id).subscribe(
    { next: data => {console.log(data);
      alert("Stock deleted with ID: " + data.id)},
      error: error => {console.log(error)
      alert("Something went wrong! " + error)}
    })

  }
}
}

