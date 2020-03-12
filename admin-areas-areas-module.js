(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-areas-areas-module"],{

/***/ "./src/app/admin/areas/areas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/areas/areas.module.ts ***!
  \*********************************************/
/*! exports provided: AreasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasPageModule", function() { return AreasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _areas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./areas.page */ "./src/app/admin/areas/areas.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");








var routes = [
    {
        path: 'areas',
        component: _areas_page__WEBPACK_IMPORTED_MODULE_6__["AreasPage"],
        children: [
            { path: 'fabrica', loadChildren: './fabrica/fabrica.module#FabricaPageModule' },
            { path: 'linha', loadChildren: './linha/linha.module#LinhaPageModule' },
            { path: 'secao', loadChildren: './secao/secao.module#SecaoPageModule' },
        ]
    },
    {
        path: '',
        redirectTo: 'fabrica',
        pathMatch: 'full'
    }
];
var AreasPageModule = /** @class */ (function () {
    function AreasPageModule() {
    }
    AreasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_areas_page__WEBPACK_IMPORTED_MODULE_6__["AreasPage"]]
        })
    ], AreasPageModule);
    return AreasPageModule;
}());



/***/ }),

/***/ "./src/app/admin/areas/areas.page.html":
/*!*********************************************!*\
  !*** ./src/app/admin/areas/areas.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"fabrica\">\r\n      <ion-icon name=\"cube\"></ion-icon>\r\n      <ion-label>Fábrica</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"secao\">\r\n      <ion-icon name=\"filing\"></ion-icon>\r\n      <ion-label>Seção</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"linha\">\r\n      <ion-icon name=\"document\"></ion-icon>\r\n      <ion-label>Linha</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/admin/areas/areas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/admin/areas/areas.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FyZWFzL2FyZWFzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/areas/areas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/areas/areas.page.ts ***!
  \*******************************************/
/*! exports provided: AreasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasPage", function() { return AreasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AreasPage = /** @class */ (function () {
    function AreasPage(popoverController) {
        this.popoverController = popoverController;
    }
    AreasPage.prototype.ngOnInit = function () {
    };
    AreasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-areas',
            template: __webpack_require__(/*! ./areas.page.html */ "./src/app/admin/areas/areas.page.html"),
            styles: [__webpack_require__(/*! ./areas.page.scss */ "./src/app/admin/areas/areas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], AreasPage);
    return AreasPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-areas-areas-module.js.map