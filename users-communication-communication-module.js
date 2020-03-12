(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-communication-communication-module"],{

/***/ "./src/app/users/communication/communication.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/users/communication/communication.module.ts ***!
  \*************************************************************/
/*! exports provided: CommunicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationPageModule", function() { return CommunicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _communication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./communication.page */ "./src/app/users/communication/communication.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _communication_page__WEBPACK_IMPORTED_MODULE_6__["CommunicationPage"]
    }
];
var CommunicationPageModule = /** @class */ (function () {
    function CommunicationPageModule() {
    }
    CommunicationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_communication_page__WEBPACK_IMPORTED_MODULE_6__["CommunicationPage"]]
        })
    ], CommunicationPageModule);
    return CommunicationPageModule;
}());



/***/ }),

/***/ "./src/app/users/communication/communication.page.html":
/*!*************************************************************!*\
  !*** ./src/app/users/communication/communication.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <span class=\"title_t\">Envie</span>\r\n    <span class=\"title_w\">sua Mensagem</span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\">\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Selecione o Destinatário <span class=\"required\">*</span></ion-label>\r\n        <mat-form-field class=\"full-width margin-top\">\r\n          <!-- para usuario comum carrega só os admins e lideres de equipe e para administradores carrega tudo\r\n          primeiro os grupos e depois os users individualmente -->\r\n          <mat-select [formControl]=\"list\" multiple [(ngModel)]=\"selected\">\r\n            <mat-option [value]=\"null\" (onSelectionChange)=\"selectionChange(null)\">\r\n              Todos os usuários\r\n            </mat-option>\r\n            <mat-option *ngFor=\"let option of optionList\" [value]=\"option\"\r\n              (onSelectionChange)=\"selectionChange($event)\">\r\n              {{option.getNome()}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Mensagem <span class=\"required\">*</span></ion-label>\r\n        <mat-form-field class=\"full-width margin-top\">\r\n          <textarea [(ngModel)]=\"messageText\" matInput></textarea>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"ion-margin-top\">\r\n          <button type=\"submit\" class=\"btn btn-block btn-mdlz-clear\" (click)=\"send()\">Enviar Mensagem</button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/users/communication/communication.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/users/communication/communication.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbW11bmljYXRpb24vY29tbXVuaWNhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/communication/communication.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/users/communication/communication.page.ts ***!
  \***********************************************************/
/*! exports provided: CommunicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationPage", function() { return CommunicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");







//-------------------------------------------------------------------------------------------------------------------------------//
var CommunicationPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function CommunicationPage(api, utils, auth) {
        var _this = this;
        this.api = api;
        this.utils = utils;
        this.auth = auth;
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.logHeader = "CommunicationPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.list = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionList = new Array();
        this.selectedUsers = new Array();
        this.page = 1;
        this.user = this.auth.loggedUser;
        if (this.user.isAdmin()) {
            this.api.getUsersWithoutPhoto(1).then(function (response) {
                var users = response.users;
                _this.totalPages = response.totalPages;
                _this.optionList = _this.filterUsers(users);
            }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
        }
        else {
            this.api.getAdminsAndLeaders().then(function (users) {
                _this.optionList = _this.filterUsers(users);
            }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
        }
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    CommunicationPage.prototype.filterUsers = function (users) {
        var filteredList = new Array();
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (this.api.getLoggedUser().getId() != user.getId()) {
                filteredList.push(user);
            }
        }
        return filteredList;
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    CommunicationPage.prototype.selectionChange = function (event) {
        if (event == null) {
            this.selectedUsers = new Array();
            for (var _i = 0, _a = this.optionList; _i < _a.length; _i++) {
                var option = _a[_i];
                this.selectedUsers.push(option.getId());
            }
        }
        else {
            if (event.source.selected) {
                if (this.selectedUsers.indexOf(event.source.value.getId()) < 0) {
                    this.selectedUsers.push(event.source.value.getId());
                }
            }
            else {
                this.selectedUsers.splice(this.selectedUsers.indexOf(event.source.value.getId()), 1);
            }
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    CommunicationPage.prototype.send = function () {
        var _this = this;
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isStringInvalid(this.messageText)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_MESSAGE);
        }
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(this.selectedUsers)) {
            this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].INSERT_DESTINATION_USER);
        }
        this.api.sendMessage(this.messageText, this.selectedUsers).then(function () {
            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].MESSAGE_SEND_SUCCESS);
            _this.messageText = "";
            _this.selected = null;
            _this.selectedUsers = new Array();
        }).catch(function (error) { return _this.utils.simpleToastError(src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].MESSAGE_SEND_FAILURE); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    CommunicationPage.prototype.loadData = function (event) {
        var _this = this;
        this.page++;
        var infiniteScroll = event.target;
        this.api.getUsers(this.page).then(function (response) {
            var users = response.users;
            _this.totalPages = response.totalPages;
            _this.optionList = _this.filterUsers(_this.optionList.concat(users));
            infiniteScroll.complete();
            infiniteScroll.disabled = _this.page >= _this.totalPages;
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_6__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    CommunicationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-communication',
            template: __webpack_require__(/*! ./communication.page.html */ "./src/app/users/communication/communication.page.html"),
            styles: [__webpack_require__(/*! ./communication.page.scss */ "./src/app/users/communication/communication.page.scss")]
        })
        //-------------------------------------------------------------------------------------------------------------------------------//
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_4__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], CommunicationPage);
    return CommunicationPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-communication-communication-module.js.map