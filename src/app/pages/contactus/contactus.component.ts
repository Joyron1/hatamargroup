import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faEnvelope, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/Models/contact.model';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  public width = window.innerWidth;
  call = faPhone;
  gmail = 'mailto:Yohayargaman12@gmail.com';
  facebook = 'https://www.facebook.com/hatamar1';
  whatsapp = 'https://api.whatsapp.com/send?phone=972507390422&text=%D7%90%D7%94%D7%9C%D7%9F%20,%20%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F%20%D7%9E%D7%92%27%D7%94%D7%95%D7%9C%20%D7%A2%D7%A1%D7%99%D7%A1%D7%99%20%D7%95%D7%98%D7%A2%D7%99%D7%9D%20%D7%91%D7%91%D7%A7%D7%A9%D7%94';

  constructor(public api: ApiService, private title: Title, private meta: Meta) {
  }

  ngOnInit(): void {
    this.title.setTitle('התמר - צרו איתנו קשר ');
    this.meta.addTags([
      { name: 'keywords', content: 'יצירת קשר,דברו איתנו,השארת פרטים,שאלות ותשובות,איקומרס,ווקומרס,התמר,תמר,תמרים,התמרים,משלוחים,משלוחי תמרים,משק חקלאי,בקעת הירדן' },
      { name: 'description', content: 'צרו איתנו קשר עוד היום ואחד הנציגים שלנו ישוב אליכם בהקדם. תמרים איכותיים במשלוחים מהמשק עד אליכם לפתח הדלת!' },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.scrollTop()
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

}
