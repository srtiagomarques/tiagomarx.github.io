(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-teams-teams-module"],{

/***/ "./src/app/users/teams/teams.module.ts":
/*!*********************************************!*\
  !*** ./src/app/users/teams/teams.module.ts ***!
  \*********************************************/
/*! exports provided: TeamsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teams.page */ "./src/app/users/teams/teams.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: '',
        component: _teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]
    }
];
var TeamsPageModule = /** @class */ (function () {
    function TeamsPageModule() {
    }
    TeamsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]]
        })
    ], TeamsPageModule);
    return TeamsPageModule;
}());



/***/ }),

/***/ "./src/app/users/teams/teams.page.html":
/*!*********************************************!*\
  !*** ./src/app/users/teams/teams.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n    <!-- só libera para lider de equipe -->\r\n    <i class=\"fas fa-ellipsis-h dot-ico\" (click)=\"openMenu($event)\" slot=\"end\"\r\n      [hidden]=\"!isInTeam()\"></i>\r\n    <!-- /só libera para lider de equipe -->\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"no-radius\">\r\n\r\n    <span class=\"title_t\">Equipe</span>\r\n    <span class=\"title_w\">{{team.getNome()}}</span>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Pesquisar\" animated (ionInput)=\"filter($event.srcElement.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content padding=\"true\" class=\"app-members\">\r\n\r\n  <div *ngIf=\"pending\" class=\"alert alert-info\" role=\"alert\">\r\n    Aguardando confirmação do Líder de Equipe...\r\n  </div>\r\n\r\n  <div class=\"alert alert-warning\" role=\"alert\"\r\n    [hidden]=\"user.getEquipeId() != null && user.getEquipeId() != undefined\">\r\n    Você não participa de nenhuma equipe no momento.\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row [hidden]=\"isInTeam()\">\r\n      <ion-col>\r\n        <div class=\"custom-panel\">\r\n          <div class=\"custom-panel-heading\">\r\n            Selecione uma Equipe\r\n          </div>\r\n          <div class=\"custom-panel-body\">\r\n            <mat-form-field appearance=\"fill\" class=\"full_width\">\r\n              <mat-label>Equipes Disponíveis</mat-label>\r\n              <mat-select (selectionChange)=\"teamSelected($event.value)\">\r\n                <mat-option *ngFor=\"let team of teams\" [value]=\"team.id\">\r\n                  {{team.nome}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"custom-panel-footer\">\r\n          <button *ngIf=\"showJoinRequest() && !pending\" class=\"btn btn-block btn-mdlz-clear\" ion-button clear\r\n            item-right (click)=\"joinRequest()\">\r\n            Entrar nesta Equipe\r\n          </button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"team.getNome() != null && team.getNome() != undefined\">\r\n      <ion-col>\r\n        <div class=\"custom-panel panel-teams\">\r\n          <div class=\"custom-panel-heading\">\r\n            Lista de Participantes {{team.getNome()}}\r\n          </div>\r\n          <div class=\"custom-panel-body\">\r\n            <div *ngIf=\"teamLeader!=undefined\" class=\"div-lider\">\r\n              <ion-item no-lines>\r\n                <ion-avatar slot=\"start\" [ngClass]=\"{'user-admin': true}\">\r\n                  <img src=\"{{teamLeader.getFoto()+'?'+imageConcatString}}\" onError=\"src = '../assets/imgs/user.png'\">\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <p>{{teamLeader.getNome()}} <span class=\"badge badge-lider\">líder</span></p>\r\n                  <p class=\"email\">{{teamLeader.getEmail()}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngFor=\"let user of userList\">\r\n              <ion-item no-lines>\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"{{user.getFoto()+'?'+imageConcatString}}\" onError=\"src = '../assets/imgs/user.png'\">\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <p>{{user.getNome()}}</p>\r\n                  <p class=\"email\">{{user.getEmail()}}</p>\r\n                  <!-- só libera para lider de equipe -->\r\n                  <i *ngIf=\"isLeader()\" class=\"fas fa-ellipsis-v new-top\" (click)=\"abrirActionSheet(user)\"></i>\r\n                  <!-- /só libera para lider de equipe -->\r\n                </ion-label>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- só libera para lider de equipe -->\r\n    <ion-row *ngIf=\"isLeader()\">\r\n      <ion-col>\r\n        <button  type=\"submit\" class=\"btn btn-block btn-mdlz-clear color2\" ion-button clear item-right (click)=\"save()\">\r\n          Salvar Alterações\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- /só libera para lider de equipe -->\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"dots\" loadingText=\"Carregando mais...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/users/teams/teams.page.scss":
/*!*********************************************!*\
  !*** ./src/app/users/teams/teams.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-lider {\n  margin-bottom: 20px; }\n  .div-lider ion-item {\n    border-radius: 0;\n    width: 100%;\n    border: none;\n    background: rgba(255, 255, 255, 0.3);\n    font-family: \"Montserrat\", sans-serif;\n    color: #fff;\n    box-shadow: inset 2px 2px 0 #fff, 0 5px 6px -4px rgba(0, 0, 0, 0.1);\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    margin: 0;\n    --background: transparent !important;\n    -webkit-padding-start: 0 !important;\n            padding-inline-start: 0 !important;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdGVhbXMvRDpcXERlc2t0b3BcXFByb2pldG9zXFxEZXNlbnZvbHZpbWVudG9cXE1vbmRlbGV6XFxQbHVzXFxHSVRfTW9uZGVsZXpQbHVzXFxmcm9udC9zcmNcXGFwcFxcdXNlcnNcXHRlYW1zXFx0ZWFtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUlRLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsV0FBVztJQUNYLG1FQUFtRTtJQUNuRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Qsb0NBQWE7SUFDYixtQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3RlYW1zL3RlYW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtbGlkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDAgI2ZmZiwgMCA1cHggNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/users/teams/teams.page.ts":
/*!*******************************************!*\
  !*** ./src/app/users/teams/teams.page.ts ***!
  \*******************************************/
