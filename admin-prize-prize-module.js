(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-prize-prize-module"],{

/***/ "./src/app/admin/prize/prize.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/prize/prize.module.ts ***!
  \*********************************************/
/*! exports provided: PrizePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizePageModule", function() { return PrizePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prize_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prize.page */ "./src/app/admin/prize/prize.page.ts");







var routes = [
    {
        path: '',
        component: _prize_page__WEBPACK_IMPORTED_MODULE_6__["PrizePage"]
    }
];
var PrizePageModule = /** @class */ (function () {
    function PrizePageModule() {
    }
    PrizePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prize_page__WEBPACK_IMPORTED_MODULE_6__["PrizePage"]]
        })
    ], PrizePageModule);
    return PrizePageModule;
}());



/***/ }),

/***/ "./src/app/admin/prize/prize.page.html":
/*!*********************************************!*\
  !*** ./src/app/admin/prize/prize.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n    <i class=\"fas fa-ellipsis-h dot-ico\" (click)=\"openMenu($event)\" slot=\"end\"></i>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Gestão</span>\r\n    <span class=\"title_w\">de Prêmios</span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content padding=\"true\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"box-prize\" *ngFor=\"let reward of rewardList\" [ngClass]=\"{\r\n          'box-disabled': !reward.isAtivo(),\r\n          'box-enabled': reward.isAtivo() }\">\r\n          <div class=\"qta-txt\">{{reward.getDescricao()}}</div>\r\n          <div class=\"num-prize\">{{reward.getQuantidade()==null?\"Infinito\":reward.getQuantidade()}}</div>\r\n          <img src=\"{{reward.getFoto()+'?'+imageConcatString}}\" onError=\"src = '../assets/imgs/no-image.png'\">\r\n          <span class=\"item-prize\">{{reward.getNome()}}</span>\r\n          <span class=\"valor-prize\">{{reward.getValor()}} Pontos</span>\r\n          <i class=\"fas fa-ellipsis-v\" (click)=\"abrirActionSheet(reward)\"></i>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"dots\" loadingText=\"Carregando mais...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/prize/prize.page.scss":
/*!*********************************************!*\
  !*** ./src/app/admin/prize/prize.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ByaXplL3ByaXplLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/prize/prize.page.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/prize/prize.page.ts ***!
  \*******************************************/
/*! exports provided: PrizePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizePage", function() { return PrizePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_models_Reward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/Reward */ "./src/models/Reward.ts");
/* harmony import */ var _prize_menu_prize_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prize-menu/prize-menu.component */ "./src/app/admin/prize/prize-menu/prize-menu.component.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_reward_new_reward_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-reward/new-reward.page */ "./src/app/admin/prize/new-reward/new-reward.page.ts");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");










//-------------------------------------------------------------------------------------------------------------------------------//
var PrizePage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function PrizePage(actionSheetController, modalController, popoverController, api, utils, pageDataService) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.api = api;
        this.utils = utils;
        this.pageDataService = pageDataService;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "PrizePage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.rewards = new Array();
        this.rewardList = new Array();
        this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.getRewards();
        this.pageDataService.listUserEvent.subscribe(function () {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
            var data = _this.pageDataService.getData('rewardData');
            var editMode = _this.pageDataService.getData('rewardEdit');
            _this.pageDataService.removeData('rewardData');
            _this.pageDataService.removeData('rewardEdit');
            if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(data)) {
                if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(editMode)) {
                    _this.rewards.splice(_this.rewards.indexOf(_this.rewards.filter(function (n) { return n.getId() == data.getId(); })[0]), 1);
                }
                _this.rewards.push(data);
                _this.filter(_this.searchTerm);
            }
        });
        this.pageDataService.imageChangeEvent.subscribe(function () {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    PrizePage.prototype.getRewards = function () {
        var _this = this;
        this.api.getRewards().then(function (rewards) {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
            _this.rewards = rewards;
            _this.rewardList = _this.rewards;
        }).catch(function (error) { return _this.utils.simpleToast(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    PrizePage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(evt)) {
            this.rewardList = this.rewards;
            return;
        }
        var searchTerm = evt;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.rewardList = this.rewards;
            return;
        }
        this.rewardList = this.rewards.filter(function (n) { return n.getNome().toLowerCase().includes(searchTerm.toLowerCase()) || n.getDescricao().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    PrizePage.prototype.abrirActionSheet = function (reward) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].WHAT_DO_YOU_WANT_TO_DO,
                            buttons: [
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].EDIT,
                                    handler: function () {
                                        _this.presentEditPopover(reward);
                                    }
                                }, {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].DELETE,
                                    role: 'destructive',
                                    handler: function () {
                                        _this.api.removeReward(reward).then(function () {
                                            _this.rewards.splice(_this.rewards.indexOf(reward), 1);
                                            _this.filter(_this.searchTerm);
                                            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].REWARD_REMOVED);
                                        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["MenuText"].CANCEL, role: 'cancel',
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
    PrizePage.prototype.presentEditPopover = function (reward) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, rewardReturned;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _new_reward_new_reward_page__WEBPACK_IMPORTED_MODULE_8__["NewRewardPage"],
                            backdropDismiss: false,
                            componentProps: {
                                reward: reward,
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
                        rewardReturned = src_models_Reward__WEBPACK_IMPORTED_MODULE_4__["Reward"].castFromJSON(data);
                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(data) && this.rewards.indexOf(this.rewards.filter(function (n) { return n.getId() == rewardReturned.getId(); })[0]) >= 0) {
                            this.rewards.splice(this.rewards.indexOf(this.rewards.filter(function (n) { return n.getId() == rewardReturned.getId(); })[0]), 1);
                            this.rewards.push(rewardReturned);
                            this.filter(this.searchTerm);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    PrizePage.prototype.openMenu = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.DismissClick();
                        return [4 /*yield*/, this.popoverController.create({
                                component: _prize_menu_prize_menu_component__WEBPACK_IMPORTED_MODULE_5__["PrizeMenuComponent"],
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
    PrizePage.prototype.DismissClick = function () {
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
    PrizePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
            if (_this.rewardList.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"])
    ], PrizePage.prototype, "infiniteScroll", void 0);
    PrizePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prize',
            template: __webpack_require__(/*! ./prize.page.html */ "./src/app/admin/prize/prize.page.html"),
            styles: [__webpack_require__(/*! ./prize.page.scss */ "./src/app/admin/prize/prize.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_9__["PageDataService"]])
    ], PrizePage);
    return PrizePage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-prize-prize-module.js.map