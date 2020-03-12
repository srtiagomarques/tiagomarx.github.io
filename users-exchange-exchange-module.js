(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-exchange-exchange-module"],{

/***/ "./src/app/users/exchange/exchange.module.ts":
/*!***************************************************!*\
  !*** ./src/app/users/exchange/exchange.module.ts ***!
  \***************************************************/
/*! exports provided: ExchangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangePageModule", function() { return ExchangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exchange_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exchange.page */ "./src/app/users/exchange/exchange.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _exchange_page__WEBPACK_IMPORTED_MODULE_6__["ExchangePage"]
    }
];
var ExchangePageModule = /** @class */ (function () {
    function ExchangePageModule() {
    }
    ExchangePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_exchange_page__WEBPACK_IMPORTED_MODULE_6__["ExchangePage"]]
        })
    ], ExchangePageModule);
    return ExchangePageModule;
}());



/***/ }),

/***/ "./src/app/users/exchange/exchange.page.html":
/*!***************************************************!*\
  !*** ./src/app/users/exchange/exchange.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n    <span class=\"title_t\">Troca</span>\r\n    <span class=\"title_w\">de Prêmios</span>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\" (click)=\"openCart($event);\">\r\n        <ion-fab-button color=\"dark\">\r\n          <ion-icon name=\"cart\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n\r\n\r\n      \r\n  <ion-grid>\r\n\r\n    \r\n      <div class=\"alert alert-warning\" role=\"alert\" [hidden]=\"rewardList.length > 0\">\r\n          Nenhum prêmio disponível no momento.\r\n      </div>\r\n\r\n      <ion-row *ngFor=\"let reward of rewardList\">\r\n        <ion-col>\r\n          <div class=\"box-prize\">        \r\n            <div class=\"qta-txt\">{{reward.getPremio().getDescricao()}}</div>\r\n            <div class=\"num-prize\">{{reward.getPremio().getQuantidade()==null?\"Infinito\":reward.getPremio().getQuantidade()}}</div>\r\n            <img src=\"{{reward.getPremio().getFoto()+'?'+imageConcatString}}\" onError=\"src = '../assets/imgs/no-image.png'\">  \r\n            <span class=\"item-prize\">{{reward.getPremio().getNome()}}</span>\r\n            <span class=\"valor-prize\">{{reward.getPremio().getValor()}} Pontos</span>   \r\n            \r\n            <div class=\"block-value\">\r\n                <button clear (click)=\"decrementQty(reward)\"><i class=\"fas fa-minus-circle\"></i></button>\r\n                <span class=\"box-qty\">{{reward.getQuantidade()}}</span>\r\n                <button clear (click)=\"incrementQty(reward)\"><i class=\"fas fa-plus-circle\"></i></button>\r\n            </div>\r\n            <div class=\"block-footer\" >\r\n             <span (click)=\"addToCart(reward)\"> Adicionar ao carrinho</span>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"dots\"\r\n        loadingText=\"Carregando mais...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/users/exchange/exchange.page.scss":
/*!***************************************************!*\
  !*** ./src/app/users/exchange/exchange.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2V4Y2hhbmdlL2V4Y2hhbmdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/exchange/exchange.page.ts":
/*!*************************************************!*\
  !*** ./src/app/users/exchange/exchange.page.ts ***!
  \*************************************************/
/*! exports provided: ExchangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangePage", function() { return ExchangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.page */ "./src/app/users/exchange/cart/cart.page.ts");
/* harmony import */ var src_models_CartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/CartItem */ "./src/models/CartItem.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");








//-------------------------------------------------------------------------------------------------------------------------------//
var ExchangePage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function ExchangePage(popoverController, api, utils) {
        this.popoverController = popoverController;
        this.api = api;
        this.utils = utils;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "ExchangePage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.rewards = new Array();
        this.rewardList = new Array();
        this.shoppingCart = new Array();
        this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
        var logHeader = this.logHeader + "constructor>>";
        this.getRewards();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    ExchangePage.prototype.getRewards = function () {
        var _this = this;
        this.api.getActiveRewards().then(function (rawRewards) {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
            var rewards = new Array();
            for (var _i = 0, rawRewards_1 = rawRewards; _i < rawRewards_1.length; _i++) {
                var reward = rawRewards_1[_i];
                rewards.push(new src_models_CartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](reward));
            }
            _this.rewards = rewards;
            _this.rewardList = _this.rewards;
        }).catch(function (error) { return _this.utils.simpleToast(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ExchangePage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isStringInvalid(evt)) {
            this.rewardList = this.rewards;
            return;
        }
        var searchTerm = evt;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.rewardList = this.rewards;
            return;
        }
        this.rewardList = this.rewards.filter(function (n) { return n.getPremio().getNome().toLowerCase().includes(searchTerm.toLowerCase()) || n.getPremio().getDescricao().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ExchangePage.prototype.incrementQty = function (item) {
        var logHeader = this.logHeader + "incrementQty>>";
        if (item.getPremio().getQuantidade() > item.getQuantidade() || src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(item.getPremio().getQuantidade())) {
            item.addQuantidade(1);
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ExchangePage.prototype.decrementQty = function (item) {
        var logHeader = this.logHeader + "decrementQty>>";
        if (item.getQuantidade() > 0) {
            item.addQuantidade(-1);
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ExchangePage.prototype.openCart = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logHeader, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logHeader = this.logHeader + "openCart>>";
                        if (!!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(this.shoppingCart)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.popoverController.create({
                                component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"],
                                event: ev,
                                translucent: true,
                                cssClass: 'pop-over-style',
                                componentProps: {
                                    cart: this.shoppingCart
                                }
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].CART_EMPTY);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ExchangePage.prototype.addToCart = function (item) {
        var logHeader = this.logHeader + "addToCart>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        var cartItem = this.shoppingCart.filter(function (n) { return n.getPremio().getId() == item.getPremio().getId(); })[0];
        var elements = new Array();
        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(cartItem)) {
            elements = this.shoppingCart.splice(this.shoppingCart.indexOf(cartItem), 1);
        }
        if (item.getQuantidade() > 0) {
            this.shoppingCart.push(item);
            this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERTED_IN_CART);
        }
        else if (elements.length > 0) {
            this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].REMOVED_FROM_CART);
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    ExchangePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
            if (_this.rewardList.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], ExchangePage.prototype, "infiniteScroll", void 0);
    ExchangePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exchange',
            template: __webpack_require__(/*! ./exchange.page.html */ "./src/app/users/exchange/exchange.page.html"),
            styles: [__webpack_require__(/*! ./exchange.page.scss */ "./src/app/users/exchange/exchange.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_7__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"]])
    ], ExchangePage);
    return ExchangePage;
}());



/***/ })

}]);
//# sourceMappingURL=users-exchange-exchange-module.js.map