(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-tutorial-tutorial-module"],{

/***/ "./src/app/users/tutorial/tutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/users/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/users/tutorial/tutorial.page.ts");







var routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/users/tutorial/tutorial.page.html":
/*!***************************************************!*\
  !*** ./src/app/users/tutorial/tutorial.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-toggle auto-hide=\"false\"><i class=\"fas fa-align-left icon-menu\"></i></ion-menu-toggle>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n      <span class=\"title_t\">Tutorial</span>\n      <ion-buttons slot=\"end\">\n        <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content fullscreen padding scroll-y=\"false\">\n    <ion-slides [options]=\"slideOpts\" (ionSlideWillChange)=\"slideChanged()\" #slides>\n\n      <ion-slide>\n        <img src=\"assets/imgs/003.png\" />\n        <h2>Pontuação</h2>\n        <p>Sua tela principal será sua pontuação! Poderá conquistar pontos através de <b>atividades</b> que serão\n          pontuadas ao longo da sua jornada. Fique atento e não perca nenhuma oportunidade!</p>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/imgs/007.png\" />\n        <h2>Ícone do Menu</h2>\n        <p>Este ícone será seu melhor amigo! Ele é o atalho para acessar o <b>menu do app</b> aonde temos todas as\n          opções deste aplicativo!</p>\n      </ion-slide>\n\n\n      <ion-slide>\n        <img src=\"assets/imgs/005.png\" />\n        <h2>Menu do App</h2>\n        <p>No menu lateral do seu APP poderá acessar todas as opções disponíveis para você! Desde nosso\n          <b>regulamento</b>, até enviar mensagem para um de nossos administradores (<b>comunicação</b>).</p>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/imgs/002.png\" />\n        <h2>Tela de Perfil</h2>\n        <p><b>Após finalizar seu cadastro</b> o ideal é que finalize seu perfil acessando <b>Meu Perfil</b> no menu.\n          Nesta tela poderá alterar sua foto de perfil e complementar seus dados para contato.</p>\n      </ion-slide>\n\n\n      <ion-slide>\n        <img src=\"assets/imgs/001.png\" />\n        <h2>Minha Equipe</h2>\n        <p>Fazer parte de uma <b>equipe</b> será muito importante para a conquista de pontos, afinal conquistar algo em\n          equipe sempre tem um gostinho especial! No menu <b>minha equipe</b> você poderá selecionar e solicitar sua\n          entrada para o Líder.</p>\n      </ion-slide>\n\n\n\n      <ion-slide>\n        <img src=\"assets/imgs/004.png\" />\n        <h2>Troca de Prêmios</h2>\n        <p>Após muito trabalho duro (em equipe e por mérito próprio!) você poderá fazer sua <b>troca de prêmios</b>,\n          selecionando a quantidade de ítens e adicionando ao carrinho. Após isso basta abrir seu carrinho e finalizar\n          sua compra!</p>\n      </ion-slide>\n\n\n      <ion-slide>\n        <img src=\"assets/imgs/006.png\" />\n        <h2>Pronto para começar?</h2>\n        <a routerLink=\"/home/extrato\">\n          <button  type=\"submit\" class=\"btn btn-block btn-mdlz-clear\" ion-button clear item-right>\n            Entendi !\n          </button>\n        </a>\n\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n</ion-app>"

/***/ }),

/***/ "./src/app/users/tutorial/tutorial.page.scss":
/*!***************************************************!*\
  !*** ./src/app/users/tutorial/tutorial.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-slide {\n  display: block;\n  font-size: 95%; }\n\nh2 {\n  font-size: 20px; }\n\nion-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdHV0b3JpYWwvRDpcXERlc2t0b3BcXFByb2pldG9zXFxEZXNlbnZvbHZpbWVudG9cXE1vbmRlbGV6XFxQbHVzXFxHSVRfTW9uZGVsZXpQbHVzXFxmcm9udC9zcmNcXGFwcFxcdXNlcnNcXHR1dG9yaWFsXFx0dXRvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQ0YsRUFBQTs7QUFHQTtFQUVJLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiA5NSU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHhcclxufVxyXG5cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfSAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/tutorial/tutorial.page.ts":
/*!*************************************************!*\
  !*** ./src/app/users/tutorial/tutorial.page.ts ***!
  \*************************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialPage = /** @class */ (function () {
    function TutorialPage() {
        this.slideOpts = {
            effect: 'coverflow',
            loop: false
        };
    }
    TutorialPage.prototype.ngOnInit = function () { };
    TutorialPage.prototype.slideChanged = function () { };
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.page.html */ "./src/app/users/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/users/tutorial/tutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-tutorial-tutorial-module.js.map