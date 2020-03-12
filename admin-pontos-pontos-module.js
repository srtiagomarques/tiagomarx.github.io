(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-pontos-pontos-module"],{

/***/ "./src/app/admin/pontos/pontos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/pontos/pontos.module.ts ***!
  \***********************************************/
/*! exports provided: PontosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PontosPageModule", function() { return PontosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pontos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pontos.page */ "./src/app/admin/pontos/pontos.page.ts");







var routes = [
    {
        path: 'pontos',
        component: _pontos_page__WEBPACK_IMPORTED_MODULE_6__["PontosPage"],
        children: [
            { path: 'atividades', loadChildren: './atividades/atividades.module#AtividadesPageModule' },
            { path: 'usuarios', loadChildren: './users/users.module#UsersPageModule' },
            { path: 'grupos', loadChildren: './grupos/grupos.module#GruposPageModule' },
        ]
    },
    {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full'
    }
];
var PontosPageModule = /** @class */ (function () {
    function PontosPageModule() {
    }
    PontosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pontos_page__WEBPACK_IMPORTED_MODULE_6__["PontosPage"]]
        })
    ], PontosPageModule);
    return PontosPageModule;
}());



/***/ }),

/***/ "./src/app/admin/pontos/pontos.page.html":
/*!***********************************************!*\
  !*** ./src/app/admin/pontos/pontos.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"usuarios\">\r\n      <ion-icon name=\"contact\"></ion-icon>\r\n      <ion-label>Usuário</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"grupos\">\r\n      <ion-icon name=\"contacts\"></ion-icon>\r\n      <ion-label>Equipes</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"atividades\">\r\n      <ion-icon name=\"list-box\"></ion-icon>\r\n      <ion-label>Atividades</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/admin/pontos/pontos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/admin/pontos/pontos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BvbnRvcy9wb250b3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/pontos/pontos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/pontos/pontos.page.ts ***!
  \*********************************************/
/*! exports provided: PontosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PontosPage", function() { return PontosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PontosPage = /** @class */ (function () {
    function PontosPage() {
    }
    PontosPage.prototype.ngOnInit = function () {
    };
    PontosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pontos',
            template: __webpack_require__(/*! ./pontos.page.html */ "./src/app/admin/pontos/pontos.page.html"),
            styles: [__webpack_require__(/*! ./pontos.page.scss */ "./src/app/admin/pontos/pontos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PontosPage);
    return PontosPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-pontos-pontos-module.js.map