import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  public width = window.innerWidth;
  gmail = 'mailto:yohay@hatamargroup.com';
  facebook = 'https://www.facebook.com/hatamar1';
  // whatsapp = 'https://api.whatsapp.com/send?phone=972509175030&text=%D7%90%D7%94%D7%9C%D7%9F%20,%20%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A6%D7%A2%20%D7%94%D7%96%D7%9E%D7%A0%D7%94%20%D7%A9%D7%9C%20%D7%94%D7%AA%D7%9E%D7%A8%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9B%D7%9D';

  constructor(public api: ApiService, private title: Title, private meta: Meta) {
  }

  ngOnInit(): void {
    this.title.setTitle('תמרים מבקעת הירדן | התמר | צרו איתנו קשר ');
    this.meta.addTags([
      { name: 'keywords', content: 'תמרים מבקעת הירדן' },
      { name: 'description', content: 'צרו איתנו קשר עוד היום ואחד הנציגים שלנו ישוב אליכם בהקדם. תמרים מבקעת הירדן במשלוחים מהמשק עד אליכם לפתח הדלת!' },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.api.scrollToTop();
  }



}
