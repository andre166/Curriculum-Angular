(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");











const _c0 = ["sidenav"];
const _c1 = function () { return { "height.px": 60 }; };
const _c2 = function (a0) { return { "background-position-x.px": a0 }; };
class AppComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.title = 'curriculum';
        this.reason = '';
    }
    close(reason) {
        this.reason = reason;
        this.sidenav.close();
    }
    CurriculumAlert() {
        this.snackBar.open("Em Breve", "", { duration: 5000 });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 33, vars: 5, consts: [[1, "example-container", 3, "backdropClick"], ["disableClose", "", 3, "keydown.escape"], ["sidenav", ""], ["routerLink", "/home", 1, "morph-menu-btn", 3, "click"], [1, "morph-menu-btn", 3, "click"], [1, "fas", "fa-file-download"], ["routerLink", "/certificados", 1, "morph-menu-btn", 3, "click"], ["routerLink", "/contato", 1, "morph-menu-btn", 3, "click"], ["routerLink", "/projetos", 1, "morph-menu-btn", 3, "click"], ["fxHide.gt-sm", "true", 3, "ngStyle.xs"], ["routerLink", "/home", 1, "logo"], [1, "example-spacer"], ["fxShow", "true", "fxHide.gt-sm", "true"], ["mat-button", "", 1, "btn-hamburguer-morph", 3, "click"], [1, "material-icons"], ["id", "img-bg-appComponent", 3, "ngStyle.xs"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function AppComponent_Template_mat_sidenav_container_backdropClick_1_listener() { return ctx.close("backdrop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function AppComponent_Template_mat_sidenav_keydown_escape_2_listener() { return ctx.close("escape"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { return ctx.CurriculumAlert(); })("click", function AppComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Certificados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projetos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, 0 - 160));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["mat-toolbar[_ngcontent-%COMP%]{\r\n  background-color: #131419;\r\n  height: 90px;\r\n}\r\n\r\n#img-bg-appComponent[_ngcontent-%COMP%]{\r\n    background-image: url('ceramic.jpg');\r\n    overflow: hidden;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-size: cover; \r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n  color: #a58c5e;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  padding: 3px 15px;\r\n  border-radius: 5px;\r\n  font-size: 11pt;\r\n  font-weight: 600;\r\n  background: #131419;\r\n  box-shadow:  \r\n  -3px -3px 3px rgba(194, 193, 193, 0.164),\r\n  4px 4px 3px rgb(0, 0, 0);\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover{\r\n  color: rgb(194, 194, 194);\r\n  background: #131419;\r\n  box-shadow:  \r\n  inset -3px -3px 3px rgba(194, 193, 193, 0.164),\r\n  inset 4px 4px 3px rgb(0, 0, 0);\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.btn-hamburguer-morph[_ngcontent-%COMP%]{\r\n  color: #a58c5e;\r\n  border-radius: 20px;\r\n  margin-right: 20px;\r\n  background: #131419;\r\n  box-shadow:  \r\n    -3px -3px 3px rgba(194, 193, 193, 0.164),\r\n    4px 4px 3px rgb(0, 0, 0);\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%]{\r\n  background-color: #131419;\r\n}\r\n\r\nmat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: #a58c5e;\r\n  border-radius: 20px;\r\n  margin-right: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksb0NBQXNEO0lBQ3RELGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkI7OzBCQUV3QjtFQUN4QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQjs7Z0NBRThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQjs7NEJBRTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzE0MTk7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4jaW1nLWJnLWFwcENvbXBvbmVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlbnMvY2VyYW1pYy5qcGcnKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG59XHJcblxyXG4ubG9nb3tcclxuICBjb2xvcjogI2E1OGM1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDExcHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiAjMTMxNDE5O1xyXG4gIGJveC1zaGFkb3c6ICBcclxuICAtM3B4IC0zcHggM3B4IHJnYmEoMTk0LCAxOTMsIDE5MywgMC4xNjQpLFxyXG4gIDRweCA0cHggM3B4IHJnYigwLCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubG9nbzpob3ZlcntcclxuICBjb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xyXG4gIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgYm94LXNoYWRvdzogIFxyXG4gIGluc2V0IC0zcHggLTNweCAzcHggcmdiYSgxOTQsIDE5MywgMTkzLCAwLjE2NCksXHJcbiAgaW5zZXQgNHB4IDRweCAzcHggcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uYnRuLWhhbWJ1cmd1ZXItbW9ycGh7XHJcbiAgY29sb3I6ICNhNThjNWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzEzMTQxOTtcclxuICBib3gtc2hhZG93OiAgXHJcbiAgICAtM3B4IC0zcHggM3B4IHJnYmEoMTk0LCAxOTMsIDE5MywgMC4xNjQpLFxyXG4gICAgNHB4IDRweCAzcHggcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDE5O1xyXG59XHJcblxyXG5tYXQtbGlzdCBtYXQtbGlzdC1pdGVtIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2E1OGM1ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header */ "./src/app/header/index.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer */ "./src/app/footer/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["ContatoModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["ContatoRoutingModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["CertificadosModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["CertificadosRoutingModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["ProjetosModule"],
            _pages__WEBPACK_IMPORTED_MODULE_3__["ProjetosRoutingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
        _header__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
        _footer__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["ContatoModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["ContatoRoutingModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["CertificadosModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["CertificadosRoutingModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["ProjetosModule"],
        _pages__WEBPACK_IMPORTED_MODULE_3__["ProjetosRoutingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]], exports: [_header__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
        _footer__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                    _header__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                    _footer__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["ContatoModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["ContatoRoutingModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["CertificadosModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["CertificadosRoutingModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["ProjetosModule"],
                    _pages__WEBPACK_IMPORTED_MODULE_3__["ProjetosRoutingModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                entryComponents: [],
                exports: [
                    _header__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                    _footer__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 17, vars: 0, consts: [[1, "footer-container"], [1, "left-col"], [1, "img-faces"], ["href", "https://www.facebook.com/andre.mesquitasd", "target", "_blank", 1, "morph-footer-btn"], [1, "fab", "fa-facebook-f"], ["href", "https://api.whatsapp.com/send?phone=5521981235902", "target", "_blank", 1, "morph-footer-btn"], [1, "fab", "fa-whatsapp"], ["href", "https://www.instagram.com/mesquitaandre", "target", "_blank", 1, "morph-footer-btn"], [1, "fab", "fa-instagram"], ["href", "https://www.linkedin.com/in/andr%C3%A9-mesquita-295974190/", "target", "_blank", 1, "morph-footer-btn"], [1, "fab", "fa-linkedin-in"], ["href", "https://github.com/andre166", "target", "_blank", 1, "morph-footer-btn"], [1, "fab", "fa-github"], [1, "right-col"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Andr\u00E9 Mesquita \u00A9 All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".right-col[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #5e6879f1;\r\n  }\r\n  .right-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    color: #c9cccf;\r\n  }\r\n  footer[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    \r\n    background: #131419;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  \r\n    color: #a58c5e;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    padding: 20px 30px;\r\n    \r\n    \r\n    background: #131419;\r\n               box-shadow:\r\n               -2px -2px 2px rgba(194, 193, 193, 0.164),\r\n               4px 4px 3px rgb(0, 0, 0);\r\n    text-align: center;\r\n    display: inline-block;\r\n    font-size: 24pt;\r\n    font-weight: 600;\r\n  \r\n  }\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{\r\n    \r\n                border-bottom-left-radius: 10px;\r\n                border-top-left-radius: 10px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:hover{\r\n    \r\n\r\n                background: #131419;\r\n                box-shadow:\r\n                inset -3px -3px 8px rgba(194, 193, 194, 0.157),\r\n                inset 4px 4px 8px rgb(0, 0, 0);\r\n               \r\n  }\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{\r\n    \r\n                border-bottom-right-radius: 10px;\r\n                border-top-right-radius: 10px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:hover{\r\n    \r\n    \r\n\r\n                background: #131419;\r\n                box-shadow:\r\n                inset -3px -3px 8px rgba(194, 193, 194, 0.157),\r\n                inset 4px 4px 8px rgb(0, 0, 0);\r\n}\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    \r\n    \r\n\r\n    background: #131419;\r\n    box-shadow:\r\n    inset -3px -3px 8px rgba(194, 193, 194, 0.157),\r\n    inset 4px 4px 8px rgb(0, 0, 0);\r\n  \r\n  }\r\n  .footer-container[_ngcontent-%COMP%]{\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    padding: 0 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: wrap-reverse;\r\n  }\r\n  .right-col[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 26px;\r\n  }\r\n  .newsletter-form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n  }\r\n  .page-content[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    font-size: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  @media screen and (max-width:960px) {\r\n    mat-toolbar[_ngcontent-%COMP%]{\r\n      height: 60px;\r\n     \r\n    }\r\n  \r\n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  \r\n      padding: 12px 20px;\r\n      \r\n      font-size: 18pt;\r\n      font-weight: 600;\r\n      margin-bottom: 30px;\r\n    \r\n    }\r\n    footer[_ngcontent-%COMP%]{\r\n      padding-top: 5px;\r\n      padding-bottom: 5px;\r\n    }\r\n  \r\n  \r\n    .footer-container[_ngcontent-%COMP%]{\r\n      max-width: 600px;\r\n    }\r\n    .right-col[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      \r\n    }\r\n  \r\n    .left-col[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n  }\r\n  @media screen and (max-width:700px){\r\n    .btn[_ngcontent-%COMP%]{\r\n      margin: 0;\r\n      width: 100%;\r\n      margin-top: 20px;\r\n      }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFHQTtJQUNFLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBRUE7O0lBRUUsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QywwQkFBMEI7SUFDMUIsbUJBQW1CO2VBQ1I7O3VDQUV3QjtJQUNuQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7O0VBRWxCO0VBRUE7SUFDRTswQ0FDc0M7Z0JBQzFCLCtCQUErQjtnQkFDL0IsNEJBQTRCO0VBQzFDO0VBRUE7SUFDRTs4Q0FDMEM7O2dCQUU5QixtQkFBbUI7Z0JBQ25COzs4Q0FFOEI7O0VBRTVDO0VBRUE7O2dCQUVjLGdDQUFnQztnQkFDaEMsNkJBQTZCO0VBQzNDO0VBRUE7O0lBRUU7OENBQzBDOztnQkFFOUIsbUJBQW1CO2dCQUNuQjs7OENBRThCO0FBQzlDO0VBRUU7SUFDRSx5QkFBeUI7SUFDekI7OztrQ0FHOEI7O0lBRTlCLG1CQUFtQjtJQUNuQjs7a0NBRThCOztFQUVoQztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBR0E7SUFDRTtNQUNFLFlBQVk7O0lBRWQ7O0lBRUE7O01BRUUsa0JBQWtCOztNQUVsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjs7SUFFckI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixtQkFBbUI7SUFDckI7OztJQUdBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxXQUFXOztJQUViOztJQUVBO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjtFQUNGO0VBR0E7SUFDRTtNQUNFLFNBQVM7TUFDVCxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCO0VBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJpZ2h0LWNvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNWU2ODc5ZjE7XHJcbiAgfVxyXG4gIC5yaWdodC1jb2wgaDR7XHJcbiAgICBjb2xvcjogI2M5Y2NjZjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgZm9vdGVye1xyXG4gICAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhNThjNWU7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogI2YxZjFmMTsgKi9cclxuICAgIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBmb290ZXIgYXtcclxuICBcclxuICAgIGNvbG9yOiAjYTU4YzVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogIDJweCAycHggMnB4ICNiZGJkYmQ7ICovXHJcbiAgICAvKiAzcHggLTJweCAycHggI2ZmZmZmZjsgKi9cclxuICAgIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgICAgICAgICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgICAgIC0ycHggLTJweCAycHggcmdiYSgxOTQsIDE5MywgMTkzLCAwLjE2NCksXHJcbiAgICAgICAgICAgICAgIDRweCA0cHggM3B4IHJnYigwLCAwLCAwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjRwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciBhOmZpcnN0LWNoaWxke1xyXG4gICAgLyogYm94LXNoYWRvdzogIDJweCAycHggMnB4ICNiZGJkYmQsIFxyXG4gICAgICAgICAgICAgICAgICAtM3B4IC0ycHggMnB4ICNmZmZmZmY7ICovXHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBhOmZpcnN0LWNoaWxkOmhvdmVye1xyXG4gICAgLyogYm94LXNoYWRvdzogIGluc2V0IDNweCAzcHggM3B4ICM5NTk1OTUsIFxyXG4gICAgICAgICAgICAgICAgaW5zZXQgLTNweCAtMnB4IDJweCAjZmZmZmZmOyAqL1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAgICAgaW5zZXQgLTNweCAtM3B4IDhweCByZ2JhKDE5NCwgMTkzLCAxOTQsIDAuMTU3KSxcclxuICAgICAgICAgICAgICAgIGluc2V0IDRweCA0cHggOHB4IHJnYigwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBmb290ZXIgYTpsYXN0LWNoaWxke1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGE6bGFzdC1jaGlsZDpob3ZlcntcclxuICAgIFxyXG4gICAgLyogYm94LXNoYWRvdzogIGluc2V0IDRweCA0cHggNHB4ICM5NTk1OTUsIFxyXG4gICAgICAgICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDJweCAjZmZmZmZmOyAqL1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAgICAgaW5zZXQgLTNweCAtM3B4IDhweCByZ2JhKDE5NCwgMTkzLCAxOTQsIDAuMTU3KSxcclxuICAgICAgICAgICAgICAgIGluc2V0IDRweCA0cHggOHB4IHJnYigwLCAwLCAwKTtcclxufVxyXG4gIFxyXG4gIGZvb3RlciBhOmhvdmVye1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAzcHggM3B4IDNweCAjOTU5NTk1LCBcclxuICAgIGluc2V0IDBweCAtMnB4IDJweCAjZmZmZmZmLFxyXG4gICAgaW5zZXQgLTRweCAwcHggNHB4ICM5NTk1OTU7ICAqL1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgaW5zZXQgLTNweCAtM3B4IDhweCByZ2JhKDE5NCwgMTkzLCAxOTQsIDAuMTU3KSxcclxuICAgIGluc2V0IDRweCA0cHggOHB4IHJnYigwLCAwLCAwKTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaWdodC1jb2wgaDF7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXdzbGV0dGVyLWZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAucGFnZS1jb250ZW50e1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KSB7XHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZm9vdGVyIGF7XHJcbiAgXHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMThwdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgZm9vdGVye1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgLmZvb3Rlci1jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtY29se1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAubGVmdC1jb2x7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xyXG4gICAgLmJ0bntcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/index.ts":
/*!*********************************!*\
  !*** ./src/app/footer/index.ts ***!
  \*********************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });




/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class HeaderComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    CurriculumAlert() {
        this.snackBar.open("Em Breve", "", { duration: 5000 });
    }
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 0, consts: [["fxHide.lt-md", "true"], ["routerLink", "/home", 1, "logo", 3, "click"], [1, "example-spacer"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "navbar"], [1, "example-button-row"], [1, "morph-menu-btn", 3, "click"], [1, "fas", "fa-file-download"], ["routerLink", "/certificados", 1, "morph-menu-btn", 3, "click"], ["routerLink", "/contato", 1, "morph-menu-btn", 3, "click"], ["routerLink", "/projetos", 1, "morph-menu-btn", 3, "click"], ["fxShow", "true", "fxHide.gt-sm", "true"], ["mat-button", "", 1, "btn-hamburguer-morph"], [1, "material-icons"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_1_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_6_listener() { ctx.CurriculumAlert(); return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Certificados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Projetos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["mat-toolbar[_ngcontent-%COMP%]{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0; \r\n  z-index: 1000; \r\n  background-color: #131419;\r\n  height: 90px;\r\n}\r\n  \r\n.logo[_ngcontent-%COMP%]{\r\n  color: #a58c5e;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  padding: 15px 30px;\r\n  border-radius: 8px;\r\n  background: #131419;\r\n  box-shadow:  \r\n    -3px -3px 3px rgba(194, 193, 193, 0.164),\r\n    4px 4px 3px rgb(0, 0, 0);\r\n  text-align: center;\r\n  display: inline-block;\r\n  font-size: 12pt;\r\n  font-weight: 600;\r\n}\r\n  \r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  margin-right: 20px;\r\n  color: #a58c5e;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  padding: 15px 25px 15px 25px;\r\n  border-radius: 5px;\r\n  background: #131419;\r\n  box-shadow:  \r\n    -3px -3px 3px rgba(194, 193, 193, 0.164),\r\n    4px 4px 3px rgb(0, 0, 0);  \r\n  padding: 15px 25px 15px 25px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  font-size: 12pt;\r\n  font-weight: 600;\r\n}\r\n  \r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{\r\n  background: #131419;\r\n  box-shadow:  \r\n  -3px -3px 2.5px rgba(194, 193, 193, 0.164),\r\n  4px 4px 3px rgb(0, 0, 0);\r\n  margin-right: 20px;\r\n  padding: 20px 20px;\r\n  border-radius: 50px;\r\n}\r\n  \r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .logo[_ngcontent-%COMP%]:hover{\r\n  color: #c2c2c2;\r\n  background: #131419;\r\n  box-shadow:  \r\n  inset -3px -3px 3px rgba(194, 193, 193, 0.164),\r\n  inset 4px 4px 3px rgb(0, 0, 0);\r\n}\r\n  \r\n.navbar[_ngcontent-%COMP%]{\r\n  margin-right: 100px;\r\n}\r\n  \r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n  \r\n@media screen and (max-width:960px) {\r\n  mat-toolbar[_ngcontent-%COMP%]{\r\n    height: 60px;\r\n    \r\n  }\r\n  .btn-hamburguer-morph[_ngcontent-%COMP%]{\r\n    color: #a58c5e;\r\n    border-radius: 20px;\r\n    margin-right: 20px;\r\n    background: #131419;\r\n    box-shadow:  \r\n    -3px -3px 3px rgba(194, 193, 193, 0.164),\r\n    4px 4px 3px rgb(0, 0, 0);\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{\r\n    padding: 3px 15px;\r\n    border-radius: 5px;\r\n    font-size: 11pt;\r\n    font-weight: 600;\r\n  }\r\n\r\n  \r\n}\r\n  \r\n@media screen and (max-width:700px){\r\n  .btn[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    }\r\n}\r\n  \r\n.example-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQjs7NEJBRTBCO0VBQzFCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQjs7NEJBRTBCO0VBQzFCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7OzBCQUV3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7O2dDQUU4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7O0VBRWQ7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjs7NEJBRXdCO0VBQzFCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOzs7QUFHRjs7QUFHQTtFQUNFO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDsgXHJcbiAgei1pbmRleDogMTAwMDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxOTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuICBcclxuLmxvZ297XHJcbiAgY29sb3I6ICNhNThjNWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgYm94LXNoYWRvdzogIFxyXG4gICAgLTNweCAtM3B4IDNweCByZ2JhKDE5NCwgMTkzLCAxOTMsIDAuMTY0KSxcclxuICAgIDRweCA0cHggM3B4IHJnYigwLCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiAgXHJcbi5uYXZiYXIgYXtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNhNThjNWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjMTMxNDE5O1xyXG4gIGJveC1zaGFkb3c6ICBcclxuICAgIC0zcHggLTNweCAzcHggcmdiYSgxOTQsIDE5MywgMTkzLCAwLjE2NCksXHJcbiAgICA0cHggNHB4IDNweCByZ2IoMCwgMCwgMCk7ICBcclxuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuICBcclxuLm5hdmJhciBhOmZpcnN0LWNoaWxke1xyXG4gIGJhY2tncm91bmQ6ICMxMzE0MTk7XHJcbiAgYm94LXNoYWRvdzogIFxyXG4gIC0zcHggLTNweCAyLjVweCByZ2JhKDE5NCwgMTkzLCAxOTMsIDAuMTY0KSxcclxuICA0cHggNHB4IDNweCByZ2IoMCwgMCwgMCk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbiAgXHJcbi5uYXZiYXIgYTpob3ZlciwgLmxvZ286aG92ZXJ7XHJcbiAgY29sb3I6ICNjMmMyYzI7XHJcbiAgYmFja2dyb3VuZDogIzEzMTQxOTtcclxuICBib3gtc2hhZG93OiAgXHJcbiAgaW5zZXQgLTNweCAtM3B4IDNweCByZ2JhKDE5NCwgMTkzLCAxOTMsIDAuMTY0KSxcclxuICBpbnNldCA0cHggNHB4IDNweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuICBcclxuLm5hdmJhcntcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcbiAgXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTYwcHgpIHtcclxuICBtYXQtdG9vbGJhcntcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIFxyXG4gIH1cclxuICAuYnRuLWhhbWJ1cmd1ZXItbW9ycGh7XHJcbiAgICBjb2xvcjogI2E1OGM1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTMxNDE5O1xyXG4gICAgYm94LXNoYWRvdzogIFxyXG4gICAgLTNweCAtM3B4IDNweCByZ2JhKDE5NCwgMTkzLCAxOTMsIDAuMTY0KSxcclxuICAgIDRweCA0cHggM3B4IHJnYigwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgcGFkZGluZzogM3B4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuICBcclxuICBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XHJcbiAgLmJ0bntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");










class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/index.ts":
/*!*********************************!*\
  !*** ./src/app/header/index.ts ***!
  \*********************************/
/*! exports provided: HeaderComponent, HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module */ "./src/app/header/header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_module__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"]; });





/***/ }),

/***/ "./src/app/pages/certificados/certificados-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/certificados/certificados-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CertificadosRoutes, CertificadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadosRoutes", function() { return CertificadosRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadosRoutingModule", function() { return CertificadosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/certificados/components/index.ts");





const CertificadosRoutes = [
    {
        path: 'certificados',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["WrapperCertificadosComponents"],
        children: [{ path: '', component: _components__WEBPACK_IMPORTED_MODULE_2__["CertificadosComponent"] }]
    }
];
class CertificadosRoutingModule {
}
CertificadosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CertificadosRoutingModule });
CertificadosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CertificadosRoutingModule_Factory(t) { return new (t || CertificadosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(CertificadosRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CertificadosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificadosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(CertificadosRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/certificados/certificados.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/certificados/certificados.module.ts ***!
  \***********************************************************/
/*! exports provided: CertificadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadosModule", function() { return CertificadosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/certificados/components/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");















class CertificadosModule {
}
CertificadosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CertificadosModule });
CertificadosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CertificadosModule_Factory(t) { return new (t || CertificadosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CertificadosModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["CertificadosComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["WrapperCertificadosComponents"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificadosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components__WEBPACK_IMPORTED_MODULE_2__["CertificadosComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_2__["WrapperCertificadosComponents"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/certificados/components/certificados/certificados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/certificados/components/certificados/certificados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CertificadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadosComponent", function() { return CertificadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






const _c0 = function () { return { "font-size.pt": 16 }; };
const _c1 = function () { return { "width": "100%" }; };
class CertificadosComponent {
    constructor() {
        this.panelOpenState = false;
    }
    ngOnInit() {
    }
}
CertificadosComponent.ɵfac = function CertificadosComponent_Factory(t) { return new (t || CertificadosComponent)(); };
CertificadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificadosComponent, selectors: [["app-certificados"]], decls: 52, vars: 4, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayout.sm", "column", "fxLayout.xs", "column", 1, "certificado-section"], ["id", "title-certificado", "fxLayoutAlign", "center center", 3, "ngStyle.xs"], [1, "fas", "fa-certificate"], ["fxLayoutAlign", "center center", 1, "certificado-container", 3, "ngStyle.lt-md"], ["fxFlexFill", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayout.sm", "column", "fxLayout.xs", "column"], [1, "example-card"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/java-spring.jpg", "alt", "Foto de certificado java"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/java8-01.jpg", "alt", "Foto de certificado java"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/java8-02.jpg", "alt", "Foto de certificado java"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/java8-03.jpg", "alt", "Foto de certificado java"], [3, "opened", "closed"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/em-breve.png", "alt", "Foto de certificado Angular"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/em-breve.png", "alt", "Foto de certificado de reactJS"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/em-breve.png", "alt", "Foto de certificado banco de dados"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/performance.JPG", "alt", "Foto de certificado diverso"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/vm.jpg", "alt", "Foto de certificado diverso"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/php.jpg", "alt", "Foto de certificado diverso"]], template: function CertificadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Certificados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-accordion", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Java ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CertificadosComponent_Template_mat_expansion_panel_opened_20_listener() { return ctx.panelOpenState = true; })("closed", function CertificadosComponent_Template_mat_expansion_panel_closed_20_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CertificadosComponent_Template_mat_expansion_panel_opened_27_listener() { return ctx.panelOpenState = true; })("closed", function CertificadosComponent_Template_mat_expansion_panel_closed_27_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " ReactJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CertificadosComponent_Template_mat_expansion_panel_opened_34_listener() { return ctx.panelOpenState = true; })("closed", function CertificadosComponent_Template_mat_expansion_panel_closed_34_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Banco de dados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CertificadosComponent_Template_mat_expansion_panel_opened_41_listener() { return ctx.panelOpenState = true; })("closed", function CertificadosComponent_Template_mat_expansion_panel_closed_41_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Diversos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"]], styles: [".certificado-section[_ngcontent-%COMP%]{\r\n    min-height: 79vh;\r\n}\r\n\r\n.certificado-container[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    margin: 25px 0px;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%]{\r\n    max-width: 27em;\r\n    margin-right: 18px;\r\n    margin-top: 12px;\r\n}\r\n\r\n#title-certificado[_ngcontent-%COMP%]{\r\n    color: #a58c5e;\r\n    font-size: 26pt;\r\n    font-weight: 600;\r\n    letter-spacing: 4px;\r\n    margin-top: -80px;\r\n    margin-bottom: 20px;\r\n    background-color: #fff;\r\n    padding: 10px 20px 10px 20px;\r\n    border-radius: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2VydGlmaWNhZG9zL2NvbXBvbmVudHMvY2VydGlmaWNhZG9zL2NlcnRpZmljYWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jZXJ0aWZpY2Fkb3MvY29tcG9uZW50cy9jZXJ0aWZpY2Fkb3MvY2VydGlmaWNhZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VydGlmaWNhZG8tc2VjdGlvbntcclxuICAgIG1pbi1oZWlnaHQ6IDc5dmg7XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2Fkby1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZHtcclxuICAgIG1heC13aWR0aDogMjdlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbiN0aXRsZS1jZXJ0aWZpY2Fkb3tcclxuICAgIGNvbG9yOiAjYTU4YzVlO1xyXG4gICAgZm9udC1zaXplOiAyNnB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certificados',
                templateUrl: './certificados.component.html',
                styleUrls: ['./certificados.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/certificados/components/certificados/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/certificados/components/certificados/index.ts ***!
  \*********************************************************************/
/*! exports provided: CertificadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _certificados_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificados.component */ "./src/app/pages/certificados/components/certificados/certificados.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosComponent", function() { return _certificados_component__WEBPACK_IMPORTED_MODULE_0__["CertificadosComponent"]; });




/***/ }),

/***/ "./src/app/pages/certificados/components/index.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/certificados/components/index.ts ***!
  \********************************************************/
/*! exports provided: CertificadosComponent, WrapperCertificadosComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _certificados__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificados */ "./src/app/pages/certificados/components/certificados/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosComponent", function() { return _certificados__WEBPACK_IMPORTED_MODULE_0__["CertificadosComponent"]; });

/* harmony import */ var _wrapper_certificados_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper-certificados.components */ "./src/app/pages/certificados/components/wrapper-certificados.components.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperCertificadosComponents", function() { return _wrapper_certificados_components__WEBPACK_IMPORTED_MODULE_1__["WrapperCertificadosComponents"]; });





/***/ }),

/***/ "./src/app/pages/certificados/components/wrapper-certificados.components.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/certificados/components/wrapper-certificados.components.ts ***!
  \**********************************************************************************/
/*! exports provided: WrapperCertificadosComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperCertificadosComponents", function() { return WrapperCertificadosComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WrapperCertificadosComponents {
}
WrapperCertificadosComponents.ɵfac = function WrapperCertificadosComponents_Factory(t) { return new (t || WrapperCertificadosComponents)(); };
WrapperCertificadosComponents.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperCertificadosComponents, selectors: [["ng-component"]], decls: 1, vars: 0, template: function WrapperCertificadosComponents_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperCertificadosComponents, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
        <router-outlet></router-outlet>
    `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/certificados/index.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/certificados/index.ts ***!
  \*********************************************/
/*! exports provided: CertificadosModule, CertificadosRoutes, CertificadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _certificados_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificados.module */ "./src/app/pages/certificados/certificados.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosModule", function() { return _certificados_module__WEBPACK_IMPORTED_MODULE_0__["CertificadosModule"]; });

/* harmony import */ var _certificados_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificados-routing.module */ "./src/app/pages/certificados/certificados-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosRoutes", function() { return _certificados_routing_module__WEBPACK_IMPORTED_MODULE_1__["CertificadosRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosRoutingModule", function() { return _certificados_routing_module__WEBPACK_IMPORTED_MODULE_1__["CertificadosRoutingModule"]; });





/***/ }),

/***/ "./src/app/pages/contato/components/contato/contato.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/contato/components/contato/contato.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










class ContatoComponent {
    constructor(
    // private router: Router,
    fb, snackBar) {
        this.fb = fb;
        this.snackBar = snackBar;
    }
    ngOnInit() {
    }
}
ContatoComponent.ɵfac = function ContatoComponent_Factory(t) { return new (t || ContatoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
ContatoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContatoComponent, selectors: [["app-contato"]], decls: 49, vars: 0, consts: [["fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayout.sm", "column", "fxLayout.xs", "column", 1, "contato-container"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "center center", 1, "btn-h2"], [1, "fas", "fa-map-marked-alt"], ["fxLayout", "row", 1, "mapa-container"], ["matTooltip", "Ver localiza\u00E7\u00E3o no google maps", "matTooltipPosition", "below", "fxLayout", "row"], ["target", "_blank", "fxLayoutAlign", "center center", "href", "https://www.google.com/maps/place/Maria+Paula,+Niter%C3%B3i+-+RJ,+24325-240/@-22.879255,-43.034723,16z/data=!4m5!3m4!1s0x998fba7bd6d561:0x4dbe63eaf2e6c5b7!8m2!3d-22.8791374!4d-43.0348213?hl=pt-BR"], ["id", "img-mapa", "src", "../../../../../assets/imagens/gps-minha-casa.JPG"], ["fxLayout", "column", 1, "formulario-container"], [1, "far", "fa-envelope"], [1, "border-custom"], ["fxLayoutAlign", "space-around start", "fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign.sm", "center center", "fxLayoutAlign.xs", "center center"], ["appearance", "outline"], ["type", "text", "matInput", "", "placeholder", "Nome"], ["type", "email", "matInput", "", "placeholder", "Email"], ["disableRipple", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "w-50"], ["matInput", "", "placeholder", "Ex. Como estou me sentindo...", 1, "txtArea"], ["type", "button", 1, "btn-enviar"]], template: function ContatoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bem aqui ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mande-me um email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Assunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Duvidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "FeddBack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Outros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Digite a menssagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".contato-container[_ngcontent-%COMP%]{\r\n    max-width: 1000px;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.mapa-container[_ngcontent-%COMP%]{\r\n    border-radius:5px;\r\n}\r\n\r\n#img-mapa[_ngcontent-%COMP%]{\r\n    max-height: 29em;\r\n    border-radius: 10px;\r\n    width: 97%;\r\n}\r\n\r\n#img-mapa[_ngcontent-%COMP%]:hover{\r\n    border-radius: 10px;\r\n    transform: scale(1.03);\r\n}\r\n\r\n.contato-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 12pt;\r\n    font-weight: 600;\r\n    color: #a58c5e;\r\n    text-transform: uppercase;\r\n    padding: 0px;\r\n}\r\n\r\n.btn-h2[_ngcontent-%COMP%]{\r\n    padding: 0px 20px;\r\n    border-radius: 50px;\r\n    background-color: #f3f3f3;\r\n    margin: 15px 0px;\r\n\r\n}\r\n\r\n.formulario-container[_ngcontent-%COMP%]{\r\n    padding: 20px 20px;\r\n    margin: 15px 20px;\r\n    width: 75%;\r\n    border-radius: 5px;\r\n     background-color: #fff;\r\n}\r\n\r\n.txtArea[_ngcontent-%COMP%]{\r\n    resize: none;\r\n    \r\n    height: 50px;\r\n}\r\n\r\n.btn-enviar[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n    color: #a58c5e;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    border-radius: 30px;\r\n    box-shadow: \r\n    -3px -3px 4px rgba(255, 255, 255, 0.602),\r\n    3px 3px 4px #cecece; \r\n    padding: 8px 15px;\r\n    font-weight: 600;\r\n    margin: 10px 0px;\r\n}\r\n\r\n.btn-enviar[_ngcontent-%COMP%]:hover{\r\n    box-shadow: \r\n    inset -3px -3px 4px rgba(255, 255, 255, 0.602),\r\n    inset 3px 3px 4px #cecece; \r\n\r\n}\r\n\r\n.border-custom[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n    height: 2px;\r\n    background-color: #b8b8b8;\r\n    margin-top: 10px;\r\n    margin-bottom: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGF0by9jb21wb25lbnRzL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtLQUNqQixzQkFBc0I7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25COzt1QkFFbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTs7NkJBRXlCOztBQUU3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YXRvL2NvbXBvbmVudHMvY29udGF0by9jb250YXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGF0by1jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG4ubWFwYS1jb250YWluZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG5cclxuI2ltZy1tYXBhe1xyXG4gICAgbWF4LWhlaWdodDogMjllbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogOTclO1xyXG59XHJcblxyXG4jaW1nLW1hcGE6aG92ZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxufVxyXG5cclxuLmNvbnRhdG8tY29udGFpbmVyIGgye1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjYTU4YzVlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmJ0bi1oMntcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG5cclxufVxyXG5cclxuLmZvcm11bGFyaW8tY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDIwcHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50eHRBcmVhe1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJ0bi1lbnZpYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgY29sb3I6ICNhNThjNWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogXHJcbiAgICAtM3B4IC0zcHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDIpLFxyXG4gICAgM3B4IDNweCA0cHggI2NlY2VjZTsgXHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4uYnRuLWVudmlhcjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IFxyXG4gICAgaW5zZXQgLTNweCAtM3B4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAyKSxcclxuICAgIGluc2V0IDNweCAzcHggNHB4ICNjZWNlY2U7IFxyXG5cclxufVxyXG5cclxuLmJvcmRlci1jdXN0b217XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiOGI4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContatoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contato',
                templateUrl: './contato.component.html',
                styleUrls: ['./contato.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contato/components/contato/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/contato/components/contato/index.ts ***!
  \***********************************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contato_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contato.component */ "./src/app/pages/contato/components/contato/contato.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return _contato_component__WEBPACK_IMPORTED_MODULE_0__["ContatoComponent"]; });




/***/ }),

/***/ "./src/app/pages/contato/components/index.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contato/components/index.ts ***!
  \***************************************************/
/*! exports provided: ContatoComponent, WrapperContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contato__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contato */ "./src/app/pages/contato/components/contato/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return _contato__WEBPACK_IMPORTED_MODULE_0__["ContatoComponent"]; });

/* harmony import */ var _wrapper_contato_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper-contato.component */ "./src/app/pages/contato/components/wrapper-contato.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperContatoComponent", function() { return _wrapper_contato_component__WEBPACK_IMPORTED_MODULE_1__["WrapperContatoComponent"]; });





/***/ }),

/***/ "./src/app/pages/contato/components/wrapper-contato.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/contato/components/wrapper-contato.component.ts ***!
  \***********************************************************************/
/*! exports provided: WrapperContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperContatoComponent", function() { return WrapperContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WrapperContatoComponent {
}
WrapperContatoComponent.ɵfac = function WrapperContatoComponent_Factory(t) { return new (t || WrapperContatoComponent)(); };
WrapperContatoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperContatoComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function WrapperContatoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperContatoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
        <router-outlet></router-outlet>
    `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/contato/contato-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contato/contato-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContatoRoutes, ContatoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoRoutes", function() { return ContatoRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoRoutingModule", function() { return ContatoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/contato/components/index.ts");





const ContatoRoutes = [
    {
        path: 'contato',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["WrapperContatoComponent"],
        children: [{ path: '', component: _components__WEBPACK_IMPORTED_MODULE_2__["ContatoComponent"] }]
    }
];
class ContatoRoutingModule {
}
ContatoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContatoRoutingModule });
ContatoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContatoRoutingModule_Factory(t) { return new (t || ContatoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ContatoRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContatoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContatoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ContatoRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/contato/contato.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contato/contato.module.ts ***!
  \*************************************************/
/*! exports provided: ContatoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoModule", function() { return ContatoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/pages/contato/components/index.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");






















// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
class ContatoModule {
}
ContatoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContatoModule });
ContatoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContatoModule_Factory(t) { return new (t || ContatoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            // MatFormFieldModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContatoModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_3__["ContatoComponent"],
        _components__WEBPACK_IMPORTED_MODULE_3__["WrapperContatoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        // MatFormFieldModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContatoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components__WEBPACK_IMPORTED_MODULE_3__["ContatoComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_3__["WrapperContatoComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    // MatFormFieldModule,
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/contato/index.ts":
/*!****************************************!*\
  !*** ./src/app/pages/contato/index.ts ***!
  \****************************************/
/*! exports provided: ContatoModule, ContatoRoutes, ContatoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contato_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contato.module */ "./src/app/pages/contato/contato.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoModule", function() { return _contato_module__WEBPACK_IMPORTED_MODULE_0__["ContatoModule"]; });

/* harmony import */ var _contato_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato-routing.module */ "./src/app/pages/contato/contato-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoRoutes", function() { return _contato_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContatoRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoRoutingModule", function() { return _contato_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContatoRoutingModule"]; });





