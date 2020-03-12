(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-rules-rules-module"],{

/***/ "./src/app/users/rules/rules.module.ts":
/*!*********************************************!*\
  !*** ./src/app/users/rules/rules.module.ts ***!
  \*********************************************/
/*! exports provided: RulesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPageModule", function() { return RulesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules.page */ "./src/app/users/rules/rules.page.ts");







var routes = [
    {
        path: '',
        component: _rules_page__WEBPACK_IMPORTED_MODULE_6__["RulesPage"]
    }
];
var RulesPageModule = /** @class */ (function () {
    function RulesPageModule() {
    }
    RulesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rules_page__WEBPACK_IMPORTED_MODULE_6__["RulesPage"]]
        })
    ], RulesPageModule);
    return RulesPageModule;
}());



/***/ }),

/***/ "./src/app/users/rules/rules.page.html":
/*!*********************************************!*\
  !*** ./src/app/users/rules/rules.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <span class=\"title_t\">Regulamento</span>\r\n    <span class=\"title_w\">Mondelez Plus</span>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <iframe *ngIf=\"pdfLink\" [src]=\"pdfLink\" width=\"100%\" height=\"100%\" frameborder=\"0\" ></iframe>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/users/rules/rules.page.scss":
/*!*********************************************!*\
  !*** ./src/app/users/rules/rules.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid, ion-row, ion-col {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvcnVsZXMvRDpcXERlc2t0b3BcXFByb2pldG9zXFxEZXNlbnZvbHZpbWVudG9cXE1vbmRlbGV6XFxQbHVzXFxHSVRfTW9uZGVsZXpQbHVzXFxmcm9udC9zcmNcXGFwcFxcdXNlcnNcXHJ1bGVzXFxydWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9ydWxlcy9ydWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCwgaW9uLXJvdywgaW9uLWNvbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/rules/rules.page.ts":
/*!*******************************************!*\
  !*** ./src/app/users/rules/rules.page.ts ***!
  \*******************************************/
/*! exports provided: RulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPage", function() { return RulesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var RulesPage = /** @class */ (function () {
    function RulesPage(document, sanitizer) {
        this.document = document;
        this.sanitizer = sanitizer;
        this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url=' + 'https://pdfobject.com/pdf/sample.pdf');
    }
    RulesPage.prototype.ngOnInit = function () {
    };
    RulesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.page.html */ "./src/app/users/rules/rules.page.html"),
            styles: [__webpack_require__(/*! ./rules.page.scss */ "./src/app/users/rules/rules.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["DocumentViewer"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], RulesPage);
    return RulesPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-rules-rules-module.js.map