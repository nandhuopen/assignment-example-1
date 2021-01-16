(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nandhu.s/Documents/test/pranav/src/main.ts */"zUnb");


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

/***/ "LkI3":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ranger_ranger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ranger/ranger.component */ "lRTw");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.component */ "be9G");





class CalculatorComponent {
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 45, vars: 7, consts: [[1, "flex-container"], [1, "flex-item-calc", "box"], [1, "main"], [1, "form-field"], [3, "min", "max", "label", "showrange"], [3, "min", "max", "label"], ["for", "emi"], [1, "input-container"], ["name", "tenure", "id", "tenure"], ["value", "3"], ["value", "6", "selected", ""], ["value", "9"], ["value", "12"], [1, "form-field", "singleline"], [1, "switch"], ["type", "checkbox", "checked", ""], [1, "slider", "round", "shrink"], ["type", "text", "name", "emi", "id", "emi", "placeholder", "\u20B9 15000"], [1, "flex-item-result", "box"], [2, "margin-top", "30px", "z-index", "999"], ["btnText", "Get Money", "btnStyle", "white"], ["src", "assets/img/accounting_dots.svg", "alt", "dots", 1, "dots"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Eligibility Calculator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-ranger", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-ranger", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Repayment Teure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "6 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "9 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "12 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Do you have any existing loans?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "EMI of existing loan (optional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Loan Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u20B9 100000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Your EMI will be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u20B9 15000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 100000)("max", 300000)("label", "Monthly Income")("showrange", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 10000)("max", 100000)("label", "Monthly Expense");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _ranger_ranger_component__WEBPACK_IMPORTED_MODULE_2__["RangerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 60px;\n  margin-top: 180px;\n  position: relative;\n}\n.flex-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"OpenSanSemi\";\n  font-weight: 600;\n  text-align: center;\n  padding: 10px;\n  letter-spacing: 0.5px;\n}\n@media only screen and (max-width: 767px) {\n  .flex-container[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-right: 0;\n    padding: 5px;\n  }\n  .flex-container[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n    bottom: -30px;\n  }\n}\n@media only screen and (min-width: 767px) and (max-width: 1023px) {\n  .flex-container[_ngcontent-%COMP%] {\n    margin: 0px 10px 100px 10px;\n  }\n}\nform.main[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: var(--font-light-color);\n  padding: 20px;\n  border-radius: 0px 0px 20px 20px;\n  -webkit-border-radius: 0px 0px 20px 20px;\n  -moz-border-radius: 0px 0px 20px 20px;\n  -ms-border-radius: 0px 0px 20px 20px;\n  -o-border-radius: 0px 0px 20px 20px;\n}\n@media only screen and (max-width: 767px) {\n  form.main[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n.form-field[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n.box[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0px 0px 30px #6a687c1f;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  -ms-border-radius: 20px;\n  -o-border-radius: 20px;\n}\n.flex-item-calc[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 525px;\n  background-color: #f7fbfd;\n  z-index: 99;\n}\n.flex-item-result[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 8px;\n  height: 350px;\n  width: 220px;\n  background-color: var(--purple);\n  border-radius: 0px 20px 20px 0px;\n  -webkit-border-radius: 0px 20px 20px 0px;\n  -moz-border-radius: 0px 20px 20px 0px;\n  -ms-border-radius: 0px 20px 20px 0px;\n  -o-border-radius: 0px 20px 20px 0px;\n}\n@media only screen and (max-width: 767px) {\n  .flex-item-result[_ngcontent-%COMP%] {\n    margin-left: 4px;\n  }\n}\n.flex-item-result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  font-weight: 100;\n  font-size: 15px;\n  color: #fff;\n  padding: 0;\n  margin-top: 10px;\n}\n.flex-item-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Montserrat-SemiBold\";\n  font-weight: 100;\n  font-size: 20px;\n  color: #fff;\n}\nlabel[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: \"Montserrat-Medium\";\n  font-weight: 100;\n  font-size: 12px;\n}\ninput[type=text][_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #999999;\n  font-size: 16px;\n  font-family: \"Montserrat-Medium\";\n  line-height: 30px;\n  width: 100%;\n}\ninput[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #999999;\n}\n.input-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nselect[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #fff;\n  width: 100%;\n  border-bottom: 1px solid #999999;\n  font-size: 16px;\n  font-family: \"Montserrat-Medium\";\n  padding: 5px;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 34px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  height: 34px;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #fff;\n  transition: 0.4s;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--purple);\n}\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px var(--purple);\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n.shrink[_ngcontent-%COMP%] {\n  transform: scale(0.5);\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -ms-transform: scale(0.5);\n  -o-transform: scale(0.5);\n}\n.singleline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nimg.dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  right: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVFO0VBaEJGO0lBaUJJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUNGO0VBQUU7SUFDRSxhQUFBO0VBRUo7QUFDRjtBQUFFO0VBeEJGO0lBeUJJLDJCQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBR0Y7QUFERTtFQVZGO0lBV0ksWUFBQTtFQUlGO0FBQ0Y7QUFEQTtFQUNFLGFBQUE7QUFJRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBSUY7QUFEQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBSUY7QUFEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FBSUY7QUFGRTtFQWZGO0lBZ0JJLGdCQUFBO0VBS0Y7QUFDRjtBQUhFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBS0o7QUFIRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUtKO0FBREE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFJRjtBQURBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSUY7QUFIRTtFQUNFLGNBQUE7QUFLSjtBQURBO0VBQ0UsYUFBQTtBQUlGO0FBREE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBSUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLCtCQUFBO0FBRUY7QUFDQTtFQUNFLGlDQUFBO0FBRUY7QUFDQTtFQUdFLDJCQUFBO0FBRUY7QUFDQSxvQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQUNBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoiY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDE4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5TZW1pXCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC5kb3RzIHtcbiAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwMHB4IDEwcHg7XG4gIH1cbn1cblxuZm9ybS5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQtY29sb3IpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAycHggMDtcbn1cblxuLmJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAjNmE2ODdjMWY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmZsZXgtaXRlbS1jYWxjIHtcbiAgd2lkdGg6IDM4MHB4O1xuICBoZWlnaHQ6IDUyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmYmZkO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmZsZXgtaXRlbS1yZXN1bHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDIyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG5sYWJlbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5OTk5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LU1lZGl1bVwiO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8vc3R5ZSBmb3IgdG9nZ2xlXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXB1cnBsZSk7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2hyaW5rIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbn1cblxuLnNpbmdsZWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmltZy5kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01MHB4O1xuICByaWdodDogLTUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator',
                templateUrl: './calculator.component.html',
                styleUrls: ['./calculator.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-scrollspy */ "JHrb");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/features.component */ "mXFZ");







class AppComponent {
    constructor(scrollSpy, el) {
        this.scrollSpy = scrollSpy;
        this.el = el;
    }
    changeNavBarStyle(makeSticky) {
        this.navbar.makeSticky = makeSticky;
    }
    ngAfterViewInit() {
        this.windowStream = this.scrollSpy.getObservable('window').subscribe(() => {
            this.scrollTop = window ? window.pageYOffset : 0;
            this.scrollTop > 50 ? this.changeNavBarStyle(true) : this.changeNavBarStyle(false);
        });
    }
    ngOnDestroy() {
        this.windowStream.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
    } }, decls: 3, vars: 0, consts: [["scrollSpy", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-features");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyDirective"], _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"]], styles: [".blob-img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: -45%;\n  left: 40%;\n  width: 1183px;\n  height: 1192px;\n  transform: scale(0.7) matrix(0.12, -0.99, 0.99, 0.12, 0, 0);\n  -webkit-transform: scale(0.7) matrix(0.12, -0.99, 0.99, 0.12, 0, 0);\n  -moz-transform: scale(0.7) matrix(0.12, -0.99, 0.99, 0.12, 0, 0);\n  -ms-transform: scale(0.7) matrix(0.12, -0.99, 0.99, 0.12, 0, 0);\n  -o-transform: scale(0.7) matrix(0.12, -0.99, 0.99, 0.12, 0, 0);\n}\n\n.blob-container[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwyREFBQTtFQUNBLG1FQUFBO0VBQ0EsZ0VBQUE7RUFDQSwrREFBQTtFQUNBLDhEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9iLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTQ1JTtcbiAgbGVmdDogNDAlO1xuICB3aWR0aDogMTE4M3B4O1xuICBoZWlnaHQ6IDExOTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIG1hdHJpeCgwLjEyLCAtMC45OSwgMC45OSwgMC4xMiwgMCwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpIG1hdHJpeCgwLjEyLCAtMC45OSwgMC45OSwgMC4xMiwgMCwgMCk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjcpIG1hdHJpeCgwLjEyLCAtMC45OSwgMC45OSwgMC4xMiwgMCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNykgbWF0cml4KDAuMTIsIC0wLjk5LCAwLjk5LCAwLjEyLCAwLCAwKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjcpIG1hdHJpeCgwLjEyLCAtMC45OSwgMC45OSwgMC4xMiwgMCwgMCk7XG59XG5cbi5ibG9iLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: ngx_scrollspy__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { navbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], { static: false }]
        }] }); })();


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
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/features.component */ "mXFZ");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-scrollspy */ "JHrb");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ranger_ranger_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ranger/ranger.component */ "lRTw");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_scrollspy__WEBPACK_IMPORTED_MODULE_9__["ScrollSpyModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"],
        _features_features_component__WEBPACK_IMPORTED_MODULE_6__["FeaturesComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"],
        _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_10__["CalculatorComponent"],
        _ranger_ranger_component__WEBPACK_IMPORTED_MODULE_12__["RangerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_scrollspy__WEBPACK_IMPORTED_MODULE_9__["ScrollSpyModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"],
                    _features_features_component__WEBPACK_IMPORTED_MODULE_6__["FeaturesComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                    _start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"],
                    _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_10__["CalculatorComponent"],
                    _ranger_ranger_component__WEBPACK_IMPORTED_MODULE_12__["RangerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_scrollspy__WEBPACK_IMPORTED_MODULE_9__["ScrollSpyModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ButtonComponent {
    constructor() {
        this.btnStyle = 'outlined';
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { btnText: "btnText", btnStyle: "btnStyle" }, decls: 2, vars: 4, consts: [["type", "button"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.btnStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnText);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  min-height: 40px;\n  min-width: 120px;\n  border-radius: 24px;\n  color: var(--purple);\n  font-weight: 500;\n  font-family: \"Montserrat-Medium\";\n  font-size: 0.875rem;\n  -webkit-border-radius: 24px;\n  -moz-border-radius: 24px;\n  -ms-border-radius: 24px;\n  -o-border-radius: 24px;\n  padding: 10px 20px;\n  margin: 0 10px;\n  cursor: pointer;\n}\n\nbutton.outlined[_ngcontent-%COMP%] {\n  border: 2px solid var(--purple);\n  background-color: transparent;\n}\n\nbutton.filled[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #9f62c9 0, #663399 100%);\n  border: none;\n  color: #fff;\n}\n\nbutton.white[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  color: var(--purple);\n}\n\nbutton[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus {\n  background: var(--purple-dark);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDJEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsOEJBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ub3V0bGluZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYnV0dG9uLmZpbGxlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlmNjJjOSAwLCAjNjYzMzk5IDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5idXR0b24ud2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG5idXR0b246aG92ZXIsXG5idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtZGFyayk7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], null, { btnText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['btnText']
        }], btnStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['btnStyle']
        }] }); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "be9G");




function NavComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r1);
} }
class NavComponent {
    constructor() {
        this.menuItems = ['Products', 'Solutions', 'Pricing'];
        this.makeSticky = false;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostVars: 2, hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sticky", ctx.makeSticky);
    } }, decls: 9, vars: 3, consts: [[1, "flexbox-container"], [1, "flexbox-item-logo"], ["src", "assets/img/logo.png", "alt", "openlogo", 1, "open-logo"], [1, "nav-items", "flexbox-items-menu"], [4, "ngFor", "ngForOf"], [1, "flexbox-items-buttons"], ["btnText", "Login", "btnStyle", "outlined"], ["btnText", "Get Started", "btnStyle", "filled"], ["href", "#"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_li_5_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sticky", ctx.makeSticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: [".sticky[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0px 2px 10px -1px #beb7b749;\n}\n.sticky[_ngcontent-%COMP%]   .open-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\nheader[_ngcontent-%COMP%] {\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  transition: all 0.2 linear;\n  -webkit-transition: all 0.2 linear;\n  -moz-transition: all 0.2 linear;\n  -ms-transition: all 0.2 linear;\n  -o-transition: all 0.2 linear;\n}\nheader[_ngcontent-%COMP%]   .open-logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-left: 100px;\n  transition: all 0.2s linear;\n  -webkit-transition: all 0.2s linear;\n  -moz-transition: all 0.2s linear;\n  -ms-transition: all 0.2s linear;\n  -o-transition: all 0.2s linear;\n}\n@media only screen and (max-width: 1023px) {\n  header[_ngcontent-%COMP%]   .open-logo[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n.nav-items[_ngcontent-%COMP%] {\n  display: inline-block;\n  list-style: none;\n}\n@media only screen and (max-width: 767px) {\n  .nav-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 25px;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--font-regular-color);\n}\n.nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--purple);\n}\n.flexbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n}\n.flexbox-item-logo[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.flexbox-items-buttons[_ngcontent-%COMP%] {\n  margin: 0 50px;\n}\n@media only screen and (max-width: 1023px) {\n  .flexbox-items-buttons[_ngcontent-%COMP%] {\n    margin: 0 0px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 767px) and (max-width: 1023px) {\n  .flexbox-items-buttons[_ngcontent-%COMP%]:last-child {\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsdUNBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFSjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBRUo7QUFBSTtFQVZGO0lBV0ksaUJBQUE7RUFHSjtBQUNGO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFERTtFQUhGO0lBSUksYUFBQTtFQUlGO0FBQ0Y7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFJRjtBQUhFO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtBQUtKO0FBREE7RUFDRSxvQkFBQTtBQUlGO0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSUY7QUFEQTtFQUNFLFlBQUE7QUFJRjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBSEU7RUFGRjtJQUdJLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQU1GO0FBQ0Y7QUFKSTtFQURGO0lBRUksa0JBQUE7RUFPSjtBQUNGIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLTFweCAjYmViN2I3NDk7XG4gIC5vcGVuLWxvZ28ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuXG5oZWFkZXIge1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMiBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMiBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMiBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4yIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMiBsaW5lYXI7XG4gIC5vcGVuLWxvZ28ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubmF2LWl0ZW1zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubmF2LWl0ZW1zIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1yZWd1bGFyLWNvbG9yKTtcbiAgfVxufVxuXG4ubmF2LWl0ZW1zIGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4uZmxleGJveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZmxleGJveC1pdGVtLWxvZ28ge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5mbGV4Ym94LWl0ZW1zLWJ1dHRvbnMge1xuICBtYXJnaW46IDAgNTBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBtYXJnaW46IDAgMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], null, { makeSticky: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sticky']
        }] }); })();


