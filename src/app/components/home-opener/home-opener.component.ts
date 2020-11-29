import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-opener',
  templateUrl: './home-opener.component.html',
  styleUrls: ['./home-opener.component.scss']
})
export class HomeOpenerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("scroll-btn").addEventListener("click", this.scrollDown);
  }

  scrollDown = () => {
    let scrollY = window.scrollY;
    if (scrollY < 750) {
      window.scrollTo({
        top: 750,
        behavior: 'smooth'
      });
    }
  }

}
