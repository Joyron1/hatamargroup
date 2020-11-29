(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jron8\Desktop\Work\Code\hatamar-group\src\main.ts */"zUnb");


/***/ }),

/***/ "4PXq":
/*!***************************************************************!*\
  !*** ./src/app/components/home-about/home-about.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAboutComponent", function() { return HomeAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_reviews_home_reviews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-reviews/home-reviews.component */ "DAHP");





class HomeAboutComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
    }
}
HomeAboutComponent.ɵfac = function HomeAboutComponent_Factory(t) { return new (t || HomeAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
HomeAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeAboutComponent, selectors: [["app-home-about"]], decls: 28, vars: 0, consts: [[1, "row", "no-gutters", "about"], [1, "col-12", "about-text"], ["id", "header"], ["id", "text"], ["routerLink", "/contactus", 1, "btn", "contact-btn"], [1, "col-12", "my-5"]], template: function HomeAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5 ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05D4\u05EA\u05DE\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u05D4\u05D5\u05E7\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E9\u05E0\u05D9 \u05D7\u05D1\u05E8\u05D9 \u05D9\u05DC\u05D3\u05D5\u05EA, \u05D1\u05E0\u05D9\u05DD \u05DC\u05DE\u05E9\u05E4\u05D7\u05D5\u05EA \u05D7\u05E7\u05DC\u05D0\u05D9\u05DD \u05DE\u05D1\u05E7\u05E2\u05EA \u05D4\u05D9\u05E8\u05D3\u05DF \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05E9\u05DC\u05D1 \u05D0\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05E2\u05E1\u05E7\u05D9\u05EA \u05E9\u05DC \u05DE\u05E9\u05E7\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u05D4\u05E8\u05E2\u05D9\u05D5\u05DF \u05D4\u05D7\u05DC \u05DB\u05D0\u05E9\u05E8 \u05D9\u05D5\u05D7\u05D0\u05D9 \u05D5\u05D0\u05D5\u05E4\u05D9\u05E8 \u05D4\u05DE\u05E7\u05D9\u05DE\u05D9\u05DD, \u05D6\u05D9\u05D4\u05D5 \u05D0\u05EA \u05D4\u05E4\u05D2\u05D9\u05E2\u05D4 \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05D2\u05E8\u05DE\u05D4 \u05DE\u05D2\u05E4\u05EA \u05D4\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05D1\u05DB\u05DC\u05DC \u05D5\u05D1\u05E4\u05E8\u05D8, \u05D1\u05D9\u05D9\u05E6\u05D5\u05D0 \u05D4\u05EA\u05DE\u05E8\u05D9\u05DD \u05DC\u05D7\u05D5\u05E5 \u05DC\u05D0\u05E8\u05E5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u05DE\u05EA\u05D5\u05DA \u05D3\u05D0\u05D2\u05D4 \u05E8\u05D1\u05D4 \u05DC\u05E2\u05EA\u05D9\u05D3 \u05D4\u05DE\u05E9\u05E7\u05D9\u05DD \u05D5\u05E8\u05E6\u05D5\u05DF \u05DC\u05D4\u05E7\u05D8\u05D9\u05DF \u05D0\u05EA \u05D7\u05D5\u05E1\u05E8 \u05D4\u05D5\u05D5\u05D3\u05D0\u05D5\u05EA, \u05D4\u05DD \u05D4\u05D7\u05DC\u05D5 \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05D3\u05E8\u05DB\u05D9\u05DD \u05D5\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05DC\u05DE\u05DB\u05D5\u05E8 \u05D9\u05D7\u05D3 \u05D0\u05EA \u05D4\u05EA\u05DE\u05E8\u05D9\u05DD \u05D1\u05D0\u05E8\u05E5 \u05DE\u05D4\u05DE\u05E9\u05E7 \u05D4\u05D7\u05E7\u05DC\u05D0\u05D9 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u05DE\u05D8\u05E8\u05EA \u05D4\u05EA\u05DE\u05E8 \u05D4\u05D9\u05D0 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D9\u05EA \u05DC\u05DB\u05DC \u05E6\u05E8\u05DB\u05DF \u05EA\u05DE\u05E8\u05D9\u05DD \u05D5\u05DC\u05E1\u05E4\u05E7 \u05DC\u05D5 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8 \u05D4\u05D8\u05D5\u05D1, \u05D4\u05D8\u05E2\u05D9\u05DD \u05D5\u05D4\u05E2\u05E1\u05D9\u05E1\u05D9 \u05D1\u05D9\u05D5\u05EA\u05E8!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u05D0\u05E0\u05D7\u05E0\u05D5, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05D1\u05EA\u05DE\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E1\u05E4\u05E7 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05EA\u05DE\u05E8\u05D9\u05DD \u05D4\u05DE\u05D5\u05D1\u05D7\u05E8\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05D9\u05D5\u05DF \u05E7\u05E4\u05D3\u05E0\u05D9 \u05D5\u05E0\u05D1\u05D7\u05E8\u05D9\u05DD \u05D1\u05D1\u05E7\u05E8\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05DE\u05D0\u05D5\u05D3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05D0\u05DE\u05D9\u05E0\u05D9\u05DD \u05D1\u05EA\u05D5\u05D3\u05E2\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D5\u05E7\u05E9\u05E8 \u05EA\u05DE\u05D9\u05D3\u05D9 \u05E2\u05DD \u05D4\u05DC\u05E7\u05D5\u05D7.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u05E0\u05DE\u05E6\u05D0\u05D9\u05DD \u05DB\u05D0\u05DF \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA\u05DB\u05DD \u05EA\u05DE\u05D9\u05D3 \u05D5\u05E0\u05E9\u05DE\u05D7 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D0\u05EA\u05DB\u05DD \u05D1\u05E7\u05E9\u05E8!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u05E9\u05DC\u05D7\u05D5 \u05DC\u05E0\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-home-reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _home_reviews_home_reviews_component__WEBPACK_IMPORTED_MODULE_3__["HomeReviewsComponent"]], styles: [".about[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  padding: 40px 0px;\n}\n.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  font-size: 20px;\n  letter-spacing: 1px;\n  line-height: 35px;\n  font-weight: 600;\n}\n.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n  background-color: white;\n  color: black;\n  border-radius: 25px;\n  width: 150px;\n}\n.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #af8454;\n  color: white;\n  border: 1px solid white;\n}\n@media (max-width: 420px) {\n  .about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n  .about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-size: 15px;\n    letter-spacing: 0px;\n  }\n  .about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%] {\n    background-color: #af8454;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUtYWJvdXQvaG9tZS1hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFFSSx1QkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVaO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNaO0FBQVk7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFFZDtBQUlBO0VBR1k7SUFDSSxlQUFBO0VBSGQ7RUFLVTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFIZDtFQUtVO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0VBSGQ7QUFDRiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ob21lLWFib3V0L2hvbWUtYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcclxuICAgIC5hYm91dC10ZXh0e1xyXG4gICAgICAgIC8vIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICNoZWFkZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RleHR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgLy8gdGV4dC1zaGFkb3c6MXB4IDBweCA1cHggd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LWJ0bntcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY4NDU0O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo0MjBweCl7XHJcbiAgICAuYWJvdXR7XHJcbiAgICAgICAgLmFib3V0LXRleHR7XHJcbiAgICAgICAgICAgICNoZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RleHR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWN0LWJ0bntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjg0NTQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-about',
                templateUrl: './home-about.component.html',
                styleUrls: ['./home-about.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "50+E":
/*!************************************************!*\
  !*** ./src/app/pages/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function OrderComponent_div_29_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r10.name);
} }
function OrderComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderComponent_div_29_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.obj.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrderComponent_div_29_option_4_Template, 2, 1, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.obj.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.cities);
} }
function OrderComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderComponent_div_30_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.obj.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.obj.city);
} }
function OrderComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrderComponent_hr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function OrderComponent_td_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u05DC\u05DC\u05D0 \u05E2\u05DC\u05D5\u05EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrderComponent_td_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "20 \u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrderComponent_td_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "....");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrderComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.dates[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class OrderComponent {
    constructor(route, api) {
        this.route = route;
        this.api = api;
        this.width = window.innerWidth;
        this.obj = {
            firstName: "",
            lastName: "",
            phone: "",
            city: "",
            fullAddress: "",
            product: "",
            qnt: null,
            totalPrice: null
        };
        this.cities = [
            // {
            //   "semel_yeshuv": "0",
            //   "name": "בחר עיר מגורים...",
            // },
            {
                "semel_yeshuv": "472",
                "name": "אבו גוש",
                "english_name": "ABU GHOSH",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "473",
                "name": "אבו סנאן",
                "english_name": "ABU SINAN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1375",
                "name": "אבו תלול",
                "english_name": "ABU TULUL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "68",
                "shem_moaatza": "נווה מדבר"
            },
            {
                "semel_yeshuv": "652",
                "name": "אבטין",
                "english_name": "IBTIN",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "1275",
                "name": "אבטליון",
                "english_name": "AVTALYON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "679",
                "name": "אביאל",
                "english_name": "AVI'EL",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "45",
                "shem_moaatza": "אלונה"
            },
            {
                "semel_yeshuv": "1115",
                "name": "אביבים",
                "english_name": "AVIVIM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "819",
                "name": "אביגדור",
                "english_name": "AVIGEDOR",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "175",
                "name": "אביחיל",
                "english_name": "AVIHAYIL",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "2052",
                "name": "אביטל",
                "english_name": "AVITAL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "1070",
                "name": "אביעזר",
                "english_name": "AVI'EZER",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1220",
                "name": "אבירים",
                "english_name": "ABBIRIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "182",
                "name": "אבן יהודה",
                "english_name": "EVEN YEHUDA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1081",
                "name": "אבן מנחם",
                "english_name": "EVEN MENAHEM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "783",
                "name": "אבן ספיר",
                "english_name": "EVEN SAPPIR",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "400",
                "name": "אבן שמואל",
                "english_name": "EVEN SHEMU'EL",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "4011",
                "name": "אבני איתן",
                "english_name": "AVNE ETAN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "3793",
                "name": "אבני חפץ",
                "english_name": "AVNE HEFEZ",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "3786",
                "name": "אבנת",
                "english_name": "AVENAT",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "74",
                "shem_moaatza": "מגילות ים המלח"
            },
            {
                "semel_yeshuv": "1311",
                "name": "אבשלום",
                "english_name": "AVSHALOM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "3759",
                "name": "אדורה",
                "english_name": "ADORA",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "113",
                "name": "אדירים",
                "english_name": "ADDIRIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "1068",
                "name": "אדמית",
                "english_name": "ADAMIT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1123",
                "name": "אדרת",
                "english_name": "ADDERET",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "446",
                "name": "אודים",
                "english_name": "UDIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "4010",
                "name": "אודם",
                "english_name": "ODEM",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1046",
                "name": "אוהד",
                "english_name": "OHAD",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "2710",
                "name": "אום אל-פחם",
                "english_name": "UMM AL-FAHM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2024",
                "name": "אום אל-קוטוף",
                "english_name": "UMM AL-QUTUF",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "1358",
                "name": "אום בטין",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "69",
                "shem_moaatza": "אל קסום"
            },
            {
                "semel_yeshuv": "1108",
                "name": "אומן",
                "english_name": "OMEN",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "680",
                "name": "אומץ",
                "english_name": "OMEZ",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "31",
                "name": "אופקים",
                "english_name": "OFAQIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1294",
                "name": "אור הגנוז",
                "english_name": "OR HAGANUZ",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "67",
                "name": "אור הנר",
                "english_name": "OR HANER",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "2400",
                "name": "אור יהודה",
                "english_name": "OR YEHUDA",
                "semel_napa": "52",
                "shem_napa": "רמת גן",
                "semel_lishkat_mana": "52",
                "lishka": "רמת גן",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1020",
                "name": "אור עקיבא",
                "english_name": "OR AQIVA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "780",
                "name": "אורה",
                "english_name": "ORA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "2012",
                "name": "אורות",
                "english_name": "OROT",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "4013",
                "name": "אורטל",
                "english_name": "ORTAL",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "403",
                "name": "אורים",
                "english_name": "URIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "882",
                "name": "אורנים",
                "english_name": "ORANIM",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "3760",
                "name": "אורנית",
                "english_name": "ORANIT",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "278",
                "name": "אושה",
                "english_name": "USHA",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "565",
                "name": "אזור",
                "english_name": "AZOR",
                "semel_napa": "53",
                "shem_napa": "חולון",
                "semel_lishkat_mana": "53",
                "lishka": "חולון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1157",
                "name": "אחווה",
                "english_name": "AHAWA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "821",
                "name": "אחוזם",
                "english_name": "AHUZZAM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "1330",
                "name": "אחוזת ברק",
                "english_name": "",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "785",
                "name": "אחיהוד",
                "english_name": "AHIHUD",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "850",
                "name": "אחיטוב",
                "english_name": "AHITUV",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "804",
                "name": "אחיסמך",
                "english_name": "AHISAMAKH",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "797",
                "name": "אחיעזר",
                "english_name": "AHI'EZER",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "338",
                "name": "איבים",
                "english_name": "IBBIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "716",
                "name": "אייל",
                "english_name": "EYAL",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "77",
                "name": "איילת השחר",
                "english_name": "AYYELET HASHAHAR",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "294",
                "name": "אילון",
                "english_name": "ELON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1126",
                "name": "אילות",
                "english_name": "ELOT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "49",
                "name": "אילניה",
                "english_name": "ILANIYYA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "2600",
                "name": "אילת",
                "english_name": "ELAT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1336",
                "name": "אירוס",
                "english_name": "IRUS",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "3762",
                "name": "איתמר",
                "english_name": "ITAMAR",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "37",
                "name": "איתן",
                "english_name": "ETAN",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "886",
                "name": "איתנים",
                "english_name": "ETANIM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "478",
                "name": "אכסאל",
                "english_name": "IKSAL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1359",
                "name": "אל סייד",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "69",
                "shem_moaatza": "אל קסום"
            },
            {
                "semel_yeshuv": "1339",
                "name": "אל-עזי",
                "english_name": "",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "1316",
                "name": "אל-עריאן",
                "english_name": "AL-ARYAN",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "4003",
                "name": "אל-רום",
                "english_name": "EL-ROM",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1145",
                "name": "אלומה",
                "english_name": "ALUMMA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "330",
                "name": "אלומות",
                "english_name": "ALUMMOT",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1182",
                "name": "אלון הגליל",
                "english_name": "ALLON HAGALIL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "3579",
                "name": "אלון מורה",
                "english_name": "ELON MORE",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "3604",
                "name": "אלון שבות",
                "english_name": "ALLON SHEVUT",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "429",
                "name": "אלוני אבא",
                "english_name": "ALLONE ABBA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "4017",
                "name": "אלוני הבשן",
                "english_name": "ALLONE HABASHAN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "868",
                "name": "אלוני יצחק",
                "english_name": "ALLONE YIZHAQ",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "285",
                "name": "אלונים",
                "english_name": "ALLONIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "4002",
                "name": "אלי-עד",
                "english_name": "ELI AL",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1365",
                "name": "אליאב",
                "english_name": "ELIAV",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "41",
                "name": "אליכין",
                "english_name": "ELYAKHIN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1248",
                "name": "אליפז",
                "english_name": "ELIFAZ",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "730",
                "name": "אליפלט",
                "english_name": "ELIFELET",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "682",
                "name": "אליקים",
                "english_name": "ELYAQIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "204",
                "name": "אלישיב",
                "english_name": "ELYASHIV",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "841",
                "name": "אלישמע",
                "english_name": "ELISHAMA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "1125",
                "name": "אלמגור",
                "english_name": "ALMAGOR",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "3556",
                "name": "אלמוג",
                "english_name": "ALMOG",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "74",
                "shem_moaatza": "מגילות ים המלח"
            },
            {
                "semel_yeshuv": "1309",
                "name": "אלעד",
                "english_name": "",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3618",
                "name": "אלעזר",
                "english_name": "EL'AZAR",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "3750",
                "name": "אלפי מנשה",
                "english_name": "ALFE MENASHE",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "603",
                "name": "אלקוש",
                "english_name": "ELQOSH",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "3560",
                "name": "אלקנה",
                "english_name": "ELQANA",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "772",
                "name": "אמונים",
                "english_name": "EMUNIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "1064",
                "name": "אמירים",
                "english_name": "AMIRIM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "1253",
                "name": "אמנון",
                "english_name": "AMNUN",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "23",
                "name": "אמציה",
                "english_name": "AMAZYA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "4012",
                "name": "אניעם",
                "english_name": "ANI'AM",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "3754",
                "name": "אספר",
                "english_name": "ASEFAR",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "529",
                "name": "אעבלין",
                "english_name": "I'BILLIN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "4301",
                "name": "אפיק",
                "english_name": "AFIQ",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "176",
                "name": "אפיקים",
                "english_name": "AFIQIM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "313",
                "name": "אפק",
                "english_name": "AFEQ",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "3650",
                "name": "אפרת",
                "english_name": "EFRAT",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "701",
                "name": "ארבל",
                "english_name": "ARBEL",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "3598",
                "name": "ארגמן",
                "english_name": "ARGAMAN",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "714",
                "name": "ארז",
                "english_name": "EREZ",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "3570",
                "name": "אריאל",
                "english_name": "ARI'EL",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1324",
                "name": "ארסוף",
                "english_name": "ARSUF",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "71",
                "name": "אשבול",
                "english_name": "ESHBOL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "1276",
                "name": "אשבל",
                "english_name": "NAHAL ESHBAL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "70",
                "name": "אשדוד",
                "english_name": "ASHDOD",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "69",
                "lishka": "אשדוד",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "199",
                "name": "אשדות יעקב (איחוד)",
                "english_name": "ASHDOT YA'AQOV(IHUD)",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "188",
                "name": "אשדות יעקב (מאוחד)",
                "english_name": "ASHDOT YA'AQOV(ME'UH",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1188",
                "name": "אשחר",
                "english_name": "ESHHAR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "3722",
                "name": "אשכולות",
                "english_name": "ESHKOLOT",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "2021",
                "name": "אשל הנשיא",
                "english_name": "ESHEL HANASI",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "1152",
                "name": "אשלים",
                "english_name": "ASHALIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "7100",
                "name": "אשקלון",
                "english_name": "ASHQELON",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1256",
                "name": "אשרת",
                "english_name": "ASHERAT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "740",
                "name": "אשתאול",
                "english_name": "ESHTA'OL",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1298",
                "name": "אתגר",
                "english_name": "ETGAR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "6000",
                "name": "באקה אל-גרביה",
                "english_name": "",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "21",
                "name": "באר אורה",
                "english_name": "BE'ER ORA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "1376",
                "name": "באר גנים",
                "english_name": "BEER GANNIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "155",
                "name": "באר טוביה",
                "english_name": "BE'ER TUVEYA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "2530",
                "name": "באר יעקב",
                "english_name": "BE'ER YA'AQOV",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1278",
                "name": "באר מילכה",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "9000",
                "name": "באר שבע",
                "english_name": "BE'ER SHEVA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "450",
                "name": "בארות יצחק",
                "english_name": "BE'EROT YIZHAQ",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "697",
                "name": "בארותיים",
                "english_name": "BE'EROTAYIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "399",
                "name": "בארי",
                "english_name": "BE'ERI",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "559",
                "name": "בוסתן הגליל",
                "english_name": "BUSTAN HAGALIL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "482",
                "name": "בועיינה-נוג'ידאת",
                "english_name": "BU'EINE-NUJEIDAT",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "4001",
                "name": "בוקעאתא",
                "english_name": "BUQ'ATA",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "698",
                "name": "בורגתה",
                "english_name": "BURGETA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "2043",
                "name": "בחן",
                "english_name": "BAHAN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "762",
                "name": "בטחה",
                "english_name": "BITHA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "234",
                "name": "ביצרון",
                "english_name": "BIZZARON",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "998",
                "name": "ביר אל-מכסור",
                "english_name": "BIR EL-MAKSUR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1348",
                "name": "ביר הדאג'",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "68",
                "shem_moaatza": "נווה מדבר"
            },
            {
                "semel_yeshuv": "368",
                "name": "ביריה",
                "english_name": "BIRIYYA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "317",
                "name": "בית אורן",
                "english_name": "BET OREN",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "3574",
                "name": "בית אל",
                "english_name": "BET EL",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "562",
                "name": "בית אלעזרי",
                "english_name": "BET EL'AZARI",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "28",
                "shem_moaatza": "ברנר"
            },
            {
                "semel_yeshuv": "95",
                "name": "בית אלפא",
                "english_name": "BET ALFA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "3652",
                "name": "בית אריה",
                "english_name": "BET ARYE",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1076",
                "name": "בית ברל",
                "english_name": "BET BERL",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "480",
                "name": "בית ג'ן",
                "english_name": "BEIT JANN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "619",
                "name": "בית גוברין",
                "english_name": "BET GUVRIN",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "571",
                "name": "בית גמליאל",
                "english_name": "BET GAMLI'EL",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "466",
                "name": "בית דגן",
                "english_name": "BET DAGAN",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "723",
                "name": "בית הגדי",
                "english_name": "BET HAGADDI",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "373",
                "name": "בית הלוי",
                "english_name": "BET HALEVI",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "322",
                "name": "בית הלל",
                "english_name": "BET HILLEL",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "572",
                "name": "בית העמק",
                "english_name": "BET HAEMEQ",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "3645",
                "name": "בית הערבה",
                "english_name": "BET HAARAVA",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "74",
                "shem_moaatza": "מגילות ים המלח"
            },
            {
                "semel_yeshuv": "242",
                "name": "בית השיטה",
                "english_name": "BET HASHITTA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "353",
                "name": "בית זיד",
                "english_name": "BET ZEID",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "710",
                "name": "בית זית",
                "english_name": "BET ZAYIT",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "143",
                "name": "בית זרע",
                "english_name": "BET ZERA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "3575",
                "name": "בית חורון",
                "english_name": "BET HORON",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "877",
                "name": "בית חירות",
                "english_name": "BET HERUT",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "2033",
                "name": "בית חלקיה",
                "english_name": "BET HILQIYYA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "31",
                "shem_moaatza": "נחל שורק"
            },
            {
                "semel_yeshuv": "159",
                "name": "בית חנן",
                "english_name": "BET HANAN",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "800",
                "name": "בית חנניה",
                "english_name": "BET HANANYA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "1050",
                "name": "בית חשמונאי",
                "english_name": "BET HASHMONAY",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "288",
                "name": "בית יהושע",
                "english_name": "BET YEHOSHUA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "265",
                "name": "בית יוסף",
                "english_name": "BET YOSEF",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "200",
                "name": "בית ינאי",
                "english_name": "BET YANNAY",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "326",
                "name": "בית יצחק-שער חפר",
                "english_name": "BET YIZHAQ-SH. HEFER",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "430",
                "name": "בית לחם הגלילית",
                "english_name": "BET LEHEM HAGELILIT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "751",
                "name": "בית מאיר",
                "english_name": "BET ME'IR",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "784",
                "name": "בית נחמיה",
                "english_name": "BET NEHEMYA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "16",
                "name": "בית ניר",
                "english_name": "BET NIR",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "672",
                "name": "בית נקופה",
                "english_name": "BET NEQOFA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "202",
                "name": "בית עובד",
                "english_name": "BET OVED",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "301",
                "name": "בית עוזיאל",
                "english_name": "BET UZZI'EL",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "756",
                "name": "בית עזרא",
                "english_name": "BET EZRA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "604",
                "name": "בית עריף",
                "english_name": "BET ARIF",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "212",
                "name": "בית צבי",
                "english_name": "BET ZEVI",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "598",
                "name": "בית קמה",
                "english_name": "BET QAMA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "365",
                "name": "בית קשת",
                "english_name": "BET QESHET",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "848",
                "name": "בית רבן",
                "english_name": "BET RABBAN",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "1162",
                "name": "בית רימון",
                "english_name": "BET RIMMON",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "9200",
                "name": "בית שאן",
                "english_name": "BET SHE'AN",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2610",
                "name": "בית שמש",
                "english_name": "BET SHEMESH",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "248",
                "name": "בית שערים",
                "english_name": "BET SHE'ARIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "747",
                "name": "בית שקמה",
                "english_name": "BET SHIQMA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "252",
                "name": "ביתן אהרן",
                "english_name": "BITAN AHARON",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "3780",
                "name": "ביתר עילית",
                "english_name": "BETAR ILLIT",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "94",
                "name": "בלפוריה",
                "english_name": "BALFURIYYA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "760",
                "name": "בן זכאי",
                "english_name": "BEN ZAKKAY",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "712",
                "name": "בן עמי",
                "english_name": "BEN AMMI",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1084",
                "name": "בן שמן (כפר נוער)",
                "english_name": "BEN SHEMEN(K.NO'AR)",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "2013",
                "name": "בן שמן (מושב)",
                "english_name": "BEN SHEMEN (MOSHAV)",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "6100",
                "name": "בני ברק",
                "english_name": "BENE BERAQ",
                "semel_napa": "52",
                "shem_napa": "רמת גן",
                "semel_lishkat_mana": "54",
                "lishka": "בני ברק",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1368",
                "name": "בני דקלים",
                "english_name": "BNE DKALIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "592",
                "name": "בני דרום",
                "english_name": "BENE DAROM",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "386",
                "name": "בני דרור",
                "english_name": "BENE DEROR",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "4015",
                "name": "בני יהודה",
                "english_name": "BENE YEHUDA",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1363",
                "name": "בני נצרים",
                "english_name": "BENE NEZARIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "448",
                "name": "בני עטרות",
                "english_name": "BENE ATAROT",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1066",
                "name": "בני עי\"ש",
                "english_name": "BENE AYISH",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "418",
                "name": "בני ציון",
                "english_name": "BENE ZIYYON",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "588",
                "name": "בני ראם",
                "english_name": "BENE RE'EM",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "31",
                "shem_moaatza": "נחל שורק"
            },
            {
                "semel_yeshuv": "685",
                "name": "בניה",
                "english_name": "BENAYA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "28",
                "shem_moaatza": "ברנר"
            },
            {
                "semel_yeshuv": "9800",
                "name": "בנימינה-גבעת עדה",
                "english_name": "BINYAMINA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1326",
                "name": "בסמ\"ה",
                "english_name": "BASMA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "944",
                "name": "בסמת טבעון",
                "english_name": "BASMAT TAB'UN",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "483",
                "name": "בענה",
                "english_name": "BI NE",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "389",
                "name": "בצרה",
                "english_name": "BAZRA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "589",
                "name": "בצת",
                "english_name": "BEZET",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "864",
                "name": "בקוע",
                "english_name": "BEQOA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "3612",
                "name": "בקעות",
                "english_name": "BEQA'OT",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "823",
                "name": "בר גיורא",
                "english_name": "BAR GIYYORA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1191",
                "name": "בר יוחאי",
                "english_name": "BAR YOHAY",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "3744",
                "name": "ברוכין",
                "english_name": "BRUKHIN",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "428",
                "name": "ברור חיל",
                "english_name": "BEROR HAYIL",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "2060",
                "name": "ברוש",
                "english_name": "BEROSH",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "3710",
                "name": "ברכה",
                "english_name": "BERAKHA",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "746",
                "name": "ברכיה",
                "english_name": "BEREKHYA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "667",
                "name": "ברעם",
                "english_name": "BAR'AM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "141",
                "name": "ברק",
                "english_name": "BARAQ",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "617",
                "name": "ברקאי",
                "english_name": "BARQAY",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "3654",
                "name": "ברקן",
                "english_name": "BARQAN",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "2038",
                "name": "ברקת",
                "english_name": "BAREQET",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1323",
                "name": "בת הדר",
                "english_name": "BAT HADAR",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1361",
                "name": "בת חן",
                "english_name": "BAT HEN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1319",
                "name": "בת חפר",
                "english_name": "BAT HEFER",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1401",
                "name": "בת חצור",
                "english_name": "BAT HAZOR",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "6200",
                "name": "בת ים",
                "english_name": "BAT YAM",
                "semel_napa": "53",
                "shem_napa": "חולון",
                "semel_lishkat_mana": "53",
                "lishka": "חולון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3794",
                "name": "בת עין",
                "english_name": "BAT AYIN",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "33",
                "name": "בת שלמה",
                "english_name": "BAT SHELOMO",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "1292",
                "name": "ג'דיידה-מכר",
                "english_name": "JUDEIDE-MAKER",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "485",
                "name": "ג'ולס",
                "english_name": "JULIS",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "627",
                "name": "ג'לג'וליה",
                "english_name": "JALJULYE",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "541",
                "name": "ג'סר א-זרקא",
                "english_name": "JISR AZ-ZARQA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "487",
                "name": "ג'ש (גוש חלב)",
                "english_name": "JISH(GUSH HALAV)",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "628",
                "name": "ג'ת",
                "english_name": "JAAT",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "872",
                "name": "גאולי תימן",
                "english_name": "GE'ULE TEMAN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "379",
                "name": "גאולים",
                "english_name": "GE'ULIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "853",
                "name": "גאליה",
                "english_name": "GE'ALYA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "352",
                "name": "גבולות",
                "english_name": "GEVULOT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "424",
                "name": "גבים",
                "english_name": "GEVIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "86",
                "name": "גבע",
                "english_name": "GEVA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "3763",
                "name": "גבע בנימין",
                "english_name": "GEVA BINYAMIN",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "683",
                "name": "גבע כרמל",
                "english_name": "GEVA  KARMEL",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "2014",
                "name": "גבעולים",
                "english_name": "GIV'OLIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "3644",
                "name": "גבעון החדשה",
                "english_name": "GIV'ON HAHADASHA",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "1344",
                "name": "גבעות בר",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "1293",
                "name": "גבעת אבני",
                "english_name": "GIV'AT AVNI",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "1288",
                "name": "גבעת אלה",
                "english_name": "GIV'AT ELA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "147",
                "name": "גבעת ברנר",
                "english_name": "GIV'AT BRENNER",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "28",
                "shem_moaatza": "ברנר"
            },
            {
                "semel_yeshuv": "870",
                "name": "גבעת השלושה",
                "english_name": "GIV'AT HASHELOSHA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "3730",
                "name": "גבעת זאב",
                "english_name": "GIV'AT ZE'EV",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "207",
                "name": "גבעת ח\"ן",
                "english_name": "GIV'AT HEN",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "2018",
                "name": "גבעת חיים (איחוד)",
                "english_name": "GIV'AT HAYYIM (IHUD)",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "173",
                "name": "גבעת חיים (מאוחד)",
                "english_name": "GIV'AT HAYYIM(ME'UHA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "4021",
                "name": "גבעת יואב",
                "english_name": "GIV'AT YO'AV",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "787",
                "name": "גבעת יערים",
                "english_name": "GIV'AT YE'ARIM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "919",
                "name": "גבעת ישעיהו",
                "english_name": "GIV'AT YESHA'YAHU",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "802",
                "name": "גבעת כ\"ח",
                "english_name": "GIV'AT KOAH",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "360",
                "name": "גבעת ניל\"י",
                "english_name": "GIV'AT NILI",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "45",
                "shem_moaatza": "אלונה"
            },
            {
                "semel_yeshuv": "703",
                "name": "גבעת עוז",
                "english_name": "GIV'AT OZ",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "681",
                "name": "גבעת שמואל",
                "english_name": "GIV'AT SHEMU'EL",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "566",
                "name": "גבעת שמש",
                "english_name": "GIV'AT SHEMESH",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1077",
                "name": "גבעת שפירא",
                "english_name": "GIV'AT SHAPPIRA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "793",
                "name": "גבעתי",
                "english_name": "GIV'ATI",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "6300",
                "name": "גבעתיים",
                "english_name": "GIV'ATAYIM",
                "semel_napa": "52",
                "shem_napa": "רמת גן",
                "semel_lishkat_mana": "52",
                "lishka": "רמת גן",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "342",
                "name": "גברעם",
                "english_name": "GEVAR'AM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "133",
                "name": "גבת",
                "english_name": "GEVAT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "35",
                "name": "גדות",
                "english_name": "GADOT",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "145",
                "name": "גדיש",
                "english_name": "GADISH",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "442",
                "name": "גדעונה",
                "english_name": "GID'ONA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "2550",
                "name": "גדרה",
                "english_name": "GEDERA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "852",
                "name": "גונן",
                "english_name": "GONEN",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "755",
                "name": "גורן",
                "english_name": "GOREN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "1219",
                "name": "גורנות הגליל",
                "english_name": "GORNOT HAGALIL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "457",
                "name": "גזית",
                "english_name": "GAZIT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "370",
                "name": "גזר",
                "english_name": "GEZER",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "706",
                "name": "גיאה",
                "english_name": "GE'A",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "196",
                "name": "גיבתון",
                "english_name": "GIBBETON",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "28",
                "shem_moaatza": "ברנר"
            },
            {
                "semel_yeshuv": "1043",
                "name": "גיזו",
                "english_name": "GIZO",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1204",
                "name": "גילון",
                "english_name": "GILON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "736",
                "name": "גילת",
                "english_name": "GILAT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "262",
                "name": "גינוסר",
                "english_name": "GINNOSAR",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "92",
                "name": "גיניגר",
                "english_name": "GINNEGAR",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "863",
                "name": "גינתון",
                "english_name": "GINNATON",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1206",
                "name": "גיתה",
                "english_name": "GITTA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "3613",
                "name": "גיתית",
                "english_name": "GITTIT",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "393",
                "name": "גלאון",
                "english_name": "GAL'ON",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "3606",
                "name": "גלגל",
                "english_name": "GILGAL",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "346",
                "name": "גליל ים",
                "english_name": "GELIL YAM",
                "semel_napa": "51",
                "shem_napa": "תל אביב",
                "semel_lishkat_mana": "57",
                "lishka": "הרצליה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "369",
                "name": "אבן יצחק (גלעד)",
                "english_name": "EVEN YIZHAQ(GAL'ED)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "745",
                "name": "גמזו",
                "english_name": "GIMZO",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1072",
                "name": "גן הדרום",
                "english_name": "GAN HADAROM",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "32",
                "shem_moaatza": "גדרות"
            },
            {
                "semel_yeshuv": "225",
                "name": "גן השומרון",
                "english_name": "GAN HASHOMERON",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "239",
                "name": "גן חיים",
                "english_name": "GAN HAYYIM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "734",
                "name": "גן יאשיה",
                "english_name": "GAN YOSHIYYA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "166",
                "name": "גן יבנה",
                "english_name": "GAN YAVNE",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1274",
                "name": "גן נר",
                "english_name": "GAN NER",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "311",
                "name": "גן שורק",
                "english_name": "GAN SOREQ",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "144",
                "name": "גן שלמה",
                "english_name": "GAN SHELOMO",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "28",
                "shem_moaatza": "ברנר"
            },
            {
                "semel_yeshuv": "72",
                "name": "גן שמואל",
                "english_name": "GAN SHEMU'EL",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "836",
                "name": "גנות",
                "english_name": "GANNOT",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "549",
                "name": "גנות הדר",
                "english_name": "GANNOT HADAR",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "1103",
                "name": "גני הדר",
                "english_name": "GANNE HADAR",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "1371",
                "name": "גני טל",
                "english_name": "",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "31",
                "shem_moaatza": "נחל שורק"
            },
            {
                "semel_yeshuv": "862",
                "name": "גני יוחנן",
                "english_name": "GANNE YOHANAN",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "3823",
                "name": "גני מודיעין",
                "english_name": "GANNE MODIIN",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "218",
                "name": "גני עם",
                "english_name": "GANNE AM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "229",
                "name": "גני תקווה",
                "english_name": "GANNE TIQWA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "842",
                "name": "געש",
                "english_name": "GA'ASH",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "463",
                "name": "געתון",
                "english_name": "GA'TON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "39",
                "name": "גפן",
                "english_name": "GEFEN",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1129",
                "name": "גרופית",
                "english_name": "GEROFIT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "4022",
                "name": "גשור",
                "english_name": "GESHUR",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "305",
                "name": "גשר",
                "english_name": "GESHER",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "574",
                "name": "גשר הזיו",
                "english_name": "GESHER HAZIW",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "340",
                "name": "גת (קיבוץ)",
                "english_name": "GAT(QIBBUZ)",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "128",
                "name": "גת רימון",
                "english_name": "GAT RIMMON",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "494",
                "name": "דאלית אל-כרמל",
                "english_name": "DALIYAT AL-KARMEL",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "146",
                "name": "דבורה",
                "english_name": "DEVORA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "489",
                "name": "דבוריה",
                "english_name": "DABBURYE",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "849",
                "name": "דבירה",
                "english_name": "DEVIRA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "407",
                "name": "דברת",
                "english_name": "DAVERAT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "62",
                "name": "דגניה א'",
                "english_name": "DEGANYA ALEF",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "79",
                "name": "דגניה ב'",
                "english_name": "DEGANYA BET",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1067",
                "name": "דוב\"ב",
                "english_name": "DOVEV",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "3747",
                "name": "דולב",
                "english_name": "DOLEV",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "738",
                "name": "דור",
                "english_name": "DOR",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "336",
                "name": "דורות",
                "english_name": "DOROT",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "475",
                "name": "דחי",
                "english_name": "DAHI",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "66",
                "shem_moaatza": "בוסתאן אל-מרג'"
            },
            {
                "semel_yeshuv": "490",
                "name": "דייר אל-אסד",
                "english_name": "DEIR AL-ASAD",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "492",
                "name": "דייר חנא",
                "english_name": "DEIR HANNA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "493",
                "name": "דייר ראפאת",
                "english_name": "DEIR RAFAT",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "2200",
                "name": "דימונה",
                "english_name": "DIMONA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2063",
                "name": "דישון",
                "english_name": "DISHON",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "300",
                "name": "דליה",
                "english_name": "DALIYYA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "431",
                "name": "דלתון",
                "english_name": "DALTON",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "1317",
                "name": "דמיידה",
                "english_name": "DEMEIDE",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "303",
                "name": "דן",
                "english_name": "DAN",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "302",
                "name": "דפנה",
                "english_name": "DAFNA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "1241",
                "name": "דקל",
                "english_name": "DEQEL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1349",
                "name": "דריג'את",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "69",
                "shem_moaatza": "אל קסום"
            },
            {
                "semel_yeshuv": "702",
                "name": "האון",
                "english_name": "HAON",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "675",
                "name": "הבונים",
                "english_name": "HABONIM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "356",
                "name": "הגושרים",
                "english_name": "HAGOSHERIM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "191",
                "name": "הדר עם",
                "english_name": "HADAR AM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "9700",
                "name": "הוד השרון",
                "english_name": "HOD HASHARON",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "726",
                "name": "הודיה",
                "english_name": "HODIYYA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1322",
                "name": "הודיות",
                "english_name": "HODAYOT",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "1186",
                "name": "הושעיה",
                "english_name": "HOSHA'AYA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "250",
                "name": "הזורע",
                "english_name": "HAZOREA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "307",
                "name": "הזורעים",
                "english_name": "HAZORE'IM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "434",
                "name": "החותרים",
                "english_name": "HAHOTERIM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "684",
                "name": "היוגב",
                "english_name": "HAYOGEV",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "1208",
                "name": "הילה",
                "english_name": "HILLA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "377",
                "name": "המעפיל",
                "english_name": "HAMA'PIL",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "677",
                "name": "הסוללים",
                "english_name": "HASOLELIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "423",
                "name": "העוגן",
                "english_name": "HAOGEN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "3769",
                "name": "הר אדר",
                "english_name": "HAR ADAR",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3603",
                "name": "הר גילה",
                "english_name": "HAR GILLO",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "1261",
                "name": "הר עמשא",
                "english_name": "HAR AMASA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "51",
                "shem_moaatza": "תמר"
            },
            {
                "semel_yeshuv": "464",
                "name": "הראל",
                "english_name": "HAR'EL",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1249",
                "name": "הרדוף",
                "english_name": "HARDUF",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "6400",
                "name": "הרצליה",
                "english_name": "HERZELIYYA",
                "semel_napa": "51",
                "shem_napa": "תל אביב",
                "semel_lishkat_mana": "57",
                "lishka": "הרצליה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1203",
                "name": "הררית",
                "english_name": "HARARIT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "3639",
                "name": "ורד יריחו",
                "english_name": "WERED YERIHO",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "74",
                "shem_moaatza": "מגילות ים המלח"
            },
            {
                "semel_yeshuv": "1133",
                "name": "ורדון",
                "english_name": "WARDON",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "815",
                "name": "זבדיאל",
                "english_name": "ZAVDI'EL",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "44",
                "name": "זוהר",
                "english_name": "ZOHAR",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "584",
                "name": "זיקים",
                "english_name": "ZIQIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "788",
                "name": "זיתן",
                "english_name": "ZETAN",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "9300",
                "name": "זכרון יעקב",
                "english_name": "ZIKHRON YA'AQOV",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "799",
                "name": "זכריה",
                "english_name": "ZEKHARYA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1290",
                "name": "זמר",
                "english_name": "ZEMER",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1065",
                "name": "זמרת",
                "english_name": "ZIMRAT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "816",
                "name": "זנוח",
                "english_name": "ZANOAH",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "2064",
                "name": "זרועה",
                "english_name": "ZERU'A",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "975",
                "name": "זרזיר",
                "english_name": "ZARZIR",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "818",
                "name": "זרחיה",
                "english_name": "ZERAHYA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "1321",
                "name": "ח'ואלד",
                "english_name": "",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "235",
                "name": "חבצלת השרון",
                "english_name": "HAVAZZELET HASHARON",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1110",
                "name": "חבר",
                "english_name": "HEVER",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "3400",
                "name": "חברון",
                "english_name": "",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "717",
                "name": "חגור",
                "english_name": "HAGOR",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "3764",
                "name": "חגי",
                "english_name": "HAGGAI",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "205",
                "name": "חגלה",
                "english_name": "HOGLA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "4026",
                "name": "חד-נס",
                "english_name": "HAD-NES",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "618",
                "name": "חדיד",
                "english_name": "HADID",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "6500",
                "name": "חדרה",
                "english_name": "HADERA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "948",
                "name": "חוג'ייראת (דהרה)",
                "english_name": "HUJEIRAT (DAHRA)",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "160",
                "name": "חולדה",
                "english_name": "HULDA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "6600",
                "name": "חולון",
                "english_name": "HOLON",
                "semel_napa": "53",
                "shem_napa": "חולון",
                "semel_lishkat_mana": "53",
                "lishka": "חולון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1239",
                "name": "חולית",
                "english_name": "HOLIT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "253",
                "name": "חולתה",
                "english_name": "HULATA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "662",
                "name": "חוסן",
                "english_name": "HOSEN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "1332",
                "name": "חוסנייה",
                "english_name": "HUSSNIYYA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "115",
                "name": "חופית",
                "english_name": "HOFIT",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "374",
                "name": "חוקוק",
                "english_name": "HUQOQ",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1303",
                "name": "חורה",
                "english_name": "HURA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "496",
                "name": "חורפיש",
                "english_name": "HURFEISH",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "355",
                "name": "חורשים",
                "english_name": "HORESHIM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "1047",
                "name": "חזון",
                "english_name": "HAZON",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "219",
                "name": "חיבת ציון",
                "english_name": "HIBBAT ZIYYON",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "3643",
                "name": "חיננית",
                "english_name": "HINNANIT",
                "semel_napa": "71",
                "shem_napa": "ג'נין",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "4000",
                "name": "חיפה",
                "english_name": "HAIFA",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "162",
                "name": "חירות",
                "english_name": "HERUT",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "1272",
                "name": "חלוץ",
                "english_name": "HALUZ",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "3573",
                "name": "חלמיש",
                "english_name": "HALLAMISH",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "820",
                "name": "חלץ",
                "english_name": "HELEZ",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "993",
                "name": "חמאם",
                "english_name": "HAMAM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "65",
                "shem_moaatza": "אל-בטוף"
            },
            {
                "semel_yeshuv": "801",
                "name": "חמד",
                "english_name": "HEMED",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "343",
                "name": "חמדיה",
                "english_name": "HAMADYA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "3646",
                "name": "חמדת",
                "english_name": "NAHAL HEMDAT",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "3609",
                "name": "חמרה",
                "english_name": "HAMRA",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "807",
                "name": "חניאל",
                "english_name": "HANNI'EL",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "280",
                "name": "חניתה",
                "english_name": "HANITA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1257",
                "name": "חנתון",
                "english_name": "HANNATON",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "4005",
                "name": "חספין",
                "english_name": "HASPIN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "363",
                "name": "חפץ חיים",
                "english_name": "HAFEZ HAYYIM",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "31",
                "shem_moaatza": "נחל שורק"
            },
            {
                "semel_yeshuv": "90",
                "name": "חפצי-בה",
                "english_name": "HEFZI-BAH",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "700",
                "name": "חצב",
                "english_name": "HAZAV",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "13",
                "name": "חצבה",
                "english_name": "HAZEVA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "2034",
                "name": "חצור הגלילית",
                "english_name": "HAZOR HAGELILIT",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "406",
                "name": "חצור-אשדוד",
                "english_name": "HAZOR-ASHDOD",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "1409",
                "name": "חצר בארותיים",
                "english_name": "HAZAR BE'EROTAYIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1402",
                "name": "חצרות חולדה",
                "english_name": "HAZROT HULDA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "1404",
                "name": "חצרות יסף",
                "english_name": "HAZROT YASAF",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1405",
                "name": "חצרות כ\"ח",
                "english_name": "HAZROT KOAH",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "397",
                "name": "חצרים",
                "english_name": "HAZERIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "422",
                "name": "חרב לאת",
                "english_name": "HEREV LE'ET",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1024",
                "name": "חרוצים",
                "english_name": "HARUZIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "1247",
                "name": "חריש",
                "english_name": "HARISH",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3717",
                "name": "חרמש",
                "english_name": "HERMESH",
                "semel_napa": "71",
                "shem_napa": "ג'נין",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "1209",
                "name": "חרשים",
                "english_name": "HARASHIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "3770",
                "name": "חשמונאים",
                "english_name": "HASHMONA'IM",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "6700",
                "name": "טבריה",
                "english_name": "TIBERIAS",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "962",
                "name": "טובא-זנגריה",
                "english_name": "TUBA-ZANGARIYYE",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "498",
                "name": "טורעאן",
                "english_name": "TUR'AN",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2730",
                "name": "טייבה",
                "english_name": "TAYIBE",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "497",
                "name": "טייבה (בעמק)",
                "english_name": "TAYIBE(BAEMEQ)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "2720",
                "name": "טירה",
                "english_name": "TIRE",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "663",
                "name": "טירת יהודה",
                "english_name": "TIRAT YEHUDA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "2100",
                "name": "טירת כרמל",
                "english_name": "TIRAT KARMEL",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "268",
                "name": "טירת צבי",
                "english_name": "TIRAT ZEVI",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "462",
                "name": "טל שחר",
                "english_name": "TAL SHAHAR",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1181",
                "name": "טל-אל",
                "english_name": "TAL-EL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1177",
                "name": "טללים",
                "english_name": "TELALIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "3788",
                "name": "טלמון",
                "english_name": "TALMON",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "8900",
                "name": "טמרה",
                "english_name": "TAMRA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "547",
                "name": "טמרה (יזרעאל)",
                "english_name": "TAMRA (YIZRE'EL)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "3743",
                "name": "טנא",
                "english_name": "TENE",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "1214",
                "name": "טפחות",
                "english_name": "TEFAHOT",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "1295",
                "name": "יאנוח-ג'ת",
                "english_name": "YANUH-JAT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1232",
                "name": "יבול",
                "english_name": "YEVUL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "46",
                "name": "יבנאל",
                "english_name": "YAVNE'EL",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2660",
                "name": "יבנה",
                "english_name": "YAVNE",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "96",
                "name": "יגור",
                "english_name": "YAGUR",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "798",
                "name": "יגל",
                "english_name": "YAGEL",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "577",
                "name": "יד בנימין",
                "english_name": "YAD BINYAMIN",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "31",
                "shem_moaatza": "נחל שורק"
            },
            {
                "semel_yeshuv": "1134",
                "name": "יד השמונה",
                "english_name": "YAD HASHEMONA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "758",
                "name": "יד חנה",
                "english_name": "YAD HANNA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "358",
                "name": "יד מרדכי",
                "english_name": "YAD MORDEKHAY",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "775",
                "name": "יד נתן",
                "english_name": "YAD NATAN",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "64",
                "name": "יד רמב\"ם",
                "english_name": "YAD RAMBAM",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "1144",
                "name": "ידידה",
                "english_name": "YEDIDA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "9400",
                "name": "יהוד-מונוסון",
                "english_name": "YEHUD-MONOSON",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1158",
                "name": "יהל",
                "english_name": "YAHEL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "2009",
                "name": "יובל",
                "english_name": "YUVAL",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "1226",
                "name": "יובלים",
                "english_name": "YUVALIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1112",
                "name": "יודפת",
                "english_name": "YODEFAT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "4007",
                "name": "יונתן",
                "english_name": "YONATAN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "803",
                "name": "יושיביה",
                "english_name": "YOSHIVYA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "452",
                "name": "יזרעאל",
                "english_name": "YIZRE'EL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "409",
                "name": "יחיעם",
                "english_name": "YEHI'AM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "866",
                "name": "יטבתה",
                "english_name": "YOTVATA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "3607",
                "name": "ייט\"ב",
                "english_name": "YITAV",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "811",
                "name": "יכיני",
                "english_name": "YAKHINI",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "753",
                "name": "ינוב",
                "english_name": "YANUV",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "2011",
                "name": "ינון",
                "english_name": "YINNON",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "29",
                "name": "יסוד המעלה",
                "english_name": "YESUD HAMA'ALA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "440",
                "name": "יסודות",
                "english_name": "YESODOT",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "31",
                "shem_moaatza": "נחל שורק"
            },
            {
                "semel_yeshuv": "575",
                "name": "יסעור",
                "english_name": "YAS'UR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1138",
                "name": "יעד",
                "english_name": "YA'AD",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1117",
                "name": "יעל",
                "english_name": "YA'EL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "1044",
                "name": "יעף",
                "english_name": "YE'AF",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "795",
                "name": "יערה",
                "english_name": "YA'ARA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "499",
                "name": "יפיע",
                "english_name": "YAFI",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3566",
                "name": "יפית",
                "english_name": "YAFIT",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "134",
                "name": "יפעת",
                "english_name": "YIF'AT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "453",
                "name": "יפתח",
                "english_name": "YIFTAH",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "3749",
                "name": "יצהר",
                "english_name": "YIZHAR",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "759",
                "name": "יציץ",
                "english_name": "YAZIZ",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "417",
                "name": "יקום",
                "english_name": "YAQUM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "3647",
                "name": "יקיר",
                "english_name": "YAQIR",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "241",
                "name": "יקנעם (מושבה)",
                "english_name": "YOQNE'AM(MOSHAVA)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "240",
                "name": "יקנעם עילית",
                "english_name": "YOQNE'AM ILLIT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "623",
                "name": "יראון",
                "english_name": "YIR'ON",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "2026",
                "name": "ירדנה",
                "english_name": "YARDENA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "831",
                "name": "ירוחם",
                "english_name": "YEROHAM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3000",
                "name": "ירושלים",
                "english_name": "JERUSALEM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "718",
                "name": "ירחיב",
                "english_name": "YARHIV",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "502",
                "name": "ירכא",
                "english_name": "YIRKA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "183",
                "name": "ירקונה",
                "english_name": "YARQONA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "916",
                "name": "ישע",
                "english_name": "YESHA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "805",
                "name": "ישעי",
                "english_name": "YISH'I",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "828",
                "name": "ישרש",
                "english_name": "YASHRESH",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "1227",
                "name": "יתד",
                "english_name": "YATED",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1329",
                "name": "יתיר",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "504",
                "name": "כאבול",
                "english_name": "KABUL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "505",
                "name": "כאוכב אבו אל-היג'א",
                "english_name": "KAOKAB ABU AL-HIJA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "576",
                "name": "כברי",
                "english_name": "KABRI",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "371",
                "name": "כדורי",
                "english_name": "KADOORIE",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "1338",
                "name": "כדיתה",
                "english_name": "",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "3564",
                "name": "כוכב השחר",
                "english_name": "KOKHAV HASHAHAR",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "1224",
                "name": "כוכב יאיר",
                "english_name": "KOKHAV YA'IR",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3779",
                "name": "כוכב יעקב",
                "english_name": "KOKHAV YA'AQOV",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "824",
                "name": "כוכב מיכאל",
                "english_name": "KOKHAV MIKHA'EL",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1252",
                "name": "כורזים",
                "english_name": "KORAZIM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "1210",
                "name": "כחל",
                "english_name": "KAHAL",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "1367",
                "name": "כחלה",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "69",
                "shem_moaatza": "אל קסום"
            },
            {
                "semel_yeshuv": "840",
                "name": "כיסופים",
                "english_name": "KISSUFIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1153",
                "name": "כישור",
                "english_name": "KISHOR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1183",
                "name": "כליל",
                "english_name": "KELIL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1229",
                "name": "כלנית",
                "english_name": "KALLANIT",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "1331",
                "name": "כמאנה",
                "english_name": "",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1291",
                "name": "כמהין",
                "english_name": "KEMEHIN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "1201",
                "name": "כמון",
                "english_name": "KAMMON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "2006",
                "name": "כנות",
                "english_name": "KANNOT",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "4028",
                "name": "כנף",
                "english_name": "KANAF",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "63",
                "name": "כנרת (מושבה)",
                "english_name": "KINNERET(MOSHAVA)",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "57",
                "name": "כנרת (קבוצה)",
                "english_name": "KINNERET(QEVUZA)",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1059",
                "name": "כסיפה",
                "english_name": "KUSEIFE",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "859",
                "name": "כסלון",
                "english_name": "KESALON",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1296",
                "name": "כסרא-סמיע",
                "english_name": "KISRA-SUMEI",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "978",
                "name": "כעביה-טבאש-חג'אג'רה",
                "english_name": "KA'ABIYYE-TABBASH-HA",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "857",
                "name": "כפר אביב",
                "english_name": "KEFAR AVIV",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "32",
                "shem_moaatza": "גדרות"
            },
            {
                "semel_yeshuv": "3638",
                "name": "כפר אדומים",
                "english_name": "KEFAR ADUMMIM",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "364",
                "name": "כפר אוריה",
                "english_name": "KEFAR URIYYA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "690",
                "name": "כפר אחים",
                "english_name": "KEFAR AHIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "220",
                "name": "כפר ביאליק",
                "english_name": "KEFAR BIALIK",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "177",
                "name": "כפר ביל\"ו",
                "english_name": "KEFAR BILU",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "357",
                "name": "כפר בלום",
                "english_name": "KEFAR BLUM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "2010",
                "name": "כפר בן נון",
                "english_name": "KEFAR BIN NUN",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "633",
                "name": "כפר ברא",
                "english_name": "KAFAR BARA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "132",
                "name": "כפר ברוך",
                "english_name": "KEFAR BARUKH",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "106",
                "name": "כפר גדעון",
                "english_name": "KEFAR GID'ON",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "427",
                "name": "כפר גלים",
                "english_name": "KEFAR GALLIM",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "310",
                "name": "כפר גליקסון",
                "english_name": "KEFAR GLIKSON",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "76",
                "name": "כפר גלעדי",
                "english_name": "KEFAR GIL'ADI",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "707",
                "name": "כפר דניאל",
                "english_name": "KEFAR DANIYYEL",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "3796",
                "name": "כפר האורנים",
                "english_name": "KEFAR HAORANIM",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "192",
                "name": "כפר החורש",
                "english_name": "KEFAR HAHORESH",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "254",
                "name": "כפר המכבי",
                "english_name": "KEFAR HAMAKKABI",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "582",
                "name": "כפר הנגיד",
                "english_name": "KEFAR HANAGID",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "890",
                "name": "כפר הנוער הדתי",
                "english_name": "KEFAR HANO'AR HADATI",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "443",
                "name": "כפר הנשיא",
                "english_name": "KEFAR HANASI",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "187",
                "name": "כפר הס",
                "english_name": "KEFAR HESS",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "217",
                "name": "כפר הרא\"ה",
                "english_name": "KEFAR HARO'E",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "888",
                "name": "כפר הרי\"ף",
                "english_name": "KEFAR HARIF",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "190",
                "name": "כפר ויתקין",
                "english_name": "KEFAR VITKIN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "320",
                "name": "כפר ורבורג",
                "english_name": "KEFAR WARBURG",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "1263",
                "name": "כפר ורדים",
                "english_name": "KEFAR WERADIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1325",
                "name": "כפר זוהרים",
                "english_name": "KEFAR ZOHARIM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "786",
                "name": "כפר זיתים",
                "english_name": "KEFAR ZETIM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "696",
                "name": "כפר חב\"ד",
                "english_name": "KEFAR HABAD",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "609",
                "name": "כפר חושן",
                "english_name": "KEFAR HOSHEN",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "255",
                "name": "כפר חיטים",
                "english_name": "KEFAR HITTIM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "193",
                "name": "כפר חיים",
                "english_name": "KEFAR HAYYIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1297",
                "name": "כפר חנניה",
                "english_name": "KEFAR HANANYA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "112",
                "name": "כפר חסידים א'",
                "english_name": "KEFAR HASIDIM ALEF",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "889",
                "name": "כפר חסידים ב'",
                "english_name": "KEFAR HASIDIM BET",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "4004",
                "name": "כפר חרוב",
                "english_name": "KEFAR HARUV",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "673",
                "name": "כפר טרומן",
                "english_name": "KEFAR TRUMAN",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "507",
                "name": "כפר יאסיף",
                "english_name": "KAFAR YASIF",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "233",
                "name": "כפר ידידיה",
                "english_name": "YEDIDYA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "140",
                "name": "כפר יהושע",
                "english_name": "KEFAR YEHOSHUA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "168",
                "name": "כפר יונה",
                "english_name": "KEFAR YONA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "85",
                "name": "כפר יחזקאל",
                "english_name": "KEFAR YEHEZQEL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "170",
                "name": "כפר יעבץ",
                "english_name": "KEFAR YA'BEZ",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "508",
                "name": "כפר כמא",
                "english_name": "KAFAR KAMA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "509",
                "name": "כפר כנא",
                "english_name": "KAFAR KANNA",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "387",
                "name": "כפר מונש",
                "english_name": "KEFAR MONASH",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1095",
                "name": "כפר מימון",
                "english_name": "KEFAR MAYMON",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "98",
                "name": "כפר מל\"ל",
                "english_name": "KEFAR MALAL",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "510",
                "name": "כפר מנדא",
                "english_name": "KAFAR MANDA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "274",
                "name": "כפר מנחם",
                "english_name": "KEFAR MENAHEM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "297",
                "name": "כפר מסריק",
                "english_name": "KEFAR MASARYK",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "512",
                "name": "כפר מצר",
                "english_name": "KAFAR MISR",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "66",
                "shem_moaatza": "בוסתאן אל-מרג'"
            },
            {
                "semel_yeshuv": "764",
                "name": "כפר מרדכי",
                "english_name": "KEFAR MORDEKHAY",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "32",
                "shem_moaatza": "גדרות"
            },
            {
                "semel_yeshuv": "316",
                "name": "כפר נטר",
                "english_name": "KEFAR NETTER",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "345",
                "name": "כפר סאלד",
                "english_name": "KEFAR SZOLD",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "6900",
                "name": "כפר סבא",
                "english_name": "KEFAR SAVA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "107",
                "name": "כפר סילבר",
                "english_name": "KEFAR SILVER",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "249",
                "name": "כפר סירקין",
                "english_name": "KEFAR SIRKIN",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "875",
                "name": "כפר עבודה",
                "english_name": "KEFAR AVODA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "845",
                "name": "כפר עזה",
                "english_name": "KEFAR AZZA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "3488",
                "name": "כפר עציון",
                "english_name": "KEFAR EZYON",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "189",
                "name": "כפר פינס",
                "english_name": "KEFAR PINES",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "634",
                "name": "כפר קאסם",
                "english_name": "KAFAR QASEM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "388",
                "name": "כפר קיש",
                "english_name": "KEFAR KISH",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "654",
                "name": "כפר קרע",
                "english_name": "KAFAR QARA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "579",
                "name": "כפר ראש הנקרה",
                "english_name": "KEFAR ROSH HANIQRA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1130",
                "name": "כפר רוזנלואלד (זרעית)",
                "english_name": "KEFAR ROZENWALD(ZAR.",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "295",
                "name": "כפר רופין",
                "english_name": "KEFAR RUPPIN",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "1166",
                "name": "כפר רות",
                "english_name": "KEFAR RUT",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "605",
                "name": "כפר שמאי",
                "english_name": "KEFAR SHAMMAY",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "743",
                "name": "כפר שמואל",
                "english_name": "KEFAR SHEMU'EL",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "267",
                "name": "כפר שמריהו",
                "english_name": "KEFAR SHEMARYAHU",
                "semel_napa": "51",
                "shem_napa": "תל אביב",
                "semel_lishkat_mana": "57",
                "lishka": "הרצליה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "47",
                "name": "כפר תבור",
                "english_name": "KEFAR TAVOR",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3572",
                "name": "כפר תפוח",
                "english_name": "KEFAR TAPPUAH",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "38",
                "name": "כרי דשא",
                "english_name": "KARE DESHE",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1285",
                "name": "כרכום",
                "english_name": "KARKOM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "664",
                "name": "כרם בן זמרה",
                "english_name": "KEREM BEN ZIMRA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "88",
                "name": "כרם בן שמן",
                "english_name": "KEREM BEN SHEMEN",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1094",
                "name": "כרם יבנה (ישיבה)",
                "english_name": "KEREM YAVNE(YESHIVA)",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "580",
                "name": "כרם מהר\"ל",
                "english_name": "KEREM MAHARAL",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "1085",
                "name": "כרם שלום",
                "english_name": "KEREM SHALOM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1264",
                "name": "כרמי יוסף",
                "english_name": "KARME YOSEF",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "3766",
                "name": "כרמי צור",
                "english_name": "KARME ZUR",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "1374",
                "name": "כרמי קטיף",
                "english_name": "KARME QATIF",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "1139",
                "name": "כרמיאל",
                "english_name": "KARMI'EL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "768",
                "name": "כרמיה",
                "english_name": "KARMIYYA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1198",
                "name": "כרמים",
                "english_name": "KERAMIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "3656",
                "name": "כרמל",
                "english_name": "KARMEL",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "0",
                "name": "לא רשום",
                "english_name": "",
                "semel_napa": "0",
                "shem_napa": "לא ידוע",
                "semel_lishkat_mana": "0",
                "lishka": "",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1207",
                "name": "לבון",
                "english_name": "LAVON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "585",
                "name": "לביא",
                "english_name": "LAVI",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "1230",
                "name": "לבנים",
                "english_name": "LIVNIM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "2023",
                "name": "להב",
                "english_name": "LAHAV",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "380",
                "name": "להבות הבשן",
                "english_name": "LAHAVOT HABASHAN",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "715",
                "name": "להבות חביבה",
                "english_name": "LAHAVOT HAVIVA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "1271",
                "name": "להבים",
                "english_name": "LEHAVIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "7000",
                "name": "לוד",
                "english_name": "LOD",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "52",
                "name": "לוזית",
                "english_name": "LUZIT",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "595",
                "name": "לוחמי הגיטאות",
                "english_name": "LOHAME HAGETA'OT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1171",
                "name": "לוטם",
                "english_name": "LOTEM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1255",
                "name": "לוטן",
                "english_name": "LOTAN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "674",
                "name": "לימן",
                "english_name": "LIMAN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "24",
                "name": "לכיש",
                "english_name": "LAKHISH",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "1310",
                "name": "לפיד",
                "english_name": "LAPPID",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1173",
                "name": "לפידות",
                "english_name": "LAPPIDOT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "1060",
                "name": "לקיה",
                "english_name": "LAQYE",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2055",
                "name": "מאור",
                "english_name": "MA'OR",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "102",
                "name": "מאיר שפיה",
                "english_name": "ME'IR SHEFEYA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "771",
                "name": "מבוא ביתר",
                "english_name": "MEVO BETAR",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "3569",
                "name": "מבוא דותן",
                "english_name": "MEVO DOTAN",
                "semel_napa": "71",
                "shem_napa": "ג'נין",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "3709",
                "name": "מבוא חורון",
                "english_name": "MEVO HORON",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "4204",
                "name": "מבוא חמה",
                "english_name": "MEVO HAMMA",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1141",
                "name": "מבוא מודיעים",
                "english_name": "MEVO MODI'IM",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1318",
                "name": "מבואות ים",
                "english_name": "MEVO'OT YAM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1080",
                "name": "מבועים",
                "english_name": "MABBU'IM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "829",
                "name": "מבטחים",
                "english_name": "MIVTAHIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "573",
                "name": "מבקיעים",
                "english_name": "MAVQI'IM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1015",
                "name": "מבשרת ציון",
                "english_name": "MEVASSERET ZIYYON",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "516",
                "name": "מג'ד אל-כרום",
                "english_name": "MAJD AL-KURUM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "4201",
                "name": "מג'דל שמס",
                "english_name": "MAJDAL SHAMS",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "481",
                "name": "מגאר",
                "english_name": "MUGHAR",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "689",
                "name": "מגדים",
                "english_name": "MEGADIM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "65",
                "name": "מגדל",
                "english_name": "MIGDAL",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "874",
                "name": "מגדל העמק",
                "english_name": "MIGDAL HAEMEQ",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3561",
                "name": "מגדל עוז",
                "english_name": "MIGDAL OZ",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "3751",
                "name": "מגדלים",
                "english_name": "MIGDALIM",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "586",
                "name": "מגידו",
                "english_name": "MEGIDDO",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "375",
                "name": "מגל",
                "english_name": "MAGGAL",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "695",
                "name": "מגן",
                "english_name": "MAGEN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1155",
                "name": "מגן שאול",
                "english_name": "MAGEN SHA'UL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "722",
                "name": "מגשימים",
                "english_name": "MAGSHIMIM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "2029",
                "name": "מדרך עוז",
                "english_name": "MIDRAKH OZ",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "1140",
                "name": "מדרשת בן גוריון",
                "english_name": "MIDRESHET BEN GURION",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "897",
                "name": "מדרשת רופין",
                "english_name": "MIDRESHET RUPPIN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "3797",
                "name": "מודיעין עילית",
                "english_name": "MODI'IN ILLIT",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1200",
                "name": "מודיעין-מכבים-רעות",
                "english_name": "MODI'IN-MAKKABBIM-RE",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1360",
                "name": "מולדה",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "69",
                "shem_moaatza": "אל קסום"
            },
            {
                "semel_yeshuv": "269",
                "name": "מולדת",
                "english_name": "MOLEDET",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "208",
                "name": "מוצא עילית",
                "english_name": "MOZA ILLIT",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "635",
                "name": "מוקייבלה",
                "english_name": "MUQEIBLE",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "1163",
                "name": "מורן",
                "english_name": "MORAN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1178",
                "name": "מורשת",
                "english_name": "MORESHET",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "606",
                "name": "מזור",
                "english_name": "MAZOR",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "28",
                "name": "מזכרת בתיה",
                "english_name": "MAZKERET BATYA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "104",
                "name": "מזרע",
                "english_name": "MIZRA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "517",
                "name": "מזרעה",
                "english_name": "MAZRA'A",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3599",
                "name": "מחולה",
                "english_name": "MEHOLA",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "1411",
                "name": "מחנה הילה",
                "english_name": "",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "46",
                "lishka": "ראשון לציון",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "1418",
                "name": "מחנה טלי",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "1413",
                "name": "מחנה יהודית",
                "english_name": "",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "1416",
                "name": "מחנה יוכבד",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "1415",
                "name": "מחנה יפה",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "1196",
                "name": "מחנה יתיר",
                "english_name": "MAHANE YATTIR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1414",
                "name": "מחנה מרים",
                "english_name": "",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "1417",
                "name": "מחנה עדי",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1412",
                "name": "מחנה תל נוף",
                "english_name": "",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "28",
                "shem_moaatza": "ברנר"
            },
            {
                "semel_yeshuv": "308",
                "name": "מחניים",
                "english_name": "MAHANAYIM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "776",
                "name": "מחסיה",
                "english_name": "MAHSEYA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "43",
                "name": "מטולה",
                "english_name": "METULA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "822",
                "name": "מטע",
                "english_name": "MATTA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1128",
                "name": "מי עמי",
                "english_name": "ME AMMI",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "2054",
                "name": "מיטב",
                "english_name": "METAV",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "649",
                "name": "מייסר",
                "english_name": "MEISER",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "4019",
                "name": "מיצר",
                "english_name": "MEZAR",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1282",
                "name": "מירב",
                "english_name": "MERAV",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "607",
                "name": "מירון",
                "english_name": "MERON",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "731",
                "name": "מישר",
                "english_name": "MESHAR",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "32",
                "shem_moaatza": "גדרות"
            },
            {
                "semel_yeshuv": "1268",
                "name": "מיתר",
                "english_name": "METAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3614",
                "name": "מכורה",
                "english_name": "MEKHORA",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "1343",
                "name": "מכחול",
                "english_name": "MAKCHUL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "69",
                "shem_moaatza": "אל קסום"
            },
            {
                "semel_yeshuv": "382",
                "name": "מכמורת",
                "english_name": "MIKHMORET",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1202",
                "name": "מכמנים",
                "english_name": "MIKHMANNIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "164",
                "name": "מלאה",
                "english_name": "MELE'A",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "2044",
                "name": "מלילות",
                "english_name": "MELILOT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "596",
                "name": "מלכיה",
                "english_name": "MALKIYYA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "1154",
                "name": "מלכישוע",
                "english_name": "MALKISHUA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "2030",
                "name": "מנוחה",
                "english_name": "MENUHA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "1174",
                "name": "מנוף",
                "english_name": "MANOF",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1205",
                "name": "מנות",
                "english_name": "MANOT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "48",
                "name": "מנחמיה",
                "english_name": "MENAHEMYA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "347",
                "name": "מנרה",
                "english_name": "MENNARA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "994",
                "name": "מנשית זבדה",
                "english_name": "MANSHIYYET ZABDA",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "1258",
                "name": "מסד",
                "english_name": "MASSAD",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "263",
                "name": "מסדה",
                "english_name": "MASSADA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "298",
                "name": "מסילות",
                "english_name": "MESILLOT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "742",
                "name": "מסילת ציון",
                "english_name": "MESILLAT ZIYYON",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "748",
                "name": "מסלול",
                "english_name": "MASLUL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "4203",
                "name": "מסעדה",
                "english_name": "MAS'ADE",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "939",
                "name": "מסעודין אל-עזאזמה",
                "english_name": "MAS'UDIN AL-'AZAZME",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "197",
                "name": "מעברות",
                "english_name": "MA'BAROT",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1082",
                "name": "מעגלים",
                "english_name": "MA'GALIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "678",
                "name": "מעגן",
                "english_name": "MA'AGAN",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "694",
                "name": "מעגן מיכאל",
                "english_name": "MA'AGAN MIKHA'EL",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "272",
                "name": "מעוז חיים",
                "english_name": "MA'OZ HAYYIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "3657",
                "name": "מעון",
                "english_name": "MA'ON",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "570",
                "name": "מעונה",
                "english_name": "ME'ONA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "518",
                "name": "מעיליא",
                "english_name": "MI'ELYA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "416",
                "name": "מעין ברוך",
                "english_name": "MA'YAN BARUKH",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "290",
                "name": "מעין צבי",
                "english_name": "MA'YAN ZEVI",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "3616",
                "name": "מעלה אדומים",
                "english_name": "MA'ALE ADUMMIM",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3608",
                "name": "מעלה אפרים",
                "english_name": "MA'ALE EFRAYIM",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1127",
                "name": "מעלה גלבוע",
                "english_name": "MA'ALE GILBOA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "4008",
                "name": "מעלה גמלא",
                "english_name": "MA'ALE GAMLA",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "286",
                "name": "מעלה החמישה",
                "english_name": "MA'ALE HAHAMISHA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "3752",
                "name": "מעלה לבונה",
                "english_name": "MA'ALE LEVONA",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "3651",
                "name": "מעלה מכמש",
                "english_name": "MA'ALE MIKHMAS",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "1327",
                "name": "מעלה עירון",
                "english_name": "MA'ALE IRON",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3653",
                "name": "מעלה עמוס",
                "english_name": "MA'ALE AMOS",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "3637",
                "name": "מעלה שומרון",
                "english_name": "MA'ALE SHOMERON",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "1063",
                "name": "מעלות-תרשיחא",
                "english_name": "MA'ALOT-TARSHIHA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "344",
                "name": "מענית",
                "english_name": "MA'ANIT",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "230",
                "name": "מעש",
                "english_name": "MA'AS",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "668",
                "name": "מפלסים",
                "english_name": "MEFALLESIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "3745",
                "name": "מצדות יהודה",
                "english_name": "MEZADOT YEHUDA",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "325",
                "name": "מצובה",
                "english_name": "MAZZUVA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "757",
                "name": "מצליח",
                "english_name": "MAZLIAH",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "58",
                "name": "מצפה",
                "english_name": "MIZPA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "1222",
                "name": "מצפה אבי\"ב",
                "english_name": "MIZPE AVIV",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1370",
                "name": "מצפה אילן",
                "english_name": "",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "3576",
                "name": "מצפה יריחו",
                "english_name": "MIZPE YERIHO",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "1190",
                "name": "מצפה נטופה",
                "english_name": "MIZPE NETOFA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "99",
                "name": "מצפה רמון",
                "english_name": "MIZPE RAMON",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3610",
                "name": "מצפה שלם",
                "english_name": "MIZPE SHALEM",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "74",
                "shem_moaatza": "מגילות ים המלח"
            },
            {
                "semel_yeshuv": "648",
                "name": "מצר",
                "english_name": "MEZER",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "22",
                "name": "מקווה ישראל",
                "english_name": "MIQWE YISRA'EL",
                "semel_napa": "53",
                "shem_napa": "חולון",
                "semel_lishkat_mana": "53",
                "lishka": "חולון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "843",
                "name": "מרגליות",
                "english_name": "MARGALIYYOT",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "4101",
                "name": "מרום גולן",
                "english_name": "MEROM GOLAN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1340",
                "name": "מרחב עם",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "66",
                "name": "מרחביה",
                "english_name": "MERHAVYA(QIBBUZ)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "1098",
                "name": "מרכז שפירא",
                "english_name": "MERKAZ SHAPPIRA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "421",
                "name": "משאבי שדה",
                "english_name": "MASH'ABBE SADE",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "765",
                "name": "משגב דב",
                "english_name": "MISGAV DOV",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "32",
                "shem_moaatza": "גדרות"
            },
            {
                "semel_yeshuv": "378",
                "name": "משגב עם",
                "english_name": "MISGAV AM",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "520",
                "name": "משהד",
                "english_name": "MESHHED",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3605",
                "name": "משואה",
                "english_name": "MASSU'A",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "620",
                "name": "משואות יצחק",
                "english_name": "MASSUOT YIZHAQ",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "3785",
                "name": "משכיות",
                "english_name": "MASKIYYOT",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "670",
                "name": "משמר איילון",
                "english_name": "MISHMAR AYYALON",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "563",
                "name": "משמר דוד",
                "english_name": "MISHMAR DAWID",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "732",
                "name": "משמר הירדן",
                "english_name": "MISHMAR HAYARDEN",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "395",
                "name": "משמר הנגב",
                "english_name": "MISHMAR HANEGEV",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "130",
                "name": "משמר העמק",
                "english_name": "MISHMAR HAEMEQ",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "729",
                "name": "משמר השבעה",
                "english_name": "MISHMAR HASHIV'A",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "194",
                "name": "משמר השרון",
                "english_name": "MISHMAR HASHARON",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "213",
                "name": "משמרות",
                "english_name": "MISHMAROT",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "425",
                "name": "משמרת",
                "english_name": "MISHMERET",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "791",
                "name": "משען",
                "english_name": "MASH'EN",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1315",
                "name": "מתן",
                "english_name": "MATTAN",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "1184",
                "name": "מתת",
                "english_name": "MATTAT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "3648",
                "name": "מתתיהו",
                "english_name": "MATTITYAHU",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "4551",
                "name": "נאות גולן",
                "english_name": "NE'OT GOLAN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1124",
                "name": "נאות הכיכר",
                "english_name": "NE'OT HAKIKKAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "51",
                "shem_moaatza": "תמר"
            },
            {
                "semel_yeshuv": "408",
                "name": "נאות מרדכי",
                "english_name": "NE'OT MORDEKHAY",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "1197",
                "name": "נאות סמדר",
                "english_name": "SHIZZAFON",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "524",
                "name": "נאעורה",
                "english_name": "NA'URA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "396",
                "name": "נבטים",
                "english_name": "NEVATIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "315",
                "name": "נגבה",
                "english_name": "NEGBA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "3724",
                "name": "נגוהות",
                "english_name": "",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "309",
                "name": "נהורה",
                "english_name": "NEHORA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "80",
                "name": "נהלל",
                "english_name": "NAHALAL",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "9100",
                "name": "נהריה",
                "english_name": "NAHARIYYA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "4304",
                "name": "נוב",
                "english_name": "NOV",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "55",
                "name": "נוגה",
                "english_name": "NOGAH",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "1366",
                "name": "נווה",
                "english_name": "NAVE",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "926",
                "name": "נווה אבות",
                "english_name": "NEWE AVOT",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "590",
                "name": "נווה אור",
                "english_name": "NEWE UR",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "4303",
                "name": "נווה אטי\"ב",
                "english_name": "NEWE ATIV",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "405",
                "name": "נווה אילן",
                "english_name": "NEWE ILAN",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "296",
                "name": "נווה איתן",
                "english_name": "NEWE ETAN",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "3725",
                "name": "נווה דניאל",
                "english_name": "NEWE DANIYYEL",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "1057",
                "name": "נווה זוהר",
                "english_name": "NEWE ZOHAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "51",
                "shem_moaatza": "תמר"
            },
            {
                "semel_yeshuv": "1314",
                "name": "נווה זיו",
                "english_name": "",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "1279",
                "name": "נווה חריף",
                "english_name": "NEWE HARIF",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "312",
                "name": "נווה ים",
                "english_name": "NEWE YAM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "686",
                "name": "נווה ימין",
                "english_name": "NEWE YAMIN",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "858",
                "name": "נווה ירק",
                "english_name": "NEWE YARAQ",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "827",
                "name": "נווה מבטח",
                "english_name": "NEWE MIVTAH",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "1071",
                "name": "נווה מיכאל",
                "english_name": "NEWE MIKHA'EL",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1259",
                "name": "נווה שלום",
                "english_name": "NEWE SHALOM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "15",
                "name": "נועם",
                "english_name": "NO'AM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "1333",
                "name": "נוף איילון",
                "english_name": "",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "3790",
                "name": "נופים",
                "english_name": "NOFIM",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "1284",
                "name": "נופית",
                "english_name": "NOFIT",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "257",
                "name": "נופך",
                "english_name": "NOFEKH",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "3726",
                "name": "נוקדים",
                "english_name": "NOQEDIM",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "447",
                "name": "נורדיה",
                "english_name": "NORDIYYA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "833",
                "name": "נורית",
                "english_name": "NURIT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "59",
                "name": "נחושה",
                "english_name": "NEHUSHA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "844",
                "name": "נחל עוז",
                "english_name": "NAHAL OZ",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "2045",
                "name": "נחלה",
                "english_name": "NAHALA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "3767",
                "name": "נחליאל",
                "english_name": "NAHALI'EL",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "449",
                "name": "נחלים",
                "english_name": "NEHALIM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "809",
                "name": "נחם",
                "english_name": "NAHAM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "522",
                "name": "נחף",
                "english_name": "NAHEF",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "433",
                "name": "נחשולים",
                "english_name": "NAHSHOLIM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "777",
                "name": "נחשון",
                "english_name": "NAHSHON",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "705",
                "name": "נחשונים",
                "english_name": "NAHSHONIM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "1147",
                "name": "נטועה",
                "english_name": "NETU'A",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "4014",
                "name": "נטור",
                "english_name": "NATUR",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1369",
                "name": "נטע",
                "english_name": "NETA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "174",
                "name": "נטעים",
                "english_name": "NETA'IM",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "1254",
                "name": "נטף",
                "english_name": "NATAF",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "523",
                "name": "ניין",
                "english_name": "NEIN",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "66",
                "shem_moaatza": "בוסתאן אל-מרג'"
            },
            {
                "semel_yeshuv": "3655",
                "name": "ניל\"י",
                "english_name": "NILI",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "351",
                "name": "ניצן",
                "english_name": "NIZZAN",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1419",
                "name": "ניצן ב'",
                "english_name": "NIZZAN B",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "1195",
                "name": "ניצנה )קהילת חינוך(",
                "english_name": "NIZZANA (QEHILAT HIN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "1280",
                "name": "ניצני סיני",
                "english_name": "NIZZANE SINAY",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "851",
                "name": "ניצני עוז",
                "english_name": "NIZZANE OZ",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "359",
                "name": "ניצנים",
                "english_name": "NIZZANIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "808",
                "name": "ניר אליהו",
                "english_name": "NIR ELIYYAHU",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "553",
                "name": "ניר בנים",
                "english_name": "NIR BANIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "720",
                "name": "ניר גלים",
                "english_name": "NIR GALLIM",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "256",
                "name": "ניר דוד (תל-עמל)",
                "english_name": "NIR DAWID (TEL AMAL)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "11",
                "name": "ניר ח\"ן",
                "english_name": "NIR HEN",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "165",
                "name": "ניר יפה",
                "english_name": "NIR YAFE",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "402",
                "name": "ניר יצחק",
                "english_name": "NIR YIZHAQ",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "699",
                "name": "ניר ישראל",
                "english_name": "NIR YISRA'EL",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "2047",
                "name": "ניר משה",
                "english_name": "NIR MOSHE",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "69",
                "name": "ניר עוז",
                "english_name": "NIR OZ",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "348",
                "name": "ניר עם",
                "english_name": "NIR AM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "769",
                "name": "ניר עציון",
                "english_name": "NIR EZYON",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "2048",
                "name": "ניר עקיבא",
                "english_name": "NIR AQIVA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "331",
                "name": "ניר צבי",
                "english_name": "NIR ZEVI",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "602",
                "name": "נירים",
                "english_name": "NIRIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1236",
                "name": "נירית",
                "english_name": "NIRIT",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "3620",
                "name": "נירן",
                "english_name": "NIRAN",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "4035",
                "name": "נמרוד",
                "english_name": "NIMROD",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "825",
                "name": "נס הרים",
                "english_name": "NES HARIM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1143",
                "name": "נס עמים",
                "english_name": "NES AMMIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "7200",
                "name": "נס ציונה",
                "english_name": "NES ZIYYONA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "186",
                "name": "נעורים",
                "english_name": "NE'URIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "3787",
                "name": "נעלה",
                "english_name": "NA'ALE",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "3713",
                "name": "נעמ\"ה",
                "english_name": "NAAMA",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "158",
                "name": "נען",
                "english_name": "NA'AN",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "1372",
                "name": "נצר חזני",
                "english_name": "",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "31",
                "shem_moaatza": "נחל שורק"
            },
            {
                "semel_yeshuv": "435",
                "name": "נצר סרני",
                "english_name": "NEZER SERENI",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "7300",
                "name": "נצרת",
                "english_name": "NAZARETH",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1061",
                "name": "נצרת עילית",
                "english_name": "NAZERAT ILLIT",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2500",
                "name": "נשר",
                "english_name": "NESHER",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3555",
                "name": "נתיב הגדוד",
                "english_name": "NETIV HAGEDUD",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "693",
                "name": "נתיב הל\"ה",
                "english_name": "NETIV HALAMED-HE",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1242",
                "name": "נתיב העשרה",
                "english_name": "NETIV HAASARA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "792",
                "name": "נתיב השיירה",
                "english_name": "NETIV HASHAYYARA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "246",
                "name": "נתיבות",
                "english_name": "NETIVOT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "7400",
                "name": "נתניה",
                "english_name": "NETANYA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "525",
                "name": "סאג'ור",
                "english_name": "SAJUR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "578",
                "name": "סאסא",
                "english_name": "SASA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "587",
                "name": "סביון",
                "english_name": "SAVYON",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2046",
                "name": "סגולה",
                "english_name": "SEGULA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "526",
                "name": "סולם",
                "english_name": "SULAM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "66",
                "shem_moaatza": "בוסתאן אל-מרג'"
            },
            {
                "semel_yeshuv": "3756",
                "name": "סוסיה",
                "english_name": "SUSEYA",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "1238",
                "name": "סופה",
                "english_name": "SUFA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "7500",
                "name": "סח'נין",
                "english_name": "SAKHNIN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1245",
                "name": "סלמה",
                "english_name": "SALLAMA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "3567",
                "name": "סלעית",
                "english_name": "SAL'IT",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "1156",
                "name": "סמר",
                "english_name": "SAMAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "3777",
                "name": "סנסנה",
                "english_name": "",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "419",
                "name": "סעד",
                "english_name": "SA'AD",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "454",
                "name": "סער",
                "english_name": "SA'AR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1176",
                "name": "ספיר",
                "english_name": "SAPPIR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "610",
                "name": "סתריה",
                "english_name": "SITRIYYA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "4501",
                "name": "ע'ג'ר",
                "english_name": "GHAJAR",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "892",
                "name": "עבדון",
                "english_name": "AVDON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "376",
                "name": "עברון",
                "english_name": "EVRON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "794",
                "name": "עגור",
                "english_name": "AGUR",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1199",
                "name": "עדי",
                "english_name": "ADI",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "2035",
                "name": "עדנים",
                "english_name": "ADANIM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "826",
                "name": "עוזה",
                "english_name": "UZA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "528",
                "name": "עוזייר",
                "english_name": "UZEIR",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "65",
                "shem_moaatza": "אל-בטוף"
            },
            {
                "semel_yeshuv": "737",
                "name": "עולש",
                "english_name": "OLESH",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "666",
                "name": "עומר",
                "english_name": "OMER",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "810",
                "name": "עופר",
                "english_name": "OFER",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "3617",
                "name": "עופרה",
                "english_name": "OFRA",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "32",
                "name": "עוצם",
                "english_name": "OZEM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "957",
                "name": "עוקבי )בנו עוקבה(",
                "english_name": "UQBI (BANU UQBA)",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "328",
                "name": "עזוז",
                "english_name": "EZUZ",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "1149",
                "name": "עזר",
                "english_name": "EZER",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "837",
                "name": "עזריאל",
                "english_name": "AZRI'EL",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "711",
                "name": "עזריה",
                "english_name": "AZARYA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "817",
                "name": "עזריקם",
                "english_name": "AZRIQAM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "3658",
                "name": "עטרת",
                "english_name": "ATERET",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "1175",
                "name": "עידן",
                "english_name": "IDDAN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "530",
                "name": "עיילבון",
                "english_name": "EILABUN",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "156",
                "name": "עיינות",
                "english_name": "AYANOT",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "511",
                "name": "עילוט",
                "english_name": "ILUT",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "687",
                "name": "עין איילה",
                "english_name": "EN AYYALA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "546",
                "name": "עין אל-אסד",
                "english_name": "EIN AL-ASAD",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "273",
                "name": "עין גב",
                "english_name": "EN GEV",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "2042",
                "name": "עין גדי",
                "english_name": "EN GEDI",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "51",
                "shem_moaatza": "תמר"
            },
            {
                "semel_yeshuv": "436",
                "name": "עין דור",
                "english_name": "EN DOR",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "1240",
                "name": "עין הבשור",
                "english_name": "EN HABESOR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "74",
                "name": "עין הוד",
                "english_name": "EN HOD",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "167",
                "name": "עין החורש",
                "english_name": "EN HAHORESH",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "289",
                "name": "עין המפרץ",
                "english_name": "EN HAMIFRAZ",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "383",
                "name": "עין הנצי\"ב",
                "english_name": "EN HANAZIV",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "367",
                "name": "עין העמק",
                "english_name": "EN HAEMEQ",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "270",
                "name": "עין השופט",
                "english_name": "EN HASHOFET",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "676",
                "name": "עין השלושה",
                "english_name": "EN HASHELOSHA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "157",
                "name": "עין ורד",
                "english_name": "EN WERED",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "4503",
                "name": "עין זיוון",
                "english_name": "EN ZIWAN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1320",
                "name": "עין חוד",
                "english_name": "",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "1053",
                "name": "עין חצבה",
                "english_name": "EN HAZEVA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "51",
                "shem_moaatza": "תמר"
            },
            {
                "semel_yeshuv": "89",
                "name": "עין חרוד (איחוד)",
                "english_name": "EN HAROD (IHUD)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "82",
                "name": "עין חרוד (מאוחד)",
                "english_name": "EN HAROD(ME'UHAD)",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "806",
                "name": "עין יהב",
                "english_name": "EN YAHAV",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "813",
                "name": "עין יעקב",
                "english_name": "EN YA'AQOV",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "1056",
                "name": "עין כרם-בי\"ס חקלאי",
                "english_name": "EN KAREM-B.S.HAQLA'I",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "426",
                "name": "עין כרמל",
                "english_name": "EN KARMEL",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "532",
                "name": "עין מאהל",
                "english_name": "EIN MAHEL",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "521",
                "name": "עין נקובא",
                "english_name": "EIN NAQQUBA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "223",
                "name": "עין עירון",
                "english_name": "EN IRON",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "622",
                "name": "עין צורים",
                "english_name": "EN ZURIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "4502",
                "name": "עין קנייא",
                "english_name": "EIN QINIYYE",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "514",
                "name": "עין ראפה",
                "english_name": "EIN RAFA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "139",
                "name": "עין שמר",
                "english_name": "EN SHEMER",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "880",
                "name": "עין שריד",
                "english_name": "EN SARID",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "1251",
                "name": "עין תמר",
                "english_name": "EN TAMAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "51",
                "shem_moaatza": "תמר"
            },
            {
                "semel_yeshuv": "871",
                "name": "עינת",
                "english_name": "ENAT",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "1187",
                "name": "עיר אובות",
                "english_name": "IR OVOT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "7600",
                "name": "עכו",
                "english_name": "AKKO",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1146",
                "name": "עלומים",
                "english_name": "ALUMIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "3765",
                "name": "עלי",
                "english_name": "ELI",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "3727",
                "name": "עלי זהב",
                "english_name": "ALE ZAHAV",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "688",
                "name": "עלמה",
                "english_name": "ALMA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "3715",
                "name": "עלמון",
                "english_name": "ALMON",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "1212",
                "name": "עמוקה",
                "english_name": "AMUQQA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "779",
                "name": "עמינדב",
                "english_name": "AMMINADAV",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "385",
                "name": "עמיעד",
                "english_name": "AMMI'AD",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "318",
                "name": "עמיעוז",
                "english_name": "AMMI'OZ",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "773",
                "name": "עמיקם",
                "english_name": "AMMIQAM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "45",
                "shem_moaatza": "אלונה"
            },
            {
                "semel_yeshuv": "319",
                "name": "עמיר",
                "english_name": "AMIR",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "3660",
                "name": "עמנואל",
                "english_name": "IMMANU'EL",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "708",
                "name": "עמקה",
                "english_name": "AMQA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "3712",
                "name": "ענב",
                "english_name": "ENAV",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "534",
                "name": "עספיא",
                "english_name": "ISIFYA",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "7700",
                "name": "עפולה",
                "english_name": "AFULA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3778",
                "name": "עץ אפרים",
                "english_name": "EZ EFRAYIM",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "917",
                "name": "עצמון שגב",
                "english_name": "ATSMON-SEGEV",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "531",
                "name": "עראבה",
                "english_name": "ARRABE",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1246",
                "name": "עראמשה",
                "english_name": "ARAMSHA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1335",
                "name": "ערב אל נעים",
                "english_name": "ARRAB AL NAIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "2560",
                "name": "ערד",
                "english_name": "ARAD",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "593",
                "name": "ערוגות",
                "english_name": "ARUGOT",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "637",
                "name": "ערערה",
                "english_name": "AR'ARA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1192",
                "name": "ערערה-בנגב",
                "english_name": "AR'ARA-BANEGEV",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "591",
                "name": "עשרת",
                "english_name": "ASERET",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "32",
                "shem_moaatza": "גדרות"
            },
            {
                "semel_yeshuv": "53",
                "name": "עתלית",
                "english_name": "ATLIT",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "3748",
                "name": "עתניאל",
                "english_name": "OTNI'EL",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "1151",
                "name": "פארן",
                "english_name": "PARAN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "3768",
                "name": "פדואל",
                "english_name": "PEDU'EL",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "750",
                "name": "פדויים",
                "english_name": "PEDUYIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "838",
                "name": "פדיה",
                "english_name": "PEDAYA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "1104",
                "name": "פוריה - כפר עבודה",
                "english_name": "PORIYYA-KEFAR AVODA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1105",
                "name": "פוריה - נווה עובד",
                "english_name": "PORIYYA-NEWE OVED",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1313",
                "name": "פוריה עילית",
                "english_name": "PORIYYA ILLIT",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "537",
                "name": "פוריידיס",
                "english_name": "FUREIDIS",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "767",
                "name": "פורת",
                "english_name": "PORAT",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "749",
                "name": "פטיש",
                "english_name": "PATTISH",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "1185",
                "name": "פלך",
                "english_name": "PELEKH",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "597",
                "name": "פלמחים",
                "english_name": "PALMAHIM",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "27",
                "shem_moaatza": "גן רווה"
            },
            {
                "semel_yeshuv": "3723",
                "name": "פני חבר",
                "english_name": "PENE HEVER",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "3659",
                "name": "פסגות",
                "english_name": "PESAGOT",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "535",
                "name": "פסוטה",
                "english_name": "FASSUTA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2059",
                "name": "פעמי תש\"ז",
                "english_name": "PA'AME TASHAZ",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "3615",
                "name": "פצאל",
                "english_name": "PEZA'EL",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "536",
                "name": "פקיעין (בוקעייה)",
                "english_name": "PEQI'IN (BUQEI'A)",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "281",
                "name": "פקיעין חדשה",
                "english_name": "PEQI'IN HADASHA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "7800",
                "name": "פרדס חנה-כרכור",
                "english_name": "PARDES HANNA-KARKUR",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "171",
                "name": "פרדסיה",
                "english_name": "PARDESIYYA",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "599",
                "name": "פרוד",
                "english_name": "PAROD",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "2053",
                "name": "פרזון",
                "english_name": "PERAZON",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "1231",
                "name": "פרי גן",
                "english_name": "PERI GAN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "7900",
                "name": "פתח תקווה",
                "english_name": "PETAH TIQWA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "839",
                "name": "פתחיה",
                "english_name": "PETAHYA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "413",
                "name": "צאלים",
                "english_name": "ZE'ELIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1180",
                "name": "צביה",
                "english_name": "ZVIYYA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1213",
                "name": "צבעון",
                "english_name": "ZIV'ON",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "465",
                "name": "צובה",
                "english_name": "ZOVA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1136",
                "name": "צוחר",
                "english_name": "ZOHAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "1111",
                "name": "צופיה",
                "english_name": "ZOFIYYA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "3791",
                "name": "צופים",
                "english_name": "ZUFIN",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "198",
                "name": "צופית",
                "english_name": "ZOFIT",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "1150",
                "name": "צופר",
                "english_name": "ZOFAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "1102",
                "name": "צוקי ים",
                "english_name": "SHOSHANNAT HAAMAQIM(",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "1262",
                "name": "צוקים",
                "english_name": "MAHANE BILDAD",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "54",
                "shem_moaatza": "הערבה התיכונה"
            },
            {
                "semel_yeshuv": "1113",
                "name": "צור הדסה",
                "english_name": "ZUR HADASSA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1345",
                "name": "צור יצחק",
                "english_name": "ZUR YIZHAQ",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "276",
                "name": "צור משה",
                "english_name": "ZUR MOSHE",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "1148",
                "name": "צור נתן",
                "english_name": "ZUR NATAN",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "774",
                "name": "צוריאל",
                "english_name": "ZURI'EL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "1221",
                "name": "צורית",
                "english_name": "ZURIT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "613",
                "name": "ציפורי",
                "english_name": "ZIPPORI",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "796",
                "name": "צלפון",
                "english_name": "ZELAFON",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "636",
                "name": "צנדלה",
                "english_name": "SANDALA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "594",
                "name": "צפריה",
                "english_name": "ZAFRIYYA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "40",
                "shem_moaatza": "עמק לוד"
            },
            {
                "semel_yeshuv": "1079",
                "name": "צפרירים",
                "english_name": "ZAFRIRIM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "8000",
                "name": "צפת",
                "english_name": "ZEFAT",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "612",
                "name": "צרופה",
                "english_name": "ZERUFA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "567",
                "name": "צרעה",
                "english_name": "ZOR'A",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "334",
                "name": "קבוצת יבנה",
                "english_name": "QEVUZAT YAVNE",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "29",
                "shem_moaatza": "חבל יבנה"
            },
            {
                "semel_yeshuv": "3557",
                "name": "קדומים",
                "english_name": "QEDUMIM",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "195",
                "name": "קדימה-צורן",
                "english_name": "QADIMA-ZORAN",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "392",
                "name": "קדמה",
                "english_name": "QEDMA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "4025",
                "name": "קדמת צבי",
                "english_name": "QIDMAT ZEVI",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "3781",
                "name": "קדר",
                "english_name": "QEDAR",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "615",
                "name": "קדרון",
                "english_name": "QIDRON",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "28",
                "shem_moaatza": "ברנר"
            },
            {
                "semel_yeshuv": "1211",
                "name": "קדרים",
                "english_name": "QADDARIM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "766",
                "name": "קוממיות",
                "english_name": "QOMEMIYYUT",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "1179",
                "name": "קורנית",
                "english_name": "QORANIT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "1052",
                "name": "קטורה",
                "english_name": "QETURA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "1167",
                "name": "קיסריה",
                "english_name": "QESARIYYA",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "414",
                "name": "קלחים",
                "english_name": "QELAHIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "3601",
                "name": "קליה",
                "english_name": "QALYA",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "74",
                "shem_moaatza": "מגילות ים המלח"
            },
            {
                "semel_yeshuv": "638",
                "name": "קלנסווה",
                "english_name": "QALANSAWE",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "4024",
                "name": "קלע",
                "english_name": "QELA",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "1243",
                "name": "קציר",
                "english_name": "QAZIR",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "1347",
                "name": "קצר א-סר",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "68",
                "shem_moaatza": "נווה מדבר"
            },
            {
                "semel_yeshuv": "4100",
                "name": "קצרין",
                "english_name": "QAZRIN",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2620",
                "name": "קרית אונו",
                "english_name": "QIRYAT ONO",
                "semel_napa": "52",
                "shem_napa": "רמת גן",
                "semel_lishkat_mana": "52",
                "lishka": "רמת גן",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3611",
                "name": "קרית ארבע",
                "english_name": "QIRYAT ARBA",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "6800",
                "name": "קרית אתא",
                "english_name": "QIRYAT ATTA",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "9500",
                "name": "קרית ביאליק",
                "english_name": "QIRYAT BIALIK",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2630",
                "name": "קרית גת",
                "english_name": "QIRYAT GAT",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2300",
                "name": "קרית טבעון",
                "english_name": "QIRYAT TIV'ON",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "9600",
                "name": "קרית ים",
                "english_name": "QIRYAT YAM",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1137",
                "name": "קרית יערים",
                "english_name": "QIRYAT YE'ARIM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2039",
                "name": "קרית יערים (מוסד)",
                "english_name": "QIRYAT YE'ARIM(INSTI",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "8200",
                "name": "קרית מוצקין",
                "english_name": "QIRYAT MOTZKIN",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1034",
                "name": "קרית מלאכי",
                "english_name": "QIRYAT MAL'AKHI",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3746",
                "name": "קרית נטפים",
                "english_name": "QIRYAT NETAFIM",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "78",
                "name": "קרית ענבים",
                "english_name": "QIRYAT ANAVIM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "469",
                "name": "קרית עקרון",
                "english_name": "QIRYAT EQRON",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "412",
                "name": "קרית שלמה",
                "english_name": "QIRYAT SHELOMO",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "2800",
                "name": "קרית שמונה",
                "english_name": "QIRYAT SHEMONA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3640",
                "name": "קרני שומרון",
                "english_name": "QARNE SHOMERON",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "4006",
                "name": "קשת",
                "english_name": "QESHET",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "543",
                "name": "ראמה",
                "english_name": "RAME",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1334",
                "name": "ראס אל-עין",
                "english_name": "",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "990",
                "name": "ראס עלי",
                "english_name": "RAS ALI",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "2640",
                "name": "ראש העין",
                "english_name": "ROSH HAAYIN",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "26",
                "name": "ראש פינה",
                "english_name": "ROSH PINNA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3602",
                "name": "ראש צורים",
                "english_name": "ROSH ZURIM",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "8300",
                "name": "ראשון לציון",
                "english_name": "RISHON LEZIYYON",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "46",
                "lishka": "ראשון לציון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3795",
                "name": "רבבה",
                "english_name": "REVAVA",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "564",
                "name": "רבדים",
                "english_name": "REVADIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "354",
                "name": "רביבים",
                "english_name": "REVIVIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "1225",
                "name": "רביד",
                "english_name": "RAVID",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "390",
                "name": "רגבה",
                "english_name": "REGBA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "444",
                "name": "רגבים",
                "english_name": "REGAVIM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "1161",
                "name": "רהט",
                "english_name": "RAHAT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "2051",
                "name": "רווחה",
                "english_name": "REWAHA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "2016",
                "name": "רוויה",
                "english_name": "REWAYA",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "1341",
                "name": "רוח מדבר",
                "english_name": "RUAH MIDBAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "362",
                "name": "רוחמה",
                "english_name": "RUHAMA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "37",
                "shem_moaatza": "שער הנגב"
            },
            {
                "semel_yeshuv": "539",
                "name": "רומאנה",
                "english_name": "RUMMANE",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "65",
                "shem_moaatza": "אל-בטוף"
            },
            {
                "semel_yeshuv": "997",
                "name": "רומת הייב",
                "english_name": "RUMAT HEIB",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "65",
                "shem_moaatza": "אל-בטוף"
            },
            {
                "semel_yeshuv": "3619",
                "name": "רועי",
                "english_name": "RO'I",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "3782",
                "name": "רותם",
                "english_name": "ROTEM",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "854",
                "name": "רחוב",
                "english_name": "REHOV",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "8400",
                "name": "רחובות",
                "english_name": "REHOVOT",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3822",
                "name": "רחלים",
                "english_name": "REHELIM",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "48",
                "lishka": "אריאל",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "540",
                "name": "ריחאניה",
                "english_name": "REIHANIYYE",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "3568",
                "name": "ריחן",
                "english_name": "REHAN",
                "semel_napa": "71",
                "shem_napa": "ג'נין",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "542",
                "name": "ריינה",
                "english_name": "REINE",
                "semel_napa": "25",
                "shem_napa": "נצרת",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3565",
                "name": "רימונים",
                "english_name": "RIMMONIM",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "616",
                "name": "רינתיה",
                "english_name": "RINNATYA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "42",
                "lishka": "פתח תקוה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "922",
                "name": "רכסים",
                "english_name": "REKHASIM",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1069",
                "name": "רם-און",
                "english_name": "RAM-ON",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "4702",
                "name": "רמות",
                "english_name": "RAMOT",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "206",
                "name": "רמות השבים",
                "english_name": "RAMOT HASHAVIM",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "735",
                "name": "רמות מאיר",
                "english_name": "RAMOT ME'IR",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "445",
                "name": "רמות מנשה",
                "english_name": "RAMOT MENASHE",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "372",
                "name": "רמות נפתלי",
                "english_name": "RAMOT NAFTALI",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "8500",
                "name": "רמלה",
                "english_name": "RAMLA",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "8600",
                "name": "רמת גן",
                "english_name": "RAMAT GAN",
                "semel_napa": "52",
                "shem_napa": "רמת גן",
                "semel_lishkat_mana": "52",
                "lishka": "רמת גן",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "135",
                "name": "רמת דוד",
                "english_name": "RAMAT DAWID",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "184",
                "name": "רמת הכובש",
                "english_name": "RAMAT HAKOVESH",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "335",
                "name": "רמת השופט",
                "english_name": "RAMAT HASHOFET",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "13",
                "shem_moaatza": "מגידו"
            },
            {
                "semel_yeshuv": "2650",
                "name": "רמת השרון",
                "english_name": "RAMAT HASHARON",
                "semel_napa": "51",
                "shem_napa": "תל אביב",
                "semel_lishkat_mana": "57",
                "lishka": "הרצליה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "178",
                "name": "רמת יוחנן",
                "english_name": "RAMAT YOHANAN",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "122",
                "name": "רמת ישי",
                "english_name": "RAMAT YISHAY",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "4701",
                "name": "רמת מגשימים",
                "english_name": "RAMAT MAGSHIMIM",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "339",
                "name": "רמת צבי",
                "english_name": "RAMAT ZEVI",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "460",
                "name": "רמת רזיאל",
                "english_name": "RAMAT RAZI'EL",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "127",
                "name": "רמת רחל",
                "english_name": "RAMAT RAHEL",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "789",
                "name": "רנן",
                "english_name": "RANNEN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "713",
                "name": "רעים",
                "english_name": "RE'IM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "8700",
                "name": "רעננה",
                "english_name": "RA'ANANA",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1228",
                "name": "רקפת",
                "english_name": "RAQEFET",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "247",
                "name": "רשפון",
                "english_name": "RISHPON",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "437",
                "name": "רשפים",
                "english_name": "RESHAFIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "1260",
                "name": "רתמים",
                "english_name": "RETAMIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "324",
                "name": "שאר ישוב",
                "english_name": "SHE'AR YASHUV",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "282",
                "name": "שבי ציון",
                "english_name": "SHAVE ZIYYON",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "3571",
                "name": "שבי שומרון",
                "english_name": "SHAVE SHOMERON",
                "semel_napa": "72",
                "shem_napa": "שכם",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "913",
                "name": "שבלי - אום אל-גנם",
                "english_name": "SHIBLI",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1286",
                "name": "שגב-שלום",
                "english_name": "SEGEV-SHALOM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "721",
                "name": "שדה אילן",
                "english_name": "SEDE ILAN",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "304",
                "name": "שדה אליהו",
                "english_name": "SEDE ELIYYAHU",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "861",
                "name": "שדה אליעזר",
                "english_name": "SEDE ELI'EZER",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "55",
                "shem_moaatza": "מבואות החרמון"
            },
            {
                "semel_yeshuv": "885",
                "name": "שדה בוקר",
                "english_name": "SEDE BOQER",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "36",
                "name": "שדה דוד",
                "english_name": "SEDE DAWID",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "284",
                "name": "שדה ורבורג",
                "english_name": "SEDE WARBURG",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "293",
                "name": "שדה יואב",
                "english_name": "SEDE YO'AV",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "35",
                "shem_moaatza": "יואב"
            },
            {
                "semel_yeshuv": "142",
                "name": "שדה יעקב",
                "english_name": "SEDE YA'AQOV",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "2008",
                "name": "שדה יצחק",
                "english_name": "SEDE YIZHAQ",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "18",
                "name": "שדה משה",
                "english_name": "SEDE MOSHE",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "259",
                "name": "שדה נחום",
                "english_name": "SEDE NAHUM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "329",
                "name": "שדה נחמיה",
                "english_name": "SEDE NEHEMYA",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "1058",
                "name": "שדה ניצן",
                "english_name": "SEDE NIZZAN",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "739",
                "name": "שדה עוזיהו",
                "english_name": "SEDE UZZIYYAHU",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "2049",
                "name": "שדה צבי",
                "english_name": "SEDE ZEVI",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "327",
                "name": "שדות ים",
                "english_name": "SEDOT YAM",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "15",
                "shem_moaatza": "חוף הכרמל"
            },
            {
                "semel_yeshuv": "27",
                "name": "שדות מיכה",
                "english_name": "SEDOT MIKHA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1223",
                "name": "שדי אברהם",
                "english_name": "SEDE AVRAHAM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "2015",
                "name": "שדי חמד",
                "english_name": "SEDE HEMED",
                "semel_napa": "42",
                "shem_napa": "פתח תקווה",
                "semel_lishkat_mana": "47",
                "lishka": "כפר סבא",
                "semel_moatza_ezorit": "20",
                "shem_moaatza": "דרום השרון"
            },
            {
                "semel_yeshuv": "2057",
                "name": "שדי תרומות",
                "english_name": "SEDE TERUMOT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "555",
                "name": "שדמה",
                "english_name": "SHEDEMA",
                "semel_napa": "44",
                "shem_napa": "רחובות",
                "semel_lishkat_mana": "44",
                "lishka": "רחובות",
                "semel_moatza_ezorit": "32",
                "shem_moaatza": "גדרות"
            },
            {
                "semel_yeshuv": "306",
                "name": "שדמות דבורה",
                "english_name": "SHADMOT DEVORA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "3578",
                "name": "שדמות מחולה",
                "english_name": "SHADMOT MEHOLA",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "1031",
                "name": "שדרות",
                "english_name": "SEDEROT",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "741",
                "name": "שואבה",
                "english_name": "SHO'EVA",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "761",
                "name": "שובה",
                "english_name": "SHUVA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "394",
                "name": "שובל",
                "english_name": "SHOVAL",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "1304",
                "name": "שוהם",
                "english_name": "SHOHAM",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "614",
                "name": "שומרה",
                "english_name": "SHOMERA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "1265",
                "name": "שומריה",
                "english_name": "SHOMERIYYA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "415",
                "name": "שוקדה",
                "english_name": "SHOQEDA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "456",
                "name": "שורש",
                "english_name": "SHORESH",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "1235",
                "name": "שורשים",
                "english_name": "SHORASHIM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "224",
                "name": "שושנת העמקים",
                "english_name": "SHOSHANNAT HAAMAQIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "16",
                "shem_moaatza": "עמק חפר"
            },
            {
                "semel_yeshuv": "527",
                "name": "שזור",
                "english_name": "SHEZOR",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "7",
                "name": "שחר",
                "english_name": "SHAHAR",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "1266",
                "name": "שחרות",
                "english_name": "SHAHARUT",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "865",
                "name": "שיבולים",
                "english_name": "SHIBBOLIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "1267",
                "name": "שיטים",
                "english_name": "NAHAL SHITTIM",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "63",
                "lishka": "אילת",
                "semel_moatza_ezorit": "53",
                "shem_moaatza": "חבל אילות"
            },
            {
                "semel_yeshuv": "658",
                "name": "שייח' דנון",
                "english_name": "SHEIKH DANNUN",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "3641",
                "name": "שילה",
                "english_name": "SHILO",
                "semel_napa": "74",
                "shem_napa": "ראמאללה",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "73",
                "shem_moaatza": "מטה בנימין"
            },
            {
                "semel_yeshuv": "1165",
                "name": "שילת",
                "english_name": "SHILAT",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "25",
                "shem_moaatza": "חבל מודיעין"
            },
            {
                "semel_yeshuv": "1160",
                "name": "שכניה",
                "english_name": "SHEKHANYA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "873",
                "name": "שלווה",
                "english_name": "SHALWA",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "1373",
                "name": "שלווה במדבר",
                "english_name": "SHALVA BAMIDBAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "48",
                "shem_moaatza": "רמת נגב"
            },
            {
                "semel_yeshuv": "439",
                "name": "שלוחות",
                "english_name": "SHELUHOT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "812",
                "name": "שלומי",
                "english_name": "SHELOMI",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1364",
                "name": "שלומית",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "366",
                "name": "שמיר",
                "english_name": "SHAMIR",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "3784",
                "name": "שמעה",
                "english_name": "SHIM'A",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "432",
                "name": "שמרת",
                "english_name": "SHAMERAT",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "4",
                "shem_moaatza": "מטה אשר"
            },
            {
                "semel_yeshuv": "1337",
                "name": "שמשית",
                "english_name": "",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "1287",
                "name": "שני",
                "english_name": "SHANI",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "1132",
                "name": "שניר",
                "english_name": "SENIR",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "1",
                "shem_moaatza": "הגליל העליון"
            },
            {
                "semel_yeshuv": "538",
                "name": "שעב",
                "english_name": "SHA'AB",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1299",
                "name": "שעורים",
                "english_name": "SE'ORIM",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "4009",
                "name": "שעל",
                "english_name": "SHA'AL",
                "semel_napa": "29",
                "shem_napa": "גולן",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "71",
                "shem_moaatza": "גולן"
            },
            {
                "semel_yeshuv": "856",
                "name": "שעלבים",
                "english_name": "SHA'ALVIM",
                "semel_napa": "43",
                "shem_napa": "רמלה",
                "semel_lishkat_mana": "43",
                "lishka": "רמלה",
                "semel_moatza_ezorit": "30",
                "shem_moaatza": "גזר"
            },
            {
                "semel_yeshuv": "661",
                "name": "שער אפרים",
                "english_name": "SHA'AR EFRAYIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "264",
                "name": "שער הגולן",
                "english_name": "SHA'AR HAGOLAN",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "237",
                "name": "שער העמקים",
                "english_name": "SHA'AR HAAMAQIM",
                "semel_napa": "31",
                "shem_napa": "חיפה",
                "semel_lishkat_mana": "31",
                "lishka": "חיפה",
                "semel_moatza_ezorit": "12",
                "shem_moaatza": "זבולון"
            },
            {
                "semel_yeshuv": "921",
                "name": "שער מנשה",
                "english_name": "SHA'AR MENASHE",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "3720",
                "name": "שערי תקווה",
                "english_name": "SHA'ARE TIQWA",
                "semel_napa": "73",
                "shem_napa": "טול כרם",
                "semel_lishkat_mana": "349",
                "lishka": "ראש העין",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "232",
                "name": "שפיים",
                "english_name": "SHEFAYIM",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "692",
                "name": "שפיר",
                "english_name": "SHAFIR",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "34",
                "shem_moaatza": "שפיר"
            },
            {
                "semel_yeshuv": "846",
                "name": "שפר",
                "english_name": "SHEFER",
                "semel_napa": "21",
                "shem_napa": "צפת",
                "semel_lishkat_mana": "21",
                "lishka": "צפת",
                "semel_moatza_ezorit": "2",
                "shem_moaatza": "מרום הגליל"
            },
            {
                "semel_yeshuv": "8800",
                "name": "שפרעם",
                "english_name": "SHEFAR'AM",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "25",
                "lishka": "נצרת עילית",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "3649",
                "name": "שקד",
                "english_name": "SHAQED",
                "semel_napa": "71",
                "shem_napa": "ג'נין",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "72",
                "shem_moaatza": "שומרון"
            },
            {
                "semel_yeshuv": "1233",
                "name": "שקף",
                "english_name": "SHEQEF",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "292",
                "name": "שרונה",
                "english_name": "SHARONA",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "3",
                "shem_moaatza": "הגליל התחתון"
            },
            {
                "semel_yeshuv": "1114",
                "name": "שריגים (לי-און)",
                "english_name": "LI-ON",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "126",
                "name": "שריד",
                "english_name": "SARID",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "398",
                "name": "שרשרת",
                "english_name": "SHARSHERET",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "1045",
                "name": "שתולה",
                "english_name": "SHETULA",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "24",
                "lishka": "עכו",
                "semel_moatza_ezorit": "52",
                "shem_moaatza": "מעלה יוסף"
            },
            {
                "semel_yeshuv": "763",
                "name": "שתולים",
                "english_name": "SHETULIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "2062",
                "name": "תאשור",
                "english_name": "TE'ASHUR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "2061",
                "name": "תדהר",
                "english_name": "TIDHAR",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "41",
                "shem_moaatza": "בני שמעון"
            },
            {
                "semel_yeshuv": "1172",
                "name": "תובל",
                "english_name": "TUVAL",
                "semel_napa": "24",
                "shem_napa": "עכו",
                "semel_lishkat_mana": "20",
                "lishka": "כרמיאל",
                "semel_moatza_ezorit": "56",
                "shem_moaatza": "משגב"
            },
            {
                "semel_yeshuv": "3558",
                "name": "תומר",
                "english_name": "TOMER",
                "semel_napa": "75",
                "shem_napa": "ירדן )יריחו(",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "75",
                "shem_moaatza": "ערבות הירדן"
            },
            {
                "semel_yeshuv": "1083",
                "name": "תושיה",
                "english_name": "TUSHIYYA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "163",
                "name": "תימורים",
                "english_name": "TIMMORIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "10",
                "name": "תירוש",
                "english_name": "TIROSH",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "5000",
                "name": "תל אביב - יפו",
                "english_name": "TEL AVIV - YAFO",
                "semel_napa": "51",
                "shem_napa": "תל אביב",
                "semel_lishkat_mana": "51",
                "lishka": "ת\"א - מרכז",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "84",
                "name": "תל יוסף",
                "english_name": "TEL YOSEF",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "8",
                "shem_moaatza": "הגלבוע"
            },
            {
                "semel_yeshuv": "287",
                "name": "תל יצחק",
                "english_name": "TEL YIZHAQ",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "19",
                "shem_moaatza": "חוף השרון"
            },
            {
                "semel_yeshuv": "154",
                "name": "תל מונד",
                "english_name": "TEL MOND",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "103",
                "name": "תל עדשים",
                "english_name": "TEL ADASHIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "719",
                "name": "תל קציר",
                "english_name": "TEL QAZIR",
                "semel_napa": "22",
                "shem_napa": "כנרת",
                "semel_lishkat_mana": "22",
                "lishka": "טבריה",
                "semel_moatza_ezorit": "6",
                "shem_moaatza": "עמק הירדן"
            },
            {
                "semel_yeshuv": "1054",
                "name": "תל שבע",
                "english_name": "TEL SHEVA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "0",
                "shem_moaatza": ""
            },
            {
                "semel_yeshuv": "1283",
                "name": "תל תאומים",
                "english_name": "TEL TE'OMIM",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "7",
                "shem_moaatza": "עמק המעיינות"
            },
            {
                "semel_yeshuv": "3719",
                "name": "תלם",
                "english_name": "TELEM",
                "semel_napa": "77",
                "shem_napa": "חברון",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "78",
                "shem_moaatza": "הר חברון"
            },
            {
                "semel_yeshuv": "1051",
                "name": "תלמי אליהו",
                "english_name": "TALME ELIYYAHU",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "2003",
                "name": "תלמי אלעזר",
                "english_name": "TALME EL'AZAR",
                "semel_napa": "32",
                "shem_napa": "חדרה",
                "semel_lishkat_mana": "32",
                "lishka": "חדרה",
                "semel_moatza_ezorit": "14",
                "shem_moaatza": "מנשה"
            },
            {
                "semel_yeshuv": "2050",
                "name": "תלמי ביל\"ו",
                "english_name": "TALME BILU",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "1237",
                "name": "תלמי יוסף",
                "english_name": "TALME YOSEF",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "38",
                "shem_moaatza": "אשכול"
            },
            {
                "semel_yeshuv": "727",
                "name": "תלמי יחיאל",
                "english_name": "TALME YEHI'EL",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "33",
                "shem_moaatza": "באר טוביה"
            },
            {
                "semel_yeshuv": "744",
                "name": "תלמי יפה",
                "english_name": "TALME YAFE",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "36",
                "shem_moaatza": "חוף אשקלון"
            },
            {
                "semel_yeshuv": "814",
                "name": "תלמים",
                "english_name": "TELAMIM",
                "semel_napa": "61",
                "shem_napa": "אשקלון",
                "semel_lishkat_mana": "61",
                "lishka": "אשקלון",
                "semel_moatza_ezorit": "50",
                "shem_moaatza": "לכיש"
            },
            {
                "semel_yeshuv": "1244",
                "name": "תמרת",
                "english_name": "TIMRAT",
                "semel_napa": "23",
                "shem_napa": "עפולה",
                "semel_lishkat_mana": "23",
                "lishka": "עפולה",
                "semel_moatza_ezorit": "9",
                "shem_moaatza": "עמק יזרעאל"
            },
            {
                "semel_yeshuv": "2002",
                "name": "תנובות",
                "english_name": "TENUVOT",
                "semel_napa": "41",
                "shem_napa": "השרון",
                "semel_lishkat_mana": "41",
                "lishka": "נתניה",
                "semel_moatza_ezorit": "18",
                "shem_moaatza": "לב השרון"
            },
            {
                "semel_yeshuv": "752",
                "name": "תעוז",
                "english_name": "TA'OZ",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            },
            {
                "semel_yeshuv": "709",
                "name": "תפרח",
                "english_name": "TIFRAH",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "42",
                "shem_moaatza": "מרחבים"
            },
            {
                "semel_yeshuv": "665",
                "name": "תקומה",
                "english_name": "TEQUMA",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "39",
                "shem_moaatza": "שדות נגב"
            },
            {
                "semel_yeshuv": "3563",
                "name": "תקוע",
                "english_name": "TEQOA",
                "semel_napa": "76",
                "shem_napa": "בית לחם",
                "semel_lishkat_mana": "11",
                "lishka": "ירושלים",
                "semel_moatza_ezorit": "76",
                "shem_moaatza": "גוש עציון"
            },
            {
                "semel_yeshuv": "1346",
                "name": "תראבין א-צנעא (ישוב)",
                "english_name": "",
                "semel_napa": "62",
                "shem_napa": "באר שבע",
                "semel_lishkat_mana": "62",
                "lishka": "באר שבע",
                "semel_moatza_ezorit": "69",
                "shem_moaatza": "אל קסום"
            },
            {
                "semel_yeshuv": "778",
                "name": "תרום",
                "english_name": "TARUM",
                "semel_napa": "11",
                "shem_napa": "ירושלים",
                "semel_lishkat_mana": "13",
                "lishka": "בית שמש",
                "semel_moatza_ezorit": "26",
                "shem_moaatza": "מטה יהודה"
            }
        ];
        this.onSubmit = () => {
            this.obj.product = this.dates[0].title;
            this.obj.totalPrice = this.lastPrice;
            if (this.obj.firstName && this.obj.lastName && this.obj.phone && this.obj.city && this.obj.fullAddress && this.obj.product && this.obj.qnt && this.obj.totalPrice) {
                if ((this.obj.firstName.length >= 2) && (this.obj.lastName.length >= 2) && (this.obj.phone.length === 10) && (this.obj.fullAddress.length > 5) && (this.obj.qnt >= 3)) {
                    // console.log("order obj:", this.obj);
                    this.api.insertOrder(this.obj);
                    // console.log("ORDER IS FINE");
                    this.orderSentMSG = " ההזמנה נקלטה, הנך מועבר לעמוד הבית! ";
                    setInterval(function () { window.location.pathname = "/"; }, 2000);
                }
            }
            else {
                this.validateForm();
            }
        };
        // GET ID BY ROUTE
        this.route.params.subscribe(routeParams => {
            this.id = routeParams.id;
        });
    }
    ngOnInit() {
        this.scrollTop();
        this.calcPrice(this.obj.totalPrice);
        // GET DATES ARRAY
        this.dates = this.api.pricingCards;
        // console.log("dates:", this.dates)
        const newArray = this.dates.filter(date => date.id == this.id);
        this.dates = newArray;
        // console.log("new dates:", this.dates)
    }
    validateForm() {
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
                document.getElementById('firstName').style.color = "rgb(53, 187, 0)";
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
                document.getElementById('lastName').style.color = "rgb(53, 187, 0)";
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
                document.getElementById('phone').style.color = "rgb(53, 187, 0)";
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
        // CITY VALIDATION
        if (this.obj.city) {
            this.cityMSG = "";
            document.getElementById('city-label').style.color = "rgb(53, 187, 0)";
            document.getElementById('city').style.color = "rgb(53, 187, 0)";
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
                document.getElementById('address').style.color = "rgb(53, 187, 0)";
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
        if (this.obj.qnt) {
            if (this.obj.qnt >= 3) {
                this.qntMSG = "";
                document.getElementById('qnt-label').style.color = "rgb(53, 187, 0)";
                document.getElementById('qnt').style.color = "rgb(53, 187, 0)";
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
    calcPrice(qnt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id) {
                this.obj.totalPrice = this.dates[0].price * qnt;
                console.log(this.obj.totalPrice);
                if (qnt >= 5)
                    this.lastPrice = this.obj.totalPrice + "₪";
                else if (qnt < 5 && qnt >= 3) {
                    this.lastPrice = this.obj.totalPrice + 20 + "₪";
                }
                else if (qnt < 3)
                    this.lastPrice = "...";
            }
        });
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 127, vars: 26, consts: [[1, "row", "no-gutters", "d-flex", "justify-content-center"], [1, "col-12"], [1, "row", "no-gutters", "p-3"], [1, "col-xl-6", "col-md-12", "d-flex", "justify-content-center", "order-form"], [1, "header"], [1, "text"], [1, "col-12", "d-flex", "justify-content-center", "my-5"], [3, "change"], ["orderForm", "ngForm"], [1, "form-row"], [1, "form-group", "col-md-4", "col-sm-12"], ["for", "firstName", "id", "firstName-label"], ["type", "text", "name", "firstName", "id", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lastName", "id", "lastName-label"], ["type", "text", "name", "lastName", "id", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone", "id", "phone-label"], ["type", "tel", "name", "phone", "id", "phone", "minlength", "10", "maxlength", "10", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group col-md-5 col-sm-12", 4, "ngIf"], [1, "form-group", "col-md-7", "col-sm-12"], ["for", "address", "id", "address-label"], ["type", "text", "name", "fullAddress", "id", "address", "placeholder", "\u05E8\u05D7\u05D5\u05D1, \u05D1\u05E0\u05D9\u05D9\u05DF, \u05D3\u05D9\u05E8\u05D4", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-6", "col-sm-12"], ["for", "product"], ["type", "text", "name", "product", "id", "product", "disabled", "", "required", "", 1, "form-control", 3, "value"], [1, "form-group", "col-md-3", "col-sm-12"], ["for", "qnt", "id", "qnt-label"], ["type", "number", "name", "qnt", "id", "qnt", "min", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["for", "totalP"], ["type", "text", "name", "totalP", "id", "totalP", "disabled", "", "required", "", 1, "form-control", 3, "value"], ["type", "submit", 1, "btn", "btn-success", "float-left", 3, "click"], [1, "alertMsgs"], [1, "my-1"], [1, "my-4"], [4, "ngIf"], [1, "loaderMSG", "mt-3"], [1, "col-xl-6", "col-md-12", "d-flex", "justify-content-center"], [1, "row", "no-gutters", "order-total"], [1, "col-md-12"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "table", "table-bordered"], [1, "text-muted"], ["class", "col-md-5 order-img", 4, "ngIf"], [1, "form-group", "col-md-5", "col-sm-12"], ["for", "city", "id", "city-label"], ["id", "city", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "city", "id", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "status", 1, "spinner-grow", "mr-5", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"], [1, "col-md-5", "order-img"], ["alt", "\u05DE\u05D2'\u05D4\u05D5\u05DC \u05E2\u05E1\u05D9\u05E1\u05D9", 1, "card-img", 3, "src"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u05D0\u05E0\u05D0 \u05DE\u05DC\u05D0\u05D5 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05E9\u05DC\u05D9\u05DD \u05D0\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u05DC\u05D0\u05D7\u05E8 \u05E9\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05EA\u05D9\u05E7\u05DC\u05D8, \u05E6\u05D5\u05D5\u05EA \u05D4\u05EA\u05DE\u05E8 \u05D9\u05E6\u05D5\u05E8 \u05E2\u05DE\u05DB\u05DD \u05E7\u05E9\u05E8 \u05D1\u05D4\u05E7\u05D3\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OrderComponent_Template_form_change_13_listener() { return ctx.validateForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_19_listener($event) { return ctx.obj.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "*\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_23_listener($event) { return ctx.obj.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "*\u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_27_listener($event) { return ctx.obj.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, OrderComponent_div_29_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OrderComponent_div_30_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "*\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05DC\u05D0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_34_listener($event) { return ctx.obj.fullAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*\u05DE\u05D5\u05E6\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "*\u05DB\u05DE\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_43_listener($event) { return ctx.obj.qnt = $event; })("change", function OrderComponent_Template_input_change_43_listener() { return ctx.calcPrice(ctx.obj.qnt); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "*\u05DE\u05D7\u05D9\u05E8 \u05E1\u05D5\u05E4\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_50_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u05E1\u05D9\u05D5\u05DD \u05D4\u05D6\u05DE\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, OrderComponent_div_72_Template, 4, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, OrderComponent_hr_75_Template, 1, 0, "hr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u05E4\u05D9\u05E8\u05D5\u05D8 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u05DE\u05D5\u05E6\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\u05DB\u05DE\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u05E2\u05DC\u05D5\u05EA \u05DE\u05E9\u05DC\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u05DE\u05D7\u05D9\u05E8 \u05E1\u05D5\u05E4\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, OrderComponent_td_100_Template, 2, 0, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, OrderComponent_td_101_Template, 2, 0, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, OrderComponent_td_102_Template, 3, 0, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "* \u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \u05DB\u05DE\u05D5\u05EA \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D4\u05D9\u05E0\u05D4 3 \u05E7\u05D9\u05DC\u05D5 \u05EA\u05DE\u05E8\u05D9\u05DD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "* \u05E2\u05DC\u05D5\u05EA \u05DE\u05E9\u05DC\u05D5\u05D7 20\u20AA | \u05DE\u05E9\u05DC\u05D5\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u05D7\u05D9\u05E0\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " \u05D1\u05D4\u05D6\u05DE\u05E0\u05EA 5 \u05E7\u05D9\u05DC\u05D5 \u05EA\u05DE\u05E8\u05D9\u05DD \u05D5\u05DE\u05E2\u05DC\u05D4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "* \u05E0\u05D9\u05EA\u05DF \u05DC\u05E9\u05DC\u05D1 \u05D0\u05EA \u05E9\u05E0\u05D9 \u05E1\u05D5\u05D2\u05D9 \u05D4\u05EA\u05DE\u05E8\u05D9\u05DD \u05D1\u05D4\u05D6\u05DE\u05E0\u05D4 \u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05EA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "* \u05D4\u05D2\u05E2\u05EA \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D4\u05D9\u05E0\u05D4 \u05E2\u05D3 10 \u05D9\u05DE\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD \u05DE\u05D9\u05D5\u05DD \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05D9\u05D1\u05D5\u05E6\u05E2 \u05D1\u05D9\u05D5\u05DD \u05D4\u05D2\u05E2\u05EA \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D1\u05D1\u05D9\u05D8 \u05D0\u05D5 \u05D1\u05DE\u05D6\u05D5\u05DE\u05DF.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, OrderComponent_div_126_Template, 2, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u05D1\u05D7\u05E8\u05EA \u05D1", ctx.dates[0].title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.obj.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.obj.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.obj.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.width > 1028);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1028 > ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.obj.fullAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.dates[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.obj.qnt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.obj.totalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.firstNameMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lastNameMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.phoneNumMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cityMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fullAddressMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.qntMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderSentMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.orderSentMSG, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 500 > ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dates[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.obj.qnt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.obj.qnt >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 5 > ctx.obj.qnt && ctx.obj.qnt >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 3 > ctx.obj.qnt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lastPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.width > 500);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".order-form[_ngcontent-%COMP%] {\n  text-align: right;\n  border-left: 3px solid rgba(0, 0, 0, 0.055);\n  flex-direction: column;\n}\n.order-form[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #815b3e;\n  font-size: 50px;\n  font-weight: 600;\n  padding: 20px;\n}\n.order-form[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.order-total[_ngcontent-%COMP%] {\n  text-align: right;\n  height: 100%;\n  display: flex;\n  padding: 30px 0px;\n}\n.order-total[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.order-total[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n@media (max-width: 1200px) {\n  .order-form[_ngcontent-%COMP%] {\n    border-left: none;\n  }\n}\n@media (max-width: 500px) {\n  .order-form[_ngcontent-%COMP%] {\n    border-left: none;\n  }\n  .order-form[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .order-total[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    width: 100%;\n  }\n  .order-total[_ngcontent-%COMP%]   .order-img[_ngcontent-%COMP%] {\n    padding: 30px;\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    max-height: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUVBO0VBQ0k7SUFDSSxpQkFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFBTjtFQUNNO0lBQ0ksZUFBQTtFQUNWOztFQUVFO0lBQ0ksaUJBQUE7SUFDQSxXQUFBO0VBQ047RUFBTTtJQUNJLGFBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFFVjtBQUNGIiwiZmlsZSI6ImFwcC9wYWdlcy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlci1mb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNTUpO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjODE1YjNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcmRlci10b3RhbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEyMDBweCl7XHJcbiAgICAub3JkZXItZm9ybXtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpe1xyXG4gICAgLm9yZGVyLWZvcm17XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vcmRlci10b3RhbHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAub3JkZXItaW1ne1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DAHP":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-reviews/home-reviews.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeReviewsComponent", function() { return HomeReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");



class HomeReviewsComponent {
    // public reviewsCards;
    constructor(api) {
        this.api = api;
        // this.reviewsCards = this.api.reviewsCards;
        // console.log("Reviews Card:", this.reviewsCards)
    }
    ngOnInit() {
    }
}
HomeReviewsComponent.ɵfac = function HomeReviewsComponent_Factory(t) { return new (t || HomeReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
HomeReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeReviewsComponent, selectors: [["app-home-reviews"]], decls: 142, vars: 0, consts: [["id", "reviews", 1, "col-12"], ["data-flickity", "{ \"wrapAround\":true, \"autoPlay\": 2000, \"pageDots\": false, \"prevNextButtons\": false, \"pauseAutoPlayOnHover\": false }", 1, "carousel"], [1, "carousel-cell"], [1, "card", "middle"], [1, "front"], ["src", "../../../assets/images/avatars/img_avatar2.png", "alt", "Avatar", 1, "avatar"], [1, "review-name", "pt-1"], [1, "review-city"], [1, "fas", "fa-star"], [1, "review-text"], ["src", "../../../assets/images/avatars/img_avatar.png", "alt", "Avatar", 1, "avatar"], ["src", "../../../assets/images/avatars/avatar5.png", "alt", "Avatar", 1, "avatar"]], template: function HomeReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05D9\u05E8\u05D3\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u05D4\u05D6\u05DE\u05E0\u05EA\u05D9 \u05EA\u05DE\u05E8 \u05DE\u05D2'\u05D4\u05D5\u05DC \u05E2\u05E1\u05D9\u05E1\u05D9 \u05D5\u05D4\u05DD \u05D4\u05D9\u05D5 \u05E4\u05E9\u05D5\u05D8 \u05DE\u05E2\u05D5\u05DC\u05D9\u05DD! \u05D4\u05D9\u05D7\u05E1 \u05E9\u05DC \u05E6\u05D5\u05D5\u05EA \u05D4\u05EA\u05DE\u05E8 \u05DE\u05D3\u05D4\u05D9\u05DD! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u05D2'\u05D5\u05D9 \u05E8\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u05E7\u05E8\u05D9\u05EA \u05D1\u05D9\u05D0\u05DC\u05D9\u05E7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05D4\u05D6\u05DE\u05E0\u05EA\u05D9 5 \u05E7\u05D9\u05DC\u05D5 \u05DE\u05D4\u05DE\u05D2'\u05D4\u05D5\u05DC \u05D4\u05E2\u05E1\u05D9\u05E1\u05D9. \u05D4\u05EA\u05D0\u05D4\u05D1\u05EA\u05D9! \u05D4\u05EA\u05DE\u05E8 \u05D4\u05DB\u05D9 \u05D8\u05E2\u05D9\u05DD \u05E9\u05D0\u05DB\u05DC\u05EA\u05D9 \u05D1\u05E4\u05E2\u05E8, \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D0\u05D6\u05DE\u05D9\u05DF \u05E9\u05D5\u05D1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u05E2\u05D3\u05DF \u05D3\u05D5\u05D0\u05E0\u05D9\u05D0\u05E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u05D1\u05EA \u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u05EA\u05DE\u05E8\u05D9\u05DD \u05E0\u05D4\u05D3\u05E8\u05D9\u05DD \u05D5\u05D8\u05E2\u05D9\u05DE\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3!!! \u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9! \u05E4\u05E9\u05D5\u05D8 \u05DB\u05D9\u05D9\u05E3 \u05DC\u05E7\u05E0\u05D5\u05EA \u05D0\u05D9\u05DF \u05E1\u05E4\u05E7 \u05E9\u05D0\u05D7\u05D6\u05D5\u05E8 \u05DC\u05E7\u05E0\u05D5\u05EA \u05DE\u05D4\u05EA\u05DE\u05E8! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u05D8\u05D5\u05D1\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u05D4\u05D5\u05D3 \u05D4\u05E9\u05E8\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u05D8\u05E2\u05DE\u05E0\u05D5 \u05DE\u05D4\u05EA\u05DE\u05E8\u05D9\u05DD \u05E9\u05E8\u05DB\u05E9\u05E0\u05D5.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u05D4\u05DD \u05E4\u05E9\u05D5\u05D8- \u05DE \u05E2 \u05D5 \u05DC \u05D9 \u05DD!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u05E9\u05DE\u05D7\u05D9\u05DD \u05E9\u05D4\u05DB\u05E8\u05E0\u05D5 \u05D0\u05EA\u05DB\u05DD! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u05DE\u05E9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u05E0\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u05E8\u05E7 \u05DC\u05E6\u05D9\u05D9\u05DF \u05E9\u05D4\u05EA\u05DE\u05E8\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u05E4\u05E9\u05D5\u05D8 \u05DC\u05D4\u05D9\u05D8! \u05E8\u05D5\u05D0\u05D9\u05DD \u05E9\u05D6\u05D4 \u05D8\u05E8\u05D9 \u05D5\u05DC\u05D0 \u05E9\u05DB\u05D1 \u05D0\u05E6\u05DC\u05DB\u05DD \u05E9\u05E0\u05D4 \u05D1\u05D4\u05E7\u05E4\u05D0\u05D4. \u05DE\u05D6\u05DE\u05D9\u05DF \u05DB\u05D1\u05E8 \u05DE\u05E2\u05DB\u05E9\u05D9\u05D5 \u05E2\u05D5\u05D3 5 \u05E7\u05D9\u05DC\u05D5! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u05D7\u05D5\u05D5\u05D4 \u05E9\u05DE\u05D5\u05D0\u05DC\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u05D0\u05E9\u05E7\u05DC\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u05EA\u05DE\u05E8\u05D9\u05DD \u05D8\u05E2\u05D9\u05DE\u05D9\u05DD \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3! \u05D4\u05D2\u05D9\u05E2 \u05D0\u05DC\u05D9\u05D9 \u05D9\u05D5\u05D7\u05D0\u05D9, \u05D1\u05D7\u05D5\u05E8 \u05E6\u05E2\u05D9\u05E8 \u05D5\u05E0\u05D7\u05DE\u05D3, \u05DC\u05D4\u05D1\u05D9\u05D0 \u05DC\u05D9 \u05D0\u05EA \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05E2\u05D3 \u05D4\u05D1\u05D9\u05EA! \u05D0\u05D9\u05DF \u05E1\u05E4\u05E7 \u05E9\u05D0\u05D6\u05DE\u05D9\u05DF \u05E2\u05D5\u05D3!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u05E1\u05D9\u05D5\u05DF \u05E9\u05DC\u05D5\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u05D4\u05E8\u05E6\u05DC\u05D9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u05D0\u05D9\u05DF \u05D3\u05D1\u05E8\u05D9\u05DD \u05DB\u05D0\u05DC\u05D4, \u05EA\u05DE\u05E8\u05D9\u05DD \u05DE\u05DE\u05E9 \u05DE\u05DE\u05E9 \u05D8\u05E2\u05D9\u05DE\u05D9\u05DD \u05D5\u05D2\u05D3\u05D5\u05DC\u05D9\u05DD! \u05D0\u05E9\u05DE\u05D7 \u05DC\u05D4\u05D6\u05DE\u05D9\u05DF \u05E9\u05D5\u05D1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u05D0\u05D9\u05EA\u05DF \u05D1\u05DF \u05D7\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u05E7\u05E8\u05D9\u05EA \u05D7\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u05D4\u05D6\u05DE\u05E0\u05EA\u05D9 5 \u05E7\u05D9\u05DC\u05D5 \u05DE\u05D2'\u05D4\u05D5\u05DC \u05D9\u05D1\u05E9 \u05E4\u05E8\u05DE\u05D9\u05D5\u05DD, \u05EA\u05DE\u05E8 \u05D8\u05E2\u05D9\u05DD \u05D5\u05D0\u05D9\u05DB\u05D5\u05EA\u05D9, \u05EA\u05D5\u05D3\u05D4 \u05E8\u05D1\u05D4 \u05E2\u05DC \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D0\u05D3\u05D9\u05D1! \u05DE\u05E9\u05DC\u05D5\u05D7 \u05DE\u05D4\u05D9\u05E8 \u05E2\u05D3 \u05D4\u05D1\u05D9\u05EA! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".carousel[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  width: 100%;\n  cursor: pointer;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 150px;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 250px;\n  min-height: 350px;\n  position: relative;\n  margin: 0 20px;\n  padding: 10px;\n  border-radius: 15px;\n  background: rgba(255, 255, 255, 0.8);\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0px 1px;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 20px 0;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]   .review-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]   .review-city[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUtcmV2aWV3cy9ob21lLXJldmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUVJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFFWjtBQUFTO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFFWjtBQURZO0VBQ0ksZUFBQTtBQUdoQjtBQUZnQjtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUlwQjtBQUZnQjtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBSXBCO0FBRmdCO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFJcEI7QUFGZ0I7RUFDSSxlQUFBO0FBSXBCO0FBRmdCO0VBQ0ksZUFBQTtBQUlwQjtBQUdBO0VBQ0ksYUFBQTtBQUFKIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUtcmV2aWV3cy9ob21lLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWx7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmNhcm91c2VsLWNlbGx7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgICAgLmZyb250e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZhc3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJldmlldy10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXZpZXctbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmV2aWV3LWNpdHl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4qOmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-reviews',
                templateUrl: './home-reviews.component.html',
                styleUrls: ['./home-reviews.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiService {
    constructor(http) {
        this.http = http;
        this.pricingCards = [
            { id: 0, title: "מג'הול עסיסי גדול", priceTxt: "מארז 1 קילו / 40₪", price: 40, delivery: "המחיר כולל משלוח", img: "../../../assets/images/עסיסי גדול.png" },
            { id: 1, title: "מג'הול יבש פרמיום", priceTxt: "מארז 1 קילו / 30₪", price: 30, delivery: "המחיר כולל משלוח", img: "../../../assets/images/יבש פרמיום.png" },
        ];
        this.homeCards = [
            { id: 0, title: "שירות", text: "אנחנו בצוות 'התמר' מאמינים בתודעת שירות גבוהה, תקשורת תמידית ויחס אישי מול הלקוח ואספקה מהירה של המוצר.", img: "../../../assets/images/homecards/customer.png" },
            { id: 1, title: "בריאות", text: "תמרי מג'הול עשירים באשלגן, סידן ומגנזיום שהם מינרלים חשובים מאוד לתקינות לחץ הדם והלב. בנוסף הם מכילים כמות סיבים תזונתיים גבוהה ומהווים פיתרון מעולה ובריא לצורך במתוק!", img: "../../../assets/images/homecards/health.png" },
            { id: 2, title: "איכות", text: "התמרים שלנו נבחרים בקפידה רבה וממויינים ברמה הגבוהה ובעבודת יד, על מנת להבטיח לקהל לקוחותינו את התמרים המובחרים והאיכותיים ביותר!", img: "../../../assets/images/homecards/quality.png" },
            { id: 3, title: "שיווק עולמי", text: "עובדים 24/7 מול לקוחות אל מעבר לים! את התמר האיכותי והעסיסי שלנו ניתן למצוא גם בשאר מדינות העולם להן אנו מייצאים את הסחורה שלנו.", img: "../../../assets/images/homecards/worldwide.png" }
        ];
        this.socialIcons = [
            { id: 0, name: "whatsapp", link: "", img: "../../../assets/images/social/whatsapp.png" },
            { id: 1, name: "facebook", link: "", img: "../../../assets/images/social/facebook.png" },
            { id: 2, name: "gmail", link: "", img: "../../../assets/images/social/gmail.png" },
        ];
        this.homeLogos = [
            { id: 0, name: "madeInIsr", title: "תוצרת כחול לבן", img: "../../../assets/images/logos-banner/madeinisr.png" },
            { id: 1, name: "natural", title: "מג'הול 100% טבעי", img: "../../../assets/images/logos-banner/natural.png" },
            { id: 2, name: "delivery", title: "מערך משלוחים ארצי", img: "../../../assets/images/logos-banner/delivery-logo.png" },
        ];
        // public reviewsCards = [
        //   {
        //     id: 0,
        //     name: "נחמן ביאליק",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/reviews/img_avatar.png"
        //   },
        //   {
        //     id: 1,
        //     name: "יהודה יהודה",
        //     stars: 4,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 2,
        //     name: "דובי בובי",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 3,
        //     name: "אחשוורוש",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 4,
        //     name: "אילנית",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 5,
        //     name: "אילנית",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 6,
        //     name: "אילנית",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 7,
        //     name: "אילנית",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 8,
        //     name: "אילנית",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        //   {
        //     id: 9,
        //     name: "אילנית",
        //     stars: 5,
        //     review: "תמרים טעימים במיוחד! התמר עצמו עסיסי וגדול. צוות התמר נעים וזמין תמיד !",
        //     img: "../../../assets/images/revies/img_avatar.png"
        //   },
        // ]
        this.contactUrl = 'https://hook.integromat.com/g4ptot62u99qc5wzsdxmeu62urb2yilf/';
        this.orderUrl = 'https://hook.integromat.com/ixtauhxobyacw2ysipvxx05onzolyesi/';
        this.validatePhone = (phone) => {
            let regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            return regex.test(phone);
        };
        this.validateEmail = (mail) => {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(mail).toLowerCase());
        };
        this.validateName = (t) => {
            var regex = /\d/g;
            this.nameWithNum = regex.test(t);
            return regex.test(t);
            // console.log(regex.test(t));
        };
    }
    insertOrder(obj) {
        // console.log("service Order obj:", obj)
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.http.post(`${this.orderUrl}`, obj).subscribe(data => {
                    if (data) {
                        resolve(data);
                        // console.log("Order is Inserted", data)
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }));
    }
    insertContact(obj) {
        // console.log("service Contact obj:", obj)
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.http.post(`${this.contactUrl}`, obj).subscribe(data => {
                    if (data) {
                        resolve(data);
                        // console.log("Contact is Inserted", data)
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class FooterComponent {
    constructor() {
        this.heartIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.envelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.call = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.location = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"];
        this.gmail = 'mailto:Yohayargaman12@gmail.com';
        this.facebook = 'https://www.facebook.com/hatamar1';
        this.whatsapp = 'https://api.whatsapp.com/send?phone=972509175030&text=%D7%90%D7%94%D7%9C%D7%9F%20,%20%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F%20%D7%9E%D7%92%27%D7%94%D7%95%D7%9C%20%D7%98%D7%A2%D7%99%D7%9D%20%D7%91%D7%91%D7%A7%D7%A9%D7%94';
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 62, vars: 7, consts: [[1, "pt-5", "pb-5", "footer"], ["src", "../../../assets/images/datepalmtree.png", "id", "tree-img"], [1, "container"], [1, "row", "no-gutters"], [1, "col-lg-4", "col-md-4", "col-sm-4", "location"], [1, "ml-2", 3, "icon"], ["href", "tel:0509175030"], ["href", "mailto:Yohayargaman12@gmail.com"], [1, "col-lg-4", "col-md-4", "col-sm-4", "links"], ["href", ""], ["routerLink", "/products"], ["href", "#about-us"], ["routerLink", "/contactus"], [1, "col-lg-4", "col-md-4", "col-sm-4", "about-company"], ["target", "_blank", 3, "href"], ["src", "../../../assets/images/social/facebook.png", 1, "socialMedia"], ["target", "_blank", "title", "whatapp", 3, "href"], ["src", "../../../assets/images/social/whatsapp.png", 1, "socialMedia"], ["title", "email", 3, "href"], ["src", "../../../assets/images/social/gmail.png", 1, "socialMedia"], ["src", "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fhatamar1&width=100&layout=button&action=like&size=small&share=true&height=65&appId", "width", "120", "height", "65", "scrolling", "no", "frameborder", "0", "allowTransparency", "true", "allow", "encrypted-media", 2, "border", "none", "overflow", "hidden"], [1, "row"], [1, "col", "copyright"], [1, "text-white-50"], [3, "icon"], ["target", "_blank", "href", "http://jdevelopments.co.il", 1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05D1\u05E7\u05E2\u05EA \u05D4\u05D9\u05E8\u05D3\u05DF, \u05D9\u05E9\u05E8\u05D0\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "050-917-5030");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Yohayargaman12@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u05DC\u05D7\u05E0\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u05D3\u05D1\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u05D7\u05E4\u05E9\u05D5 \u05D0\u05D5\u05EA\u05E0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "iframe", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "JDevelopments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u00A9 2020.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.call);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.envelope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.whatsapp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.heartIcon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\n  text-align: right;\n  background-color: #a78860;\n  color: white;\n  border-top: 2px solid rgba(0, 0, 0, 0.589);\n  position: relative;\n}\n.footer[_ngcontent-%COMP%]   #tree-img[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: auto;\n  height: 100%;\n}\n.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  color: white;\n  transition: color 0.2s;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: none;\n  opacity: 1;\n}\n.footer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n  opacity: 0.7;\n}\n.footer[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.2);\n  transition: transform 0.4s ease;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin: 0px 3px 0px 3px;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity 0.5s ease;\n  text-decoration: none;\n}\n@media (max-width: 575.98px) {\n  .footer[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .footer[_ngcontent-%COMP%]   .about-company[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQUk7RUFBSSxlQUFBO0FBR1I7QUFETztFQUNDLFlBQUE7RUFDQyxlQUFBO0FBR1Q7QUFFUTtFQUNFLHFCQUFBO0FBQVY7QUFFUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFBVjtBQUNVO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUNaO0FBS0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0FBSlI7QUFNUTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBSlo7QUFPTTtFQUNFLGNBQUE7QUFMUjtBQU1RO0VBQ0UsZUFBQTtFQUNBLDhDQUFBO0FBSlY7QUFLVTtFQUNFLHVCQUFBO0FBSFo7QUFLVTtFQUNJLFlBQUE7QUFIZDtBQUljO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFGbEI7QUFVQTtFQUNFO0lBQ0Usa0JBQUE7RUFQRjtFQVFFO0lBQ0UsZ0JBQUE7RUFOSjtFQVFFO0lBQ0UsZ0JBQUE7RUFOSjtBQUNGIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc4ODYwO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU4OSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAjdHJlZS1pbWd7XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBoMXsgZm9udC1zaXplOiAyNXB4O31cclxuICAgIC5sb2NhdGlvbntcclxuICAgICAgIGEsIGZhLWljb257XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmtze1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkgYXtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgLy8gY29sb3I6cmdiKDE2LCAxNDEsIDI0Myk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICBcclxuICAgIC5zb2NpYWxNZWRpYXtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxuICAgICAgICAgIGZhLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDNweCAwcHggM3B4OyAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgIH0gIFxyXG59XHJcbiAgXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpe1xyXG4gIC5mb290ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubGlua3N7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtY29tcGFueXtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R9TQ":
/*!********************************************************!*\
  !*** ./src/app/pages/contactus/contactus.component.ts ***!
  \********************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_contactus_form_contactus_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/contactus-form/contactus-form.component */ "a0Qy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ContactusComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactusComponent {
    constructor(api) {
        this.api = api;
        this.width = window.innerWidth;
        this.call = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.gmail = 'mailto:Yohayargaman12@gmail.com';
        this.facebook = 'https://www.facebook.com/hatamar1';
        this.whatsapp = 'https://api.whatsapp.com/send?phone=972507390422&text=%D7%90%D7%94%D7%9C%D7%9F%20,%20%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F%20%D7%9E%D7%92%27%D7%94%D7%95%D7%9C%20%D7%A2%D7%A1%D7%99%D7%A1%D7%99%20%D7%95%D7%98%D7%A2%D7%99%D7%9D%20%D7%91%D7%91%D7%A7%D7%A9%D7%94';
    }
    ngOnInit() {
        this.scrollTop();
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 51, vars: 7, consts: [["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", 2, "text-align", "center", "color", "black"], [1, "ml-2", 3, "icon"], ["href", "tel:0507390422"], ["href", "tel:0503727774"], ["href", "tel:0509175030"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "row", "no-gutters", "contact"], [1, "col-xl-7"], [1, "header", "shadow"], [1, "text", "pt-4"], [1, "row", "no-gutters", "social-media"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "logo"], ["src", "../../../assets/images/social/call.png", 1, "logo-image"], [1, "logo"], ["title", "email", 3, "href"], ["src", "../../../assets/images/social/gmail.png", 1, "logo-image"], ["target", "_blank", "title", "whatapp", 3, "href"], ["src", "../../../assets/images/social/whatsapp.png", 1, "logo-image"], ["target", "_blank", 3, "href"], ["src", "../../../assets/images/social/facebook.png", 1, "logo-image"], ["class", "col-xl-5", 4, "ngIf"], [1, "col-xl-5"], ["src", "../../../assets/images/date_bg.jpg", 2, "width", "100%", "height", "100%"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05D9\u05D5\u05D7\u05D0\u05D9: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "050-739-0422");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05D0\u05D5\u05E4\u05D9\u05E8: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "050-372-7774");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05E2\u05D9\u05D3\u05DF: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "050-917-5030");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D3\u05E2\u05EA \u05E2\u05D5\u05D3 \u05E2\u05DC \u05D4\u05EA\u05DE\u05E8 \u05D4\u05DB\u05D9 \u05D8\u05E2\u05D9\u05DD \u05D1\u05D0\u05E8\u05E5? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u05E6\u05D5\u05D5\u05EA \u05D4\u05EA\u05DE\u05E8 \u05DB\u05D0\u05DF \u05D1\u05E9\u05D1\u05D9\u05DC\u05DB\u05DD! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u05E9\u05DC\u05D7\u05D5 \u05DC\u05E0\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05DB\u05D1\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D5\u05D4\u05E6\u05D5\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D9\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF \u05D4\u05E7\u05E8\u05D5\u05D1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-contactus-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ContactusComponent_div_50_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.call);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.call);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.call);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.whatsapp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width > 1024);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _components_contactus_form_contactus_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactusFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".contact[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.contact[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #D2B48C;\n  color: #815b3e;\n  font-size: 40px;\n  font-weight: 600;\n  padding: 5px;\n}\n.contact[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n  padding: 10px;\n}\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.social-media[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  max-width: 400px;\n  margin: 0px 50px;\n  padding: 20px 5px;\n}\n.social-media[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  height: auto;\n  width: 50px;\n}\n.social-media[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n  transition: transform 0.4s ease;\n}\n@media (max-width: 420px) {\n  .contact[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .contact[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .social-media[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0px 10px;\n    padding: 20px 5px;\n  }\n  .social-media[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFRO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVaO0FBQVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRVo7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUFHWjtBQUdBO0VBRVk7SUFDSSxlQUFBO0VBRGQ7RUFHVTtJQUNJLGVBQUE7RUFEZDs7RUFNTTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFIVjtFQUlVO0lBQ0ksV0FBQTtFQUZkO0FBQ0YiLCJmaWxlIjoiYXBwL3BhZ2VzL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJCNDhDO1xyXG4gICAgICAgICAgICBjb2xvcjogIzgxNWIzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG59ICAgXHJcblxyXG4uc29jaWFsLW1lZGlhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogMHB4IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA1cHg7XHJcbiAgICAgICAgLmxvZ28taW1hZ2V7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQyMHB4KXtcclxuICAgIC5jb250YWN0e1xyXG4gICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIC5zb2NpYWwtbWVkaWF7XHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xyXG4gICAgICAgICAgICAubG9nby1pbWFnZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus',
                templateUrl: './contactus.component.html',
                styleUrls: ['./contactus.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");






class AppComponent {
    constructor() {
        this.title = 'hatamar-group';
        this.isFadeIn = false;
    }
    ngOnInit() {
        this.backToTop();
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            // console.log("scrollY:", scrollY)
            if (this.isFadeIn === false) {
                while (scrollY > 300) {
                    this.isFadeIn = !this.isFadeIn;
                    return this.isFadeIn;
                }
            }
            else if (this.isFadeIn === true) {
                while (scrollY < 300) {
                    this.isFadeIn = !this.isFadeIn;
                    return this.isFadeIn;
                }
            }
        });
    }
    backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [[1, "back-to-top"], [3, "click"], ["src", "./assets/images/up-arrow.png", "width", "40"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_1_listener() { return ctx.backToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", ctx.isFadeIn ? "open" : "closed");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 68px -311px);\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2%;\n  right: 2%;\n  z-index: 9999;\n}\n\n.back-to-top[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  animation-duration: 0.4s;\n  animation-name: changewidth;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes changewidth {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0FBQ1I7O0FBSUE7RUFDSTtJQUNFLG1CQUFBO0VBREo7RUFJRTtJQUNFLHFCQUFBO0VBRko7QUFDRiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2OHB4IC0zMTFweCk7XHJcbn1cclxuXHJcbi8vIEJhY2sgdG8gVG9wIGJ0biBjc3NcclxuLmJhY2stdG8tdG9we1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyJTtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZXdpZHRoO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgY2hhbmdld2lkdGgge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
                        // ...
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                        ]),
                    ]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WC/b":
