(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pontos-tab1-module"],{

/***/ "./src/app/users/home/pontos/tab1.module.ts":
/*!**************************************************!*\
  !*** ./src/app/users/home/pontos/tab1.module.ts ***!
  \**************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/users/home/pontos/tab1.page.ts");







var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/users/home/pontos/tab1.page.html":
/*!**************************************************!*\
  !*** ./src/app/users/home/pontos/tab1.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"no-radius\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Confira</span>\r\n    <span class=\"title_w\">seus Pontos</span>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n    <div class=\"box-pontos \">\r\n      <div class=\"ion-text-center box-pontos-content ion-align-self-center\">\r\n          <img src=\"../../../../assets/imgs/mdlz-logo2_border.png\">\r\n          <span class=\"text-pontos\">Sua pontuação atual</span>\r\n          <span class=\"box-pontos-valor\">{{points}}</span>\r\n      </div>\r\n    </div>\r\n \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/users/home/pontos/tab1.page.scss":
/*!**************************************************!*\
  !*** ./src/app/users/home/pontos/tab1.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-align-self-center {\n  position: absolute;\n  top: 5%;\n  width: calc(100% - 40px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvaG9tZS9wb250b3MvRDpcXERlc2t0b3BcXFByb2pldG9zXFxEZXNlbnZvbHZpbWVudG9cXE1vbmRlbGV6XFxQbHVzXFxHSVRfTW9uZGVsZXpQbHVzXFxmcm9udC9zcmNcXGFwcFxcdXNlcnNcXGhvbWVcXHBvbnRvc1xcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvaG9tZS9wb250b3MvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/home/pontos/tab1.page.ts":
/*!************************************************!*\
  !*** ./src/app/users/home/pontos/tab1.page.ts ***!
  \************************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");





var Tab1Page = /** @class */ (function () {
    function Tab1Page(api, utils) {
        this.api = api;
        this.utils = utils;
        this.logHeader = "PontosPage>>";
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.getPoints();
    }
    Tab1Page.prototype.getPoints = function () {
        var _this = this;
        this.api.getPoints().then(function (points) {
            _this.points = points;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/users/home/pontos/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/users/home/pontos/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=pontos-tab1-module.js.map