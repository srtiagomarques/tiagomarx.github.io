(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atividades-atividades-module"],{

/***/ "./src/app/admin/pontos/atividades/atividades.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/pontos/atividades/atividades.module.ts ***!
  \**************************************************************/
/*! exports provided: AtividadesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesPageModule", function() { return AtividadesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _atividades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atividades.page */ "./src/app/admin/pontos/atividades/atividades.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _atividades_page__WEBPACK_IMPORTED_MODULE_6__["AtividadesPage"]
    }
];
var AtividadesPageModule = /** @class */ (function () {
    function AtividadesPageModule() {
    }
    AtividadesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_atividades_page__WEBPACK_IMPORTED_MODULE_6__["AtividadesPage"]]
        })
    ], AtividadesPageModule);
    return AtividadesPageModule;
}());



/***/ }),

/***/ "./src/app/admin/pontos/atividades/atividades.page.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/pontos/atividades/atividades.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Gestão</span>\r\n    <span class=\"title_w\">de Atividades </span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"arrow-back\"  (click)=\"navigateDashboard()\" class=\"back-btn-dash\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <mat-form-field appearance=\"fill\" class=\"full_width\">\r\n          <mat-label>Nome da Atividade</mat-label>\r\n          <input [(ngModel)]=\"name\" matInput placeholder=\"ex: Limpeza de estação de trabalho\">\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <mat-form-field appearance=\"fill\" class=\"full_width\">\r\n          <mat-label>Pilar</mat-label>\r\n          <mat-select [(ngModel)]=\"pilar\">\r\n            <mat-option *ngFor=\"let pilar of pilares\" [value]=\"pilar\">\r\n              {{pilar}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <mat-form-field appearance=\"fill\" class=\"full_width\">\r\n          <mat-label>Valor</mat-label>\r\n          <input [(ngModel)]=\"value\" matInput placeholder=\"ex: 150\">\r\n          <mat-icon matSuffix>attach_money</mat-icon>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <button type=\"submit\" (click)=\"createActivity()\" class=\"btn btn-block btn-mdlz-clear\" ion-button clear\r\n          item-right>\r\n          Adicionar\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-col>\r\n\r\n      <table>\r\n        <thead>\r\n          <tr class=\"table100-head\">\r\n            <th class=\"column1\">Atividade</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let activity of activityList\">\r\n            <td class=\"column1\">{{activity.nome}}<i class=\"fas fa-ellipsis-v double_size\"\r\n                (click)=\"abrirActionSheet(activity)\"></i></td>\r\n            <td>{{activity.valor}} pontos</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </ion-col>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"dots\" loadingText=\"Carregando mais...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/pontos/atividades/atividades.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/pontos/atividades/atividades.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BvbnRvcy9hdGl2aWRhZGVzL2F0aXZpZGFkZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/pontos/atividades/atividades.page.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/pontos/atividades/atividades.page.ts ***!
  \************************************************************/
/*! exports provided: AtividadesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesPage", function() { return AtividadesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var src_models_Activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/Activity */ "./src/models/Activity.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var _atividades_edit_atividades_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atividades-edit/atividades-edit.page */ "./src/app/admin/pontos/atividades-edit/atividades-edit.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