/***/ }),

/***/ "./src/app/pages/home/components/home/home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/components/home/home.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _section1_section1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section1/section1.component */ "./src/app/pages/home/components/section1/section1.component.ts");
/* harmony import */ var _section2_section2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section2/section2.component */ "./src/app/pages/home/components/section2/section2.component.ts");







const _c0 = function () { return { "font-size.px": 18, "margin-top.em": 3 }; };
const _c1 = function () { return { "font-size.px": 20 }; };
const _c2 = function () { return { "font-size.px": 30 }; };
const _c3 = function () { return { "font-size.px": 12 }; };
const _c4 = function () { return { "font-size.px": 15 }; };
const _c5 = function () { return { "font-size.px": 18 }; };
class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 12, consts: [["fxLayout", "row", 1, "img-container"], ["fxFlexFill", ""], ["id", "txt-intro", 2, "font-style", "italic", 3, "ngStyle.xs", "ngStyle.sm", "ngStyle.md"], ["fxHide.xs", "true", "fxShow.gt-sm", "true"], ["fxShow.gt-xs", "false"], ["id", "txt-subtitulo", 2, "font-style", "italic", 3, "ngStyle.xs", "ngStyle.sm", "ngStyle.md"], ["id", "subtitulo"], ["fxLayout", "row", 1, "btn-descer-div"], ["id", "btn-descer"], [1, "fas", "fa-chevron-down"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Prazer, me chamo Andr\u00E9 Mesquita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Andr\u00E9 Mesquita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Desenvolvedor Web Full Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-section1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-section2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1))("ngStyle.md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3))("ngStyle.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4))("ngStyle.md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_4__["Section1Component"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_5__["Section2Component"]], styles: [".btn-descer-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#btn-descer[_ngcontent-%COMP%]{\r\n    margin-top: 9em;\r\n    font-size: 26pt;\r\n    color: #fff;\r\n    border-radius: 100%;\r\n    padding: 6px 12px;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]{\r\n    height: 93vh;\r\n}\r\n\r\n#txt-intro[_ngcontent-%COMP%]{\r\n    font-family: 'Dancing Script', cursive;\r\n    font-family: 'Russo One', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 30px;\r\n    letter-spacing:6px;\r\n\ttext-transform: uppercase;\r\n    text-align: center;\r\n    margin-top: 7em;\r\n    color: #a58c5e;\r\n    text-shadow: \r\n        1px 0.5px 1px #000000,\r\n        1px 0.5px 4px #202020,\r\n        2px 2px 32px rgb(8, 8, 8),\r\n        2px 2px 30px rgb(8, 8, 8);\r\n\r\n}\r\n\r\n#txt-subtitulo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    color: #888888;\r\n    text-shadow:    0.4px 0.5px 1px #000000,\r\n                    2px 2px 18px rgb(0, 0, 0),\r\n                    2px 2px 10px rgb(0, 0, 0);\r\n}\r\n\r\n@media screen and (max-width:960px) {\r\n    #btn-descer[_ngcontent-%COMP%]{\r\n        margin-top: 16rem;\r\n        font-size: 20pt;\r\n        border-radius: 100%;\r\n        padding: 3px 8px;\r\n      \r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQix5QkFBeUI7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2Q7Ozs7aUNBSTZCOztBQUVqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Q7OzZDQUV5QztBQUM3Qzs7QUFFRTtJQUNFO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCOztJQUVwQjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZGVzY2VyLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNidG4tZGVzY2Vye1xyXG4gICAgbWFyZ2luLXRvcDogOWVtO1xyXG4gICAgZm9udC1zaXplOiAyNnB0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA5M3ZoO1xyXG59XHJcblxyXG4jdHh0LWludHJve1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6NnB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3ZW07XHJcbiAgICBjb2xvcjogI2E1OGM1ZTtcclxuICAgIHRleHQtc2hhZG93OiBcclxuICAgICAgICAxcHggMC41cHggMXB4ICMwMDAwMDAsXHJcbiAgICAgICAgMXB4IDAuNXB4IDRweCAjMjAyMDIwLFxyXG4gICAgICAgIDJweCAycHggMzJweCByZ2IoOCwgOCwgOCksXHJcbiAgICAgICAgMnB4IDJweCAzMHB4IHJnYig4LCA4LCA4KTtcclxuXHJcbn1cclxuXHJcbiN0eHQtc3VidGl0dWxve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgdGV4dC1zaGFkb3c6ICAgIDAuNHB4IDAuNXB4IDFweCAjMDAwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDJweCAycHggMThweCByZ2IoMCwgMCwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgMnB4IDJweCAxMHB4IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KSB7XHJcbiAgICAjYnRuLWRlc2NlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnJlbTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/components/home/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home/components/home/index.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/components/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/pages/home/components/index.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/components/index.ts ***!
  \************************************************/
/*! exports provided: HomeComponent, Section1Component, Section2Component, WrapperhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/app/pages/home/components/home/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });

/* harmony import */ var _section1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section1 */ "./src/app/pages/home/components/section1/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section1Component", function() { return _section1__WEBPACK_IMPORTED_MODULE_1__["Section1Component"]; });

