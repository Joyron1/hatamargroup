import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/contact.model';
import { ApiService } from 'src/app/services/api.service';
import { faEnvelope, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus-form',
  templateUrl: './contactus-form.component.html',
  styleUrls: ['./contactus-form.component.scss']
})
export class ContactusFormComponent implements OnInit {

  lat = 32.048179;
  lng = 35.453320;
  public marker: any = {
    position: {
      lat: this.lat,
      lng: this.lng
    },
    label: {
      color: 'red',
    },
    options: { animation: google.maps.Animation.BOUNCE, },
  }
  center: google.maps.LatLngLiteral;

  public width = window.innerWidth;
  call = faPhone;
  gmail = 'mailto:yohay@hatamargroup.com';
  facebook = 'https://www.facebook.com/hatamar1';
  // whatsapp = 'https://api.whatsapp.com/send?phone=972509175030&text=%D7%90%D7%94%D7%9C%D7%9F%20,%20%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A6%D7%A2%20%D7%94%D7%96%D7%9E%D7%A0%D7%94%20%D7%A9%D7%9C%20%D7%94%D7%AA%D7%9E%D7%A8%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9B%D7%9D';

  public obj: Contact = {
    fullName: "",
    phone: "",
    email: "",
    how: "",
    msg: ""
  }

  fullNameMSG: string;
  phoneMSG: string;
  emailMSG: string;
  msgMSG: string;
  messageSentMSG: string;
  msgSent: boolean;

  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: this.lat,
        lng: this.lng,
      }
    });
  }

  onSubmit = () => {
    if (this.obj.fullName && this.obj.phone && this.obj.email && this.obj.msg) {
      if (this.obj.fullName.length >= 4 && this.obj.phone.length === 10 && this.api.validatePhone(this.obj.phone) && this.api.validateEmail(this.obj.email) && this.obj.msg != null) {
        this.fullNameMSG = ""; this.phoneMSG = ""; this.emailMSG = ""; this.msgMSG = "";
        // console.log("order obj:", this.obj);
        this.api.insertContact(this.obj);
        // console.log("MESSAGE IS FINE");
        this.msgSent = true;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'תודה שהשארתם לנו הודעה!',
          text: 'נציג מטעמנו יצור עמכם קשר בקרוב!',
          footer: 'הנך מועבר לעמוד הבית',
          showConfirmButton: false,
          timer: 3500
        })
        setInterval(function () { window.location.pathname = "/"; }, 3500);
      }
    }
    else {
      this.validateForm();
    }
  }

  validateForm() {
    // FULL NAME VALIDATION
    if (this.obj.fullName) {
      this.api.validateName(this.obj.fullName);
      if (4 > this.obj.fullName.length) {
        this.fullNameMSG = "* על השם המלא להכיל 4 אותיות ומעלה.";
        // document.getElementById('fullName-label').style.color = "rgb(243, 65, 65)";
        document.getElementById('fullName').style.border = "1px solid rgb(243, 65, 65)";
      }
      else if (this.api.nameWithNum === true) {
        this.fullNameMSG = "* על השם להכיל אותיות בלבד.";
        document.getElementById('firstName-label').style.color = "rgb(243, 65, 65)";
      }
      else {
        this.fullNameMSG = "";
        document.getElementById('fullName').style.color = "rgb(53, 187, 0)";
        document.getElementById('fullName').style.border = "1px solid rgb(53, 187, 0)";
      }
    }
    else {
      this.fullNameMSG = "* חובה למלא שם פרטי.";
      // document.getElementById('fullName-label').style.color = "rgb(243, 65, 65)";
      document.getElementById('fullName').style.border = "1px solid rgb(243, 65, 65)";
    }

    // PHONE NUMBER VALIDATION
    if (this.obj.phone) {
      if (this.obj.phone.length === 10 && this.api.validatePhone(this.obj.phone)) {
        this.phoneMSG = "";
        document.getElementById('phone').style.color = "black";
        document.getElementById('phone').style.border = "1px solid rgb(53, 187, 0)";
      }
      else {
        this.phoneMSG = "* מספר נייד לא תקין.";
        document.getElementById('phone').style.color = "rgb(243, 65, 65)";
        document.getElementById('phone').style.border = "1px solid rgb(243, 65, 65)";
      }

    }
    else {
      this.phoneMSG = "* חובה למלא מספר נייד.";
      // document.getElementById('phone').style.color = "rgb(243, 65, 65)";
      document.getElementById('phone').style.border = "1px solid rgb(243, 65, 65)";
    }

    // EMAIL VALIDATION
    if (this.obj.email) {
      if (this.api.validateEmail(this.obj.email)) {
        this.emailMSG = "";
        document.getElementById('email').style.color = "black";
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

    // MSG VALIDATION
    if (this.obj.msg) {
      this.msgMSG = "";
      document.getElementById('message').style.color = "black";
      document.getElementById('message').style.border = "1px solid rgb(53, 187, 0)";
    }
    else {
      this.msgMSG = "* ההודעה אינה יכולה להישאר ריקה.";
      // document.getElementById('message').style.color = "rgb(243, 65, 65)";
      document.getElementById('message').style.border = "1px solid rgb(243, 65, 65)";
    }


    if (this.obj.how) {
      document.getElementById('how').style.color = "black";
      document.getElementById('how').style.border = "1px solid rgb(53, 187, 0)";
    }
  }

}
