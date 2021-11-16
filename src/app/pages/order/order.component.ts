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
  orderIsFine: boolean;
  isClientAgreed: boolean;

  disabledOption: string = "עיר מגורים..."

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

  async calcPrice() {
    console.log("calculating price...", this.obj.dryDate, this.obj.juicyDate)
    if (this.obj.dryDate || this.obj.juicyDate) {
      let dryDatesPrice = this.obj.dryDate * 30;
      let juicyDatesPrice = this.obj.juicyDate * 40;
      this.obj.totalPrice = dryDatesPrice + juicyDatesPrice;
      this.totalQnt = this.obj.dryDate + this.obj.juicyDate;
      console.log("this.obj.totalPrice:", this.obj.totalPrice, "this.totalQnt:", this.totalQnt);
      if (this.totalQnt < 3)
        this.lastPrice = "לא ניתן לבצע משלוח";
      else if (this.totalQnt >= 5) {
        this.lastPrice = this.obj.totalPrice + "₪";
      }
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


  // Form validation
  onSubmit = () => {
    this.calcPrice();
    // console.log("order obj:", this.obj);
    this.obj.totalPrice = this.lastPrice;
    if (this.obj.firstName && this.obj.lastName && (this.api.validatePhone(this.obj.phone)) && (this.api.validateEmail(this.obj.email)) && this.obj.city && this.obj.fullAddress && this.obj.totalPrice && this.totalQnt > 2) {
      if ((this.obj.firstName.length >= 2) && (this.obj.lastName.length >= 2)  && (this.obj.fullAddress.length > 5)) {
        this.obj.totalQnt = this.totalQnt;
        // console.log("order is fine");
        this.sendOrder();
        this.orderIsFine = true;
      }
    }
    else {
      this.api.validateForm(this.obj);
      Swal.fire({
        padding: '0px 0px 20px 0px',
        position: 'bottom',
        icon: 'error',
        text: 'חובה למלא את כל השדות באופן תקין',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2500
      })
    }
  }

  sendOrder = () => {
    if (this.isClientAgreed === true) {
      this.api.insertOrder(this.obj);
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
        text: 'על מנת שנוכל להתחיל להעמיס את התמרים שהזמנת עליך לאשר את תקנון האתר.',
        cancelButtonText: 'חזרה להזמנה',
        showCancelButton: true,
        showConfirmButton: false,
      })
    }
  }

  // Free shiiping modal above 5kg orders
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
          'משלוח ללא עלות בהזמנה של מעל <b>5 קילו</b>. ' +
          '<br> ' +
          '<small>ניתן לשלב בין סוגי התמרים!</small>',
        cancelButtonText: 'חזרה להזמנה',
        showCancelButton: true,
        showConfirmButton: false,
      })
    }, 3000);
  }

  // Adding dates to calculate price.
  plus(id) {
    if (id == 1)
      this.obj.dryDate++;
    if (id == 2)
      this.obj.juicyDate++;

    this.totalQnt = this.obj.dryDate + this.obj.juicyDate;
    this.calcPrice();
  }

    // deleting dates to calculate price.
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

  // privacy policy checkbox agreement
  checkedPP = () => {
    this.isClientAgreed = ($('#ppCheckbox').is(':checked'));
    console.log(this.isClientAgreed);
  }


  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

}