/* harmony import */ var _section2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section2 */ "./src/app/pages/home/components/section2/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section2Component", function() { return _section2__WEBPACK_IMPORTED_MODULE_2__["Section2Component"]; });

/* harmony import */ var _wrapperhome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapperhome.component */ "./src/app/pages/home/components/wrapperhome.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperhomeComponent", function() { return _wrapperhome_component__WEBPACK_IMPORTED_MODULE_3__["WrapperhomeComponent"]; });







/***/ }),

/***/ "./src/app/pages/home/components/section1/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/components/section1/index.ts ***!
  \*********************************************************/
/*! exports provided: Section1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section1.component */ "./src/app/pages/home/components/section1/section1.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section1Component", function() { return _section1_component__WEBPACK_IMPORTED_MODULE_0__["Section1Component"]; });




/***/ }),

/***/ "./src/app/pages/home/components/section1/section1.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/components/section1/section1.component.ts ***!
  \**********************************************************************/
/*! exports provided: Section1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section1Component", function() { return Section1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");






const _c0 = function () { return { "width.em": 15, "height.em": 15 }; };
class Section1Component {
    constructor() { }
    ngOnInit() {
    }
}
Section1Component.ɵfac = function Section1Component_Factory(t) { return new (t || Section1Component)(); };
Section1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section1Component, selectors: [["app-section1"]], decls: 40, vars: 2, consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "section-sobreMim"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxFlexFill", "", "fxLayoutAlign", "center center", 1, "content"], ["fxFlex", "30", "fxLayoutAlign", "center center", 1, "sec1"], [1, "imge-container"], ["fxFlexFill", "", "src", "../../../../../assets/imagens/eu.jpg", 1, "imge", 3, "ngStyle.xs"], ["fxFlex", "70", 1, "sec2"], ["fxLayout", "row"], [1, "txt-sobremim"], [1, "h1-sobre-mim"], [1, "border"], [1, "h2-sobre-mim"], [1, "border", "w-100"], ["fxLayoutAlign", "space-between", "fxLayout", "row", 1, "btn-morph-container"], ["fxHide.xs", "true"], ["routerLink", "/contato", 1, "btn-morph"], ["matTooltip", "Download do Curriculum Vitae"], [1, "btn-morph-cv"], [1, "fas", "fa-file-download"]], template: function Section1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sobre mim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Andr\u00E9 de Souza Mesquita Bezerra Lima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " andremp1927@hotmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Idade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Escolaridade:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Cursando 5\u00BA Per\u00EDodo de an\u00E1lise e desenvolvimento de sistemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Resumo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.tas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Fale comigo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]], styles: [".content[_ngcontent-%COMP%]{\r\n  background-color:#f1f1f1;\r\n}\r\n\r\n.section-sobreMim[_ngcontent-%COMP%]{\r\n  min-height: 90vh !important;\r\n  background-color:#f1f1f1;\r\n}\r\n\r\n.imge[_ngcontent-%COMP%]{\r\n  max-width: 30em !important;\r\n  max-height: 30em !important;\r\n  width: 100%;\r\n  border-radius: 100%;\r\n  border: 10px solid #fff;\r\n  box-shadow: 3px 3px 4px #cecece; \r\n\r\n}\r\n\r\n.imge-container[_ngcontent-%COMP%]{\r\n    margin: 10px 0px;\r\n}\r\n\r\n.h1-sobre-mim[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    letter-spacing: 3px;\r\n    font-family: 'Special Elite', cursive;\r\n    background-color: #f1f1f1;\r\n    text-align: center;\r\n    color: #a58c5e;\r\n    text-decoration: none;\r\n    border-radius: 30px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    font-size: 26pt;\r\n    font-weight: 600;\r\n}\r\n\r\n.w-100[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n}\r\n\r\n.h2-sobre-mim[_ngcontent-%COMP%]{\r\n    letter-spacing: 1.5px;\r\n    font-family: 'Special Elite', cursive;\r\n    background-color: #f1f1f1;\r\n    color: #a58c5e;\r\n    text-decoration: none;\r\n    font-size: 18pt;\r\n    font-weight: 600;\r\n    display: inline-block;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.border[_ngcontent-%COMP%]{\r\n    width: 230px;\r\n    background-color: #a58c5e;\r\n    height: 1px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.btn-morph-container[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n\r\n.txt-sobremim[_ngcontent-%COMP%]{\r\n    border-bottom-right-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    max-width: 800px;\r\n    border-left: 5px solid #a58c5e;\r\n    padding: 15px 20px 20px 35px;\r\n    box-shadow: \r\n    -4px -4px 4px rgba(255, 255, 255, 0.602),\r\n    4px 4px 3px #cecece; \r\n}\r\n\r\n.sec1[_ngcontent-%COMP%]{\r\n    min-width: 380px;\r\n    width: 300px;\r\n    height: 550px !important;\r\n    border-radius: 50px;\r\n    margin-right: 30px;\r\n    background: none;\r\n    font-size: 12pt;\r\n    font-weight: 600;\r\n  }\r\n\r\n.sec2[_ngcontent-%COMP%]{\r\n  border-radius: 50px;\r\n  padding: 0px 25px 0px 0px;\r\n}\r\n\r\n.sec2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: #a58c5e;\r\n  text-decoration: none;\r\n  font-size: 12pt;\r\n  margin: 10px 0px;\r\n  \r\n}\r\n\r\n.sec2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  font-size: 12pt;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-morph-cv[_ngcontent-%COMP%]{\r\n\r\n  background: #f1f1f1;  \r\n  box-shadow: \r\n  -4px -4px 3px rgba(255, 255, 255, 0.602),\r\n  4px 4px 4px #cecece;\r\n\r\n  padding: 27px 20px;\r\n  border-radius: 50px;\r\n  color: #a58c5e;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  font-size: 12pt;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n  \r\n}\r\n\r\n.btn-morph-cv[_ngcontent-%COMP%]:hover{\r\n  box-shadow:  \r\n  inset -3px -3px 3px rgb(255, 255, 255),\r\n  inset 4px 4px 3px rgba(105, 105, 105, 0.548);\r\n}\r\n\r\n.btn-morph[_ngcontent-%COMP%]{\r\n  color: #a58c5e;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  padding: 20px 25px 20px 25px;\r\n  border-radius: 30px;\r\n  background: #f1f1f1;\r\n  box-shadow: \r\n    -4px -4px 3px rgba(255, 255, 255, 0.602),\r\n    4px 4px 4px #cecece;\r\n  text-align: center;\r\n  display: inline-block;\r\n  font-size: 16pt;\r\n  font-weight: 600;\r\n  margin-top: -25px;\r\n}\r\n\r\n.btn-morph[_ngcontent-%COMP%]:hover{\r\n  color: #a58c5e;\r\n  box-shadow:  \r\n  inset -3px -3px 3px rgb(255, 255, 255),\r\n  inset 4px 4px 3px rgba(105, 105, 105, 0.548);\r\n}\r\n\r\n@media screen and (max-width:960px) {\r\n    .sec2[_ngcontent-%COMP%]{\r\n\r\n        margin-left: 10px !important;\r\n    }\r\n\r\n    .txt-sobremim[_ngcontent-%COMP%]{\r\n        margin-left: 0px !important;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%]{\r\n     \r\n        box-shadow: none;\r\n    }\r\n\r\n    .imge[_ngcontent-%COMP%]{\r\n    \r\n        box-shadow:  none;\r\n    \r\n    }\r\n\r\n    .btn-morph[_ngcontent-%COMP%]{\r\n      padding: 20px 20px 20px 20px;\r\n      font-size: 14pt;\r\n      font-weight: 600;\r\n      margin-top: -25px;\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3NlY3Rpb24xL3NlY3Rpb24xLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwrQkFBK0I7O0FBRWpDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUI7O3VCQUVtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25COztxQkFFbUI7O0VBRW5CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0U7OzhDQUU0QztBQUM5Qzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25COzt1QkFFcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZDs7OENBRTRDO0FBQzlDOztBQUdFO0lBQ0U7O1FBRUksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTs7UUFFSSxpQkFBaUI7O0lBRXJCOztJQUVBO01BQ0UsNEJBQTRCO01BQzVCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25COztFQUVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3NlY3Rpb24xL3NlY3Rpb24xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNvYnJlTWlte1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7XHJcbn1cclxuXHJcbi5pbWdle1xyXG4gIG1heC13aWR0aDogMzBlbSAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDMwZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICNjZWNlY2U7IFxyXG5cclxufVxyXG5cclxuLmltZ2UtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuLmgxLXNvYnJlLW1pbXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTcGVjaWFsIEVsaXRlJywgY3Vyc2l2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2E1OGM1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI2cHQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udy0xMDB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5oMi1zb2JyZS1taW17XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnLCBjdXJzaXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGNvbG9yOiAjYTU4YzVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuLmJvcmRlcntcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNThjNWU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5idG4tbW9ycGgtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuXHJcbi50eHQtc29icmVtaW17XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E1OGM1ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCAyMHB4IDM1cHg7XHJcbiAgICBib3gtc2hhZG93OiBcclxuICAgIC00cHggLTRweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMiksXHJcbiAgICA0cHggNHB4IDNweCAjY2VjZWNlOyBcclxufVxyXG5cclxuLnNlYzF7XHJcbiAgICBtaW4td2lkdGg6IDM4MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbi5zZWMye1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogMHB4IDI1cHggMHB4IDBweDtcclxufVxyXG5cclxuLnNlYzIgcHtcclxuICBjb2xvcjogI2E1OGM1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5zZWMyIHNwYW57XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5idG4tbW9ycGgtY3Z7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7ICBcclxuICBib3gtc2hhZG93OiBcclxuICAtNHB4IC00cHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDIpLFxyXG4gIDRweCA0cHggNHB4ICNjZWNlY2U7XHJcblxyXG4gIHBhZGRpbmc6IDI3cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiAjYTU4YzVlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBcclxufVxyXG4gIFxyXG4uYnRuLW1vcnBoLWN2OmhvdmVye1xyXG4gIGJveC1zaGFkb3c6ICBcclxuICBpbnNldCAtM3B4IC0zcHggM3B4IHJnYigyNTUsIDI1NSwgMjU1KSxcclxuICBpbnNldCA0cHggNHB4IDNweCByZ2JhKDEwNSwgMTA1LCAxMDUsIDAuNTQ4KTtcclxufVxyXG5cclxuXHJcbi5idG4tbW9ycGh7XHJcbiAgY29sb3I6ICNhNThjNWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMjBweCAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBib3gtc2hhZG93OiBcclxuICAgIC00cHggLTRweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMiksXHJcbiAgICA0cHggNHB4IDRweCAjY2VjZWNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbn1cclxuXHJcbi5idG4tbW9ycGg6aG92ZXJ7XHJcbiAgY29sb3I6ICNhNThjNWU7XHJcbiAgYm94LXNoYWRvdzogIFxyXG4gIGluc2V0IC0zcHggLTNweCAzcHggcmdiKDI1NSwgMjU1LCAyNTUpLFxyXG4gIGluc2V0IDRweCA0cHggM3B4IHJnYmEoMTA1LCAxMDUsIDEwNSwgMC41NDgpO1xyXG59XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KSB7XHJcbiAgICAuc2VjMntcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudHh0LXNvYnJlbWlte1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICBcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWdle1xyXG4gICAgXHJcbiAgICAgICAgYm94LXNoYWRvdzogIG5vbmU7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW1vcnBoe1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Section1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section1',
                templateUrl: './section1.component.html',
                styleUrls: ['./section1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/components/section2/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/components/section2/index.ts ***!
  \*********************************************************/
