import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../Models/cart.model';
import * as CartActions from '../../actions/cart.actions';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

import { faEnvelope, faHeart, faPhone, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


declare var $: any;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  test: Observable<Product[]>;

  public products;

  public dry_qnt: number = 0;
  public dry_price: number = 30;
  public juicy_qnt: number = 0;
  public juicy_price: number = 40;

  public cart: Array<[]> = [];
  public cardTitle: number;
  public width = window.innerWidth;

  constructor(public api: ApiService, private title: Title, private meta: Meta, private store: Store<AppState>) {
    this.products = this.api.products;
    // JSON.parse(localStorage.getItem("cart")) != null ? this.cart = JSON.parse(localStorage.getItem("cart")) : this.cart = [];
    // console.log("your cart is:", this.cart);
  }

  ngOnInit(): void {

    this.title.setTitle("תמר מג'הול | התמר | תמרים מבקעת הירדן");
    this.meta.addTags([
      { name: 'keywords', content: "תמר מג'הול" },
      { name: 'description', content: "היכנסו לחנות שלנו וביחרו בין תמר מג'הול עסיסי לבין תמר מג'הול יבש פרמיום. הטעמים לא מהעולם הזה והאיכות גבוהה! משלוחים עד הבית, קנו עוד היום!" },
      { name: 'robots', content: 'index, follow' },
    ]);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  passTitle = (cardTitle) => {
    console.log(cardTitle);
    this.cardTitle = cardTitle;
  }

  addToCart(product) {
    if (product.id === 0) {
      if (this.juicy_qnt > 0) {
        console.log("product:", product, "qnt:", this.juicy_qnt);
        // product.qnt = this.juicy_qnt;
        this.cart.push(product);
        console.log("added to cart:", this.cart);
        this.store.dispatch(new CartActions.AddCart({ name: product.title, qnt: this.juicy_qnt, price: product.price, totalPrice: (this.juicy_qnt * this.juicy_price) + (this.dry_qnt * this.dry_price) }));
        this.juicy_qnt = 0;
      }
      else {
        Swal.fire({
          padding: '0px 0px 20px 0px',
          position: 'center',
          icon: 'error',
          title: 'לא נבחרה כמות',
          text: 'חובה למלא כמות מוצר!',
          cancelButtonText: 'חזור',
          showCancelButton: true,
          showConfirmButton: false,
        })
      }
    }
    else if (product.id === 1) {
      if (this.dry_qnt > 0) {
        console.log("product:", product, "qnt:", this.dry_qnt);
        // product.qnt = this.dry_qnt;
        this.cart.push(product);
        console.log("added to cart:", this.cart);
        this.store.dispatch(new CartActions.AddCart({ name: product.title, qnt: this.dry_qnt, price: product.price, totalPrice: (this.juicy_qnt * this.juicy_price) + (this.dry_qnt * this.dry_price) }))
        this.dry_qnt = 0;
      }
      else {
        Swal.fire({
          padding: '0px 0px 20px 0px',
          position: 'center',
          icon: 'error',
          title: 'לא נבחרה כמות',
          text: 'חובה למלא כמות מוצר!',
          cancelButtonText: 'חזור',
          showCancelButton: true,
          showConfirmButton: false,
        })
      }
    }

    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

}
