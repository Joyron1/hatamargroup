import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'hatamar-group';
  pathname = window.location.pathname;

  isFadeIn = false;


  constructor(public api: ApiService) {
  }

  ngOnInit(): void {

    console.log(this.pathname)
    this.api.scrollToTop();

    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      // console.log("scrollY:", scrollY)

      if (this.isFadeIn === false) {
        while (scrollY > 300) {
          this.isFadeIn = !this.isFadeIn;
          return this.isFadeIn;
        }
      }
      else if (this.isFadeIn === true) {
        while (scrollY < 300) {
          this.isFadeIn = !this.isFadeIn;
          return this.isFadeIn;
        }
      }
    })
  }

  backToTop = () => {
    this.api.scrollToTop();
  }

}
