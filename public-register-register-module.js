(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"],{

/***/ "./src/app/public/register/register.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/public/register/register.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/public/register/register.page.html":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header-extrato\">\r\n  <ion-toolbar class=\"no-radius\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\" class='background'>\r\n\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div class=\"ion-text-center\">\r\n            <img src=\"assets/imgs/logo_pb.png\">\r\n            <span class=\"title\">\r\n              Venha fazer parte da nossa comunidade!\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\" \">\r\n            <ion-label>Nome completo <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>account_circle</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"name\">\r\n            </mat-form-field>\r\n\r\n            <ion-label>E-mail @mdlz.com <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>email</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n\r\n              <input matInput autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\"\r\n                aria-describedby=\"basic-addon2\" formControlName=\"email\">\r\n\r\n            </mat-form-field>\r\n\r\n            <ion-label>Nº da Matrícula <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>file_copy</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"registration\">\r\n            </mat-form-field>\r\n\r\n            <ion-label>Fábrica <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"factory\" (selectionChange)=\"getSections()\">\r\n                <mat-option *ngFor=\"let factory of factories\" [value]=\"factory.id\">\r\n                  {{factory.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Seção <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"section\" (selectionChange)=\"getLines()\">\r\n                <mat-option *ngFor=\"let section of sections\" [value]=\"section.id\">\r\n                  {{section.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Linha <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"line\">\r\n                <mat-option *ngFor=\"let line of lines\" [value]=\"line.id\">\r\n                  {{line.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Senha <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>lock</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\" formControlName=\"password\">\r\n              <mat-icon class=\"dark-icon\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\r\n              </mat-icon>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Confirmar Senha <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>lock</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\" formControlName=\"passwordConfirm\">\r\n              <mat-icon class=\"dark-icon\" matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\r\n              </mat-icon>\r\n            </mat-form-field>\r\n\r\n            <ion-checkbox formControlName=\"termsOfUse\"> </ion-checkbox> <span class=\"termo-uso\">Ao marcar este campo\r\n              você estará concordando com os nossos <a (click)=\"readTerms()\">termos de uso & política de\r\n                privacidade</a></span>\r\n\r\n          </div>\r\n          <div class=\"ion-margin-top\">\r\n\r\n            <button type=\"submit\" (click)=\"register()\" class=\"btn-mdlz\" block>\r\n              Realizar Cadastro</button>\r\n\r\n          </div>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/public/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/register/register.page.ts":
/*!**************************************************!*\
  !*** ./src/app/public/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _terms_of_use_terms_of_use_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../terms-of-use/terms-of-use.page */ "./src/app/public/terms-of-use/terms-of-use.page.ts");
/* harmony import */ var src_providers_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/providers/loader-service/loader.service */ "./src/providers/loader-service/loader.service.ts");










//-------------------------------------------------------------------------------------------------------------------------------//
var RegisterPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function RegisterPage(menu, api, formBuilder, utils, router, modalCtrl, loader) {
        this.menu = menu;
        this.api = api;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loader = loader;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "RegisterPage>>";
        this.hide = true;
        this.factories = new Array();
        this.sections = new Array();
        this.lines = new Array();
        this.managers = new Array();
        this.enviado = false;
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
        this.form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            factory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            section: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            line: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30)
            ])),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30),
            ])),
            termsOfUse: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].requiredTrue
            ]))
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterPage.prototype.ngOnInit = function () {
        var logHeader = this.logHeader + "ngOnInit>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
        this.getFactories();
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterPage.prototype.getFactories = function () {
        var _this = this;
        var logHeader = this.logHeader + "getFactories>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
        this.api.getFactories().then(function (factories) {
            _this.factories = factories;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterPage.prototype.getSections = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "getSections>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
                this.api.getSections(this.form.value.factory).then(function (sections) {
                    _this.sections = sections;
                }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterPage.prototype.getLines = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "getLines>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
                this.api.getLines(this.form.value.section).then(function (lines) {
                    _this.lines = lines;
                }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.enviado = true;
                logHeader = this.logHeader + "register>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isVarInvalid(this.form) || src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isVarInvalid(this.form.value)) {
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>FORM>>" + JSON.stringify(this.form));
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.name)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_NAME);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>NAME>>" + this.form.value.name);
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.email)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_EMAIL);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>EMAIL>>" + this.form.value.email);
                }
                if (!this.form.value.email.toLowerCase().includes('@mdlz.com')) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_MONDELEZ_EMAIL);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>EMAIL>>" + this.form.value.email);
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.registration)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_REGISTRATION);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>REGISTRATION>>" + this.form.value.registration);
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.factory)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_FACTORY);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>FACTORY>>" + this.form.value.factory);
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.section)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_SECTION);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>SECTION>>" + this.form.value.section);
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.line)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_LINE);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>LINE>>" + this.form.value.line);
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.password)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_PASSWORD);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>PASSWORD>>" + this.form.value.password);
                }
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(this.form.value.passwordConfirm)) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_PASSWORD_CONFIRM);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>PASSWORD_CONFIRM>>" + this.form.value.passwordConfirm);
                }
                if (this.form.value.password != this.form.value.passwordConfirm) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].PASSWORDS_DONT_MATCH);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>PASSWORDS_DONT_MATCH>>" + this.form.value.password + '>>' + this.form.value.passwordConfirm);
                }
                if (!this.form.value.termsOfUse) {
                    this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].ACCEPT_TERMS);
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_VARIABLE + ">>TERMS_OF_USE>>" + this.form.value.termsOfUse);
                }
                this.api.userRegister(this.form.value).then(function (response) {
                    if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isVarInvalid(response)) {
                        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].hasOkStatus(response)) {
                            _this.utils.simpleAlert(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["AlertTitle"].WARNING, src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["AlertText"].SIGNUP_SUCCESSFUL);
                            _this.router.navigate(['/login']);
                        }
                        else {
                            _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG);
                        }
                    }
                    else {
                        _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG);
                    }
                }).catch(function (error) {
                    if (error._body.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_FORM)) {
                        _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_FORM);
                    }
                    if (error._body.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorType"].USER_ALREADY_ACTIVATED)) {
                        _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].USER_ALREADY_ACTIVATED);
                    }
                    if (error._body.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorType"].MANDATORY_MDLZ_EMAIL)) {
                        _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_MONDELEZ_EMAIL);
                    }
                    else {
                        _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterPage.prototype.readTerms = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "readTerms>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
                this.modalCtrl.create({
                    component: _terms_of_use_terms_of_use_page__WEBPACK_IMPORTED_MODULE_8__["TermsOfUsePage"],
                    componentProps: {}
                }).then(function (modal) {
                    src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader + "MODAL_PRESENT");
                    modal.present();
                }).catch(function (error) {
                    throw error;
                });
                return [2 /*return*/];
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/public/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/public/register/register.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_providers_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-register-register-module.js.map