/*! exports provided: TeamsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPage", function() { return TeamsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teams_menu_teams_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams-menu/teams-menu.component */ "./src/app/users/teams/teams-menu/teams-menu.component.ts");
/* harmony import */ var src_models_Team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/Team */ "./src/models/Team.ts");
/* harmony import */ var src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/commons/Utils */ "./src/commons/Utils.ts");
/* harmony import */ var src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/backend-api/backend-api.service */ "./src/providers/backend-api/backend-api.service.ts");
/* harmony import */ var src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/commons/Constants */ "./src/commons/Constants.ts");
/* harmony import */ var src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/page-data/page-data.service */ "./src/providers/page-data/page-data.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");










var TeamsPage = /** @class */ (function () {
    //-------------------------------------------------------------------------------------------------------------------------------//
    function TeamsPage(actionSheetController, popoverController, api, utils, pageDataService, auth) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.popoverController = popoverController;
        this.api = api;
        this.utils = utils;
        this.pageDataService = pageDataService;
        this.auth = auth;
        this.logHeader = "TeamsPage>>";
        //-------------------------------------------------------------------------------------------------------------------------------//
        this.pending = false;
        this.teams = new Array();
        this.users = new Array();
        this.userList = new Array();
        this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
        var logHeader = this.logHeader + "constructor>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        this.user = this.auth.loggedUser;
        this.team = new src_models_Team__WEBPACK_IMPORTED_MODULE_4__["Team"]();
        this.api.getUserById(this.auth.loggedUser.getId()).then(function (user) {
            _this.auth.setAuthObject(user);
        });
        this.getTeams();
        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(this.auth.loggedUser.getEquipeId())) {
            this.getTeamById(this.auth.loggedUser.getEquipeId());
        }
        this.pageDataService.listUserEvent.subscribe(function (data) {
            _this.getSelectedUsers();
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.getTeamById = function (input) {
        var _this = this;
        this.api.getTeamById(input).then(function (team) {
            _this.team = team;
            _this.users = _this.team.getMembros();
            _this.userList = _this.users;
            _this.isPending();
            _this.api.getUserById(team.getLiderId()).then(function (leader) {
                _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
                _this.teamLeader = leader;
            }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.getTeams = function () {
        var _this = this;
        this.api.getTeams().then(function (teams) {
            if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(teams)) {
                _this.teams = teams;
            }
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.abrirActionSheet = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].WHAT_DO_YOU_WANT_TO_DO,
                            buttons: [{
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].REMOVE_FROM_TEAM,
                                    role: 'destructive',
                                    handler: function () {
                                        _this.users.splice(_this.users.indexOf(user), 1);
                                        _this.team.setMembros(_this.users);
                                        _this.filter(_this.searchTerm);
                                    }
                                },
                                {
                                    text: src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["MenuText"].CANCEL, role: 'cancel',
                                    handler: function () { }
                                }]
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
    TeamsPage.prototype.filter = function (evt) {
        var logHeader = this.logHeader + "filter>>";
        src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].log(logHeader);
        if (src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(evt)) {
            this.userList = this.users;
            return;
        }
        var searchTerm = evt;
        this.searchTerm = searchTerm;
        if (!searchTerm) {
            this.userList = this.users;
            return;
        }
        this.userList = this.users.filter(function (n) { return n.getNome().toLowerCase().includes(searchTerm.toLowerCase()) || n.getEmail().toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.openMenu = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.DismissClick();
                        this.pageDataService.setData('teamData', this.team);
                        return [4 /*yield*/, this.popoverController.create({
                                component: _teams_menu_teams_menu_component__WEBPACK_IMPORTED_MODULE_3__["TeamsMenuComponent"],
                                event: ev,
                                animated: true,
                                showBackdrop: true,
                                translucent: true,
                                cssClass: 'popover_class',
                                componentProps: {
                                    team: this.team,
                                    teams: this.teams
                                }
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(data.team) && !src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isVarInvalid(data.leader)) {
                            this.team = data.team;
                            this.teamLeader = data.leader;
                            this.users = this.team.getMembros();
                            this.filter(this.searchTerm);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamsPage.prototype.DismissClick = function () {
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
    TeamsPage.prototype.editTeam = function (successMessage) {
        var _this = this;
        if (!this.auth.loggedUser.isAdmin() && this.isLeader()) {
            this.api.leaderEditTeam(this.team).then(function (team) {
                _this.utils.simpleToast(successMessage);
                _this.getTeamById(team.getId());
                _this.filter(_this.searchTerm);
            }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
        }
        else if (this.auth.loggedUser.isAdmin()) {
            this.api.adminEditTeam(this.team).then(function (team) {
                _this.utils.simpleToast(successMessage);
                _this.getTeamById(team.getId());
                _this.filter(_this.searchTerm);
            }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.getSelectedUsers = function () {
        var data = this.pageDataService.getData('selectedUsers');
        this.pageDataService.removeData('selectedUsers');
        if (!src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isArrayInvalid(data)) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var userTemp = data_1[_i];
                var user = userTemp;
                if (this.users.indexOf(user) < 0) {
                    this.users.push(user);
                }
            }
            this.team.setMembros(this.users);
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.save = function () {
        this.getSelectedUsers();
        this.editTeam(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].EDIT_SUCCESSFUL);
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.teamSelected = function (id) {
        this.getTeamById(id);
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.joinRequest = function () {
        var _this = this;
        this.api.joinRequest(this.team.getId()).then(function () {
            _this.utils.simpleToast(src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].REQUEST_SUCCESSFUL + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].WAIT_FOR_APPROVAL);
            _this.isPending();
        }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.isLeader = function () {
        return this.auth.loggedUser.getId() == this.team.getLiderId();
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.isPending = function () {
        var _this = this;
        this.api.isWaitingApproval(this.team.getId()).then(function (response) { return _this.pending = response; }).catch(function (error) { return _this.utils.simpleToastError(error + '\n' + src_commons_Constants__WEBPACK_IMPORTED_MODULE_7__["ToastText"].SOMETHING_WENT_WRONG); });
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.showJoinRequest = function () {
        var _this = this;
        return this.users.filter(function (n) { return n.getId() == _this.auth.loggedUser.getId(); }).length == 0 && !this.isLeader();
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            _this.imageConcatString = src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].generateRandomString();
            if (_this.userList.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    //-------------------------------------------------------------------------------------------------------------------------------//
    TeamsPage.prototype.isInTeam = function () {
        return this.user.getEquipeId() != null && this.user.getEquipeId() != undefined;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], TeamsPage.prototype, "infiniteScroll", void 0);
    TeamsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.page.html */ "./src/app/users/teams/teams.page.html"),
            styles: [__webpack_require__(/*! ./teams.page.scss */ "./src/app/users/teams/teams.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_providers_backend_api_backend_api_service__WEBPACK_IMPORTED_MODULE_6__["BackendApiProvider"],
            src_commons_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"],
            src_providers_page_data_page_data_service__WEBPACK_IMPORTED_MODULE_8__["PageDataService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], TeamsPage);
    return TeamsPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-teams-teams-module.js.map