/*!***************************************************************!*\
  !*** ./src/app/components/home-logos/home-logos.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeLogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLogosComponent", function() { return HomeLogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HomeLogosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", logo_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](logo_r1.title);
} }
class HomeLogosComponent {
    constructor(api) {
        this.api = api;
        this.homeLogos = this.api.homeLogos;
        // console.log("logos:", this.homeLogos)
    }
    ngOnInit() {
    }
}
HomeLogosComponent.ɵfac = function HomeLogosComponent_Factory(t) { return new (t || HomeLogosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
HomeLogosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeLogosComponent, selectors: [["app-home-logos"]], decls: 2, vars: 1, consts: [[1, "row", "no-gutters", "home-logos"], ["class", "logo", 4, "ngFor", "ngForOf"], [1, "logo"], ["width", "100", 1, "logo-image", 3, "src"], [1, "logo-title"]], template: function HomeLogosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeLogosComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeLogos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".home-logos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(247, 232, 205, 0.5);\n}\n.home-logos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px 50px;\n  padding: 30px 5px;\n}\n.home-logos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  height: auto;\n  width: 50%;\n}\n.home-logos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUtbG9nb3MvaG9tZS1sb2dvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRVI7QUFEUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBR1o7QUFEUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFHWiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ob21lLWxvZ29zL2hvbWUtbG9nb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1sb2dvc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjMyLCAyMDUsIDAuNSk7XHJcbiAgICAubG9nb3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDVweDtcclxuICAgICAgICAubG9nby1pbWFnZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nby10aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeLogosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-logos',
                templateUrl: './home-logos.component.html',
                styleUrls: ['./home-logos.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contactus/contactus.component */ "R9TQ");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/order/order.component */ "50+E");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");
