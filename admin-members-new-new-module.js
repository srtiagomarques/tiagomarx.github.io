(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-members-new-new-module"],{

/***/ "./src/app/admin/members/new/new.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/members/new/new.module.ts ***!
  \*************************************************/
/*! exports provided: RegisterUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPageModule", function() { return RegisterUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/admin/members/new/new.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUserPage"]
    }
];
var RegisterUserPageModule = /** @class */ (function () {
    function RegisterUserPageModule() {
    }
    RegisterUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUserPage"]]
        })
    ], RegisterUserPageModule);
    return RegisterUserPageModule;
}());



/***/ }),

/***/ "./src/app/admin/members/new/new.page.html":
/*!*************************************************!*\
  !*** ./src/app/admin/members/new/new.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n<!-- \r\n   <i class=\"fas fa-ellipsis-h dot-ico\"  (click)=\"openMenu($event)\" slot=\"end\"></i> -->\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Registro</span>\r\n    <span class=\"title_w\">de Usuários</span>\r\n    \r\n    <ion-buttons slot=\"end\">\r\n        <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content  padding=\"true\" class=\"app-registro\">\r\n\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n        \r\n            <ion-label>Nome completo <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>account_circle</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"name\">\r\n            </mat-form-field>\r\n\r\n            <ion-label>E-mail @mdlz.com <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>email</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n             \r\n                <input matInput autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\"\r\n                  aria-describedby=\"basic-addon2\" formControlName=\"email\">\r\n                \r\n            </mat-form-field>\r\n\r\n            <ion-label>Nº da Matrícula <span class=\"required\">*</span></ion-label>\r\n            <mat-icon class=\"main-icon\" matSuffix>file_copy</mat-icon>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput autocomplete=\"off\" formControlName=\"registration\">\r\n            </mat-form-field>\r\n\r\n            <ion-label>Fábrica <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"factory\" [compareWith]=\"compareById\" (selectionChange)=\"getSections()\">\r\n                <mat-option *ngFor=\"let factory of factories\" [value]=\"factory\">\r\n                  {{factory.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Seção <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"section\" [compareWith]=\"compareById\" (selectionChange)=\"getLines()\">\r\n                <mat-option *ngFor=\"let section of sections\" [value]=\"section\">\r\n                  {{section.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <ion-label>Linha <span class=\"required\">*</span></ion-label>\r\n            <mat-form-field class=\"full-width margin-top\">\r\n              <mat-select formControlName=\"line\" [compareWith]=\"compareById\" >\r\n                <mat-option *ngFor=\"let line of lines\" [value]=\"line\">\r\n                  {{line.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <!-- esse campo só habilita qdo for opção de editar -->\r\n            <div class=\"pass_reset\" *ngIf=\"modoEdicao\" >\r\n            <ion-label>Resetar Senha do Usuário</ion-label>\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"text\" class=\"form-control\" aria-describedby=\"button-addon2\">\r\n              <div class=\"input-group-append\">\r\n                <button (click)=\"resetPassword()\" class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Resetar </button>\r\n              </div>\r\n            </div>\r\n            </div>\r\n       \r\n             <!-- / esse campo só habilita qdo for opção de editar -->\r\n\r\n             <ion-checkbox formControlName=\"userActive\"></ion-checkbox><span class=\"user_status\"> Usuário(a) Ativo(a)</span>\r\n        <br><br>\r\n             <ion-checkbox formControlName=\"userIsAdmin\"></ion-checkbox><span class=\"user_status\"> Usuário(a) Administrador(a)</span>\r\n  \r\n          <div class=\"ion-margin-top\">\r\n            <button type=\"submit\" (click)=\"register()\" class=\"btn btn-block btn-mdlz-clear\">{{getButtonCaption()}}</button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/members/new/new.page.scss":
/*!*************************************************!*\
  !*** ./src/app/admin/members/new/new.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21lbWJlcnMvbmV3L25ldy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/members/new/new.page.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/members/new/new.page.ts ***!
  \***********************************************/
/*! exports provided: RegisterUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPage", function() { return RegisterUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _members_menu_members_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../members-menu/members-menu.component */ "./src/app/admin/members/members-menu/members-menu.component.ts");