/*! exports provided: Section2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section2.component */ "./src/app/pages/home/components/section2/section2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section2Component", function() { return _section2_component__WEBPACK_IMPORTED_MODULE_0__["Section2Component"]; });




/***/ }),

/***/ "./src/app/pages/home/components/section2/section2.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/components/section2/section2.component.ts ***!
  \**********************************************************************/
/*! exports provided: Section2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section2Component", function() { return Section2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function () { return { "margin-top.em": 2 }; };
const _c1 = function () { return { "margin-left.px": 7 }; };
const _c2 = function () { return { "margin-left.px": 7, "margin-bottom.px": 10 }; };
class Section2Component {
    constructor() { }
}
Section2Component.ɵfac = function Section2Component_Factory(t) { return new (t || Section2Component)(); };
Section2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section2Component, selectors: [["app-section2"]], decls: 85, vars: 8, consts: [["fxLayoutAlign", "space-around start", 1, "section2"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayout.sm", "column", "fxLayout.xs", "column", 1, "sec2-container"], ["fxLayout", "column"], ["fxLayoutAlign", "center center", 3, "ngStyle.xs"], [1, "tracado"], ["label", "Angular"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "fab", "fa-angular"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/em-breve.png", "alt", "Foto de certfificado angular"], ["label", "Java"], [1, "fab", "fa-java"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/java-spring.jpg", "alt", "Foto de certfificado java"], ["label", "Banco de dados"], [1, "fas", "fa-database"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/em-breve.png", "alt", "Foto de certfificado de banco de dados"], ["fxLayoutAlign", "center center"], ["routerLink", "/certificados", 1, "btn-morphism", 3, "ngStyle.xs"], ["label", "React Cad"], ["mat-card-image", "", "src", "../../../../../assets/imagens/projetos/reaCad.PNG", "alt", "Foto de um projeto web"], ["label", "Portif\u00F3lio"], ["mat-card-image", "", "src", "../../../../../assets/imagens/projetos/portifolio.JPG", "alt", "Foto de um projeto web"], ["label", "Lista de tarefas"], ["mat-card-image", "", "src", "../../../../../assets/imagens/certificados/em-breve.png", "alt", "Foto de um projeto web"], ["routerLink", "/projetos", 1, "btn-morphism", 3, "ngStyle.xs"]], template: function Section2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Certificados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Udemy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Angular 9, Flexbox, Material, HammerJS, Services, Pipes, Directives.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Udemy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "JDBC, HIBERNATE, JPA, HIBERNATE, SPRING BOOT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Udemy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "MySQL, SQL Server e Oracle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "T-SQL e PLSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Veja mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "ReactJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Crud simples, filtros de pesquisa, persint\u00EAncias no local Storage, requisi\u00E7\u00E3o http com axios, Recharts, bootstrap4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Angular 9, Material, Flexbox, neumorphism.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Angular/Java/postgree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "descri\u00E7\u00E3o do app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Veja mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".section2[_ngcontent-%COMP%]{\r\n    padding-bottom: 30px;\r\n    background: #ebf0f6;\r\n}\r\n\r\n.sec2-container[_ngcontent-%COMP%]{\r\n    width: 1400px !important;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%]{\r\n    left: 40px; \r\n    overflow: hidden;\r\n    max-width: 20rem;\r\n    height: 400px;\r\n    margin: 20px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 15em;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #383633;\r\n    font-size: 14pt;\r\n}\r\n\r\n.sec2-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: #a58c5e;\r\n}\r\n\r\n.tracado[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 5px;\r\n    background-color: #a58c5e;\r\n    margin-right: 5px;\r\n}\r\n\r\nmat-tab-group[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    height: 550px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n  \r\n}\r\n\r\nmat-tab-group[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 25pt;\r\n}\r\n\r\n.cont[_ngcontent-%COMP%]{\r\n    width: 15rem;\r\n    height: 15rem;\r\n}\r\n\r\n@media screen and (max-width:600px) {\r\n    \r\n    .example-card[_ngcontent-%COMP%]{\r\n        left: 0px;\r\n    }\r\n\r\n    .section2[_ngcontent-%COMP%]{\r\n        padding-bottom: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3NlY3Rpb24yL3NlY3Rpb24yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3NlY3Rpb24yL3NlY3Rpb24yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbjJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlYmYwZjY7XHJcbn1cclxuXHJcbi5zZWMyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxNDAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZHtcclxuICAgIGxlZnQ6IDQwcHg7IFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1heC13aWR0aDogMjByZW07XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCBpbWd7XHJcbiAgICBoZWlnaHQ6IDE1ZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQgcHtcclxuICAgIGNvbG9yOiAjMzgzNjMzO1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcblxyXG4uc2VjMi1jb250YWluZXIgaDF7XHJcbiAgICBjb2xvcjogI2E1OGM1ZTtcclxufVxyXG5cclxuLnRyYWNhZG97XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1OGM1ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3Vwe1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAgbWF0LWNhcmQgaSB7XHJcbiAgICBmb250LXNpemU6IDI1cHQ7XHJcbn1cclxuXHJcbi5jb250e1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1jYXJke1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbjJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Section2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section2',
                templateUrl: './section2.component.html',
                styleUrls: ['./section2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/components/wrapperhome.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/components/wrapperhome.component.ts ***!
  \****************************************************************/
