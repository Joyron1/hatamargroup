import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-logos',
  templateUrl: './home-logos.component.html',
  styleUrls: ['./home-logos.component.scss']
})
export class HomeLogosComponent implements OnInit {

  public homeLogos;

  constructor(public api: ApiService) {
    this.homeLogos = this.api.homeLogos;
    // console.log("logos:", this.homeLogos)
  }

  ngOnInit(): void {
  }

}
