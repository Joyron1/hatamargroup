import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
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

export class HomepageComponent implements OnInit {

  isSlideLeft = false;
  public width = window.innerWidth;

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {

    this.title.setTitle("תמר מג'הול | התמר | תמרים מבקעת הירדן");
    this.meta.addTags([
      { name: 'keywords', content: "תמר,תמרים,תמר מג'הול,תמרים מג'הול,תמר קלוריות,תמר ערך תזונתי,בקעת הירדן,חקלאי,חקלאים,חקלאות,תמרים בקעת הירדן" },
      { name: 'description', content: "התמר הוקם על ידי שני חברים בנים למשק חקלאי ומגדלי תמרים מבקעת הירדן, במטרה להביא את התמרים המובחרים ביותר לצרכן הישראלי במשלוחים. תמר מג'הול הנבחר בקפידה ומגיעים אליכם ברמה הגבוהה ביותר!" },
      { name: 'robots', content: 'index, follow' },
    ]);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      console.log("scrollY:", scrollY)

      if (this.isSlideLeft === false) {
        if (scrollY >= 100) {
          this.isSlideLeft = !this.isSlideLeft;
          return this.isSlideLeft;
        }
      }
    })
  }

}