/* harmony import */ var _components_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-cards/home-cards.component */ "l30s");
/* harmony import */ var _components_home_reviews_home_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-reviews/home-reviews.component */ "DAHP");
/* harmony import */ var _components_home_about_home_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-about/home-about.component */ "4PXq");
/* harmony import */ var _components_home_opener_home_opener_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-opener/home-opener.component */ "dXT4");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_contactus_form_contactus_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contactus-form/contactus-form.component */ "a0Qy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_home_logos_home_logos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home-logos/home-logos.component */ "WC/b");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__["GoogleMapsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__["ContactusComponent"],
        _pages_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"],
        _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
        _components_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_8__["HomeCardsComponent"],
        _components_home_reviews_home_reviews_component__WEBPACK_IMPORTED_MODULE_9__["HomeReviewsComponent"],
        _components_home_about_home_about_component__WEBPACK_IMPORTED_MODULE_10__["HomeAboutComponent"],
        _components_home_opener_home_opener_component__WEBPACK_IMPORTED_MODULE_11__["HomeOpenerComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _components_contactus_form_contactus_form_component__WEBPACK_IMPORTED_MODULE_14__["ContactusFormComponent"],
        _components_home_logos_home_logos_component__WEBPACK_IMPORTED_MODULE_20__["HomeLogosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__["GoogleMapsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                    _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__["ContactusComponent"],
                    _pages_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"],
                    _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                    _components_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_8__["HomeCardsComponent"],
                    _components_home_reviews_home_reviews_component__WEBPACK_IMPORTED_MODULE_9__["HomeReviewsComponent"],
                    _components_home_about_home_about_component__WEBPACK_IMPORTED_MODULE_10__["HomeAboutComponent"],
                    _components_home_opener_home_opener_component__WEBPACK_IMPORTED_MODULE_11__["HomeOpenerComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    _components_contactus_form_contactus_form_component__WEBPACK_IMPORTED_MODULE_14__["ContactusFormComponent"],
                    _components_home_logos_home_logos_component__WEBPACK_IMPORTED_MODULE_20__["HomeLogosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__["GoogleMapsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a0Qy":
/*!***********************************************************************!*\
  !*** ./src/app/components/contactus-form/contactus-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactusFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusFormComponent", function() { return ContactusFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");






function ContactusFormComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusFormComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "google-map", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "map-marker", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 11)("center", ctx_r1.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r1.marker.position)("label", ctx_r1.marker.label)("title", ctx_r1.marker.title)("options", ctx_r1.marker.options);
} }
function ContactusFormComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "google-map", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "map-marker", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 11)("center", ctx_r2.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r2.marker.position)("label", ctx_r2.marker.label)("title", ctx_r2.marker.title)("options", ctx_r2.marker.options);
} }
function ContactusFormComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "google-map", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "map-marker", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 11)("center", ctx_r3.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r3.marker.position)("label", ctx_r3.marker.label)("title", ctx_r3.marker.title)("options", ctx_r3.marker.options);
} }
class ContactusFormComponent {
    constructor(api) {
        this.api = api;
        this.lat = 32.048179;
        this.lng = 35.453320;
        this.marker = {
            position: {
                lat: this.lat,
                lng: this.lng
            },
            label: {
                color: 'red',
            },
            options: { animation: google.maps.Animation.BOUNCE, },
        };
        this.width = window.innerWidth;
        this.obj = {
            fullName: "",
            phone: "",
            email: "",
            how: "",
            msg: ""
        };
        this.onSubmit = () => {
            if (this.obj.fullName && this.obj.phone && this.obj.email && this.obj.msg) {
                if (this.obj.fullName.length >= 4 && this.obj.phone.length === 10 && this.api.validatePhone(this.obj.phone) && this.api.validateEmail(this.obj.email) && this.obj.msg != null) {
                    this.fullNameMSG = "";
                    this.phoneMSG = "";
                    this.emailMSG = "";
                    this.msgMSG = "";
                    // console.log("order obj:", this.obj);
                    this.api.insertContact(this.obj);
                    // console.log("MESSAGE IS FINE");
                    this.messageSentMSG = " ההודעה נקלטה, נדבר בקרוב! ";
                    setInterval(function () { window.location.pathname = "/"; }, 2000);
                }
            }
            else {
                this.validateForm();
            }
        };
    }
    ngOnInit() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
                lat: this.lat,
                lng: this.lng,
            };
        });
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
ContactusFormComponent.ɵfac = function ContactusFormComponent_Factory(t) { return new (t || ContactusFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ContactusFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusFormComponent, selectors: [["app-contactus-form"]], decls: 36, vars: 14, consts: [[1, "row", "no-gutters", "contact-section"], [1, "col-xl-4", "col-md-6", "contact-form"], [1, "form-group"], ["type", "text", "id", "fullName", "name", "fullName", "placeholder", "*\u05E9\u05DD \u05DE\u05DC\u05D0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "tel", "id", "phone", "name", "phone", "maxlength", "10", "placeholder", "*\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "id", "email", "name", "email", "placeholder", "*\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "how", "name", "how", "placeholder", "*\u05D0\u05D9\u05DA \u05D4\u05D2\u05E2\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "message", "rows", "3", "name", "msg", "placeholder", "*\u05D1\u05DE\u05D4 \u05E0\u05D5\u05DB\u05DC \u05DC\u05E2\u05D6\u05D5\u05E8?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "col-12", 3, "click"], [1, "alerts"], [1, "my-1"], [1, "my-4", 2, "text-align", "center"], [4, "ngIf"], [1, "loaderMSG", "mt-3"], ["class", "col-xl-8 col-md-6 contact-map", 4, "ngIf"], ["class", "col-6 contact-map", 4, "ngIf"], ["class", "col-12 contact-map", 4, "ngIf"], ["role", "status", 1, "spinner-grow", 2, "width", "2rem", "height", "2rem"], [1, "sr-only"], [1, "col-xl-8", "col-md-6", "contact-map"], ["width", "450", "height", "360", 3, "zoom", "center"], [3, "position", "label", "title", "options"], [1, "col-6", "contact-map"], ["width", "300", "height", "360", 3, "zoom", "center"], [1, "col-12", "contact-map"], ["width", "250", "height", "250", 3, "zoom", "center"]], template: function ContactusFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusFormComponent_Template_input_ngModelChange_4_listener($event) { return ctx.obj.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.obj.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.obj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.obj.how = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusFormComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.obj.msg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactusFormComponent_Template_button_click_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05E9\u05DC\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContactusFormComponent_div_30_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContactusFormComponent_div_33_Template, 3, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ContactusFormComponent_div_34_Template, 3, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ContactusFormComponent_div_35_Template, 3, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.obj.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.obj.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.obj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.obj.how);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.obj.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fullNameMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phoneMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msgMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageSentMSG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messageSentMSG, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width > 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width > 541 && 769 > ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 541 > ctx.width);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMap"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["MapMarker"]], styles: [".contact-section[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 50px;\n}\n.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .alerts[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.contact-section[_ngcontent-%COMP%]   .contact-map[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbnRhY3R1cy1mb3JtL2NvbnRhY3R1cy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFFSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUFSIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NvbnRhY3R1cy1mb3JtL2NvbnRhY3R1cy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qtc2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgLmNvbnRhY3QtZm9ybXtcclxuICAgICAgICAuYWxlcnRze1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1tYXB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus-form',
                templateUrl: './contactus-form.component.html',
                styleUrls: ['./contactus-form.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "dXT4":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-opener/home-opener.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeOpenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeOpenerComponent", function() { return HomeOpenerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeOpenerComponent {
    constructor() {
        this.scrollDown = () => {
            let scrollY = window.scrollY;
            if (scrollY < 750) {
                window.scrollTo({
                    top: 750,
                    behavior: 'smooth'
                });
            }
        };
    }
    ngOnInit() {
        document.getElementById("scroll-btn").addEventListener("click", this.scrollDown);
    }
}
HomeOpenerComponent.ɵfac = function HomeOpenerComponent_Factory(t) { return new (t || HomeOpenerComponent)(); };
HomeOpenerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeOpenerComponent, selectors: [["app-home-opener"]], decls: 13, vars: 0, consts: [["id", "opener", 1, "row", "no-gutters"], [1, "text"], [1, "my-1"], ["type", "button", "routerLink", "/products", 1, "btn", "upper-btn"], ["id", "scroll-btn", 1, "arrow", 3, "click"]], template: function HomeOpenerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u05D0\u05D7\u05D3 \u05D4\u05D3\u05D1\u05E8\u05D9\u05DD \u05D4\u05D8\u05D5\u05D1\u05D9\u05DD \u05E9\u05E7\u05E8\u05D5 \u05DC\u05E0\u05D5 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 \u05D4\u05D9\u05D0 \u05D4\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05DC\u05E9\u05D5\u05D5\u05E7 \u05DB\u05D0\u05DF \u05D1\u05D0\u05E8\u05E5 \u05D0\u05EA \u05D4\u05E1\u05D7\u05D5\u05E8\u05D4 \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC\u05E0\u05D5! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u05EA\u05DE\u05E8 \u05DE\u05D2'\u05D4\u05D5\u05DC \u05E2\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D5\u05D1\u05D7\u05E8 \u05D5\u05EA\u05DE\u05E8 \u05DE\u05D2'\u05D4\u05D5\u05DC \u05D9\u05D1\u05E9 \u05E4\u05E8\u05DE\u05D9\u05D5\u05DD \u05D1\u05D0\u05D9\u05DB\u05D5\u05EA \u05D9\u05E6\u05D5\u05D0 \u05E9\u05DC\u05D0 \u05E8\u05D0\u05D9\u05EA\u05DD \u05DB\u05DE\u05D5\u05EA\u05D4! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D7\u05E0\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOpenerComponent_Template_div_click_9_listener() { return ctx.scrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@charset \"UTF-8\";\n#opener[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 93vh;\n  background-image: linear-gradient(50deg, rgba(66, 66, 66, 0.5), rgba(82, 82, 82, 0.4)), url('\u05E8\u05E7\u05E23.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  justify-content: center;\n  position: relative;\n}\n#opener[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: white;\n  min-width: 250px;\n  max-width: 500px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n#opener[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .upper-btn[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  background-color: white;\n  color: black;\n  border-radius: 25px;\n  width: 150px;\n}\n#opener[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .upper-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #af8454;\n  color: white;\n  border: 1px solid white;\n}\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n.arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-bottom: 5px solid #ffffff;\n  border-right: 5px solid #ffffff;\n  transform: rotate(45deg);\n  margin: -10px;\n  animation: animate 2s infinite;\n}\n.arrow[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.2s;\n}\n.arrow[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.4s;\n}\n@media (max-width: 1028px) {\n  #opener[_ngcontent-%COMP%] {\n    background-image: linear-gradient(50deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('\u05E8\u05E7\u05E22.jpg');\n  }\n  #opener[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n@keyframes animate {\n  0% {\n    opacity: 0;\n    transform: rotate(45deg) translate(-20px, -20px);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: rotate(45deg) translate(20px, 20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUtb3BlbmVyL2hvbWUtb3BlbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVHQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLGtDQUFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUVOO0FBQU07RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRFE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFHVjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVJKO0FBU0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFQTjtBQVNJO0VBQ0Usc0JBQUE7QUFQTjtBQVNJO0VBQ0Usc0JBQUE7QUFQTjtBQVdFO0VBQ0U7SUFDRSxpR0FBQTtFQVJKO0VBU0k7SUFDRSxlQUFBO0VBUE47QUFDRjtBQVlFO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsZ0RBQUE7RUFWTjtFQVlFO0lBQ0ksVUFBQTtFQVZOO0VBWUU7SUFDSSxVQUFBO0lBQ0EsOENBQUE7RUFWTjtBQUNGIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUtb3BlbmVyL2hvbWUtb3BlbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI29wZW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA5M3ZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoNjYsIDY2LCA2NiwgMC41KSwgcmdiYSg4MiwgODIsIDgyLCAwLjQpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy/XqNen16IzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNvcGVuZXIgLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI29wZW5lciAudGV4dCAudXBwZXItYnRuIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuI29wZW5lciAudGV4dCAudXBwZXItYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY4NDU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hcnJvdyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZmZmZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIG1hcmdpbjogLTEwcHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAycyBpbmZpbml0ZTtcbn1cbi5hcnJvdyA6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cbi5hcnJvdyA6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjhweCkge1xuICAjb3BlbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjQpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy/XqNen16IyLmpwZ1wiKTtcbiAgfVxuICAjb3BlbmVyIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTIwcHgsIC0yMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDIwcHgsIDIwcHgpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeOpenerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-opener',
                templateUrl: './home-opener.component.html',
                styleUrls: ['./home-opener.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fdtU":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function ProductsComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_5_div_11_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const card_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.passId(card_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_5_div_12_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const card_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.passId(card_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function ProductsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05D6\u05DE\u05E0\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductsComponent_div_5_div_11_Template, 4, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductsComponent_div_5_div_12_Template, 4, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.priceTxt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, card_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r3.id === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r3.id === 1);
} }
function ProductsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductsComponent {
    constructor(api) {
        this.api = api;
        this.width = window.innerWidth;
        this.passId = (cardId) => {
            console.log(cardId);
            this.cardId = cardId;
        };
        this.pricingCards = this.api.pricingCards;
        console.log("Pricing Card:", this.pricingCards);
    }
    ngOnInit() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 44, vars: 9, consts: [[1, "row", "no-gutters", "upper"], [1, "col-12", "upper-text"], [1, "header"], [1, "row", "no-gutters", "pricing"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "exampleModal0", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "row", "no-gutters", 2, "text-align", "center"], [1, "col-md-7", "p-3"], ["class", "col-md-5", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "modal-btn", 3, "routerLink"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "exampleModal1", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "card"], [1, "card-image", 3, "src"], [1, "card-header"], [1, "card-body"], ["type", "button", 1, "btn", "order-btn", "my-2", "col-12", 3, "routerLink"], [4, "ngIf"], ["data-toggle", "modal", "data-target", "#exampleModal0", 1, "info-btn", "col-12", 3, "click"], ["data-toggle", "modal", "data-target", "#exampleModal1", 1, "info-btn", "col-12", 3, "click"], [1, "col-md-5"], ["src", "../../../assets/images/\u05E2\u05E1\u05D9\u05E1\u05D9 \u05D2\u05D3\u05D5\u05DC.jpg", "id", "modal-img"], ["src", "../../../assets/images/\u05D9\u05D1\u05E9 \u05E4\u05E8\u05DE\u05D9\u05D5\u05DD.jpg", "id", "modal-img"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05D4\u05EA\u05DE\u05E8\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsComponent_div_5_Template, 13, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05DE\u05D2'\u05D4\u05D5\u05DC \u05E2\u05E1\u05D9\u05E1\u05D9 \u05D2\u05D3\u05D5\u05DC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u05D4\u05EA\u05DE\u05E8 \u05D4\u05E2\u05E1\u05D9\u05E1\u05D9 \u05E0\u05E7\u05D8\u05E3 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05EA\u05DE\u05E8 \u05D4\u05D9\u05D1\u05E9 \u05D5\u05D3\u05D5\u05E8\u05E9 \u05D4\u05E8\u05D1\u05D4 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05D1\u05D7\u05D9\u05E8\u05D4 \u05DE\u05D5\u05E7\u05E4\u05D3\u05EA \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D8\u05D5\u05E3 \u05D0\u05EA \u05D4\u05EA\u05DE\u05E8 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DD \u05D5\u05D1\u05D3\u05D9\u05D5\u05E7 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D4\u05D5\u05D0 \u05DE\u05EA\u05D9\u05D9\u05D1\u05E9, \u05DC\u05D0\u05D7\u05E8 \u05DE\u05D9\u05D5\u05DF \u05E7\u05E4\u05D3\u05E0\u05D9 \u05D5\u05D1\u05E7\u05E8\u05D4 \u05E2\u05DC \u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05E4\u05E8\u05D9 \u05D4\u05D5\u05D0 \u05E0\u05D0\u05E8\u05D6 \u05D5\u05E2\u05D5\u05D1\u05E8 \u05DC\u05D4\u05E7\u05E4\u05D0\u05D4 \u05DC\u05E6\u05D5\u05E8\u05DA \u05E9\u05DE\u05D9\u05E8\u05D4 \u05E2\u05DC \u05D4\u05D2\u05D5\u05D3\u05DC, \u05D4\u05D3\u05D1\u05E9 \u05D5\u05D4\u05E2\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA \u05E9\u05DC\u05D5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductsComponent_div_19_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u05DC\u05D4\u05D6\u05DE\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u05E1\u05D2\u05D5\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05DE\u05D2'\u05D4\u05D5\u05DC \u05D9\u05D1\u05E9 \u05E4\u05E8\u05DE\u05D9\u05D5\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u05D4\u05EA\u05DE\u05E8 \u05D4\u05D9\u05D1\u05E9 \u05D1\u05E9\u05D5\u05E0\u05D4 \u05DE\u05D4\u05EA\u05DE\u05E8 \u05D4\u05E2\u05E1\u05D9\u05E1\u05D9 \u05DE\u05E1\u05D9\u05D9\u05DD \u05D0\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05D1\u05E9\u05DC\u05D4 \u05D5\u05D4\u05D4\u05EA\u05D9\u05D9\u05D1\u05E9\u05D5\u05EA \u05E9\u05DC\u05D5 \u05E2\u05DC \u05D4\u05E2\u05E5 \u05D5\u05DE\u05EA\u05D9\u05D9\u05D1\u05E9 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D8\u05D1\u05E2\u05D9\u05EA \u05E2\u05D3 \u05E9\u05E0\u05E7\u05D8\u05E3. \u05D1\u05D2\u05DC\u05DC \u05E9\u05D4\u05D5\u05D0 \u05DE\u05E1\u05D9\u05D9\u05DD \u05D0\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05D1\u05E9\u05DC\u05D4 \u05D5\u05D4\u05D9\u05D9\u05D1\u05D5\u05E9 \u05D0\u05D9\u05E0\u05D5 \u05D3\u05D5\u05E8\u05E9 \u05D4\u05E7\u05E4\u05D0\u05D4 \u05D5\u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D9\u05D1\u05E9 \u05D5\u05DE\u05D5\u05E6\u05DC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProductsComponent_div_38_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u05DC\u05D4\u05D6\u05DE\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u05E1\u05D2\u05D5\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pricingCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width > 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.cardId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width > 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.cardId));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".upper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.upper[_ngcontent-%COMP%]   .upper-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #815b3e;\n}\n.upper[_ngcontent-%COMP%]   .upper-text[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n  padding: 20px;\n}\n.pricing[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.493);\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  align-items: center;\n  max-width: 250px;\n  height: auto;\n  margin: 0px 50px 30px;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 23px;\n  letter-spacing: 1px;\n  border-top: 1px solid #cfcfcf;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .order-btn[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  background-color: #eee;\n  border: 1px solid black;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .order-btn[_ngcontent-%COMP%]:hover {\n  background-color: #af8454;\n  color: white;\n  border: 1px solid white;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: black;\n}\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: right;\n}\n.footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  color: #000000;\n}\n.footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n}\n.modal[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.modal[_ngcontent-%COMP%]   #modal-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.modal[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  background-color: #af8454;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdaO0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksNENBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBRlc7RUFDSyxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFJaEI7QUFGZ0I7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUlwQjtBQURXO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFHZjtBQUZlO0VBQ0ksZUFBQTtBQUluQjtBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUVaO0FBR0E7RUFDSSxpQkFBQTtBQUFKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJhcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAudXBwZXItdGV4dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM4MTViM2U7XHJcbiAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByaWNpbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDkzKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7IFxyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDBweCA1MHB4IDMwcHg7XHJcbiAgICAgICAgLmNhcmQtaW1hZ2V7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMDcsIDIwNywgMjA3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgIC5vcmRlci1idG57XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY4NDU0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmluZm8tYnRue1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5mb290ZXItdGV4dHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFse1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAjbW9kYWwtaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tb2RhbC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FmODQ1NDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    // pathname = window.location.pathname;
    constructor() { }
    ngOnInit() {
    }
    closeNav() {
        if (this.getWidth() <= 768)
            document.getElementById("nav-btn").click();
    }
    getWidth() {
        return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "sticky-top"], ["href", "#", 1, "navbar-brand"], ["src", "../../../assets/images/logo/favicon.png", "width", "50"], ["id", "nav-btn", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", 3, "click"], ["href", "", 1, "nav-link"], ["routerLink", "/products", 1, "nav-link"], ["routerLink", "/contactus", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_7_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_10_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_13_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05D3\u05D1\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #815b3e;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  margin: 0px 50px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  list-style: none;\n  cursor: pointer;\n  margin: 0px 30px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  letter-spacing: 1px;\n  position: relative;\n  padding: 5px 0;\n}\n.nav-link[_ngcontent-%COMP%]::before, .nav-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  background-color: #e99e3c;\n  position: absolute;\n  left: 0;\n  transform: scaleX(0);\n  transition: transform 0.5s;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform-origin: right;\n}\n.nav-link[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform-origin: left;\n}\n.nav-link[_ngcontent-%COMP%]:hover::before, .nav-link[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n  color: #eee;\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before, .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n    height: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBQTtBQUNEO0FBQUM7RUFDQyxnQkFBQTtBQUVGO0FBQUM7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGO0FBREU7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0g7QUFHQTs7RUFFQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFBRDtBQUdBO0VBQ0MsU0FBQTtFQUNBLHVCQUFBO0FBQUQ7QUFHQTtFQUNDLE1BQUE7RUFDQSxzQkFBQTtBQUFEO0FBR0E7O0VBRUEsb0JBQUE7RUFDQSxXQUFBO0FBQUE7QUFJQTtFQUNDO0lBS0Msa0JBQUE7RUFMQTtFQUNBO0lBQ0MsWUFBQTtJQUNBLFdBQUE7RUFDRDtFQUVBO0lBQ0MsZ0JBQUE7RUFBRDtFQUVBOztJQUVDLFdBQUE7RUFBRDtBQUNGIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODE1YjNlO1xyXG5cdC5uYXZiYXItbmF2e1xyXG5cdFx0bWFyZ2luOiAwcHggNTBweDtcclxuXHR9XHJcblx0Lm5hdi1pdGVte1xyXG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdG1hcmdpbjogMHB4IDMwcHg7XHJcblx0XHQubmF2LWxpbmt7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG4ubmF2LWxpbms6OmJlZm9yZSxcclxuLm5hdi1saW5rOjphZnRlcntcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDoxcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTU4LCA2MCk7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxufVxyXG5cclxuLm5hdi1saW5rOjphZnRlcntcclxuXHRib3R0b206MDtcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxufVxyXG5cclxuLm5hdi1saW5rOjpiZWZvcmV7XHJcblx0dG9wOjA7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyOjpiZWZvcmUsXHJcbi5uYXYtbGluazpob3Zlcjo6YWZ0ZXJ7XHJcbnRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG5jb2xvcjogI2VlZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuXHQubmF2YmFye1xyXG5cdFx0Lm5hdmJhci1icmFuZHtcclxuXHRcdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdH1cclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdC5uYXYtaXRlbXtcclxuXHRcdFx0bWFyZ2luOiAxMHB4IDBweDtcclxuXHRcdH1cclxuXHRcdC5uYXYtbGluazo6YmVmb3JlLFxyXG5cdFx0Lm5hdi1saW5rOjphZnRlcntcclxuXHRcdFx0aGVpZ2h0OjBweDtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l30s":
/*!***************************************************************!*\
  !*** ./src/app/components/home-cards/home-cards.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCardsComponent", function() { return HomeCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HomeCardsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.text);
} }
class HomeCardsComponent {
    constructor(api) {
        this.api = api;
        this.homeCards = this.api.homeCards;
        // console.log("Home Cards:", this.homeCards)
    }
    ngOnInit() {
    }
}
HomeCardsComponent.ɵfac = function HomeCardsComponent_Factory(t) { return new (t || HomeCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
HomeCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeCardsComponent, selectors: [["app-home-cards"]], decls: 2, vars: 1, consts: [[1, "row", "no-gutters", "home-cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["width", "100", 1, "card-image", 3, "src"], [1, "card-header"], [1, "card-body"]], template: function HomeCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeCardsComponent_div_1_Template, 8, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeCards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".home-cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 50px 0px;\n}\n.home-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);\n  border-radius: 20px;\n  text-align: center;\n  align-items: center;\n  max-width: 300px;\n  margin: 30px 30px;\n  padding: 30px 5px;\n}\n.home-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.home-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  font-size: 30px;\n  background-color: transparent;\n}\n.home-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  line-height: 25px;\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUtY2FyZHMvaG9tZS1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHWiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ob21lLWNhcmRzL2hvbWUtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jYXJkc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4OyBcclxuICAgICAgICBtYXJnaW46IDMwcHggMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDVweDtcclxuICAgICAgICAuY2FyZC1pbWFnZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-cards',
                templateUrl: './home-cards.component.html',
                styleUrls: ['./home-cards.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "ojyh":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_home_opener_home_opener_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home-opener/home-opener.component */ "dXT4");
/* harmony import */ var _components_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home-cards/home-cards.component */ "l30s");
/* harmony import */ var _components_home_about_home_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home-about/home-about.component */ "4PXq");
/* harmony import */ var _components_home_logos_home_logos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home-logos/home-logos.component */ "WC/b");







