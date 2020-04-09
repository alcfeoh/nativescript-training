import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent  {

  submit(formValue: any) {
      console.log('FORM SUBMITTED:', formValue);
  }

}
