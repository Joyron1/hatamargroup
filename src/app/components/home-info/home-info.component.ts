import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
  animations: [
    trigger('slideLeft', [
      // ...
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('closed', style({
        transform: 'translateX(600px)',
        opacity: 0
      })),
      transition('open => closed', [
        animate('1.5s')
      ]),
      transition('closed => open', [
        animate('0.7s')
      ]),
    ]),
  ]
})
export class HomeInfoComponent implements OnInit {

  isSlideLeft = false;
  public width = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      // console.log("scrollY:", scrollY)

      if (this.isSlideLeft === false) {
        if (scrollY >= 100) {
          this.isSlideLeft = !this.isSlideLeft;
          return this.isSlideLeft;
        }
      }
    })
  }



}
