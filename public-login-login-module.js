(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/public/login/login.page.html":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding=\"true\" class='background'>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row color=\"primary\" class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\n          <div class=\"ion-text-center\">\n            <img src=\"assets/imgs/logo_pb.png\">\n\n            <span class=\"first-title\">\n              <ion-item>\n                <a routerLink=\"/register\" routerDirection=\"forward\">Primeiro Acesso ?</a>\n              </ion-item>\n            </span>\n\n            <span class=\"title\">\n              Preencha com seus dados para acessar\n            </span>\n          </div>\n\n          <div class=\"content-center\">\n            <ion-label>E-mail @mdlz.com</ion-label>\n            <mat-icon class=\"main-icon\" matSuffix>account_circle</mat-icon>\n            <mat-form-field class=\"full-width\">\n              <input matInput autocomplete=\"off\" formControlName=\"email\" class=\"lowercase\">\n            </mat-form-field>\n\n            <ion-label>Senha</ion-label>\n            <mat-icon class=\"main-icon\" matSuffix>lock</mat-icon>\n            <mat-form-field class=\"full-width\">\n              <input matInput [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\" formControlName=\"password\">\n              <mat-icon class=\"dark-icon\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}\n              </mat-icon>\n            </mat-form-field>\n\n          </div>\n          <div class=\"ion-margin-bottom\">\n            <button   type=\"submit\" (click)=\"login()\" class=\"btn-mdlz\" block>\n              Entrar</button>\n          </div>\n\n          <div class=\"ion-text-center\">\n            <ion-item r>\n              <a routerLink=\"/recovery\" routerDirection=\"forward\">Problemas para realizar seu login?</a>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-align-self-center {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 0 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2xvZ2luL0Q6XFxEZXNrdG9wXFxQcm9qZXRvc1xcRGVzZW52b2x2aW1lbnRvXFxNb25kZWxlelxcUGx1c1xcR0lUX01vbmRlbGV6UGx1c1xcZnJvbnQvc3JjXFxhcHBcXHB1YmxpY1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var src_models_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/User */ "./src/models/User.ts");










//-------------------------------------------------------------------------------------------------------------------------------//
var LoginPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function LoginPage(platform, authService, menu, api, formBuilder, router, utils) {
        this.platform = platform;
        this.authService = authService;
        this.menu = menu;
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.utils = utils;
        this.logHeader = "LoginPage>>";
        this.hide = true;
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30)
            ]))
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    LoginPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    LoginPage.prototype.login = function () {
        var _this = this;
        this.api.login(this.form.value.email, this.form.value.password).subscribe(function (data) {
            var user = src_models_User__WEBPACK_IMPORTED_MODULE_9__["User"].castFromJSON(data["_body"]);
            _this.authService.setAuthObject(user);
            _this.authService.setAuthObject(user);
            _this.appStartNavigation(user);
        }, function (error) {
            try {
                var message = JSON.parse(error._body).message;
                if (message.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ErrorType"].BAD_CREDENTIALS)) {
                    _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].BAD_PASSWORD);
                }
                else if (message.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ErrorType"].USER_NOT_FOUND)) {
                    _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].BAD_LOGIN);
                }
                else if (message.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ErrorType"].USER_DISABLED)) {
                    _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].USER_DISABLED);
                }
                else if (error.status == 0) {
                    _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].COMMUNICATION_FAILURE);
                }
                else {
                    _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].SOMETHING_WENT_WRONG);
                }
            }
            catch (_a) {
                _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].SOMETHING_WENT_WRONG);
            }
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    LoginPage.prototype.appStartNavigation = function (user) {
        var _this = this;
        var logHeader = this.logHeader + "appStartNavigation>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        if (user.isFinalizado()) {
            this.menu.enable(true);
            if (user.getTipo() == src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["UserType"].ADMINISTRATOR) {
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader + "USER>>ADMINISTRATOR");
                this.router.navigate(['admin', 'dashboard']).then(function (o) {
                    _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].WELCOME);
                }).catch(function (error) {
                    _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].SOMETHING_WENT_WRONG);
                });
            }
            else {
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader + "USER>>COMMON");
                this.router.navigate(['home', 'extrato']).then(function (o) {
                    _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].WELCOME);
                }).catch(function (error) {
                    _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].SOMETHING_WENT_WRONG);
                });
            }
        }
        else {
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader + "USER>>NOT_FINALIZADO");
            this.router.navigate(['email-confirm']).then(function (o) {
            }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_8__["ToastText"].SOMETHING_WENT_WRONG); });
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/public/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-login-login-module.js.map