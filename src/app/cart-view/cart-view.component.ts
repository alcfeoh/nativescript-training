import { Component, OnInit } from '@angular/core';
import {LICENSE_PLATES} from "~/app/mock-data";

@Component({
  selector: 'ns-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

    items = LICENSE_PLATES;

  constructor() { }

  ngOnInit(): void {
  }

}