class HomepageComponent {
    constructor() {
        this.isSlideLeft = false;
        this.width = window.innerWidth;
    }
    ngOnInit() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            console.log("scrollY:", scrollY);
            if (this.isSlideLeft === false) {
                if (scrollY >= 100) {
                    this.isSlideLeft = !this.isSlideLeft;
                    return this.isSlideLeft;
                }
            }
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 18, vars: 1, consts: [[1, "home-opener"], [1, "home-info"], [1, "hatamar-banner"], [1, "row", "no-gutters"], [1, "home-cards"], ["id", "about-us", 1, "home-about"], [1, "home-logos"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-home-opener");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u05D4\u05EA\u05DE\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " - \u05D4\u05DB\u05D9 \u05D8\u05E2\u05D9\u05DD - \u05D4\u05DB\u05D9 \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-home-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-home-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-home-logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideLeft", ctx.isSlideLeft ? "open" : "closed");
    } }, directives: [_components_home_opener_home_opener_component__WEBPACK_IMPORTED_MODULE_2__["HomeOpenerComponent"], _components_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_3__["HomeCardsComponent"], _components_home_about_home_about_component__WEBPACK_IMPORTED_MODULE_4__["HomeAboutComponent"], _components_home_logos_home_logos_component__WEBPACK_IMPORTED_MODULE_5__["HomeLogosComponent"]], styles: [".home-info[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.712), rgba(255, 255, 255, 0.856)), url('about-bg2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center center;\n}\n.home-info[_ngcontent-%COMP%]   .hatamar-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgba(247, 232, 205, 0.63);\n  display: flex;\n  justify-content: center;\n  padding: 30px;\n  font-size: 50px;\n}\n.home-info[_ngcontent-%COMP%]   .home-about[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n@media (max-width: 770px) {\n  .home-info[_ngcontent-%COMP%]   .hatamar-banner[_ngcontent-%COMP%] {\n    padding: 20px;\n    align-items: center;\n    font-size: 30px;\n  }\n}\n@media (max-width: 460px) {\n  .home-info[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: white;\n    width: 100%;\n  }\n  .home-info[_ngcontent-%COMP%]   .hatamar-banner[_ngcontent-%COMP%] {\n    padding: 10px;\n    align-items: center;\n    font-size: 19px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNIQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUVBO0VBRVE7SUFFSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBRFY7QUFDRjtBQUtBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFQUhOO0VBSU07SUFFSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBSFY7QUFDRiIsImZpbGUiOiJhcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1pbmZve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzEyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1NikpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIC5oYXRhbWFyLWJhbm5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjMyLCAyMDUsIDAuNjMpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1hYm91dHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NzBweCl7XHJcbiAgICAuaG9tZS1pbmZve1xyXG4gICAgICAgIC5oYXRhbWFyLWJhbm5lcntcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo0NjBweCl7XHJcbiAgICAuaG9tZS1pbmZve1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuaGF0YW1hci1iYW5uZXJ7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideLeft', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(0)',
                    opacity: 1,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(600px)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s')
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideLeft', [
                        // ...
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(0)',
                            opacity: 1,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(600px)',
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s')
                        ]),
                    ]),
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contactus/contactus.component */ "R9TQ");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/order/order.component */ "50+E");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/products.component */ "fdtU");








const routes = [
    { path: '', component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'products', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'products/:id', component: _pages_order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"] },
    { path: 'contactus', component: _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_2__["ContactusComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map