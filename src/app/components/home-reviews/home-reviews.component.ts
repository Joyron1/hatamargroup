import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.scss']
})
export class HomeReviewsComponent implements OnInit {

  // public reviewsCards;

  constructor(public api: ApiService) {
    // this.reviewsCards = this.api.reviewsCards;
    // console.log("Reviews Card:", this.reviewsCards)
  }

  ngOnInit(): void {
  }

}
