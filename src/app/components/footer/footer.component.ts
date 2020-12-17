import { Component, OnInit } from '@angular/core';
import { faEnvelope, faHeart, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  heartIcon = faHeart;
  envelope = faEnvelope;
  call = faPhone;
  location = faMapMarkerAlt;

  gmail = 'mailto:Yohayargaman12@gmail.com';
  facebook = 'https://www.facebook.com/hatamar1';
  whatsapp = 'https://api.whatsapp.com/send?phone=972509175030&text=%D7%90%D7%94%D7%9C%D7%9F%20,%20%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A6%D7%A2%20%D7%94%D7%96%D7%9E%D7%A0%D7%94%20%D7%A9%D7%9C%20%D7%94%D7%AA%D7%9E%D7%A8%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9B%D7%9D';

  constructor() { }

  ngOnInit(): void {
  }

}
