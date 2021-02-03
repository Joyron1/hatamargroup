import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})

export class HomepageComponent implements OnInit {

  isSlideLeft = false;
  public width = window.innerWidth;

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {

    // this.title.setTitle("תמר מג'הול | התמר | תמרים מבקעת הירדן");
    // this.meta.addTags([
    //   { name: 'keywords', content: "תמר מג'הול" },
    //   { name: 'description', content: "התמר הוקם על ידי שני חברים בנים למשק חקלאי ומגדלי תמרים מבקעת הירדן, במטרה להביא את התמרים המובחרים ביותר לצרכן הישראלי במשלוחים. תמר מג'הול הנבחר בקפידה ומגיעים אליכם ברמה הגבוהה ביותר!" },
    //   { name: 'robots', content: 'index, follow' },
    // ]);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  scrollDownArrow = () => {
    let elm = document.getElementById("scroll-here");
    console.log(elm);
    elm.scrollIntoView();
  }

}
