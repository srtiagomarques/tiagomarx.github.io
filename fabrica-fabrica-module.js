(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fabrica-fabrica-module"],{

/***/ "./src/app/admin/areas/fabrica/fabrica.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/areas/fabrica/fabrica.module.ts ***!
  \*******************************************************/
/*! exports provided: FabricaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricaPageModule", function() { return FabricaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fabrica_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fabrica.page */ "./src/app/admin/areas/fabrica/fabrica.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _fabrica_page__WEBPACK_IMPORTED_MODULE_6__["FabricaPage"]
    }
];
var FabricaPageModule = /** @class */ (function () {
    function FabricaPageModule() {
    }
    FabricaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fabrica_page__WEBPACK_IMPORTED_MODULE_6__["FabricaPage"]]
        })
    ], FabricaPageModule);
    return FabricaPageModule;
}());



/***/ }),

/***/ "./src/app/admin/areas/fabrica/fabrica.page.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/areas/fabrica/fabrica.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n    <i class=\"fas fa-ellipsis-h dot-ico\" (click)=\"openMenu($event)\" slot=\"end\"></i>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Gestão</span>\r\n    <span class=\"title_w\">de Fábrica</span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"arrow-back\"  (click)=\"navigateDashboard()\" class=\"back-btn-dash\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n\r\n\r\n  <table>\r\n    <thead>\r\n      <tr class=\"table100-head\">\r\n        <th class=\"column1\">Fábrica</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let factory of factoryList\">\r\n        <td class=\"column1\">{{factory.nome}} <i class=\"fas fa-ellipsis-v\" (click)=\"abrirActionSheet(factory)\"></i></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/areas/fabrica/fabrica.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin/areas/fabrica/fabrica.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FyZWFzL2ZhYnJpY2EvZmFicmljYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/areas/fabrica/fabrica.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/areas/fabrica/fabrica.page.ts ***!
  \*****************************************************/
/*! exports provided: FabricaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricaPage", function() { return FabricaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new/new.page */ "./src/app/admin/areas/fabrica/new/new.page.ts");
/* harmony import */ var _fabrica_menu_fabrica_menu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fabrica-menu/fabrica-menu.page */ "./src/app/admin/areas/fabrica/fabrica-menu/fabrica-menu.page.ts");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










//-------------------------------------------------------------------------------------------------------------------------------//
var FabricaPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function FabricaPage(api, utils, actionSheetController, modalController, popoverController, pageDataService, router) {
        var _this = this;
        this.api = api;
        this.utils = utils;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.pageDataService = pageDataService;
        this.router = router;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "FabricaPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.factories = new Array();
        this.factoryList = new Array();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.pageDataService.listUserEvent.subscribe(function () {
            var data = _this.pageDataService.getData('newFactory');
            if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(data)) {
                _this.factories.splice(_this.factories.indexOf(_this.factories.filter(function (n) { return n.getId() == data.getId(); })[0]), 1);
                _this.factories.push(data);
                _this.filter(_this.searchTerm);
            }
        });
        this.getFactories();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    FabricaPage.prototype.ngOnInit = function () {
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    FabricaPage.prototype.getFactories = function () {
        var _this = this;
        this.api.getFactories().then(function (factories) {
            _this.factories = factories;
            _this.factoryList = _this.factories;
        }).catch(function (error) {
            _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG);
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    FabricaPage.prototype.filter = function (evt) {
        var _this = this;
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(evt)) {
            this.factoryList = this.factories;
            return;
        }
        this.searchTerm = evt;
        if (!this.searchTerm) {
            this.factoryList = this.factories;
            return;
        }
        this.factoryList = this.factories.filter(function (n) { return n.getNome().toLowerCase().includes(_this.searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    FabricaPage.prototype.abrirActionSheet = function (factory) {
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
                                        _this.editFactory(factory);
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["MenuText"].DELETE,
                                    role: 'destructive',
                                    handler: function () {
                                        _this.api.removeFactory(factory.getId()).then(function () {
                                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].REMOVE_SUCCESSFUL);
                                            _this.factories.splice(_this.factories.indexOf(factory), 1);
                                            _this.filter(_this.searchTerm);
                                        }).catch(function (error) {
                                            var message = JSON.parse(error._body).message;
                                            if (message.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ErrorType"].OBJECT_IN_USE)) {
                                                _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].OBJECT_IN_USE);
                                            }
                                            else {
                                                _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG);
                                            }
                                        });
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
    FabricaPage.prototype.editFactory = function (factory) {
        if (factory === void 0) { factory = undefined; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _new_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPageF"],
                            animated: true,
                            showBackdrop: false,
                            backdropDismiss: false,
                            cssClass: 'popover_class',
                            componentProps: {
                                factory: factory
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
    FabricaPage.prototype.openMenu = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _fabrica_menu_fabrica_menu_page__WEBPACK_IMPORTED_MODULE_7__["FabricaMenuPage"],
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
    FabricaPage.prototype.navigateDashboard = function () {
        this.router.navigate(['admin', 'dashboard']);
    };
    FabricaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fabrica',
            template: __webpack_require__(/*! ./fabrica.page.html */ "./src/app/admin/areas/fabrica/fabrica.page.html"),
            styles: [__webpack_require__(/*! ./fabrica.page.scss */ "./src/app/admin/areas/fabrica/fabrica.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_8__["PageDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], FabricaPage);
    return FabricaPage;
}());



/***/ })

}]);
//# sourceMappingURL=fabrica-fabrica-module.js.map