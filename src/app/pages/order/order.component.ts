import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Models/order.model';
import { ApiService } from 'src/app/services/api.service';
import *  as  jsonCities from '../../cities.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public width = window.innerWidth;
  public dates;
  public name: string;
  public lastPrice;
  public totalQnt: number = 0;

  public obj: Order = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    fullAddress: "",
    dryDate: 0,
    juicyDate: 0,
    totalQnt: 0,
    totalPrice: 0
  }

  firstNameMSG: string;
  lastNameMSG: string;
  phoneNumMSG: string;
  emailMSG: string;
  cityMSG: string;
  fullAddressMSG: string;
  qntMSG: string;
  orderSentMSG: string;

  public cities;

  nameWithNum: boolean;
  orderSent: boolean;
  isClientAgreed: boolean;

  constructor(public route: ActivatedRoute, public api: ApiService, private title: Title, private meta: Meta) {
    this.cities = jsonCities['default'];
  }

  ngOnInit(): void {

    this.title.setTitle(`הזמנת תמר מג'הול איכותי | התמר | תמר מג'הול מבקעת הירדן`);
    this.meta.addTags([
      { name: 'keywords', content: `תמר מג'הול מבקעת הירדן` },
      { name: 'description', content: "בצעו הזמנה של תמר מג'הול איכותי וטעים עוד היום ותהנו מתמר מג'הול טעים ועסיסי שלא טעמתם כמותו, במשלוח עד הבית!" },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.scrollTop();
    this.calcPrice();
    this.freeShippingModal();
  }

  validateForm() {
    console.log("here")
    // FIRST NAME VALIDATION
    if (this.obj.firstName) {
      this.api.validateName(this.obj.firstName);
      if (2 > this.obj.firstName.length) {
        this.firstNameMSG = "* על השם הפרטי להכיל 2 אותיות ומעלה.";
        document.getElementById('firstName-label').style.color = "rgb(243, 65, 65)";
      }
      else if (this.api.nameWithNum === true) {
        this.firstNameMSG = "* על השם הפרטי להכיל אותיות בלבד.";
        document.getElementById('firstName-label').style.color = "rgb(243, 65, 65)";
      }
      else {
        this.firstNameMSG = ""; // תקין
        document.getElementById('firstName-label').style.color = "rgb(53, 187, 0)";
        document.getElementById('firstName').style.border = "1px solid rgb(53, 187, 0)";
      }
    }
    else {
      this.firstNameMSG = "* חובה למלא שם פרטי.";
      document.getElementById('firstName-label').style.color = "rgb(243, 65, 65)";
      document.getElementById('firstName').style.border = "1px solid rgb(243, 65, 65)";
    }

    // LAST NAME VALIDATION
    if (this.obj.lastName) {
      this.api.validateName(this.obj.lastName);
      if (2 > this.obj.lastName.length) {
        this.lastNameMSG = "* על שם המשפחה להכיל 2 אותיות ומעלה.";
        document.getElementById('lastName-label').style.color = "rgb(243, 65, 65)";
      }
      else if (this.api.nameWithNum === true) {
        this.lastNameMSG = "* על שם המשפחה להכיל אותיות בלבד.";
        document.getElementById('lastName-label').style.color = "rgb(243, 65, 65)";
      }
      else {
        this.lastNameMSG = ""; // תקין
        document.getElementById('lastName-label').style.color = "rgb(53, 187, 0)";
        document.getElementById('lastName').style.border = "1px solid rgb(53, 187, 0)";
      }
    }
    else {
      this.lastNameMSG = "* חובה למלא שם משפחה.";
      document.getElementById('lastName-label').style.color = "rgb(243, 65, 65)";
      document.getElementById('lastName').style.border = "1px solid rgb(243, 65, 65)";
    }

    // PHONE NUMBER VALIDATION
    if (this.obj.phone) {
      if (this.obj.phone.length === 10 && this.api.validatePhone(this.obj.phone)) {
        this.phoneNumMSG = ""; // תקין
        document.getElementById('phone-label').style.color = "rgb(53, 187, 0)";
        document.getElementById('phone').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        this.phoneNumMSG = "* מספר נייד לא תקין.";
        document.getElementById('phone-label').style.color = "rgb(243, 65, 65)";
        document.getElementById('phone').style.border = "1px solid rgb(243, 65, 65)";
      }
    }
    else {
      this.phoneNumMSG = "* חובה למלא מספר נייד.";
      document.getElementById('phone-label').style.color = "rgb(243, 65, 65)";
      document.getElementById('phone').style.border = "1px solid rgb(243, 65, 65)";
    }
    // EMAIL VALIDATION
    if (this.obj.email) {
      if (this.api.validateEmail(this.obj.email)) {
        this.emailMSG = "";
        document.getElementById('email-label').style.color = "rgb(53, 187, 0)";
        document.getElementById('email').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        this.emailMSG = "* כתובת אימייל לא תקינה.";
        document.getElementById('email').style.color = "rgb(243, 65, 65)";
        document.getElementById('email').style.border = "1px solid rgb(243, 65, 65)";
      }
    }
    else {
      this.emailMSG = "* חובה למלא כתובת אימייל.";
      // document.getElementById('email').style.color = "rgb(243, 65, 65)";
      document.getElementById('email').style.border = "1px solid rgb(243, 65, 65)";
    }
    // CITY VALIDATION
    if (this.obj.city) {
      this.cityMSG = "";
      document.getElementById('city-label').style.color = "rgb(53, 187, 0)";
      document.getElementById('city').style.border = "1px solid rgb(53, 187, 0)";
    }
    else {
      this.cityMSG = "* חובה למלא עיר מגורים.";
      document.getElementById('city-label').style.color = "rgb(243, 65, 65)";
      document.getElementById('city').style.border = "1px solid rgb(243, 65, 65)";
    }

    // ADDRESS VALIDATION
    if (this.obj.fullAddress) {
      if (this.obj.fullAddress.length > 5) {
        this.fullAddressMSG = ""; // תקין
        document.getElementById('address-label').style.color = "rgb(53, 187, 0)";
        document.getElementById('address').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        this.fullAddressMSG = "* כתובת לא תקינה.";
        document.getElementById('address-label').style.color = "rgb(243, 65, 65)";
        document.getElementById('address').style.border = "1px solid rgb(243, 65, 65)";
      }
    }
    else {
      this.fullAddressMSG = "* חובה למלא כתובת מלאה.";
      document.getElementById('address-label').style.color = "rgb(243, 65, 65)";
      document.getElementById('address').style.border = "1px solid rgb(243, 65, 65)";
    }

    // QNT VALIDATION
    if (this.totalQnt) {
      console.log(this.totalQnt)
      if (this.totalQnt >= 3) {
        this.qntMSG = "";
        document.getElementById('qnt-label').style.color = "rgb(53, 187, 0)";
        document.getElementById('qnt').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        this.qntMSG = "* הכמות המינימלית להזמנה הינה 3 קילו תמרים.";
        document.getElementById('qnt-label').style.color = "rgb(243, 65, 65)";
        document.getElementById('qnt').style.color = "rgb(243, 65, 65)";
        document.getElementById('qnt').style.border = "1px solid rgb(243, 65, 65)";
      }
    }
    else {
      this.qntMSG = "* חובה למלא כמות מוצר.";
      document.getElementById('qnt-label').style.color = "rgb(243, 65, 65)";
      document.getElementById('qnt').style.border = "1px solid rgb(243, 65, 65)";
    }

  }

  async calcPrice() {
    if (this.obj.dryDate || this.obj.juicyDate) {
      let dryDatesPrice = this.obj.dryDate * 30;
      let juicyDatesPrice = this.obj.juicyDate * 40;
      this.obj.totalPrice = dryDatesPrice + juicyDatesPrice;
      this.totalQnt = this.obj.dryDate + this.obj.juicyDate;
      console.log("this.obj.totalPrice:", this.obj.totalPrice, "this.totalQnt:", this.totalQnt);
      if (this.totalQnt >= 5 || this.totalQnt < 3)
        this.lastPrice = this.obj.totalPrice + "₪";
      else if (this.totalQnt < 5 && this.totalQnt >= 3) {
        this.lastPrice = this.obj.totalPrice + 20 + "₪";
      }
    }
    else if (!this.obj.dryDate && !this.obj.juicyDate) {
      this.obj.totalPrice = 0;
      this.obj.totalQnt = 0;
      this.lastPrice = 0;
    }
  }

  plus(id) {
    if (id == 1)
      this.obj.dryDate++;
    if (id == 2)
      this.obj.juicyDate++;

    this.totalQnt = this.obj.dryDate + this.obj.juicyDate;
    this.calcPrice();
  }

  minus(id) {
    if (id == 1) {
      if (this.obj.dryDate >= 1)
        this.obj.dryDate--;
    }
    if (id == 2) {
      if (this.obj.juicyDate >= 1)
        this.obj.juicyDate--;
    }
    this.totalQnt = this.obj.dryDate + this.obj.juicyDate;
    this.calcPrice();
  }

  onSubmit = () => {
    // console.log("order obj:", this.obj);
    this.obj.totalPrice = this.lastPrice;
    if (this.obj.firstName && this.obj.lastName && this.obj.phone && this.obj.email && this.obj.city && this.obj.fullAddress && this.totalQnt >= 3 && this.obj.totalPrice) {
      if ((this.obj.firstName.length >= 2) && (this.obj.lastName.length >= 2) && (this.obj.phone.length === 10) && (this.obj.fullAddress.length > 5)) {
        console.log("order obj:", this.obj);
        this.obj.totalQnt = this.totalQnt;
        if (this.isClientAgreed == true) {
          this.api.insertOrder(this.obj);
          console.log("ORDER IS FINE");
          this.orderSent = true;
          Swal.fire({
            padding: '0px 0px 20px 0px',
            position: 'center',
            icon: 'success',
            title: 'תודה רבה שהזמנתם מאיתנו!',
            text: 'נציג מטעמנו יצור עמכם קשר לתאום ההזמנה.',
            footer: 'הנך מועבר לעמוד הבית',
            showConfirmButton: false,
            timer: 3500
          })
          setInterval(function () { window.location.pathname = "/"; }, 3600);
        }
        else {
          Swal.fire({
            padding: '0px 0px 20px 0px',
            position: 'center',
            imageUrl: '../../../assets/images/logo/לוגו- ללא רקע.png',
            imageWidth: 100,
            imageAlt: `תמר מג'הול`,
            title: 'צעד אחרון לפני שסיימנו',
            text: 'על מנת שנוכל לקלוט את הזמנתך עליך לאשר את תקנון האתר.',
            cancelButtonText: 'חזרה להזמנה',
            showCancelButton: true,
            showConfirmButton: false,
          })
        }

      }
    }
    else {
      this.validateForm();
      Swal.fire({
        padding: '0px 0px 20px 0px',
        position: 'center',
        icon: 'error',
        title: 'חובה למלא את כל השדות',
        text: 'חובה לסמן את השדות המסומנים ובצורה תקינה',
        html: '<div class="col-12">' +
          '<div class="alertMsgs">' +
          `<div class="my-1"><small role="text" tabindex="1" >${this.firstNameMSG}</small></div>` +
          `<div class="my-1"><small role="text" tabindex="1" >${this.lastNameMSG}</small></div>` +
          `<div class="my-1"><small role="text" tabindex="1" >${this.phoneNumMSG}</small></div>` +
          `<div class="my-1"><small role="text" tabindex="1" >${this.emailMSG}</small></div>` +
          `<div class="my-1"><small role="text" tabindex="1" >${this.cityMSG}</small></div>` +
          `<div class="my-1"><small role="text" tabindex="1" >${this.fullAddressMSG}</small></div>` +
          `<div class="my-1"><small role="text" tabindex="1" >${this.qntMSG}</small></div>` +
          '</div>' +
          '</div>',
        cancelButtonText: 'חזרה למילוי ההזמנה',
        showCancelButton: true,
        showConfirmButton: false,
      })
    }
  }

  freeShippingModal = () => {
    setTimeout(function () {
      Swal.fire({
        padding: '0px 0px 20px 0px',
        position: 'center',
        imageUrl: '../../../assets/images/logo/לוגו- ללא רקע.png',
        imageWidth: 100,
        imageAlt: `תמר מג'הול`,
        titleText: 'משלוח עד הבית!',
        html:
          'משלוח ללא עלות בהזמנה של מעל <b>150₪</b>. ' +
          '<br> ' +
          '<small>ניתן לשלב בין סוגי התמרים!</small>',
        cancelButtonText: 'חזרה להזמנה',
        showCancelButton: true,
        showConfirmButton: false,
      })
    }, 7000);
  }

  checkedPP = () => {
    this.isClientAgreed = ($('#ppCheckbox').is(':checked'));
  }


  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

}