/*! exports provided: WrapperhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperhomeComponent", function() { return WrapperhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WrapperhomeComponent {
}
WrapperhomeComponent.ɵfac = function WrapperhomeComponent_Factory(t) { return new (t || WrapperhomeComponent)(); };
WrapperhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperhomeComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function WrapperhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
        <router-outlet></router-outlet>
    `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/home/components/index.ts");





const HomeRoutes = [
    {
        path: 'home',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["WrapperhomeComponent"],
        children: [{ path: '', component: _components__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(HomeRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(HomeRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/home/components/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _components_section1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/section1 */ "./src/app/pages/home/components/section1/index.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _components_section2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/section2 */ "./src/app/pages/home/components/section2/index.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");




















//
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["WrapperhomeComponent"],
        _components_section1__WEBPACK_IMPORTED_MODULE_12__["Section1Component"],
        _components_section2__WEBPACK_IMPORTED_MODULE_15__["Section2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"]], exports: [_components_section1__WEBPACK_IMPORTED_MODULE_12__["Section1Component"],
        _components_section2__WEBPACK_IMPORTED_MODULE_15__["Section2Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_2__["WrapperhomeComponent"],
                    _components_section1__WEBPACK_IMPORTED_MODULE_12__["Section1Component"],
                    _components_section2__WEBPACK_IMPORTED_MODULE_15__["Section2Component"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"]
                ],
                exports: [
                    _components_section1__WEBPACK_IMPORTED_MODULE_12__["Section1Component"],
                    _components_section2__WEBPACK_IMPORTED_MODULE_15__["Section2Component"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/index.ts":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.ts ***!
  \*************************************/
/*! exports provided: HomeModule, HomeRoutes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.module */ "./src/app/pages/home/home.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return _home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"]; });

/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]; });





