(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-recovery-recovery-module"],{

/***/ "./src/app/public/recovery/recovery.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/recovery/recovery.module.ts ***!
  \****************************************************/
/*! exports provided: RecoveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPageModule", function() { return RecoveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recovery.page */ "./src/app/public/recovery/recovery.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var routes = [
    {
        path: '',
        component: _recovery_page__WEBPACK_IMPORTED_MODULE_6__["RecoveryPage"]
    }
];
var RecoveryPageModule = /** @class */ (function () {
    function RecoveryPageModule() {
    }
    RecoveryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recovery_page__WEBPACK_IMPORTED_MODULE_6__["RecoveryPage"]]
        })
    ], RecoveryPageModule);
    return RecoveryPageModule;
}());



/***/ }),

/***/ "./src/app/public/recovery/recovery.page.html":
/*!****************************************************!*\
  !*** ./src/app/public/recovery/recovery.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header-extrato\">\r\n  <ion-toolbar class=\"no-radius\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\" class='background'>\r\n\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div class=\"ion-text-center\">\r\n            <img src=\"assets/imgs/logo_pb.png\">\r\n            <span class=\"title\">\r\n              Esqueceu sua senha? Nós te ajudamos\r\n            </span>\r\n          </div>\r\n          <div class=\" \">\r\n\r\n            <ion-label>E-mail @mdlz.com <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>email</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n\r\n              <input matInput autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\"\r\n                aria-describedby=\"basic-addon2\" formControlName=\"email\">\r\n\r\n            </mat-form-field>\r\n\r\n            <ion-label>Nº da Matrícula <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>file_copy</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"registration\">\r\n            </mat-form-field>\r\n\r\n          </div>\r\n          <div class=\" \">\r\n            <button type=\"submit\" (click)=\"recover()\" class=\"btn-mdlz\" block [disabled]=\"!form.valid\">\r\n              Recuperar Senha</button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/public/recovery/recovery.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/recovery/recovery.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9yZWNvdmVyeS9yZWNvdmVyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/recovery/recovery.page.ts":
/*!**************************************************!*\
  !*** ./src/app/public/recovery/recovery.page.ts ***!
  \**************************************************/
/*! exports provided: RecoveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPage", function() { return RecoveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








//-------------------------------------------------------------------------------------------------------------------------------//
var RecoveryPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function RecoveryPage(menu, api, utils, formBuilder, router) {
        this.menu = menu;
        this.api = api;
        this.utils = utils;
        this.formBuilder = formBuilder;
        this.router = router;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "RecoveryPage>>";
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
        this.form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]))
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    RecoveryPage.prototype.recover = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.email)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INVALID_FORM + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_EMAIL);
                    return [2 /*return*/];
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.registration)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INVALID_FORM + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_REGISTRATION);
                    return [2 /*return*/];
                }
                this.api.recovery(this.form.value).then(function (response) {
                    _this.router.navigate(['/login']);
                    _this.utils.simpleAlert(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["AlertTitle"].WARNING, src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["AlertText"].RECOVER_SUCCESSFUL);
                }).catch(function (error) { return _this.utils.handleErrorToast(JSON.parse(error._body).message); });
                return [2 /*return*/];
            });
        });
    };
    RecoveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recovery',
            template: __webpack_require__(/*! ./recovery.page.html */ "./src/app/public/recovery/recovery.page.html"),
            styles: [__webpack_require__(/*! ./recovery.page.scss */ "./src/app/public/recovery/recovery.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RecoveryPage);
    return RecoveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-recovery-recovery-module.js.map