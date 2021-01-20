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
  call = faPhone;
  close = faWindowClose;
  whatsapp = 'https://api.whatsapp.com/send?phone=972509175030&text=%D7%90%D7%94%D7%9C%D7%9F%20,%20%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A6%D7%A2%20%D7%94%D7%96%D7%9E%D7%A0%D7%94%20%D7%A9%D7%9C%20%D7%94%D7%AA%D7%9E%D7%A8%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9B%D7%9D';

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

    setTimeout(function () {
      $("#both-products-modal").modal('show');
    }, 1000);
  }

  passTitle = (cardTitle) => {
    console.log(cardTitle);
    this.cardTitle = cardTitle;
  }

}
