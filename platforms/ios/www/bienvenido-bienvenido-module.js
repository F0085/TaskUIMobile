(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bienvenido-bienvenido-module"],{

/***/ "./src/app/bienvenido/bienvenido.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.module.ts ***!
  \*************************************************/
/*! exports provided: BienvenidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageModule", function() { return BienvenidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bienvenido.page */ "./src/app/bienvenido/bienvenido.page.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"]
    }
];
var BienvenidoPageModule = /** @class */ (function () {
    function BienvenidoPageModule() {
    }
    BienvenidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__["RoundProgressModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"] }])
            ],
            declarations: [_bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"]]
        })
    ], BienvenidoPageModule);
    return BienvenidoPageModule;
}());



/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.html":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content fullscreen>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <div class=\"fondo5\" padding>  \n   \n  <ion-card (click)=\"irdashboard()\" class=\"colores\">\n    <ion-card-header class=\"fondo4\">\n      <ion-card-title>\n        <h2 text-center>Avances de <b> Tareas</b></h2>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h3 text-center> <b>Tareas Laborales Pendientes</b></h3>\n      <div class=\"current\">{{ (datosdash.Total_Pendiente * 100) / datosdash.Total_Responsables | number:'1.1-2'}}%</div>\n          <round-progress [current]=\"datosdash.Total_Pendiente\" [max]=\"max\"\n          [duration]=\"6000\"\n          [animation]=\"'easeInOutQuart'\"\n          [animationDelay]=\"0\"\n          [color]=\"'#f0d200'\"\n          ></round-progress>\n          <p text-center> <b>Tareas Pendientes:</b> {{datosdash.Total_Pendiente}} </p>\n          <p text-center> <b>Total de tareas:</b> {{datosdash.Total_Responsables}} </p>\n          </ion-card-content>\n          </ion-card>\n          <ion-card (click)=\"irtareas()\">\n            <ion-card-header class=\"fondo1\">\n              <ion-card-title>\n                <h2>Tareas Laborales <b> Pendientes</b></h2>\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item *ngFor=\"let  laboral of tareasreci\">\n                <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n                <p>\n                  {{laboral.tarea.Nombre}}\n                </p>\n                <ion-note slot=\"end\">\n                  <p><b>Limite:</b>{{ laboral.tarea.FechaFin }} </p>\n                </ion-note>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n          <ion-card (click)=\"irreunion()\">\n            <ion-card-header class=\"fondo2\">\n              <ion-card-title>\n                <h2>Reuniones <b> Vigentes</b></h2>\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item *ngFor=\"let  reunion of reunionvigentes\">\n                <ion-icon slot=\"start\" name=\"paper-plane\"></ion-icon>\n                <p>\n                  {{reunion.reunion.Tema}}\n                </p>\n                <ion-note slot=\"end\">\n                  <p><b>Fecha:</b>{{ reunion.reunion.FechadeReunion }} </p>\n                </ion-note>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n          <ion-card (click)=\"irtareasp()\">\n            <ion-card-header class=\"fondo3\">\n              <ion-card-title>\n                <h2>Tareas <b> Personales</b></h2>\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item *ngFor=\"let  personal of tareasp\">\n                <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n                <p>\n                  {{personal.Nombre}}\n                </p>\n                <ion-note slot=\"end\">\n                  <p><b>Limite:</b>{{ personal.FechaFin }} </p>\n                </ion-note>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n          </div>\n          </ion-content>"

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n.swiper-slide {\n  display: block; }\n\nion-slide > h2 {\n  margin-top: 2.8rem; }\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0; }\n\n.espacio1 {\n  padding: 0px 0px 20px 0px; }\n\nion-card {\n  --background: #fbfcff8c; }\n\n.current {\n  color: #a2631f;\n  position: absolute;\n  margin: 37% 25% 0% 33%;\n  font-weight: 400;\n  font-size: 2rem; }\n\nh3 {\n  color: #a2631f; }\n\nround-progress {\n  margin: 5% 25% 0% 3%; }\n\nh2 {\n  font-size: 17px; }\n\n.colores p {\n  color: #a2631f;\n  margin: 10px 0px 5px 0px;\n  font-size: 15px; }\n\n.fondo1 {\n  --background:#e7ebef; }\n\n.fondo2 {\n  --background:#e7ebef; }\n\n.fondo3 {\n  --background:#e7ebef; }\n\n.fondo4 {\n  --background:#ffdfb2; }\n\n.fondo5 {\n  background: #efefef;\n  background-size: cover;\n  background-position: center; }\n\np {\n  font-size: 12px; }\n\nion-note {\n  margin: 0px 0px 0px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmllbnZlbmlkby9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcYmllbnZlbmlkb1xcYmllbnZlbmlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBb0I7RUFDcEIsNEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNBLHlCQUF5QixFQUFBOztBQUd6QjtFQUNFLHVCQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVuQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFFSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBR0ksY0FBYztFQUNaLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7O0FBSXJCO0VBQ0Usb0JBQWEsRUFBQTs7QUFHZjtFQUNFLG9CQUFhLEVBQUE7O0FBR2Y7RUFDQyxvQkFBYSxFQUFBOztBQUdkO0VBQ0Usb0JBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkJBQTRCLEVBQUE7O0FBSTlCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmllbnZlbmlkby9iaWVudmVuaWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG4gIH1cclxuXHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBpb24tc2xpZGUgPiBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbiAgfVxyXG4gIGlvbi1zbGlkZSA+IGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMzZweCAwO1xyXG4gIH1cclxuXHJcbiAgLmVzcGFjaW8xe1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMjBweCAwcHg7XHJcbiAgfSBcclxuXHJcbiAgaW9uLWNhcmR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYmZjZmY4YztcclxuICB9XHJcblxyXG4gIC5jdXJyZW50IHtcclxuICAgIGNvbG9yOiAjYTI2MzFmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAzNyUgMjUlIDAlIDMzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuaDN7XHJcbiAgY29sb3I6ICNhMjYzMWY7XHJcbn1cclxucm91bmQtcHJvZ3Jlc3N7XHJcbiAgICBcclxuICAgIG1hcmdpbjogNSUgMjUlIDAlIDMlO1xyXG59XHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmNvbG9yZXN7XHJcblxyXG4gIHB7XHJcbiAgICBjb2xvcjogI2EyNjMxZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweCA1cHggMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9uZG8xIHtcclxuICAtLWJhY2tncm91bmQ6I2U3ZWJlZjtcclxuXHJcbn1cclxuLmZvbmRvMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiNlN2ViZWY7XHJcbiAgXHJcbn1cclxuLmZvbmRvMyB7XHJcbiAtLWJhY2tncm91bmQ6I2U3ZWJlZjtcclxuICAgIFxyXG59XHJcbi5mb25kbzQge1xyXG4gIC0tYmFja2dyb3VuZDojZmZkZmIyO1xyXG5cclxuICB9XHJcbi5mb25kbzV7XHJcbiAgYmFja2dyb3VuZDojZWZlZmVmO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDtcclxuIFxyXG59XHJcblxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW9uLW5vdGV7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.ts ***!
  \***********************************************/
/*! exports provided: BienvenidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPage", function() { return BienvenidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");






var BienvenidoPage = /** @class */ (function () {
    function BienvenidoPage(menu, _navCtrl, activatedRoute, postPvdr, router
    //private navPr: NavParams
    ) {
        this.menu = menu;
        this._navCtrl = _navCtrl;
        this.activatedRoute = activatedRoute;
        this.postPvdr = postPvdr;
        this.router = router;
        this.argumento = null;
        this.datos = [];
        this.id = "";
        this.max = 0;
        this.textoBuscar = '';
        this.tareasp = [];
        this.tareasreci = [];
        this.reunionvigentes = [];
    }
    BienvenidoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        this.postPvdr.$getListSource.subscribe(function (list) {
            _this.datos = list;
            _this.id = _this.datos[0].Id_Usuario;
            console.log(_this.id);
        });
        this.cargarValores();
        this.cargarTareasRecientes();
        this.cargarTareasPersonales();
        this.cargarReunionesVigentes();
    };
    BienvenidoPage.prototype.cargarValores = function () {
        var _this = this;
        this.postPvdr.getdasboard(this.id)
            .subscribe(function (data) {
            if (data != null) {
                //this.postPvdr.Gresta= data.json();
                // this.datosdash = Object.values(data);
                _this.datosdash = data;
                console.log(_this.datosdash);
                // console.log(this.datosdash);
                // console.log(Object.getOwnPropertyNames(data).sort());
                // this.max = data.Total_Responsables;
                _this.max = _this.datosdash.Total_Responsables;
                console.log(_this.max);
                //this.current3 = this.datosdash[0].Efectividad;
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.cargarTareasPersonales = function () {
        var _this = this;
        this.postPvdr.getTareasP(this.id).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.tareasp = data.filter(function (tareas) { return tareas.Estado_Tarea === "Pendiente"; });
                if (_this.tareasp.length > 3) {
                    _this.tareasp.length = 3;
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.cargarTareasRecientes = function () {
        var _this = this;
        this.postPvdr.getTareasRes(this.id).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.tareasreci = data.filter(function (tareas) { return tareas.tarea.Estado_Tarea === "Pendiente" && tareas.tarea.Id_Tipo_Tarea === 5; });
                if (_this.tareasreci.length > 3) {
                    _this.tareasreci.length = 3;
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.cargarReunionesVigentes = function () {
        var _this = this;
        this.postPvdr.getReuparti(this.id)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.reunionvigentes = data.filter(function (reunion) { return reunion.reunion.Estado === "Pendiente"; });
            }
            if (_this.reunionvigentes.length > 3) {
                _this.reunionvigentes.length = 3;
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.doRefresh = function (evento) {
        this.cargarValores();
        this.cargarTareasRecientes();
        this.cargarTareasPersonales();
        this.cargarReunionesVigentes();
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    BienvenidoPage.prototype.irtareas = function () {
        this.router.navigate(['/tareas']);
    };
    BienvenidoPage.prototype.irreunion = function () {
        this.router.navigate(['/reunion']);
    };
    BienvenidoPage.prototype.irdashboard = function () {
        this.router.navigate(['/actividades']);
    };
    BienvenidoPage.prototype.irtareasp = function () {
        this.router.navigate(['/tpersonal']);
    };
    //Busqueda
    BienvenidoPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    BienvenidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bienvenido',
            template: __webpack_require__(/*! ./bienvenido.page.html */ "./src/app/bienvenido/bienvenido.page.html"),
            styles: [__webpack_require__(/*! ./bienvenido.page.scss */ "./src/app/bienvenido/bienvenido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            //private navPr: NavParams
        ])
    ], BienvenidoPage);
    return BienvenidoPage;
}());



/***/ })

}]);
//# sourceMappingURL=bienvenido-bienvenido-module.js.map