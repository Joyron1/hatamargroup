import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../Models/cart.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Observable<Product[]>;

  clicked: boolean = false;
  // public cart: any = [];


  constructor(public api: ApiService, private store: Store<AppState>) {
    if (this.cart)
      console.log(this.cart['actionsObserver']['_value'].payload);
    // JSON.parse(localStorage.getItem("cart")) != null ? this.cart = JSON.parse(localStorage.getItem("cart")) : this.cart = [];
  }

  ngOnInit(): void {

  }

  openCart() {
    this.cart = this.store.select('cart');
    // console.log(this.cart['actionsObserver']['_value'].payload)
    // console.log(this.cart['actionsObserver']['_value'])
    if (this.clicked === false)
      this.clicked = true;
    else if (this.clicked === true)
      this.clicked = false;
  }

  calculatePrice(product) {
    let productPrice = product.price * product.qnt;
    return productPrice;
  }

}
