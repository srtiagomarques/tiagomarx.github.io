(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grupos-grupos-module"],{

/***/ "./src/app/admin/pontos/grupos/grupos.module.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/pontos/grupos/grupos.module.ts ***!
  \******************************************************/
/*! exports provided: GruposPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPageModule", function() { return GruposPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupos.page */ "./src/app/admin/pontos/grupos/grupos.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]
    }
];
var GruposPageModule = /** @class */ (function () {
    function GruposPageModule() {
    }
    GruposPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]]
        })
    ], GruposPageModule);
    return GruposPageModule;
}());



/***/ }),

/***/ "./src/app/admin/pontos/grupos/grupos.page.html":
/*!******************************************************!*\
  !*** ./src/app/admin/pontos/grupos/grupos.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n      </ion-buttons>\r\n  \r\n      <!--<i class=\"fas fa-ellipsis-h dot-ico\"  (click)=\"openMenu($event)\" slot=\"end\"></i> -->\r\n  \r\n    </ion-toolbar>\r\n    <ion-toolbar class=\"no-radius\">\r\n  \r\n      <span class=\"title_t\">Gestão</span>\r\n      <span class=\"title_w\">de Pontos Equipes </span>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-icon name=\"arrow-back\"  (click)=\"navigateDashboard()\" class=\"back-btn-dash\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar>\r\n      <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n  \r\n  </ion-header>\r\n\r\n\r\n  <ion-content class=\"app-members\" padding=\"true\">\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <button class=\"btn btn-block btn-mdlz-clear\" ion-button clear item-right *ngIf=\"multicheck\">\r\n          Adicionar todos(as) selecionados(as)\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <div *ngFor=\"let team of teamList\">\r\n      <ion-item no-lines>\r\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"team.checked\" (ngModelChange)=\"teamChange(team,$event)\"></ion-checkbox>\r\n        <ion-label>\r\n          <p>{{team.getNome()}}</p>         \r\n          <p class=\"user_lider\"><i class=\"fas fa-crown\"></i>{{team.getLiderNome()}}</p>\r\n          <p class=\"email\">{{team.getMembrosCount()}} colaboradore(s)</p>\r\n        </ion-label>       \r\n        <i class=\"fas fa-ellipsis-v\" (click)=\"abrirActionSheet(team)\" *ngIf=\"!multicheck\"></i>\r\n      </ion-item>\r\n    </div>\r\n  \r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"dots\"\r\n        loadingText=\"Carregando mais...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/admin/pontos/grupos/grupos.page.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/pontos/grupos/grupos.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BvbnRvcy9ncnVwb3MvZ3J1cG9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pontos/grupos/grupos.page.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/pontos/grupos/grupos.page.ts ***!
  \****************************************************/
/*! exports provided: GruposPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPage", function() { return GruposPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pontos_modal_pontos_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pontos-modal/pontos-modal.page */ "./src/app/admin/pontos/pontos-modal/pontos-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var GruposPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function GruposPage(popoverController, api, actionSheetController, utils, modalController, router) {
        this.popoverController = popoverController;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.utils = utils;
        this.modalController = modalController;
        this.router = router;
        this.logHeader = "GruposPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.multicheck = false;
        this.teams = new Array();
        this.teamList = new Array();
        this.selectedUsers = new Array();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.getTeams();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.getTeams = function () {
        var _this = this;
        var logHeader = this.logHeader + "getUsers>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.api.getTeams().then(function (teams) {
            _this.teams = teams;
            _this.teamList = _this.teams;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.abrirActionSheet = function (team) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].WHAT_DO_YOU_WANT_TO_DO,
                            buttons: [{
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].ADD_POINTS,
                                    handler: function () {
                                        _this.presentPopOver(team);
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].REMOVE_POINTS,
                                    role: 'destructive',
                                    handler: function () {
                                        _this.presentPopOverDel(team);
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].CANCEL, role: 'cancel',
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
    GruposPage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(evt) || src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(evt.srcElement)) {
            return;
        }
        var searchTerm = evt.srcElement.value;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.teamList = this.teams;
            return;
        }
        this.teamList = this.teams.filter(function (n) { return n.getNome().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.teamChange = function (team, checked) {
        if (this.selectedUsers.indexOf(team.getLiderId()) < 0) {
            this.selectedUsers.push(team.getLiderId());
        }
        for (var _i = 0, _a = team.getMembros(); _i < _a.length; _i++) {
            var genUser = _a[_i];
            var user = genUser;
            if (checked) {
                if (this.selectedUsers.indexOf(user.getId()) < 0) {
                    this.selectedUsers.push(user.getId());
                }
            }
            else {
                this.selectedUsers.splice(this.selectedUsers.indexOf(user.getId()), 1);
            }
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.presentPopOver = function (team) {
        if (team === void 0) { team = undefined; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTeamUsers(team)];
                    case 1:
                        users = _a.sent();
                        return [4 /*yield*/, this.popoverController.create({
                                component: _pontos_modal_pontos_modal_page__WEBPACK_IMPORTED_MODULE_2__["PontosModalPage"],
                                componentProps: {
                                    users: users,
                                    remove: false,
                                    backdropDismiss: false,
                                }
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.presentPopOverDel = function (team) {
        if (team === void 0) { team = undefined; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTeamUsers(team)];
                    case 1:
                        users = _a.sent();
                        return [4 /*yield*/, this.popoverController.create({
                                component: _pontos_modal_pontos_modal_page__WEBPACK_IMPORTED_MODULE_2__["PontosModalPage"],
                                backdropDismiss: false,
                                componentProps: {
                                    users: users,
                                    remove: true,
                                },
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.getTeamUsers = function (team) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users, _i, _a, genUser, user, fullTeam, _b, _c, genUser, user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        users = new Array();
                        // if (!Utils.isArrayInvalid(this.selectedUsers)) {
                        //   users = this.selectedUsers;
                        // }
                        // else {
                        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(users) || (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(users) && users.indexOf(team.getLiderId()) < 0)) {
                            users.push(team.getLiderId());
                        }
                        if (!!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(team.getMembros())) return [3 /*break*/, 1];
                        for (_i = 0, _a = team.getMembros(); _i < _a.length; _i++) {
                            genUser = _a[_i];
                            user = genUser;
                            if (users.indexOf(user.getId()) < 0) {
                                users.push(user.getId());
                            }
                        }
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.api.getTeamById(team.getId())];
                    case 2:
                        fullTeam = (_d.sent());
                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(fullTeam.getMembros())) {
                            for (_b = 0, _c = fullTeam.getMembros(); _b < _c.length; _b++) {
                                genUser = _c[_b];
                                user = genUser;
                                if (users.indexOf(user.getId()) < 0) {
                                    users.push(user.getId());
                                }
                            }
                        }
                        _d.label = 3;
                    case 3: 
                    // }
                    return [2 /*return*/, users];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            if (_this.teams.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    GruposPage.prototype.navigateDashboard = function () {
        this.router.navigate(['admin', 'dashboard']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], GruposPage.prototype, "infiniteScroll", void 0);
    GruposPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grupos',
            template: __webpack_require__(/*! ./grupos.page.html */ "./src/app/admin/pontos/grupos/grupos.page.html"),
            styles: [__webpack_require__(/*! ./grupos.page.scss */ "./src/app/admin/pontos/grupos/grupos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], GruposPage);
    return GruposPage;
}());



/***/ })

}]);
//# sourceMappingURL=grupos-grupos-module.js.map