/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: HomeModule, HomeRoutes, HomeRoutingModule, ContatoModule, ContatoRoutes, ContatoRoutingModule, CertificadosModule, CertificadosRoutes, CertificadosRoutingModule, ProjetosModule, ProjetosRoutes, ProjetosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/app/pages/home/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["HomeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["HomeRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["HomeRoutingModule"]; });

/* harmony import */ var _contato__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato */ "./src/app/pages/contato/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoModule", function() { return _contato__WEBPACK_IMPORTED_MODULE_1__["ContatoModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoRoutes", function() { return _contato__WEBPACK_IMPORTED_MODULE_1__["ContatoRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContatoRoutingModule", function() { return _contato__WEBPACK_IMPORTED_MODULE_1__["ContatoRoutingModule"]; });

/* harmony import */ var _certificados__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificados */ "./src/app/pages/certificados/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosModule", function() { return _certificados__WEBPACK_IMPORTED_MODULE_2__["CertificadosModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosRoutes", function() { return _certificados__WEBPACK_IMPORTED_MODULE_2__["CertificadosRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificadosRoutingModule", function() { return _certificados__WEBPACK_IMPORTED_MODULE_2__["CertificadosRoutingModule"]; });

/* harmony import */ var _projetos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projetos */ "./src/app/pages/projetos/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosModule", function() { return _projetos__WEBPACK_IMPORTED_MODULE_3__["ProjetosModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosRoutes", function() { return _projetos__WEBPACK_IMPORTED_MODULE_3__["ProjetosRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosRoutingModule", function() { return _projetos__WEBPACK_IMPORTED_MODULE_3__["ProjetosRoutingModule"]; });







/***/ }),

/***/ "./src/app/pages/projetos/components/index.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/projetos/components/index.ts ***!
  \****************************************************/
/*! exports provided: ProjetosComponent, WrapperProjetosComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projetos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projetos */ "./src/app/pages/projetos/components/projetos/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return _projetos__WEBPACK_IMPORTED_MODULE_0__["ProjetosComponent"]; });

/* harmony import */ var _wrapper_projetos_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper-projetos.components */ "./src/app/pages/projetos/components/wrapper-projetos.components.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperProjetosComponents", function() { return _wrapper_projetos_components__WEBPACK_IMPORTED_MODULE_1__["WrapperProjetosComponents"]; });





/***/ }),

/***/ "./src/app/pages/projetos/components/projetos/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/projetos/components/projetos/index.ts ***!
  \*************************************************************/
/*! exports provided: ProjetosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projetos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projetos.component */ "./src/app/pages/projetos/components/projetos/projetos.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return _projetos_component__WEBPACK_IMPORTED_MODULE_0__["ProjetosComponent"]; });




/***/ }),

/***/ "./src/app/pages/projetos/components/projetos/projetos.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/projetos/components/projetos/projetos.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjetosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return ProjetosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





const _c0 = function () { return { "padding.px": 1 }; };
const _c1 = function () { return { "margin-top.px": 7 }; };
const _c2 = function () { return { "margin-bottom.px": 5 }; };
const _c3 = function () { return { "padding-bottom.px": 0 }; };
const _c4 = function () { return { "padding-top.px": 1 }; };
class ProjetosComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjetosComponent.ɵfac = function ProjetosComponent_Factory(t) { return new (t || ProjetosComponent)(); };
ProjetosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjetosComponent, selectors: [["app-projetos"]], decls: 61, vars: 32, consts: [["id", "projeto-section", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "ngStyle.xs"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxLayout.sm", "column", "fxLayout.xs", "column", 1, "projeto-container", 3, "ngStyle.xs"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxHide.gt-sm", "true"], [3, "ngStyle.xs"], ["fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "img-container", 3, "ngStyle.xs"], ["fxFlexFill", "", "src", "../../../../../assets/imagens/projetos/reaCad.PNG"], ["fxLayout", "column", "fxFlex", "60", 1, "sect2", 3, "ngStyle.xs"], ["fxLayout", "column", 1, "descricao"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxHide.lt-md", "true"], [1, "border-custom"], ["fxLayoutAlign", "start center"], ["fxLayoutAlign", "center end", 1, "btn-container"], ["mat-raised-button", "", "color", "primary", "href", "https://cadusureactjs.herokuapp.com/", "target", "_blank"], [1, "fas", "fa-external-link-alt"], ["fxFlexFill", "", "src", "../../../../../assets/imagens/projetos/portifolio.JPG"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxHide.xs", "true"], ["src", "../../../../../assets/imagens/certificados/em-breve.png"]], template: function ProjetosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "React Cad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "React Cad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Crud simples, filtros de pesquisa, persint\u00EAncias no local Storage, requisi\u00E7\u00E3o http com axios, Recharts, bootstrap4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Abrir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Portif\u00F3lio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Portif\u00F3lio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " SPA feita em Angular 9 com Angluar Material, Flexbox e alguns elementos em neumorphism. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Abrir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Em Breve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Em Breve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Em Breve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Abrir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0))("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0))("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]], styles: ["#projeto-section[_ngcontent-%COMP%]{\r\n    padding: 0px 10px  15px 10px;\r\n    background-color: #b3b3b3;\r\n}\r\n\r\n.projeto-container[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    \r\n    padding: 10px 10px;\r\n    max-width: 1300px !important;\r\n    min-width: 70% !important;\r\n    box-shadow: 1px 1px 2px #5c5c5c;\r\n}\r\n\r\n.btn-container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n\r\n.border-custom[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #b3b3b3;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n   \r\n   \r\n    \r\n    \r\n    \r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border: 4px solid #fff;\r\n    border-radius: 3px;\r\n    box-shadow: 0.5px 0.5px 0.5px #b3b3b3,\r\n                -0.5px -0.5px 0.5px #b3b3b3,\r\n                1px 1px 3px #b3b3b3;\r\n\r\n    \r\n}\r\n\r\n.sect2[_ngcontent-%COMP%]{\r\n    \r\n    padding: 10px;\r\n    \r\n\r\n}\r\n\r\n.descricao[_ngcontent-%COMP%]{\r\n    border-radius: 3px;\r\n    border: 1px solid #b3b3b3;\r\n    padding: 10px;\r\n    height: 100%;\r\n}\r\n\r\n.my-3[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamV0b3MvY29tcG9uZW50cy9wcm9qZXRvcy9wcm9qZXRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0dBQ2Qsa0JBQWtCO0dBQ2xCLDhCQUE4QjtJQUM3QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7O21DQUUrQjs7SUFFL0I7OzttQkFHZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2I7b0JBQ2dCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZXRvcy9jb21wb25lbnRzL3Byb2pldG9zL3Byb2pldG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvamV0by1zZWN0aW9ue1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggIDE1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2IzYjM7XHJcbn1cclxuXHJcbi5wcm9qZXRvLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICM1YzVjNWM7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm9yZGVyLWN1c3RvbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIC8qIHdpZHRoOiA4MDBweDsgKi9cclxuICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDMwZW07ICovXHJcbiAgICAvKiBoZWlnaHQ6IDIwZW07ICovXHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIGltZ3tcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAwLjVweCAjYjNiM2IzLFxyXG4gICAgICAgICAgICAgICAgLTAuNXB4IC0wLjVweCAwLjVweCAjYjNiM2IzLFxyXG4gICAgICAgICAgICAgICAgMXB4IDFweCAzcHggI2IzYjNiMztcclxuXHJcbiAgICAvKiBtYXgtd2lkdGg6IDQwZW0gIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDI4ZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcblxyXG4uc2VjdDJ7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDsgKi9cclxuXHJcbn1cclxuXHJcbi5kZXNjcmljYW97XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiM2IzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm15LTN7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjetosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projetos',
                templateUrl: './projetos.component.html',
                styleUrls: ['./projetos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/projetos/components/wrapper-projetos.components.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/projetos/components/wrapper-projetos.components.ts ***!
  \**************************************************************************/
/*! exports provided: WrapperProjetosComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperProjetosComponents", function() { return WrapperProjetosComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WrapperProjetosComponents {
}
WrapperProjetosComponents.ɵfac = function WrapperProjetosComponents_Factory(t) { return new (t || WrapperProjetosComponents)(); };
WrapperProjetosComponents.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperProjetosComponents, selectors: [["ng-component"]], decls: 1, vars: 0, template: function WrapperProjetosComponents_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperProjetosComponents, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
        <router-outlet></router-outlet>
    `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/projetos/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/projetos/index.ts ***!
  \*****************************************/
/*! exports provided: ProjetosModule, ProjetosRoutes, ProjetosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projetos_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projetos.module */ "./src/app/pages/projetos/projetos.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosModule", function() { return _projetos_module__WEBPACK_IMPORTED_MODULE_0__["ProjetosModule"]; });

/* harmony import */ var _projetos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projetos-routing.module */ "./src/app/pages/projetos/projetos-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosRoutes", function() { return _projetos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProjetosRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetosRoutingModule", function() { return _projetos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProjetosRoutingModule"]; });





