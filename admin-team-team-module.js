(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-team-team-module"],{

/***/ "./src/app/admin/team/team.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/team/team.module.ts ***!
  \*******************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team.page */ "./src/app/admin/team/team.page.ts");







var routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]
    }
];
var TeamPageModule = /** @class */ (function () {
    function TeamPageModule() {
    }
    TeamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
        })
    ], TeamPageModule);
    return TeamPageModule;
}());



/***/ }),

/***/ "./src/app/admin/team/team.page.html":
/*!*******************************************!*\
  !*** ./src/app/admin/team/team.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n    <i class=\"fas fa-ellipsis-h dot-ico\"  (click)=\"openMenu($event)\" slot=\"end\"></i>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Gestão</span>\r\n    <span class=\"title_w\">de Equipes</span>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\" class=\"app-members\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n            \r\n        <div *ngFor=\"let team of teamList\">\r\n          <ion-item no-lines>\r\n            <ion-label>\r\n              <p>{{team.getNome()}}</p>             \r\n              <p class=\"user_lider\"><i class=\"fas fa-crown\"></i>{{team.getLiderNome()}}</p>    \r\n              <p class=\"email\">{{team.getMembrosCount()}} colaboradore(s)</p>          \r\n            </ion-label>\r\n            <i class=\"fas fa-ellipsis-v\" (click)=\"abrirActionSheet(team)\"></i>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"dots\"\r\n      loadingText=\"Carregando mais...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/team/team.page.scss":
/*!*******************************************!*\
  !*** ./src/app/admin/team/team.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3RlYW0vdGVhbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/team/team.page.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/team/team.page.ts ***!
  \*****************************************/
/*! exports provided: TeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPage", function() { return TeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");
/* harmony import */ var _new_new_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.page */ "./src/app/admin/team/new/new.page.ts");
/* harmony import */ var _team_menu_team_menu_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team-menu/team-menu.page */ "./src/app/admin/team/team-menu/team-menu.page.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");











//-------------------------------------------------------------------------------------------------------------------------------//
var TeamPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function TeamPage(authService, router, popoverController, api, utils, actionSheetController, modalController, pageDataService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.popoverController = popoverController;
        this.api = api;
        this.utils = utils;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.pageDataService = pageDataService;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "TeamPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.teams = new Array();
        this.teamList = new Array();
        this.selectedUsers = new Array();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].log(logHeader);
        this.getTeams();
        this.pageDataService.listUserEvent.subscribe(function (data) {
            if (data == 'newData') {
                _this.getTeams();
            }
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamPage.prototype.getTeams = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "getUsers>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].log(logHeader);
                this.api.getTeams().then(function (teams) {
                    _this.teams = teams;
                    _this.teamList = _this.teams;
                }).catch(function (error) {
                    _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__["ToastText"].SOMETHING_WENT_WRONG);
                });
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamPage.prototype.abrirActionSheet = function (team) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__["MenuText"].WHAT_DO_YOU_WANT_TO_DO,
                            buttons: [
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__["MenuText"].EDIT,
                                    handler: function () {
                                        _this.editTeam(team);
                                    }
                                }, {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__["MenuText"].DELETE,
                                    role: 'destructive',
                                    handler: function () {
                                        _this.api.removeTeam(team).then(function () {
                                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__["ToastText"].TEAM_REMOVED);
                                            _this.teams.splice(_this.teams.indexOf(team), 1);
                                            _this.filter(_this.searchTerm);
                                        }).catch(function () {
                                            _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__["ToastText"].SOMETHING_WENT_WRONG);
                                        });
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_10__["MenuText"].CANCEL, role: 'cancel',
                                    handler: function () {
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
    TeamPage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].isVarInvalid(evt) || src_commons_Utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].isVarInvalid(evt.srcElement)) {
            this.teamList = this.teams;
            return;
        }
        var searchTerm = evt.srcElement.value;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.teamList = this.teams;
            return;
        }
        this.teamList = this.teams.filter(function (n) { return n.getNome().toLowerCase().includes(searchTerm.toLowerCase()) || n.getLiderNome().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamPage.prototype.openMenu = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _team_menu_team_menu_page__WEBPACK_IMPORTED_MODULE_9__["TeamMenuPage"],
                            event: ev,
                            animated: true,
                            showBackdrop: true,
                            translucent: true,
                            cssClass: 'popover_class',
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TeamPage.prototype.DismissClick = function () {
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
    TeamPage.prototype.editTeam = function (team) {
        if (team === void 0) { team = undefined; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _new_new_page__WEBPACK_IMPORTED_MODULE_8__["NewPage"],
                            animated: true,
                            showBackdrop: false,
                            cssClass: 'popover_class',
                            backdropDismiss: false,
                            componentProps: {
                                team: team,
                                admin: true,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            if (_this.teamList.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], TeamPage.prototype, "infiniteScroll", void 0);
    TeamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.page.html */ "./src/app/admin/team/team.page.html"),
            styles: [__webpack_require__(/*! ./team.page.scss */ "./src/app/admin/team/team.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_5__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_6__["Utils"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_7__["PageDataService"]])
    ], TeamPage);
    return TeamPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-team-team-module.js.map