//-------------------------------------------------------------------------------------------------------------------------------//
var AtividadesPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function AtividadesPage(actionSheetController, api, utils, popoverController, router) {
        this.actionSheetController = actionSheetController;
        this.api = api;
        this.utils = utils;
        this.popoverController = popoverController;
        this.router = router;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "AtividadesPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.pilares = new Array();
        this.activities = new Array();
        this.activityList = new Array();
        this.page = 1;
        var logHeader = this.logHeader + "constructor>>";
        this.getActivities();
        this.pilares = ["Liderança", "SSMA", "MF", "IIM", "MP", "MA", "QM", "WPI"];
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    AtividadesPage.prototype.getActivities = function () {
        var _this = this;
        this.api.getActivities(1).then(function (response) {
            var activities = response.list;
            _this.totalPages = response.totalPages;
            _this.activities = activities;
            _this.filter(_this.searchTerm);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    AtividadesPage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(evt)) {
            this.activityList = this.activities;
            return;
        }
        var searchTerm = evt;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.activityList = this.activities;
            return;
        }
        this.activityList = this.activities.filter(function (n) { return n.getNome().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    AtividadesPage.prototype.abrirActionSheet = function (activity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["MenuText"].WHAT_DO_YOU_WANT_TO_DO,
                            buttons: [
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["MenuText"].EDIT,
                                    handler: function () {
                                        _this.presentEditPopover(activity);
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["MenuText"].DELETE,
                                    role: 'destructive',
                                    handler: function () {
                                        _this.api.removeActivity(activity).then(function () {
                                            _this.activities.splice(_this.activities.indexOf(activity), 1);
                                            _this.filter(_this.searchTerm);
                                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].ACTIVITY_REMOVED);
                                        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["MenuText"].CANCEL, role: 'cancel',
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
    AtividadesPage.prototype.createActivity = function () {
        var _this = this;
        var logHeader = this.logHeader + "createActivity>>";
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(this.name)) {
            this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].INSERT_NAME);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"].INVALID_STRING + ">>NAME>>" + this.name);
        }
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(this.pilar)) {
            this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].INSERT_NAME);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"].INVALID_STRING + ">>PILAR>>" + this.pilar);
        }
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(this.value)) {
            this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].INSERT_VALUE);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"].INVALID_VARIABLE + ">>VALUE>>" + this.value);
        }
        if (this.activities.filter(function (n) { return n.getNome().toLowerCase() == _this.name.toLowerCase(); }).length > 0) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].ACTIVITY_ALREADY_EXISTS);
            throw new Error(logHeader + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].ACTIVITY_ALREADY_EXISTS + ">>ACTIVITY>>" + new src_models_Activity__WEBPACK_IMPORTED_MODULE_5__["Activity"](Number(this.value), this.name, this.pilar));
        }
        this.api.createActivity(new src_models_Activity__WEBPACK_IMPORTED_MODULE_5__["Activity"](Number(this.value), this.name, this.pilar)).then(function (activity) {
            _this.activityList.push(activity);
            _this.filter(_this.searchTerm);
            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].ACTIVITY_ADDED);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    AtividadesPage.prototype.presentEditPopover = function (activity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _atividades_edit_atividades_edit_page__WEBPACK_IMPORTED_MODULE_7__["AtividadesEditPage"],
                            backdropDismiss: false,
                            componentProps: {
                                activity: activity,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            this.activities.splice(this.activities.indexOf(activity), 1);
                            this.activities.push(src_models_Activity__WEBPACK_IMPORTED_MODULE_5__["Activity"].castFromJSON(data));
                            this.filter(this.searchTerm);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    AtividadesPage.prototype.loadData = function (event) {
        var _this = this;
        this.page++;
        var infiniteScroll = event.target;
        this.api.getActivities(this.page).then(function (response) {
            var activities = response.list;
            _this.totalPages = response.totalPages;
            _this.activities = _this.activities.concat(activities);
            _this.filter(_this.searchTerm);
            infiniteScroll.complete();
            infiniteScroll.disabled = _this.page >= _this.totalPages;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    AtividadesPage.prototype.navigateDashboard = function () {
        this.router.navigate(['admin', 'dashboard']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], AtividadesPage.prototype, "infiniteScroll", void 0);
    AtividadesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-atividades',
            template: __webpack_require__(/*! ./atividades.page.html */ "./src/app/admin/pontos/atividades/atividades.page.html"),
            styles: [__webpack_require__(/*! ./atividades.page.scss */ "./src/app/admin/pontos/atividades/atividades.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_6__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AtividadesPage);
    return AtividadesPage;
}());



/***/ })

}]);
//# sourceMappingURL=atividades-atividades-module.js.map