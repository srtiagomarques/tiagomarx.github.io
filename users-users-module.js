(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/admin/pontos/users/users.module.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/pontos/users/users.module.ts ***!
  \****************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/admin/pontos/users/users.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]
    }
];
var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
        })
    ], UsersPageModule);
    return UsersPageModule;
}());



/***/ }),

/***/ "./src/app/admin/pontos/users/users.page.html":
/*!****************************************************!*\
  !*** ./src/app/admin/pontos/users/users.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n    <i class=\"fas fa-ellipsis-h dot-ico\"  (click)=\"openMenu($event)\" slot=\"end\"></i>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Gestão</span>\r\n    <span class=\"title_w\">de Pontos Usuários </span>\r\n    \r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"arrow-back\"  (click)=\"navigateDashboard()\" class=\"back-btn-dash\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"app-members\" padding=\"true\">\r\n\r\n  <div  *ngFor=\"let user of userList\"  [ngClass]=\"{'checkbox-inactive': !user.ativo}\">\r\n    <ion-item no-lines>\r\n      <ion-checkbox class=\"checkbox-ui\" slot=\"start\" [(ngModel)]=\"user.checked\" (ngModelChange)=\"userChange(user,$event)\" [disabled]=\"!user.ativo\"></ion-checkbox>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{user.getFoto()+'?'+imageConcatString}}\" onError=\"src = '../assets/imgs/user.png'\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p>{{user.nome}}</p>\r\n        <p class=\"email\">{{user.email}}</p>\r\n      </ion-label>\r\n      <span class=\"badge badge-pontos\">{{user.saldo}}</span>\r\n      <i class=\"fas fa-ellipsis-v\" slot=\"end\" (click)=\"abrirActionSheet(user)\" *ngIf=\"!multicheck\"></i>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"dots\"\r\n      loadingText=\"Carregando mais...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/pontos/users/users.page.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/pontos/users/users.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BvbnRvcy91c2Vycy91c2Vycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/pontos/users/users.page.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/pontos/users/users.page.ts ***!
  \**************************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var _pontos_modal_pontos_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pontos-modal/pontos-modal.page */ "./src/app/admin/pontos/pontos-modal/pontos-modal.page.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _pontos_menu_pontos_menu_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pontos-menu/pontos-menu.page */ "./src/app/admin/pontos/pontos-menu/pontos-menu.page.ts");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











//-------------------------------------------------------------------------------------------------------------------------------//
var UsersPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function UsersPage(authService, popoverController, api, actionSheetController, utils, modalController, alertController, pageData, router) {
        var _this = this;
        this.authService = authService;
        this.popoverController = popoverController;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.utils = utils;
        this.modalController = modalController;
        this.alertController = alertController;
        this.pageData = pageData;
        this.router = router;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.count = 0;
        this.checked = false;
        this.multicheck = false;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "UsersPage>>";
        this.users = new Array();
        this.userList = new Array();
        this.selectedUsers = new Array();
        this.page = 1;
        this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
        pageData.listUserEvent.subscribe(function (data) {
            if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(data) && !src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(data.users) && !src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(data.value)) {
                var _loop_1 = function (user) {
                    if (data.users.filter(function (n) { return n == user.getId(); }).length > 0) {
                        user.setSaldo(user.getSaldo() + data.value);
                    }
                };
                for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                    var user = _a[_i];
                    _loop_1(user);
                }
            }
            _this.filter(_this.searchTerm);
        });
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.getUsers();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.getUsers = function () {
        var _this = this;
        var logHeader = this.logHeader + "getUsers>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.api.getUsers(1).then(function (response) {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
            var users = response.users;
            _this.totalPages = response.totalPages;
            _this.users = _this.filterUsers(users);
            _this.filter(_this.searchTerm);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.filterUsers = function (users) {
        // let filteredList: Array<User> = new Array<User>();
        // for (let user of users) {
        //   if (this.api.getLoggedUser().getId() != user.getId()) {
        //     filteredList.push(user);
        //   }
        // }
        // return filteredList;
        return users;
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isStringInvalid(evt)) {
            this.userList = this.users;
            return;
        }
        var searchTerm = evt;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.userList = this.users;
            return;
        }
        this.userList = this.users.filter(function (n) { return n.getNome().toLowerCase().includes(searchTerm.toLowerCase()) || n.getEmail().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.abrirActionSheet = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].WHAT_DO_YOU_WANT_TO_DO,
                            buttons: [{
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].ADD_POINTS,
                                    handler: function () {
                                        _this.presentPopOver(user);
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].REMOVE_POINTS,
                                    role: 'destructive',
                                    handler: function () {
                                        _this.presentPopOverDel(user);
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].CANCEL, role: 'cancel',
                                    handler: function () {
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.presentPopOver = function (user) {
        if (user === void 0) { user = undefined; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(this.selectedUsers)) {
                            users = this.selectedUsers;
                        }
                        else {
                            users = [user.getId()];
                        }
                        return [4 /*yield*/, this.popoverController.create({
                                component: _pontos_modal_pontos_modal_page__WEBPACK_IMPORTED_MODULE_6__["PontosModalPage"],
                                showBackdrop: true,
                                backdropDismiss: false,
                                componentProps: {
                                    users: users,
                                    remove: false
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.presentPopOverDel = function (user) {
        if (user === void 0) { user = undefined; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(this.selectedUsers)) {
                            users = this.selectedUsers;
                        }
                        else {
                            users = [user.getId()];
                        }
                        return [4 /*yield*/, this.popoverController.create({
                                component: _pontos_modal_pontos_modal_page__WEBPACK_IMPORTED_MODULE_6__["PontosModalPage"],
                                showBackdrop: true,
                                backdropDismiss: false,
                                componentProps: {
                                    users: users,
                                    remove: true
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.page = 1;
                            _this.infiniteScroll.disabled = _this.page >= _this.totalPages;
                            _this.getUsers();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.userChange = function (user, checked, evt) {
        if (evt === void 0) { evt = undefined; }
        if (checked) {
            if (this.selectedUsers.indexOf(user.getId()) < 0) {
                this.selectedUsers.push(user.getId());
            }
        }
        else {
            this.selectedUsers.splice(this.selectedUsers.indexOf(user.getId()), 1);
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.loadData = function (event) {
        var _this = this;
        this.page++;
        this.infiniteScroll = event.target;
        this.api.getUsers(this.page).then(function (response) {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
            var users = response.users;
            _this.totalPages = response.totalPages;
            _this.users = _this.filterUsers(_this.users.concat(users));
            _this.filter(_this.searchTerm);
            _this.infiniteScroll.complete();
            _this.infiniteScroll.disabled = _this.page >= _this.totalPages;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.openMenu = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _pontos_menu_pontos_menu_page__WEBPACK_IMPORTED_MODULE_8__["PontosMenuPage"],
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
    //-------------------------------------------------------------------------------------------------------------------------------//
    UsersPage.prototype.DismissClick = function () {
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
    UsersPage.prototype.navigateDashboard = function () {
        this.router.navigate(['admin', 'dashboard']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], UsersPage.prototype, "infiniteScroll", void 0);
    UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.page.html */ "./src/app/admin/pontos/users/users.page.html"),
            styles: [__webpack_require__(/*! ./users.page.scss */ "./src/app/admin/pontos/users/users.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_9__["PageDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], UsersPage);
    return UsersPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map