(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-pontos-users-zeramento-zeramento-module"],{

/***/ "./src/app/admin/pontos/users/zeramento/zeramento.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/pontos/users/zeramento/zeramento.module.ts ***!
  \******************************************************************/
/*! exports provided: ZeramentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZeramentoPageModule", function() { return ZeramentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _zeramento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zeramento.page */ "./src/app/admin/pontos/users/zeramento/zeramento.page.ts");







var routes = [
    {
        path: '',
        component: _zeramento_page__WEBPACK_IMPORTED_MODULE_6__["ZeramentoPage"]
    }
];
var ZeramentoPageModule = /** @class */ (function () {
    function ZeramentoPageModule() {
    }
    ZeramentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_zeramento_page__WEBPACK_IMPORTED_MODULE_6__["ZeramentoPage"]]
        })
    ], ZeramentoPageModule);
    return ZeramentoPageModule;
}());



/***/ }),

/***/ "./src/app/admin/pontos/users/zeramento/zeramento.page.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/pontos/users/zeramento/zeramento.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Zeramento</span>\r\n    <span class=\"title_w\">de Pontos </span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-col-padding\">\r\n        <ion-label>Data de Zeramento de Pontos (às 00:01)</ion-label>\r\n        <ion-item>\r\n          <ion-datetime [min]=\"minDate\" max=\"2099\" [(ngModel)]=\"schedule\" dateFormat=\"DD/MM/YYYY\" placeholder=\"dd/mm/aa\"\r\n            displayFormat=\"DD/MM/YYYY\" monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <button type=\"submit\" (click)=\"clearPoints()\" class=\"btn btn-block btn-mdlz-clear color3 \"><i\r\n            class=\"fas fa-exclamation-triangle\"></i> Agendar</button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/pontos/users/zeramento/zeramento.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/pontos/users/zeramento/zeramento.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BvbnRvcy91c2Vycy96ZXJhbWVudG8vemVyYW1lbnRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/pontos/users/zeramento/zeramento.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/pontos/users/zeramento/zeramento.page.ts ***!
  \****************************************************************/
/*! exports provided: ZeramentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZeramentoPage", function() { return ZeramentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");







//-------------------------------------------------------------------------------------------------------------------------------//
var ZeramentoPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function ZeramentoPage(authService, popoverController, api, actionSheetController, utils, modalController, alertController) {
        var _this = this;
        this.authService = authService;
        this.popoverController = popoverController;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.utils = utils;
        this.modalController = modalController;
        this.alertController = alertController;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "ZeramentoPage>>";
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].log(logHeader);
        var date = new Date();
        date.setDate(new Date().getDate() + 1);
        this.minDate = date.toISOString();
        this.api.getPointsResetSchedule().then(function (schedule) {
            _this.schedule = (new Date(schedule)).toISOString().slice(0, 16);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["ToastText"].SOMETHING_WENT_WRONG); });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    ZeramentoPage.prototype.clearPoints = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["AlertTitle"].ALERT,
                            message: src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["AlertText"].POINTS_RESET,
                            buttons: [{
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["MenuText"].CANCEL,
                                    role: 'cancel',
                                    handler: function () { }
                                }, {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["MenuText"].IM_SURE,
                                    handler: function () {
                                        alert.dismiss();
                                        _this.showInputAlert();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ZeramentoPage.prototype.showInputAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputAlert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Escreva ' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].RESET_CONFIRM_CODE + ' no campo abaixo para confirmar a ação.',
                            inputs: [
                                {
                                    name: 'confirmationWord'
                                }
                            ],
                            buttons: [{
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["MenuText"].CANCEL,
                                    role: 'cancel',
                                    handler: function () { }
                                }, {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["MenuText"].CONFIRM,
                                    handler: function (data) {
                                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isStringInvalid(data.confirmationWord)) {
                                            if (data.confirmationWord == src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].RESET_CONFIRM_CODE) {
                                                _this.api.schedulePointsReset(new Date(_this.schedule)).then(function () {
                                                    _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["ToastText"].POINTS_RESET_SCHEDULED);
                                                }).catch(function (error) {
                                                    if (error.message.includes(src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"].INVALID_DATE)) {
                                                        _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["ToastText"].DATE_MUST_BE_FUTURE);
                                                    }
                                                    else {
                                                        _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_2__["ToastText"].SOMETHING_WENT_WRONG);
                                                    }
                                                });
                                            }
                                        }
                                    }
                                }]
                        })];
                    case 1:
                        inputAlert = _a.sent();
                        return [4 /*yield*/, inputAlert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ZeramentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zeramento',
            template: __webpack_require__(/*! ./zeramento.page.html */ "./src/app/admin/pontos/users/zeramento/zeramento.page.html"),
            styles: [__webpack_require__(/*! ./zeramento.page.scss */ "./src/app/admin/pontos/users/zeramento/zeramento.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_6__["BackendApiProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ZeramentoPage);
    return ZeramentoPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-pontos-users-zeramento-zeramento-module.js.map