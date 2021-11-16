import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})

export class HomepageComponent implements OnInit {

  isSlideLeft = false;
  public width = window.innerWidth;

  constructor(private title: Title, private meta: Meta) {

   }

  ngOnInit(): void {

    this.title.setTitle("תמר מג'הול | התמר | תמרים מבקעת הירדן");
    this.meta.addTags([
      { name: 'keywords', content: "תמר מג'הול" },
      { name: 'description', content: "התמר הוקם על ידי שני חברים בנים למשק חקלאי ומגדלי תמרים מבקעת הירדן, במטרה להביא את התמרים המובחרים ביותר לצרכן הישראלי במשלוחים. תמר מג'הול הנבחר בקפידה ומגיעים אליכם ברמה הגבוהה ביותר!" },
      { name: 'robots', content: 'index, follow' },
    ]);

      this.outOfStockModal();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

    // Free shiiping modal above 5kg orders
    outOfStockModal = () => {
      setTimeout(function () {
        Swal.fire({
          padding: '0px 0px 20px 0px',
          position: 'center',
          imageUrl: '../../../assets/images/logo/לוגו- ללא רקע.png',
          imageWidth: 100,
          imageAlt: `תמר מג'הול`,
          titleText: 'התחלנו גדיד!',
          html:
            "המון אנשים אוהבים תמר מג'הול."+
            '<br> ' +
            "מעטים מאוד זכו לטעום אחד שנקטף בשעות האחרונות - מתוק, טרי, נימוח, שיא הבריאות."+
            '<br> ' +
            "בשביל להבין על מה מדובר, הזמינו כבר עכשיו ונציג מטעמנו ידאג לשאר..",
          cancelButtonText: 'סגור',
          confirmButtonText:'<a style="color:#fff;text-decoration:none;" href="/products">לביצוע הזמנה</a>',
          showCancelButton: true,
          showConfirmButton: true,
        })
      }, 1000);
    }
    
  scrollDownArrow = () => {
    let elm = document.getElementById("scroll-here");
    console.log(elm);
    elm.scrollIntoView();
  }

  

}
