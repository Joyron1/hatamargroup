import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, Thumbs } from 'swiper/core';

// install Swiper components
SwiperCore.use([A11y, Autoplay, Thumbs, Navigation]);
@Component({
  selector: 'app-home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.scss']
})
export class HomeReviewsComponent implements OnInit {

  public slides = this.api.reviewsCards;
  public slidesNum: number;

  constructor(public api: ApiService) {
    // console.log("Reviews Card:", this.slides);
  }

  ngOnInit(): void {
    this.setSlidesNumber();
  }

  onSwiper(swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change')
  }

  getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  setSlidesNumber() {
    // console.log(this.getWidth());
    if (this.getWidth() > 1100)
      this.slidesNum = 4;
    else if (this.getWidth() < 1101 && this.getWidth() > 767)
      this.slidesNum = 3;
    else if (this.getWidth() < 768 && this.getWidth() > 600)
      this.slidesNum = 2;
    else if (this.getWidth() < 601)
      this.slidesNum = 1;
  }
}
