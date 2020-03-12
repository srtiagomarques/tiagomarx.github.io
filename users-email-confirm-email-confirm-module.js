(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-email-confirm-email-confirm-module"],{

/***/ "./src/app/users/email-confirm/email-confirm.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/users/email-confirm/email-confirm.module.ts ***!
  \*************************************************************/
/*! exports provided: EmailConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfirmPageModule", function() { return EmailConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _email_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-confirm.page */ "./src/app/users/email-confirm/email-confirm.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _email_confirm_page__WEBPACK_IMPORTED_MODULE_6__["EmailConfirmPage"]
    }
];
var EmailConfirmPageModule = /** @class */ (function () {
    function EmailConfirmPageModule() {
    }
    EmailConfirmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_email_confirm_page__WEBPACK_IMPORTED_MODULE_6__["EmailConfirmPage"]]
        })
    ], EmailConfirmPageModule);
    return EmailConfirmPageModule;
}());



/***/ }),

/***/ "./src/app/users/email-confirm/email-confirm.page.html":
/*!*************************************************************!*\
  !*** ./src/app/users/email-confirm/email-confirm.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding=\"true\" class='background'>\r\n\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div class=\"ion-text-center\">\r\n            <img src=\"assets/imgs/logo_pb.png\">\r\n            <span class=\"title\">\r\n              Venha fazer parte da nossa comunidade!\r\n            </span>\r\n            <span class=\"title\">\r\n              Verifique sua conta de E-mail.\r\n            </span>\r\n          </div>\r\n          <div class=\"ion-margin-top\" (click)=\"returnToLogin()\">\r\n            <button type=\"submit\" class=\"btn-mdlz\" block>\r\n              Voltar para login</button>\r\n          </div>\r\n          <div class=\"ion-margin-top\" [hidden]=\"confirmationSent\" (click)=\"generateConfirmationCode()\">\r\n            <button type=\"submit\" class=\"btn-mdlz\" block>\r\n              Enviar E-mail</button>\r\n          </div>\r\n\r\n          <div class=\"ion-margin-top\" *ngIf=\"confirmationSent\">\r\n            <span class=\"title\">\r\n              Seu e-mail está demorando para chegar? Verificou sua caixa de spam e não encontrou nada? Podemos\r\n              reenviá-lo caso precise!\r\n            </span>\r\n            <button (click)=\"generateConfirmationCode()\" type=\"submit\" class=\"btn-mdlz\" block>\r\n              Reenviar E-mail</button>\r\n          </div>\r\n\r\n          <div class=\"ion-margin-top\" *ngIf=\"confirmationSent\">\r\n            <ion-label>Código Verificador do Usuário <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width full-textarea\">\r\n              <textarea (keydown.enter)=\"onKeydown($event)\"  formControlName=\"code\" matInput></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"ion-margin-top\" *ngIf=\"confirmationSent\">\r\n            <button type=\"submit\" (click)=\"validateConfirmationCode()\" class=\"btn-mdlz\" block>\r\n              Validar Cadastro</button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/users/email-confirm/email-confirm.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/users/email-confirm/email-confirm.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-align-self-center {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 0 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvZW1haWwtY29uZmlybS9EOlxcRGVza3RvcFxcUHJvamV0b3NcXERlc2Vudm9sdmltZW50b1xcTW9uZGVsZXpcXFBsdXNcXEdJVF9Nb25kZWxlelBsdXNcXGZyb250L3NyY1xcYXBwXFx1c2Vyc1xcZW1haWwtY29uZmlybVxcZW1haWwtY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2VtYWlsLWNvbmZpcm0vZW1haWwtY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/email-confirm/email-confirm.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/users/email-confirm/email-confirm.page.ts ***!
  \***********************************************************/
/*! exports provided: EmailConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfirmPage", function() { return EmailConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








//-------------------------------------------------------------------------------------------------------------------------------//
var EmailConfirmPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function EmailConfirmPage(utils, auth, api, formBuilder, router) {
        this.utils = utils;
        this.auth = auth;
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "EmailConfirmPage>>";
        this.confirmationSent = false;
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].log(logHeader);
        this.form = this.formBuilder.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]))
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    EmailConfirmPage.prototype.generateConfirmationCode = function () {
        var _this = this;
        var logHeader = this.logHeader + "generateConfirmationCode>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].log(logHeader);
        this.api.generateConfirmationCode(this.auth.loggedUser).then(function () {
            _this.confirmationSent = true;
        }).catch(function (error) {
            _this.confirmationSent = false;
            _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG);
        });
    };
    EmailConfirmPage.prototype.onKeydown = function (event) {
        event.preventDefault();
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    EmailConfirmPage.prototype.validateConfirmationCode = function () {
        var _this = this;
        var logHeader = this.logHeader + "validateConfirmationCode>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isStringInvalid(this.form.value.code)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_CONFIRMATION_CODE);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_EMAIL + ">>" + this.form.value.email);
        }
        this.api.validateConfirmationCode(this.auth.loggedUser, this.form.value.code).then(function (response) {
            if (response) {
                _this.api.tokenLogin().then(function (user) {
                    if (user.isAdmin())
                        _this.router.navigate(['admin', 'dashboard']);
                    else
                        _this.router.navigate(['home', 'pontos']);
                });
            }
            else {
                _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INVALID_CONFIRMATION_CODE);
            }
        }).catch(function (error) {
            _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG);
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    EmailConfirmPage.prototype.returnToLogin = function () {
        this.router.navigate(['login']);
    };
    EmailConfirmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-confirm',
            template: __webpack_require__(/*! ./email-confirm.page.html */ "./src/app/users/email-confirm/email-confirm.page.html"),
            styles: [__webpack_require__(/*! ./email-confirm.page.scss */ "./src/app/users/email-confirm/email-confirm.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_commons_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], EmailConfirmPage);
    return EmailConfirmPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-email-confirm-email-confirm-module.js.map