import { Component } from '@angular/core';
import { RestRequestsService } from '../services/rest-requests.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-stock',
  templateUrl: './delete-stock.component.html',
  styleUrls: ['./delete-stock.component.css']
})
export class DeleteStockComponent{
 
  constructor(private restService: RestRequestsService, private router: Router) {}
  errormsg: string = "";
  successmsg: string = "";
  id1: number | null | undefined;
  deleteStockForm = new FormGroup
  ({
    id: new FormControl(0)
  });
  
 handleDelete() 
 {
  this.id1 = this.deleteStockForm.value.id;
  if(this.deleteStockForm.value.id == 0)
    {
      this.errormsg = " ID cannot be 0!";
    }
  else{
   this.errormsg = "";
   this.successmsg = "";
   this.restService.delStock(this.deleteStockForm.value.id).subscribe(
    () => {
      this.successmsg = ' Stock order: ' + this.id1 + ' deleted successfully';
      console.log('Stock order: ' + this.id1 +' deleted successfully');
      this.router.navigate(['/view']);
    },
    (error) => {
      if (error.status === 404) {
        this.errormsg = ' Stock order: ' + this.id1 + ' not found';
      } 
      else {
        this.errormsg = 'Error deleting stock order!';
      }
      console.error('Error deleting stock order:', error);
    } 
  );

  }
}
}

