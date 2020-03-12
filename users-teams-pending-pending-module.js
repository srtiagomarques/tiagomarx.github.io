(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-teams-pending-pending-module"],{

/***/ "./src/app/users/teams/pending/pending.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/users/teams/pending/pending.module.ts ***!
  \*******************************************************/
/*! exports provided: PendingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPageModule", function() { return PendingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending.page */ "./src/app/users/teams/pending/pending.page.ts");







var routes = [
    {
        path: '',
        component: _pending_page__WEBPACK_IMPORTED_MODULE_6__["PendingPage"]
    }
];
var PendingPageModule = /** @class */ (function () {
    function PendingPageModule() {
    }
    PendingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pending_page__WEBPACK_IMPORTED_MODULE_6__["PendingPage"]]
        })
    ], PendingPageModule);
    return PendingPageModule;
}());



/***/ }),

/***/ "./src/app/users/teams/pending/pending.page.html":
/*!*******************************************************!*\
  !*** ./src/app/users/teams/pending/pending.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Usuários</span>\r\n    <span class=\"title_w\">Pendentes</span>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n\r\n    <div class=\"alert alert-warning\" role=\"alert\" [hidden]=\"invitations.length > 0\">\r\n        Nenhum usuário pendente no momento.\r\n    </div>\r\n\r\n\r\n  <ion-grid *ngIf=\"invitations.length>0\">\r\n    <ion-row *ngFor=\"let invitation of invitationList\">\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n            <ion-item  no-lines>\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"{{invitation.getFoto()+'?'+imageConcatString}}\" onError=\"src = '../assets/imgs/user.png'\">\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <p>{{invitation.getUserNome()}}  \r\n                  <p>{{invitation.getFabricaNome()}} / {{invitation.getSecaoNome()}} / {{invitation.getLinhaNome()}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"start\">\r\n              <ion-item-option color=\"success\" (click)=\"approve(invitation)\">Aprovar</ion-item-option>\r\n            </ion-item-options>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"danger\" (click)=\"disapprove(invitation)\">Recusar</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"dots\"\r\n        loadingText=\"Carregando mais...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/users/teams/pending/pending.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/users/teams/pending/pending.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3RlYW1zL3BlbmRpbmcvcGVuZGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/teams/pending/pending.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/users/teams/pending/pending.page.ts ***!
  \*****************************************************/
/*! exports provided: PendingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPage", function() { return PendingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");







//-------------------------------------------------------------------------------------------------------------------------------//
var PendingPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function PendingPage(api, utils, pageDataService, modalController) {
        this.api = api;
        this.utils = utils;
        this.pageDataService = pageDataService;
        this.modalController = modalController;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "PendingPage>>";
        this.invitations = new Array();
        this.invitationList = new Array();
        this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        this.team = this.pageDataService.getData('teamData');
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isVarInvalid(this.team)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG);
            this.modalController.dismiss();
        }
        this.getPendingUsers();
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    PendingPage.prototype.getPendingUsers = function () {
        var _this = this;
        this.api.getTeamPendingUsers(this.team.getId()).then(function (users) {
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
            _this.invitations = users;
            _this.invitationList = _this.invitations;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    PendingPage.prototype.approve = function (invite) {
        var _this = this;
        this.api.approveUser(invite.getId()).then(function () {
            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].USER_ADDED);
            _this.invitations.splice(_this.invitations.indexOf(invite), 1);
            _this.filter(_this.searchTerm);
            _this.pageDataService.listUserEvent.emit('pendingUserData');
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    PendingPage.prototype.disapprove = function (invite) {
        var _this = this;
        this.api.disapproveUser(invite.getId()).then(function () {
            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].USER_REMOVED);
            _this.invitations.splice(_this.invitations.indexOf(invite), 1);
            _this.filter(_this.searchTerm);
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    PendingPage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isStringInvalid(evt)) {
            this.invitationList = this.invitations;
            return;
        }
        var searchTerm = evt;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.invitationList = this.invitations;
            return;
        }
        this.invitationList = this.invitations.filter(function (n) { return n.getUserNome().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    PendingPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].generateRandomString();
            if (_this.invitationList.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
    ], PendingPage.prototype, "infiniteScroll", void 0);
    PendingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending',
            template: __webpack_require__(/*! ./pending.page.html */ "./src/app/users/teams/pending/pending.page.html"),
            styles: [__webpack_require__(/*! ./pending.page.scss */ "./src/app/users/teams/pending/pending.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_4__["PageDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], PendingPage);
    return PendingPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-teams-pending-pending-module.js.map