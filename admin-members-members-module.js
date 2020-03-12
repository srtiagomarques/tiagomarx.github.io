(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-members-members-module"],{

/***/ "./src/app/admin/members/members.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/members/members.module.ts ***!
  \*************************************************/
/*! exports provided: MembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageModule", function() { return MembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members.page */ "./src/app/admin/members/members.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]
    }
];
var MembersPageModule = /** @class */ (function () {
    function MembersPageModule() {
    }
    MembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: [_members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]]
        })
    ], MembersPageModule);
    return MembersPageModule;
}());



/***/ }),

/***/ "./src/app/admin/members/members.page.html":
/*!*************************************************!*\
  !*** ./src/app/admin/members/members.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n    <i class=\"fas fa-ellipsis-h dot-ico\" (click)=\"openMenu($event)\" slot=\"end\"></i>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Gestão</span>\r\n    <span class=\"title_w\">de Usuários</span>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"app-members\" padding=\"true\">\r\n\r\n  <div *ngFor=\"let user of userList\">\r\n\r\n    <ion-item no-lines>\r\n\r\n      <ion-avatar slot=\"start\" [ngClass]=\"{'user-admin': user.admin == true}\">\r\n        <div class=\"inactive-user-badge\" *ngIf=\"user.ativo\"><i class=\"fas fa-check-circle\"></i></div>\r\n        <div class=\"active-user-badge\" *ngIf=\"!user.ativo\"><i class=\"fas fa-check-circle\"></i></div>\r\n        <img src=\"{{user.getFoto()+'?'+imageConcatString}}\" onError=\"src = '../assets/imgs/user.png'\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p>{{user.nome}}</p>\r\n        <p class=\"fabrica-main\">MATRÍCULA: <span class=\"fabrica-title\">{{user.getMatricula()}}</span></p>\r\n      </ion-label>\r\n      <span class=\"badge badge-admin\" *ngIf=\"user.admin == true\">admin</span>\r\n      <i class=\"fas fa-ellipsis-v\" (click)=\"abrirActionSheet(user)\"></i>\r\n    </ion-item>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"dots\" loadingText=\"Carregando mais...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/members/members.page.scss":
/*!*************************************************!*\
  !*** ./src/app/admin/members/members.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21lbWJlcnMvbWVtYmVycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/members/members.page.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/members/members.page.ts ***!
  \***********************************************/
/*! exports provided: MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _members_menu_members_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members-menu/members-menu.component */ "./src/app/admin/members/members-menu/members-menu.component.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var MembersPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------// 
    function MembersPage(router, popoverController, api, utils, actionSheetController, modalController, pageDataService) {
        this.router = router;
        this.popoverController = popoverController;
        this.api = api;
        this.utils = utils;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.pageDataService = pageDataService;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "MembersPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.users = new Array();
        this.userList = new Array();
        this.page = 1;
        this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.getUsers();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    MembersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pageDataService.listUserEvent.subscribe(function (data) {
            _this.users.push(data);
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    MembersPage.prototype.getUsers = function () {
        var _this = this;
        var logHeader = this.logHeader + "getUsers>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.api.getUsers(1).then(function (response) {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
            var users = response.users;
            _this.totalPages = response.totalPages;
            _this.users = users;
            _this.filter(_this.searchTerm);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    MembersPage.prototype.filterUsers = function (users) {
        var filteredList = new Array();
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (this.api.getLoggedUser().getId() != user.getId()) {
                filteredList.push(user);
            }
        }
        return filteredList;
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    MembersPage.prototype.filter = function (evt) {
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
    MembersPage.prototype.changeActiveState = function (userId) {
        var logHeader = this.logHeader + "changeActiveState>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(userId) || userId <= 0) {
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"].INVALID_ID + ">>" + userId);
        }
        var user = this.users.find(function (n) { return n.getId() == userId; });
        this.api.changeUserEnabled(user);
        user.setAtivo(!user.isAtivo());
        this.filter(this.searchTerm);
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    MembersPage.prototype.openMenu = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _members_menu_members_menu_component__WEBPACK_IMPORTED_MODULE_3__["MembersMenuComponent"],
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
    MembersPage.prototype.DismissClick = function () {
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
    MembersPage.prototype.abrirActionSheet = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'O que deseja fazer?',
                            buttons: [
                                {
                                    text: 'Editar',
                                    handler: function () {
                                        _this.pageDataService.setData('user-edit', user);
                                        _this.router.navigate(['users']);
                                    }
                                }, {
                                    text: 'Excluir',
                                    role: 'destructive',
                                    handler: function () {
                                        console.log('Excluir clicado');
                                    }
                                },
                                {
                                    text: 'Cancelar', role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicado');
                                    }
                                }
                            ]
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
    MembersPage.prototype.loadData = function (event) {
        var _this = this;
        this.page++;
        var infiniteScroll = event.target;
        this.api.getUsers(this.page).then(function (response) {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
            var users = response.users;
            _this.totalPages = response.totalPages;
            _this.users = _this.filterUsers(_this.users.concat(users));
            _this.filter(_this.searchTerm);
            infiniteScroll.complete();
            infiniteScroll.disabled = _this.page >= _this.totalPages;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], MembersPage.prototype, "infiniteScroll", void 0);
    MembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.page.html */ "./src/app/admin/members/members.page.html"),
            styles: [__webpack_require__(/*! ./members.page.scss */ "./src/app/admin/members/members.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_7__["PageDataService"]])
    ], MembersPage);
    return MembersPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-members-members-module.js.map