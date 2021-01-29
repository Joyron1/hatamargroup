import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
// import Accessibility from '../../node_modules/accessibility/dist/accessibility.min.js';
// import { Accessibility } from 'accessibility';

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


  constructor() {

  }

  ngOnInit(): void {
    this.accessibilityIcon();
    console.log(this.pathname)
    this.backToTop();

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

  accessibilityIcon = () => {
    let labels = {
      menuTitle: 'אפשרויות הנגשה',
      increaseText: 'הגדל גודל טקסט',
      decreaseText: 'הקטן גודל טקסט',
      increaseTextSpacing: 'הגדלת רווח טקסט',
      decreaseTextSpacing: 'הקטנת רווח טקסט',
      invertColors: 'היפוך צבעים',
      grayHues: 'גוונים אפורים',
      underlineLinks: 'הדגשת קישורים',
      bigCursor: 'עכבר גדול',
    };
    let options = {
      labels: labels,
      modules: {
        increaseText: true,
        decreaseText: true,
        invertColors: true,
        increaseTextSpacing: true,
        decreaseTextSpacing: true,
        grayHues: true,
        underlineLinks: true,
        bigCursor: true,
        readingGuide: false,
        textToSpeech: false,
        speechToText: false,
      },
      icon: {
        position: {
          bottom: { size: 50, units: '%' },
          left: { size: 0, units: '%' },
          type: 'fixed'
        }
      }
    };
    // window.addEventListener('load', function () { new Accessibility(options); }, false);
    window.addEventListener('load', function () { new (self as any).Accessibility(options); }, false);
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

}
