import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact.model';
import { Order } from '../Models/order.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public products = [
    { id: 0, title: "מג'הול עסיסי גדול", priceTxt: "מארז 1 קילו / 40₪", price: 40, delivery: "לא כולל משלוח", img: "../../../assets/images/עסיסי גדול.png" },
    { id: 1, title: "מג'הול יבש פרמיום", priceTxt: "מארז 1 קילו / 30₪", price: 30, delivery: "לא כולל משלוח", img: "../../../assets/images/יבש פרמיום.png" },
    // { id: 2, title: "חבילת התמר", priceTxt: "מארז 5 קילו לבחירה", price: "", delivery: "המחיר כולל משלוח", img: "../../../assets/images/יבש פרמיום.png" },
  ]
  public homeCards = [
    { id: 0, title: "שירות", text: "אנחנו בצוות 'התמר' מאמינים בתודעת שירות גבוהה, תקשורת תמידית ויחס אישי מול הלקוח ואספקה מהירה של המוצר.", img: "../../../assets/images/homecards/customer.png" },
    { id: 1, title: "בריאות", text: "תמרי מג'הול עשירים באשלגן, סידן ומגנזיום שהם מינרלים חשובים מאוד לתקינות לחץ הדם והלב. בנוסף הם מכילים כמות סיבים תזונתיים גבוהה ומהווים פיתרון מעולה ובריא לצורך במתוק!", img: "../../../assets/images/homecards/health.png" },
    { id: 2, title: "איכות", text: "התמרים שלנו נבחרים בקפידה רבה וממויינים ברמה הגבוהה ובעבודת יד, על מנת להבטיח לקהל לקוחותינו את התמרים המובחרים והאיכותיים ביותר!", img: "../../../assets/images/homecards/quality.png" },
    { id: 3, title: "שיווק עולמי", text: "עובדים 24/7 מול לקוחות אל מעבר לים! את התמר האיכותי והעסיסי שלנו ניתן למצוא גם בשאר מדינות העולם להן אנו מייצאים את הסחורה שלנו.", img: "../../../assets/images/homecards/worldwide.png" }
  ]
  public socialIcons = [
    { id: 0, name: "whatsapp", link: "", img: "../../../assets/images/social/whatsapp.png" },
    { id: 1, name: "facebook", link: "", img: "../../../assets/images/social/facebook.png" },
    { id: 2, name: "gmail", link: "", img: "../../../assets/images/social/gmail.png" },
  ]
  public homeLogos = [
    { id: 0, name: "madeInIsr", title: "תוצרת כחול לבן", img: "../../../assets/images/logos-banner/madeinisr.png" },
    { id: 1, name: "natural", title: "מג'הול 100% טבעי", img: "../../../assets/images/logos-banner/natural.png" },
    { id: 2, name: "delivery", title: "מערך משלוחים ארצי", img: "../../../assets/images/logos-banner/delivery-logo.png" },
  ]
  public reviewsCards = [
    {
      id: 0,
      name: "ירדן",
      city: "תל אביב",
      stars: 5,
      review: "הזמנתי תמר מג'הול עסיסי והם היו פשוט מעולים! היחס של צוות התמר מדהים!",
      img: "../../../assets/images/avatars/img_avatar2.png"
    },
    {
      id: 1,
      name: "ג'וי רון",
      city: "קרית ביאליק",
      stars: 5,
      review: "הזמנתי 5 קילו מהמג'הול העסיסי. התאהבתי! התמר הכי טעים שאכלתי בפער, בטוח שאזמין שוב!",
      img: "../../../assets/images/avatars/img_avatar.png"
    },
    {
      id: 2,
      name: "עדן דואניאס",
      city: "בת ים",
      stars: 5,
      review: "תמרים נהדרים וטעימים מאוד!!! שירות אישי! פשוט כייף לקנות אין ספק שאחזור לקנות מהתמר!",
      img: "../../../assets/images/avatars/avatar5.png"
    },
    {
      id: 3,
      name: "טובה",
      city: "הוד השרון",
      stars: 5,
      review: "טעמנו מהתמרים שרכשנו.. הם פשוט- מ ע ו ל י ם! שמחים שהכרנו אתכם!",
      img: "../../../assets/images/avatars/img_avatar2.png"
    },
    {
      id: 4,
      name: "משה",
      city: "נשר",
      stars: 5,
      review: "רק לציין שהתמרים שלכם פשוט להיט! רואים שזה טרי ולא שכב אצלכם שנה בהקפאה. מזמין כבר מעכשיו עוד 5 קילו!",
      img: "../../../assets/images/avatars/img_avatar.png"
    },
    {
      id: 5,
      name: "חווה שמואלי",
      city: "אשקלון",
      stars: 5,
      review: "תמרים טעימים במיוחד! הגיע אליי יוחאי, בחור צעיר ונחמד, להביא לי את ההזמנה עד הבית! אין ספק שאזמין עוד!!",
      img: "../../../assets/images/avatars/img_avatar2.png"
    },
    {
      id: 6,
      name: "סיון שלום",
      city: "הרצליה",
      stars: 5,
      review: "אין דברים כאלה, תמרים ממש ממש טעימים וגדולים! אשמח להזמין שוב!",
      img: "../../../assets/images/avatars/avatar5.png"
    },
    {
      id: 7,
      name: "איתן בן חיים",
      city: "קרית חיים",
      stars: 5,
      review: "הזמנתי 5 קילו מג'הול יבש פרמיום, תמר טעים ואיכותי, תודה רבה על השירות האדיב! משלוח מהיר עד הבית!",
      img: "../../../assets/images/avatars/img_avatar.png"
    },
  ]

  contactUrl = 'https://hook.integromat.com/g4ptot62u99qc5wzsdxmeu62urb2yilf/'
  orderUrl = 'https://hook.integromat.com/ixtauhxobyacw2ysipvxx05onzolyesi/';

  public nameWithNum: boolean;

  constructor(public http: HttpClient) { }


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  validatePhone = (phone) => { // רגקס לבדיקת תקינות נייד
    let regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return regex.test(phone);
  }

  validateEmail = (mail) => { // רגקס לבדיקת תקינות מייל
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }

  validateName = (t) => {
    var regex = /\d/g;
    this.nameWithNum = regex.test(t);
    return regex.test(t);
    // console.log(regex.test(t));
  }

  validateForm(obj) {
    // console.log("here")

    // FIRST NAME VALIDATION
    if (obj.firstName) {
      this.validateName(obj.firstName);
      if (this.nameWithNum === true && 2 > obj.firstName.length) {
        document.getElementById('firstName').style.color = "red";
        document.getElementById('firstName').style.border = "red";
      }
      else {
        document.getElementById('firstName').style.color = "rgb(53, 187, 0)";
        document.getElementById('firstName').style.border = "1px solid rgb(53, 187, 0)";
      }
    }
    else {
      if (!obj.firstName)
        // console.log("no first name inserted", obj.firstName)
        document.getElementById('firstName').style.border = "1px solid red";
      document.getElementById('firstName').style.color = "red";
    }

    // LAST NAME VALIDATION
    if (obj.lastName) {
      this.validateName(obj.lastName);
      if (this.nameWithNum === true && 2 > obj.lastName.length) {
        document.getElementById('lastName').style.color = "red";
        document.getElementById('lastName').style.border = "red";
      }
      else {
        document.getElementById('lastName').style.color = "rgb(53, 187, 0)";
        document.getElementById('lastName').style.border = "1px solid rgb(53, 187, 0)";
      }
    }
    else {
      if (!obj.firstName)
        // console.log("no last name inserted", obj.lastName)
        document.getElementById('lastName').style.color = "red";
      document.getElementById('lastName').style.border = "1px solid red";
    }

    // PHONE NUMBER VALIDATION
    if (obj.phone) {
      if (obj.phone.length === 10 && this.validatePhone(obj.phone)) {
        document.getElementById('phone').style.color = "rgb(53, 187, 0)";
        document.getElementById('phone').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        document.getElementById('phone').style.color = "red";
        document.getElementById('phone').style.border = "1px solid red";
      }
    }
    else {
      document.getElementById('phone').style.color = "red";
      document.getElementById('phone').style.border = "1px solid red";
    }

    // EMAIL VALIDATION
    if (obj.email) {
      // console.log(this.validateEmail(obj.email))
      if (this.validateEmail(obj.email) === true) {
        document.getElementById('email').style.color = "rgb(53, 187, 0)";
        document.getElementById('email').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        document.getElementById('email').style.color = "red";
        document.getElementById('email').style.border = "1px solid red";
      }
    }
    else {
      document.getElementById('email').style.color = "red";
      document.getElementById('email').style.border = "1px solid red";
    }

    // CITY VALIDATION
    if (obj.city) {
      document.getElementById('city').style.color = "rgb(53, 187, 0)";
      document.getElementById('city').style.border = "1px solid rgb(53, 187, 0)";
    }
    else {
      document.getElementById('city').style.color = "red";
      document.getElementById('city').style.border = "1px solid red";
    }

    // ADDRESS VALIDATION
    if (obj.fullAddress) {
      if (obj.fullAddress.length > 5) {
        document.getElementById('address').style.color = "rgb(53, 187, 0)";
        document.getElementById('address').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        document.getElementById('address').style.color = "red";
        document.getElementById('address').style.border = "1px solid red";
      }
    }
    else {
      document.getElementById('address').style.color = "red";
      document.getElementById('address').style.border = "1px solid red";
    }

    // DRY DATE QNT VALIDATION
    if (obj.dryDate) {
      // console.log(obj.dryDate);
      document.getElementById('qnt-dry').style.color = "rgb(53, 187, 0)";
      document.getElementById('qnt-dry').style.border = "1px solid rgb(53, 187, 0)";
    }
    else {
      document.getElementById('qnt-dry').style.color = "red";
      document.getElementById('qnt-dry').style.border = "1px solid red";
    }

    // JUICY DATE QNT VALIDATION
    if (obj.juicyDate) {
      // console.log(obj.juicyDate);
      document.getElementById('qnt-juicy').style.color = "rgb(53, 187, 0)";
      document.getElementById('qnt-juicy').style.border = "1px solid rgb(53, 187, 0)";
    }
    else {
      document.getElementById('qnt-juicy').style.color = "red";
      document.getElementById('qnt-juicy').style.border = "1px solid red";
    }
  }

  insertOrder(obj): Promise<Order> { // פונקציה להכנסת הזמנה חדשה
    console.log("service Order obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Order>(`${this.orderUrl}`, obj).subscribe(data => {
          if (data) {
            resolve(data);
            // console.log("Order is Inserted", data)
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  insertContact(obj): Promise<Contact> { // פונקציה להכנסת הודעה חדשה
    // console.log("service Contact obj:", obj)
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.post<Contact>(`${this.contactUrl}`, obj).subscribe(data => {
          if (data) {
            resolve(data);
            // console.log("Contact is Inserted", data)
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

}