/***/ }),

/***/ "./src/app/pages/projetos/projetos-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/projetos/projetos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProjetosRoutes, ProjetosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosRoutes", function() { return ProjetosRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosRoutingModule", function() { return ProjetosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/projetos/components/index.ts");





const ProjetosRoutes = [
    {
        path: 'projetos',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["WrapperProjetosComponents"],
        children: [{ path: '', component: _components__WEBPACK_IMPORTED_MODULE_2__["ProjetosComponent"] }]
    }
];
class ProjetosRoutingModule {
}
ProjetosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjetosRoutingModule });
ProjetosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjetosRoutingModule_Factory(t) { return new (t || ProjetosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ProjetosRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjetosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjetosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ProjetosRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/projetos/projetos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/projetos/projetos.module.ts ***!
  \***************************************************/
/*! exports provided: ProjetosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosModule", function() { return ProjetosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/projetos/components/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");









class ProjetosModule {
}
ProjetosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjetosModule });
ProjetosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjetosModule_Factory(t) { return new (t || ProjetosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjetosModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["ProjetosComponent"],
        _components__WEBPACK_IMPORTED_MODULE_2__["WrapperProjetosComponents"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjetosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components__WEBPACK_IMPORTED_MODULE_2__["ProjetosComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_2__["WrapperProjetosComponents"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andre\Desktop\repo\Curriculum-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map