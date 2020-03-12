(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extrato-tab2-module"],{

/***/ "./src/app/users/home/extrato/tab2.module.ts":
/*!***************************************************!*\
  !*** ./src/app/users/home/extrato/tab2.module.ts ***!
  \***************************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/users/home/extrato/tab2.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
    }
];
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/users/home/extrato/tab2.page.html":
/*!***************************************************!*\
  !*** ./src/app/users/home/extrato/tab2.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header-extrato \">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <span class=\"extrato_titulo\">saldo atual</span>\r\n          <span class=\"extrato_pontos\">{{points}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filterExtract($event.srcElement.value,startDate,endDate)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content padding=\"true\" class=\"app\">\r\n  <ion-grid>\r\n\r\n    <ion-row class=\"ion-col-padding margin-bottom\">\r\n      <ion-col size=\"6\">\r\n        <ion-label>Início</ion-label>\r\n        <ion-item>\r\n          <ion-datetime (ionChange)=\"updateStartDate($event.detail.value)\" dateFormat=\"DD/MM/YYYY\"\r\n            placeholder=\"dd/mm/aa\" displayFormat=\"DD/MM/YYYY\" monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\"> </ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label>Fim</ion-label>\r\n        <ion-item>\r\n          <ion-datetime (ionChange)=\"updateEndDate($event.detail.value)\"dateFormat=\"DD/MM/YYYY\"\r\n          placeholder=\"dd/mm/aa\" displayFormat=\"DD/MM/YYYY\" monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <div class=\"extrato-box\" *ngFor=\"let extractItem of filteredExtract\">\r\n        <ion-row>\r\n          <ion-col size=\"2\">\r\n            <img src=\"../../../../assets/imgs/piggy.png\">\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-row>\r\n              <ion-col><span class=\"extrato-nome\">{{extractItem.getNome()}}</span>\r\n                <span class=\"extrato-data\">{{extractItem.getTipo()}}</span>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"text-right\"><span class=\"extrato-valor\" [ngClass]=\"{\r\n            'extrato-pos':extractItem.getValor()>=0,\r\n            'extrato-neg':extractItem.getValor()<0\r\n          }\">{{extractItem.getValor()}}</span> <span\r\n              class=\"extrato-data\">{{extractItem.getData().getUTCDate()}}/{{extractItem.getData().getUTCMonth()+1}}/{{extractItem.getData().getUTCFullYear()}}</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"dots\" loadingText=\"Carregando mais...\">\r\n        </ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/users/home/extrato/tab2.page.scss":
/*!***************************************************!*\
  !*** ./src/app/users/home/extrato/tab2.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2hvbWUvZXh0cmF0by90YWIyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/home/extrato/tab2.page.ts":
/*!*************************************************!*\
  !*** ./src/app/users/home/extrato/tab2.page.ts ***!
  \*************************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");





//-------------------------------------------------------------------------------------------------------------------------------//
var Tab2Page = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function Tab2Page(api, utils) {
        this.api = api;
        this.utils = utils;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "ExtratoPage>>";
        this.page = 1;
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.getExtract();
        this.getPoints();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    Tab2Page.prototype.getExtract = function () {
        var _this = this;
        var logHeader = this.logHeader + "getExtract>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.api.getExtract(1).then(function (response) {
            var extract = response.list;
            _this.totalPages = response.totalPages;
            extract.sort(function (a, b) {
                return b.getData().getTime() - a.getData().getTime();
            });
            _this.extract = extract;
            _this.filterExtract(_this.searchTerm, _this.startDate, _this.endDate);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    Tab2Page.prototype.getPoints = function () {
        var _this = this;
        this.api.getPoints().then(function (points) {
            _this.points = points;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    Tab2Page.prototype.updateStartDate = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "updateStartDate>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
                evt = evt.split('T')[0];
                this.startDate = new Date(evt);
                this.filterExtract(this.searchTerm, this.startDate, this.endDate);
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    Tab2Page.prototype.updateEndDate = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "updateEndDate>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
                evt = evt.split('T')[0];
                this.endDate = new Date(evt);
                this.filterExtract(this.searchTerm, this.startDate, this.endDate);
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    Tab2Page.prototype.filterExtract = function (searchTerm, startDate, endDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                logHeader = this.logHeader + "filterExtract>>";
                src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
                this.searchTerm = searchTerm;
                if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(searchTerm) && src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(startDate) && src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(endDate)) {
                    this.filteredExtract = this.extract;
                    return [2 /*return*/];
                }
                this.filteredExtract = this.extract.filter(function (element) {
                    var result = true;
                    if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(searchTerm)) {
                        result = result && (element.getNome().toLowerCase().includes(searchTerm.toLowerCase()) ||
                            element.getData().toLocaleString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                            element.getValor().toString().includes(searchTerm.toLowerCase()));
                    }
                    if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(startDate)) {
                        result = result && element.getData() >= startDate;
                    }
                    if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(endDate)) {
                        result = result && element.getData() <= endDate;
                    }
                    return result;
                });
                return [2 /*return*/];
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    Tab2Page.prototype.loadData = function (event) {
        var _this = this;
        this.page++;
        var infiniteScroll = event.target;
        this.api.getExtract(1).then(function (response) {
            var extract = response.list;
            _this.totalPages = response.totalPages;
            _this.extract = _this.extract.concat(extract);
            _this.extract.sort(function (a, b) {
                return b.getData().getTime() - a.getData().getTime();
            });
            _this.filterExtract(_this.searchTerm, _this.startDate, _this.endDate);
            infiniteScroll.complete();
            infiniteScroll.disabled = _this.page >= _this.totalPages;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_4__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/users/home/extrato/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/users/home/extrato/tab2.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=extrato-tab2-module.js.map