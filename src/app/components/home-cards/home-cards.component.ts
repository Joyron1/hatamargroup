import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss']
})
export class HomeCardsComponent implements OnInit {

  public homeCards;

  constructor(public api: ApiService) {
    this.homeCards = this.api.homeCards;
    // console.log("Home Cards:", this.homeCards)
  }
  ngOnInit(): void {

  }

}