/***/ }),

/***/ "lRTw":
/*!********************************************!*\
  !*** ./src/app/ranger/ranger.component.ts ***!
  \********************************************/
/*! exports provided: RangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangerComponent", function() { return RangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["ranger"];
function RangerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r1.min, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r1.max, "");
} }
class RangerComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.value = 0;
    }
    color() {
        this.percent = (this.value - this.min) / (this.max - this.min) * 100;
        this.renderer.setStyle(this.ranger.nativeElement, 'background', 'linear-gradient(to right, var(--purple) 0%, var(--purple)' + this.percent + '%,  #e7daff ' + this.percent + '%, #e7daff 100%)');
    }
}
RangerComponent.ɵfac = function RangerComponent_Factory(t) { return new (t || RangerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
RangerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangerComponent, selectors: [["app-ranger"]], viewQuery: function RangerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ranger = _t.first);
    } }, inputs: { label: "label", min: "min", max: "max", showrange: "showrange" }, decls: 9, vars: 6, consts: [["for", "ranger"], [1, "range-slider"], [1, "slider"], ["type", "range", "name", "mincome", "id", "ranger", 1, "range-slider__range", 3, "ngModel", "min", "max", "ngModelChange"], ["ranger", ""], ["class", "flex-container", 4, "ngIf"], [1, "flex-container"]], template: function RangerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RangerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.value = $event; })("ngModelChange", function RangerComponent_Template_input_ngModelChange_6_listener() { return ctx.color(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RangerComponent_div_8_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("min", ctx.min)("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showrange);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["input[type=range][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 5px;\n  border-radius: 5px;\n  background: #e7daff;\n  outline: 0;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--purple);\n  box-shadow: 0 0 0 4px #fff, 0 0 5px 2px #222;\n  cursor: pointer;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: \"Montserrat-Medium\";\n  font-weight: 100;\n  font-size: 12px;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: \"Montserrat-Medium\";\n  font-weight: 600;\n}\n\n.slider[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  margin-bottom: 10px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Montserrat-Medium\";\n  font-weight: 100;\n  color: #999999;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jhbmdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJyYW5nZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTdkYWZmO1xuICBvdXRsaW5lOiAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbmlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNmZmYsIDAgMCA1cHggMnB4ICMyMjI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmxhYmVsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1NZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5oMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zbGlkZXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ranger',
                templateUrl: './ranger.component.html',
                styleUrls: ['./ranger.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { ranger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ranger']
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['label']
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['min']
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['max']
        }], showrange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['showrange']
        }] }); })();


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { image: "image", featureTitle: "featureTitle", featureDesc: "featureDesc" }, decls: 6, vars: 3, consts: [[1, "card-container", "flex-container"], [1, "card-image", 3, "src"], [1, "card-title"], [1, "card-desc"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featureTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featureDesc);
    } }, styles: [".card-container[_ngcontent-%COMP%] {\n  max-width: 270px;\n  max-height: 180px;\n  background-color: #fff;\n  border-radius: 20px;\n  padding: 20px 20px;\n  margin: 30px 24px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  -ms-border-radius: 20px;\n  -o-border-radius: 20px;\n  box-shadow: 0px 0px 30px #2321321f;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  flex-shrink: 0;\n}\n@media only screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%] {\n    margin: 30px 0px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .card-container[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    max-height: unset;\n    padding: 10px 15px;\n    margin: 15px 10px;\n  }\n}\n.card-container[_ngcontent-%COMP%]:hover {\n  background-color: rgba(125, 70, 180, 0.5);\n  box-shadow: none;\n  color: #fff;\n}\n.card-container[_ngcontent-%COMP%]:hover   .card-desc[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 100;\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 75px;\n  width: 75px;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 15px;\n}\n.card-desc[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Montserrat\";\n  font-size: 15px;\n  font-weight: 100;\n  color: #999999;\n}\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBbkJGO0lBb0JJLGdCQUFBO0VBRUY7QUFDRjtBQUFFO0VBdkJGO0lBd0JJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdGO0FBREU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUVGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDI3MHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBtYXJnaW46IDMwcHggMjRweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggIzIzMjEzMjFmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBtYXJnaW46IDE1cHggMTBweDtcbiAgfVxufVxuXG4uY2FyZC1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCM3ZDQ2YjQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIC5jYXJkLWRlc2Mge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbn1cblxuLmNhcmQtaW1hZ2Uge1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2FyZC1kZXNjIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], null, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['image']
        }], featureTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['featureTitle']
        }], featureDesc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['featureDesc']
        }] }); })();


/***/ }),