//-------------------------------------------------------------------------------------------------------------------------------//
var RegisterUserPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function RegisterUserPage(api, formBuilder, utils, router, pageDataService, popoverController) {
        var _this = this;
        this.api = api;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.router = router;
        this.pageDataService = pageDataService;
        this.popoverController = popoverController;
        this.logHeader = "RegisterPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.modoEdicao = false;
        this.hide = true;
        this.factories = new Array();
        this.sections = new Array();
        this.lines = new Array();
        this.managers = new Array();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        var data = this.pageDataService.getData('user-edit');
        this.pageDataService.removeData('user-edit');
        this.form = this.formBuilder.group({
            userActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, null),
            userIsAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            factory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            section: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            line: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]))
        });
        this.modoEdicao = !src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(data);
        var isAdmin;
        var isAtivo;
        var nome;
        var email;
        var matricula;
        var line;
        var section;
        var factory;
        if (this.modoEdicao) {
            var user = data;
            this.user = user;
            isAdmin = user.isAdmin();
            isAtivo = user.isAtivo();
            nome = user.getNome();
            email = user.getEmail();
            matricula = user.getMatricula();
            this.api.getLines().then(function (lines) {
                _this.lines = lines;
                line = lines.filter(function (k) { return k.getId() == _this.user.getLinhaId(); })[0];
                _this.api.getSections().then(function (sections) {
                    _this.sections = sections;
                    section = sections.filter(function (k) { return k.getId() == line.getSecaoId(); })[0];
                    _this.api.getFactories().then(function (factories) {
                        _this.factories = factories;
                        factory = factories.filter(function (k) { return k.getId() == section.getFabricaId(); })[0];
                        _this.form.patchValue({
                            'name': nome,
                            'userIsAdmin': isAdmin,
                            'userActive': isAtivo,
                            'email': email,
                            'registration': matricula,
                            'line': line,
                            'section': section,
                            'factory': factory,
                        });
                    }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG); });
                }).catch(function (error) {
                    _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                });
            }).catch(function (error) {
                _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
            });
        }
    }
    RegisterUserPage.prototype.compareById = function (o1, o2) {
        if (o1 == null || o2 == null) {
            return false;
        }
        return o1.id === o2.id;
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.ngOnInit = function () {
        this.getFactories();
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.openMenu = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.DismissClick();
                        return [4 /*yield*/, this.popoverController.create({
                                component: _members_menu_members_menu_component__WEBPACK_IMPORTED_MODULE_9__["MembersMenuComponent"],
                                event: ev,
                                animated: true,
                                showBackdrop: true,
                                translucent: true,
                                cssClass: 'popover_class'
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterUserPage.prototype.DismissClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.getFactories = function () {
        var _this = this;
        var logHeader = this.logHeader + "getFactories>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.api.getFactories().then(function (factories) {
            _this.factories = factories;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.getSections = function () {
        var _this = this;
        var logHeader = this.logHeader + "getSections>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.api.getSections(this.form.value.factory.getId()).then(function (sections) {
            _this.sections = sections;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.getLines = function () {
        var _this = this;
        var logHeader = this.logHeader + "getLines>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.api.getLines(this.form.value.section.getId()).then(function (lines) {
            _this.lines = lines;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "register>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(this.form) || src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(this.form.value)) {
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"].INVALID_VARIABLE + "FORM>>" + JSON.stringify(this.form));
                }
                if (!this.modoEdicao) {
                    this.api.adminRegister(this.form.value).then(function (response) {
                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(response)) {
                            if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].hasOkStatus(response)) {
                                _this.pageDataService.pushUsers(_this.user);
                                _this.utils.simpleAlert(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["AlertTitle"].WARNING, src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["AlertText"].SIGNUP_SUCCESSFUL);
                                _this.router.navigate(['/members']);
                            }
                            else {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                            }
                        }
                        else {
                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                        }
                    }).catch(function (error) {
                        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(error._body)) {
                            if (error._body.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"].INVALID_FORM)) {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"].INVALID_FORM);
                            }
                            if (error._body.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorType"].USER_ALREADY_ACTIVATED)) {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].USER_ALREADY_ACTIVATED);
                            }
                            else {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                            }
                        }
                        else {
                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                        }
                    });
                }
                else {
                    this.user.setAdmin(this.form.value.userIsAdmin);
                    this.user.setAtivo(this.form.value.userActive);
                    this.user.setNome(this.form.value.name);
                    this.user.setEmail(this.form.value.email);
                    this.user.setAtivo(this.form.value.userActive);
                    this.user.setMatricula(this.form.value.registration);
                    this.user.setLinhaId(this.form.value.line.getId());
                    this.user.setSenha(undefined);
                    this.api.modifyUser(this.user).then(function (response) {
                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(response)) {
                            if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].hasOkStatus(response)) {
                                _this.utils.simpleAlert(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["AlertTitle"].WARNING, src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["AlertText"].SIGNUP_SUCCESSFUL);
                                _this.router.navigate(['/members']);
                            }
                            else {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                            }
                        }
                        else {
                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                        }
                    }).catch(function (error) {
                        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(error._body)) {
                            if (error._body.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"].INVALID_FORM)) {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"].INVALID_FORM);
                            }
                            if (error._body.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorType"].USER_ALREADY_ACTIVATED)) {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].USER_ALREADY_ACTIVATED);
                            }
                            else {
                                _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                            }
                        }
                        else {
                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.resetPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "resetPassword>>";
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(this.user)) {
                    throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"].INVALID_VARIABLE + ">>" + this.user);
                }
                this.api.resetUserPassword(this.user).then(function () {
                    _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].PASSWORD_RESETED);
                }).catch(function (error) {
                    _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["ToastText"].SOMETHING_WENT_WRONG);
                });
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    RegisterUserPage.prototype.getButtonCaption = function () {
        return this.modoEdicao ? src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["MenuText"].SAVE_CHANGES : src_commons_Constants__WEBPACK_IMPORTED_MODULE_5__["MenuText"].REGISTER;
    };
    RegisterUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./new.page.html */ "./src/app/admin/members/new/new.page.html"),
            styles: [__webpack_require__(/*! ./new.page.scss */ "./src/app/admin/members/new/new.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_7__["PageDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]])
    ], RegisterUserPage);
    return RegisterUserPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-members-new-new-module.js.map