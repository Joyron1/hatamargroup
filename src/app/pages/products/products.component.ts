import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public pricingCards;
  public cardId: number;
  public width = window.innerWidth;

  constructor(public api: ApiService, private title: Title, private meta: Meta) {
    this.pricingCards = this.api.pricingCards;
    // console.log("Pricing Card:", this.pricingCards)
  }

  ngOnInit(): void {

    this.title.setTitle('התמר - התמרים שלנו');
    this.meta.addTags([
      { name: 'keywords', content: 'תמר מגהול, תמר עסיסי, מגהול בונבון, מגהול יבש, התמרים שלנו, משלוחים, משלוחים עד הבית, איקומרס,ווקומרס,חנות,החנות שלנו, תמרים טעימים, תמרים איכותיים' },
      { name: 'description', content: 'היכנסו לחנות שלנו וביחרו את התמר האהוב עליכם. הטעמים לא מהעולם הזה והאיכות גבוהה! משלוחים עד הבית, קנו עוד היום!' },
      { name: 'robots', content: 'index, follow' },
    ]);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  passId = (cardId) => {
    console.log(cardId);
    this.cardId = cardId;
  }

}