/***/ "mXFZ":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "be9G");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");





function FeaturesComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", card_r3 == null ? null : card_r3.image)("featureTitle", card_r3 == null ? null : card_r3.title)("featureDesc", card_r3 == null ? null : card_r3.desc);
} }
function FeaturesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeaturesComponent_div_2_ng_container_1_Template, 2, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cards_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cards_r1);
} }
class FeaturesComponent {
    constructor() {
        this.cards = new Array();
        this.cardsList = new Array();
        this.cards.push({
            image: 'assets/img/card/Get Paid Instantly.png',
            title: 'Quick cash disbursement',
            desc: 'Get terms loans that your business needs within 72 hrs'
        }, {
            image: 'assets/img/card/Low interest rate.png',
            title: 'Low-interest rate',
            desc: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
        }, {
            image: 'assets/img/card/Secure Payments.png',
            title: 'Zero Paperwork',
            desc: 'Get started instantly by submitting only your basic details & bank statements'
        }, {
            image: 'assets/img/card/freelancer_feature_icon.png',
            title: 'Ace your business finances',
            desc: 'Manage banking, accounting & everything in between, on one platform'
        }, {
            image: 'assets/img/card/Covid.png',
            title: 'Loans to fight COVID-19',
            desc: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
        });
        for (let i = 0; i < this.cards.length; i++) {
            let divideFactor = 3;
            if (this.cards.length <= 3) {
                divideFactor = this.cards.length;
            }
            let slicedcard = this.cards.splice(divideFactor, divideFactor);
            this.cardsList.push(this.cards);
            this.cards = slicedcard;
        }
    }
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(); };
FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], decls: 12, vars: 1, consts: [[1, "cards-flex-container"], ["src", "assets/img/sol_wave_bg.svg", "alt", "wave", 1, "feature-bg"], [4, "ngFor", "ngForOf"], [1, "side-container"], [1, "section-header"], [1, "divider"], [1, "feature-section-descrition"], [1, "open-acct-btn"], ["btnText", "Get an Opening Account", "btnStyle", "outlined"], [3, "image", "featureTitle", "featureDesc"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeaturesComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Boost your business with Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get your hands on a term loan that\u2019s crafted for your business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".feature-bg[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: -3%;\n  right: 0;\n  left: 0;\n  z-index: -999;\n}\n\n.cards-flex-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 90px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n@media only screen and (max-width: 767px) {\n  .cards-flex-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px 30px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .cards-flex-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n@media only screen and (min-width: 1023px) and (max-width: 1400px) {\n  .cards-flex-container[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n}\n\n.side-container[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 0 50px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: flex-end;\n}\n\n@media only screen and (max-width: 767px) {\n  .side-container[_ngcontent-%COMP%] {\n    width: unset;\n    margin-top: 25px;\n    padding: 0 25px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .side-container[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n\n.feature-section-descrition[_ngcontent-%COMP%] {\n  width: 80%;\n  font-family: \"Montserrat\";\n  color: #777777;\n  font-size: 18px;\n  font-weight: 100;\n}\n\n@media only screen and (max-width: 1023px) {\n  .feature-section-descrition[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n\n.open-acct-btn[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFQRjtJQVFJLHNCQUFBO0lBQ0Esa0JBQUE7RUFFRjtBQUNGOztBQURFO0VBWEY7SUFZSSxVQUFBO0VBSUY7QUFDRjs7QUFIRTtFQWRGO0lBZUksa0JBQUE7RUFNRjtBQUNGOztBQUhBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFNRjs7QUFKRTtFQVJGO0lBU0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQU9GO0FBQ0Y7O0FBTkU7RUFiRjtJQWNJLGVBQUE7RUFTRjtBQUNGOztBQU5BO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNGOztBQVJFO0VBTkY7SUFPSSxlQUFBO0VBV0Y7QUFDRjs7QUFSQTtFQUNFLGdCQUFBO0FBV0YiLCJmaWxlIjoiZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS1iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTMlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTk5OTtcbn1cblxuLmNhcmRzLWZsZXgtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDIzcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIH1cbn1cblxuLnNpZGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cblxuLmZlYXR1cmUtc2VjdGlvbi1kZXNjcml0aW9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBjb2xvcjogIzc3Nzc3NztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG4ub3Blbi1hY2N0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-features',
                templateUrl: './features.component.html',
                styleUrls: ['./features.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ss/J":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calculator/calculator.component */ "LkI3");



class StartComponent {
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 15, vars: 0, consts: [[1, "main-col"], [1, "blob-img"], ["src", "assets/img/circle.svg", "alt", "blob-1"], [1, "blob-img-left"], ["src", "assets/img/blob-small.svg", "alt", "blob-2"], [1, "flex-container"], [1, "small-container"], [1, "section-header"], [1, "divider", "black"], [1, "image-container"], ["id", "video", "src", "assets/img/collect_img-video.png", "alt", "video"], ["id", "dots", "src", "assets/img/accounting_dots.svg", "alt", "dots"], ["id", "calc"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We make it Super Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__["CalculatorComponent"]], styles: [".blob-img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -200px;\n  top: -340px;\n  transform: scale(0.8);\n  -webkit-transform: scale(0.8);\n  -moz-transform: scale(0.8);\n  -ms-transform: scale(0.8);\n  -o-transform: scale(0.8);\n}\n@media only screen and (max-width: 1023px) {\n  .blob-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.main-col[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.blob-img-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  left: -150px;\n  transform: scale(0.7);\n  -webkit-transform: scale(0.7);\n  -moz-transform: scale(0.7);\n  -ms-transform: scale(0.7);\n  -o-transform: scale(0.7);\n}\n.black[_ngcontent-%COMP%] {\n  background: #222222;\n  width: 236px;\n  margin: 5px 60px;\n}\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 767px) {\n  .flex-container[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n  .flex-container[_ngcontent-%COMP%]   #calc[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media only screen and (min-width: 767px) and (max-width: 1023px) {\n  .flex-container[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n  .flex-container[_ngcontent-%COMP%]   #calc[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n.small-container[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 150px 90px;\n}\n.small-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 5px 60px;\n}\n@media only screen and (max-width: 767px) {\n  .small-container[_ngcontent-%COMP%] {\n    flex-flow: column;\n    padding: 100px 0px;\n  }\n}\n@media only screen and (min-width: 767px) and (max-width: 1023px) {\n  .small-container[_ngcontent-%COMP%] {\n    flex-flow: column;\n    padding: 100px 20px;\n  }\n}\n@media only screen and (min-width: 1023px) and (max-width: 1400px) {\n  .small-container[_ngcontent-%COMP%] {\n    padding: 100px 20px;\n  }\n}\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  transform: scale(0.9);\n  -webkit-transform: scale(0.9);\n  -moz-transform: scale(0.9);\n  -ms-transform: scale(0.9);\n  -o-transform: scale(0.9);\n}\n.image-container[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 80px;\n}\n.image-container[_ngcontent-%COMP%]   #dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -28px;\n  right: -100px;\n  z-index: -999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUFFO0VBVEY7SUFVSSxhQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUdGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUdGO0FBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdGO0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUdGO0FBRkU7RUFKRjtJQUtJLGlCQUFBO0VBS0Y7RUFIRTtJQUNFLG9CQUFBO0VBS0o7QUFDRjtBQUhFO0VBWEY7SUFZSSxpQkFBQTtFQU1GO0VBTEU7SUFDRSxvQkFBQTtFQU9KO0FBQ0Y7QUFIQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0FBTUY7QUFMRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQU9KO0FBTEU7RUFQRjtJQVFJLGlCQUFBO0lBQ0Esa0JBQUE7RUFRRjtBQUNGO0FBTkU7RUFaRjtJQWFJLGlCQUFBO0lBQ0EsbUJBQUE7RUFTRjtBQUNGO0FBUEU7RUFqQkY7SUFrQkksbUJBQUE7RUFVRjtBQUNGO0FBUEE7RUFDRSxrQkFBQTtFQWFBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFGRjtBQWJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBZUo7QUFaRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBY0oiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvYi1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjAwcHg7XG4gIHRvcDogLTM0MHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm1haW4tY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmxvYi1pbWctbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogLTE1MHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xufVxuXG4uYmxhY2sge1xuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICB3aWR0aDogMjM2cHg7XG4gIG1hcmdpbjogNXB4IDYwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gICAgI2NhbGMge1xuICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAjY2FsYyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG4gIH1cbn1cblxuLnNtYWxsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTUwcHggOTBweDtcbiAgaDEge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiA1cHggNjBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwMHB4IDIwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjNweCkgYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDIwcHg7XG4gIH1cbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAjdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cblxuICAjZG90cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTI4cHg7XG4gICAgcmlnaHQ6IC0xMDBweDtcbiAgICB6LWluZGV4OiAtOTk5O1xuICB9XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.scss']
            }]
    }], null, null); })();


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




const routes = [];
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