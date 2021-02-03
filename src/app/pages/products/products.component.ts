import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { faEnvelope, faHeart, faPhone, faWindowClose } from '@fortawesome/free-solid-svg-icons';
declare var $: any;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  public products;
  public cardTitle: number;
  public width = window.innerWidth;

  constructor(public api: ApiService, private title: Title, private meta: Meta) {
    this.products = this.api.products;
    // console.log("Pricing Card:", this.products)
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

}
