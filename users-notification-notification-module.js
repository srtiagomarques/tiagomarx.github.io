(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-notification-notification-module"],{

/***/ "./src/app/users/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/users/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/users/notification/notification.page.ts");







var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/users/notification/notification.page.html":
/*!***********************************************************!*\
  !*** ./src/app/users/notification/notification.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header-extrato\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n    <span class=\"title_t\">Central</span>\r\n    <span class=\"title_w\">de Notificações</span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <div class=\"alert alert-warning\" role=\"alert\" [hidden]=\"messageList.length > 0\">\r\n          Nenhuma notificação no momento.\r\n        </div>\r\n\r\n\r\n        <ion-list class=\"msgs\" *ngFor=\"let message of messageList\">\r\n\r\n          <div class=\"badge-new\" *ngIf=\"!message.getLida()\">novo</div>\r\n          <ion-item-sliding>\r\n            <ion-item  no-padding no-lines (click)=\"openMensagem(message)\">\r\n\r\n              <ion-avatar slot=\"start\">\r\n                <span class=\"msg-not\" *ngIf=\"!message.getLida()\"><i class=\"fas fa-envelope\"></i></span>\r\n                <span class=\"msg-yes\" *ngIf=\"message.getLida()\"><i class=\"fas fa-envelope-open-text\"></i></span>\r\n              </ion-avatar>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"{{message.getFromUserFoto()}}\">\r\n\r\n              </ion-avatar>\r\n\r\n              <ion-label>\r\n                <h2>{{message.getFromUserNome()}}\r\n                  <span class=\"msg-small\">{{message.getData().toUTCString() | date: 'dd/MM/yyyy' }}</span></h2>\r\n                <p class=\"msg\">{{message.getMessage()}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"danger\">\r\n                <ion-icon slot=\"icon-only\" name=\"trash\" (click)=\"delete(message)\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"dots\"\r\n      loadingText=\"Carregando mais...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/users/notification/notification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/users/notification/notification.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/notification/notification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/users/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _msg_component_msg_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./msg-component/msg-component.component */ "./src/app/users/notification/msg-component/msg-component.component.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");







//-------------------------------------------------------------------------------------------------------------------------------//
var NotificationPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function NotificationPage(popoverController, api, utils) {
        this.popoverController = popoverController;
        this.api = api;
        this.utils = utils;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "NotificationPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.messages = new Array();
        this.messageList = new Array();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.getAllMessages();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    NotificationPage.prototype.getAllMessages = function () {
        var _this = this;
        var logHeader = this.logHeader + "getAllMessages()";
        this.api.getAllMessages().then(function (messages) {
            messages.sort(function (a, b) {
                return b.getData().getTime() - a.getData().getTime();
            });
            messages.sort(function (a, b) {
                return (a.getLida() === b.getLida()) ? 0 : a.getLida() ? 1 : -1;
            });
            _this.messages = messages;
            _this.messageList = _this.messages;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    NotificationPage.prototype.openMensagem = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var message, popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = ev;
                        return [4 /*yield*/, this.popoverController.create({
                                component: _msg_component_msg_component_component__WEBPACK_IMPORTED_MODULE_3__["MsgComponentComponent"],
                                event: ev,
                                animated: true,
                                showBackdrop: true,
                                translucent: true,
                                cssClass: 'popover_class_msg',
                                componentProps: {
                                    message: message
                                }
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        popover.onDidDismiss().then(function () {
                            if (!message.getLida()) {
                                _this.api.markMessageAsRead(message.getId()).then(function () {
                                    message.setLida(true);
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    NotificationPage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isStringInvalid(evt)) {
            this.messageList = this.messages;
            return;
        }
        var searchTerm = evt;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.messageList = this.messages;
            return;
        }
        this.messageList = this.messages.filter(function (n) { return n.getFromUserNome().toLowerCase().includes(searchTerm.toLowerCase()) || n.getMessage().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    NotificationPage.prototype.delete = function (message) {
        var _this = this;
        this.api.deleteMessage(message.getId()).then(function () {
            _this.messages.splice(_this.messages.indexOf(message), 1);
            _this.filter(_this.searchTerm);
            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].REMOVE_SUCCESSFUL);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    NotificationPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            if (_this.messageList.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], NotificationPage.prototype, "infiniteScroll", void 0);
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/users/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/users/notification/notification.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-notification-notification-module.js.map