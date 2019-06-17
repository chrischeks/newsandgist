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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/business-day/business-day.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/business-day/business-day.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\n\n  <main role=\"main\">\n    <section class=\"jumbotron text-center\">\n        \n        <ngb-carousel *ngIf=\"carouselImages\">\n          <span *ngFor=\"let news of carouselImages\">\n            <ng-template ngbSlide>\n              <img [src]=\"news.image\" alt=\"Random first slide\">\n              <div class=\"carousel-caption\">\n                <span style=\"background-color: #000000; color:#ffffff\">{{news.title}}</span>\n              </div>\n            </ng-template>\n\n          </span>\n        </ngb-carousel>\n    </section>\n\n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor='let new of businessDayDetails | async'>\n            <a href={{new.href}} target=\"_blank\">\n              <div class=\"card mb-4 shadow-sm\">\n                <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                  <!-- <image [attr.xlink:href]=new.image height=\"100%\" width=\"100%\" /> -->\n                </svg>\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\"><strong>{{new.title}}</strong></h6>\n                  <p class=\"card-text\"><small>{{new.summary}}</small> </p>\n                  <small class=\"text-muted\">{{new.date}}</small>\n                </div>\n              </div>\n            </a>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </main>\n\n  <footer class=\"text-muted\">\n    <div class=\"container\">\n      <p class=\"float-right\">\n        <a href=\"#\">Back to top</a>\n      </p>\n    </div>\n  </footer>\n</body>\n\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\n\n  <main role=\"main\">\n\n    <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Welcome To All News</h1>\n        <p class=\"lead text-muted\">Goodbye to surfing the entire net for news. All the hottest news from different\n          credible sources have been compiled for you and can be found here.</p>\n      </div>\n    </section>\n\n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n        <div>\n          <a routerLink=\"/news/punch\" title=\"Click to go to punch news channel\">\n            <button class=\"btn btn-primary\">PUNCH Newspaper</button>\n          </a>\n        </div>\n        <div class=\"row\">\n          \n          <div class=\"col-md-4\" *ngFor='let new of punchNews'>\n            <a href={{new.href}} target=\"_blank\">\n              <div class=\"card mb-4 shadow-sm\">\n                <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                  <!-- <image [attr.xlink:href]=new.image height=\"100%\" width=\"100%\" /> -->\n                </svg>\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\"><strong>{{new.title}}</strong></h6>\n                  <p class=\"card-text\"><small>{{new.summary}}</small> </p>\n                  <small class=\"text-muted\">{{new.date}}</small>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n\n        <div>\n            <a routerLink=\"/blog/lindaikejisblog\" title=\"click here to go to Linda Ikeji's Blog channel\">\n              <button class=\"btn btn-primary\">Linda Ikeji's Blog</button>\n            </a>\n          </div>\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor='let new of lindaNews'>\n            <a href={{new.href}} target=\"_blank\">\n              <div class=\"card mb-4 shadow-sm\">\n                <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                  <!-- <image [attr.xlink:href]=new.image height=\"100%\" width=\"100%\" /> -->\n                </svg>\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\"><strong>{{new.title}}</strong></h6>\n                  <p class=\"card-text\"><small>{{new.summary}}</small> </p>\n                  <small class=\"text-muted\">{{new.date}}</small>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n\n        <div>\n            <a routerLink=\"/news/leadership\" title=\"click here to go to the leadership news channel\">\n              <button class=\"btn btn-primary\">Leadership Newspaper</button>\n            </a>\n          </div>    \n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor='let new of leadershipNews'>\n            <a href={{new.href}} target=\"_blank\">\n              <div class=\"card mb-4 shadow-sm\">\n                <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                  <!-- <image [attr.xlink:href]=new.image height=\"100%\" width=\"100%\" /> -->\n                </svg>\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\"><strong>{{new.title}}</strong></h6>\n                  <p class=\"card-text\"><small>{{new.summary}}</small> </p>\n                  <small class=\"text-muted\">{{new.date}}</small>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n\n        <div>\n            <a routerLink=\"/news/business_day\" title=\"click here to go to the business day news channel\">\n              <button class=\"btn btn-primary\">Business Day Newspaper</button>\n            </a>\n          </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor='let new of businessdayNews'>\n            <a href={{new.href}} target=\"_blank\">\n              <div class=\"card mb-4 shadow-sm\">\n                <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                  <!-- <image [attr.xlink:href]=new.image height=\"100%\" width=\"100%\" /> -->\n                </svg>\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\"><strong>{{new.title}}</strong></h6>\n                  <p class=\"card-text\"><small>{{new.summary}}</small> </p>\n                  <small class=\"text-muted\">{{new.date}}</small>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </main>\n\n  <footer class=\"text-muted\">\n    <div class=\"container\">\n      <p class=\"float-right\">\n        <a href=\"#\">Back to top</a>\n      </p>\n    </div>\n  </footer>\n</body>\n\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leadership/leadership.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leadership/leadership.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n  <main role=\"main\">\n      <section class=\"jumbotron text-center\">\n        \n          <ngb-carousel *ngIf=\"carouselImages\">\n            <span *ngFor=\"let news of carouselImages\">\n              <ng-template ngbSlide>\n                <img [src]=\"news.image\" alt=\"Random first slide\">\n                <div class=\"carousel-caption\">\n                  <span style=\"background-color: #000000; color:#ffffff\">{{news.title}}</span>\n                </div>\n              </ng-template>\n  \n            </span>\n          </ngb-carousel>\n      </section>\n\n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor='let new of news | async'>\n            <a href={{new.href}} target=\"_blank\">\n              <div class=\"card mb-4 shadow-sm\">\n                <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                  <!-- <image height=\"100%\" width=\"100%\" /> -->\n                </svg>\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\"><strong>{{new.title}}</strong></h6>\n                  <p class=\"card-text\"><small>{{new.summary}}</small> </p>\n                  <small class=\"text-muted\">{{new.date}}</small>\n                </div>\n              </div>\n            </a>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </main>\n\n  <footer class=\"text-muted\">\n    <div class=\"container\">\n      <p class=\"float-right\">\n        <a href=\"#\">Back to top</a>\n      </p>\n    </div>\n  </footer>\n</body>\n\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/linda-ikeji/linda-ikeji.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/linda-ikeji/linda-ikeji.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\n\n  <main role=\"main\">\n      <section class=\"jumbotron text-center\">\n        \n          <ngb-carousel *ngIf=\"carouselImages\">\n            <span *ngFor=\"let news of carouselImages\">\n              <ng-template ngbSlide>\n                <img [src]=\"news.image\" alt=\"Random first slide\">\n                <div class=\"carousel-caption\">\n                  <span style=\"background-color: #000000; color:#ffffff\">{{news.title}}</span>\n                </div>\n              </ng-template>\n  \n            </span>\n          </ngb-carousel>\n      </section>\n\n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\" >\n\n        <div class=\"row\" >\n          <div class=\"col-md-4\" *ngFor='let blog of lindaBlog | async'>\n              <a href={{blog.href}} target=\"_blank\">\n            <div class=\"card mb-4 shadow-sm\">\n              <svg width=\"100%\" height=\"100%\"\n  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <!-- <image [attr.xlink:href]=blog.image height=\"100%\" width=\"100%\"/> -->\n</svg>\n              <div class=\"card-body\">\n                <h6 class=\"card-title\"><strong>{{blog.title}}</strong></h6>\n                <p class=\"card-text\"><small>{{blog.summary}}</small> </p>\n                <small class=\"text-muted\">{{blog.date}}</small>\n              </div>\n            </div>\n          </a>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </main>\n\n  <footer class=\"text-muted\">\n    <div class=\"container\">\n      <p class=\"float-right\">\n        <a href=\"#\">Back to top</a>\n      </p>\n    </div>\n  </footer>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink='/'>All News</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      \n      <li ngbDropdown class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          News Sites\n        </a>\n        <div ngbDropdownMenu class=\"dropdown-menu show\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/news/punch\">Punch News Nigeria</a>\n          <a class=\"dropdown-item\" routerLink=\"/news/leadership\">Leadership News Nigeria</a>\n          <a class=\"dropdown-item\" routerLink=\"/news/business_day\">Business News Nigeria</a>\n        </div>\n        <li ngbDropdown class=\"nav-item dropdown\">\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Blogs\n          </a>\n          <div ngbDropdownMenu class=\"dropdown-menu show\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/blog/lindaikejisblog\">Linda Ikejis Blog</a>\n          </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news-detail/news-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news-detail/news-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  news-detail works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/punch/punch.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/punch/punch.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\n\n  <main role=\"main\">\n      <section class=\"jumbotron text-center\">\n        \n          <ngb-carousel *ngIf=\"carouselImages\">\n            <span *ngFor=\"let news of carouselImages\">\n              <ng-template ngbSlide>\n                <img [src]=\"news.image\" alt=\"Random first slide\">\n                <div class=\"carousel-caption\">\n                  <span style=\"background-color: #000000; color:#ffffff\">{{news.title}}</span>\n                </div>\n              </ng-template>\n  \n            </span>\n          </ngb-carousel>\n      </section>\n\n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\" >\n\n        <div class=\"row\" >\n          <div class=\"col-md-4\" *ngFor='let new of news | async'>\n              <a href={{new.href}} target=\"_blank\">\n            <div class=\"card mb-4 shadow-sm\">\n              <svg width=\"100%\" height=\"100%\"\n  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <!-- <image height=\"100%\" width=\"100%\"/> -->\n</svg>\n              <div class=\"card-body\">\n                <h6 class=\"card-title\"><strong>{{new.title}}</strong></h6>\n                <p class=\"card-text\"><small>{{new.summary}}</small> </p>\n                <small class=\"text-muted\">{{new.date}}</small>\n              </div>\n            </div>\n          </a>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </main>\n\n  <footer class=\"text-muted\">\n    <div class=\"container\">\n      <p class=\"float-right\">\n        <a href=\"#\">Back to top</a>\n      </p>\n    </div>\n  </footer>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _punch_punch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./punch/punch.component */ "./src/app/punch/punch.component.ts");
/* harmony import */ var _leadership_leadership_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leadership/leadership.component */ "./src/app/leadership/leadership.component.ts");
/* harmony import */ var _business_day_business_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-day/business-day.component */ "./src/app/business-day/business-day.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _linda_ikeji_linda_ikeji_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linda-ikeji/linda-ikeji.component */ "./src/app/linda-ikeji/linda-ikeji.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'news/punch', component: _punch_punch_component__WEBPACK_IMPORTED_MODULE_3__["PunchComponent"] },
    { path: 'news/leadership', component: _leadership_leadership_component__WEBPACK_IMPORTED_MODULE_4__["LeadershipComponent"] },
    { path: 'news/business_day', component: _business_day_business_day_component__WEBPACK_IMPORTED_MODULE_5__["BusinessDayComponent"] },
    { path: 'blog/lindaikejisblog', component: _linda_ikeji_linda_ikeji_component__WEBPACK_IMPORTED_MODULE_7__["LindaIkejiComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Newsandgists';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _punch_punch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./punch/punch.component */ "./src/app/punch/punch.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _news_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news-detail.service */ "./src/app/news-detail.service.ts");
/* harmony import */ var _leadership_leadership_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leadership/leadership.component */ "./src/app/leadership/leadership.component.ts");
/* harmony import */ var _business_day_business_day_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./business-day/business-day.component */ "./src/app/business-day/business-day.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _linda_ikeji_linda_ikeji_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./linda-ikeji/linda-ikeji.component */ "./src/app/linda-ikeji/linda-ikeji.component.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news-detail/news-detail.component */ "./src/app/news-detail/news-detail.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _punch_punch_component__WEBPACK_IMPORTED_MODULE_7__["PunchComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _leadership_leadership_component__WEBPACK_IMPORTED_MODULE_10__["LeadershipComponent"],
                _business_day_business_day_component__WEBPACK_IMPORTED_MODULE_11__["BusinessDayComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _linda_ikeji_linda_ikeji_component__WEBPACK_IMPORTED_MODULE_13__["LindaIkejiComponent"],
                _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_14__["NewsDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_news_detail_service__WEBPACK_IMPORTED_MODULE_9__["NewsDetailService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business-day/business-day.component.css":
/*!*********************************************************!*\
  !*** ./src/app/business-day/business-day.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzLWRheS9idXNpbmVzcy1kYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/business-day/business-day.component.ts":
/*!********************************************************!*\
  !*** ./src/app/business-day/business-day.component.ts ***!
  \********************************************************/
/*! exports provided: BusinessDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessDayComponent", function() { return BusinessDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-detail.service */ "./src/app/news-detail.service.ts");



var BusinessDayComponent = /** @class */ (function () {
    function BusinessDayComponent(newsDetails) {
        this.newsDetails = newsDetails;
    }
    BusinessDayComponent.prototype.ngOnInit = function () {
        this.businessDayDetails = this.newsDetails.businessNewsDetails;
        this.carouselImages = this.newsDetails.businessdayHomepage;
    };
    BusinessDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-business-day',
            template: __webpack_require__(/*! raw-loader!./business-day.component.html */ "./node_modules/raw-loader/index.js!./src/app/business-day/business-day.component.html"),
            styles: [__webpack_require__(/*! ./business-day.component.css */ "./src/app/business-day/business-day.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_detail_service__WEBPACK_IMPORTED_MODULE_2__["NewsDetailService"]])
    ], BusinessDayComponent);
    return BusinessDayComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-detail.service */ "./src/app/news-detail.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(newsDetails) {
        this.newsDetails = newsDetails;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.newsDetails.punchHomepage];
                    case 1:
                        _a.punchNews = _e.sent();
                        console.log(this.punchNews, 'punch');
                        _b = this;
                        return [4 /*yield*/, this.newsDetails.leadershipHomepage];
                    case 2:
                        _b.leadershipNews = _e.sent();
                        console.log(this.leadershipNews, 'leadership');
                        _c = this;
                        return [4 /*yield*/, this.newsDetails.businessdayHomepage];
                    case 3:
                        _c.businessdayNews = _e.sent();
                        console.log(this.businessdayNews, 'businessday');
                        _d = this;
                        return [4 /*yield*/, this.newsDetails.lindaHomepage];
                    case 4:
                        _d.lindaNews = _e.sent();
                        console.log(this.lindaNews, 'linda');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_detail_service__WEBPACK_IMPORTED_MODULE_2__["NewsDetailService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leadership/leadership.component.css":
/*!*****************************************************!*\
  !*** ./src/app/leadership/leadership.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcnNoaXAvbGVhZGVyc2hpcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/leadership/leadership.component.ts":
/*!****************************************************!*\
  !*** ./src/app/leadership/leadership.component.ts ***!
  \****************************************************/
/*! exports provided: LeadershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadershipComponent", function() { return LeadershipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-detail.service */ "./src/app/news-detail.service.ts");



var LeadershipComponent = /** @class */ (function () {
    function LeadershipComponent(newsDetail) {
        this.newsDetail = newsDetail;
    }
    LeadershipComponent.prototype.ngOnInit = function () {
        this.news = this.newsDetail.leadershipNewsDetails;
        this.carouselImages = this.newsDetail.leadershipHomepage;
    };
    LeadershipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leadership',
            template: __webpack_require__(/*! raw-loader!./leadership.component.html */ "./node_modules/raw-loader/index.js!./src/app/leadership/leadership.component.html"),
            styles: [__webpack_require__(/*! ./leadership.component.css */ "./src/app/leadership/leadership.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_detail_service__WEBPACK_IMPORTED_MODULE_2__["NewsDetailService"]])
    ], LeadershipComponent);
    return LeadershipComponent;
}());



/***/ }),

/***/ "./src/app/linda-ikeji/linda-ikeji.component.css":
/*!*******************************************************!*\
  !*** ./src/app/linda-ikeji/linda-ikeji.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmRhLWlrZWppL2xpbmRhLWlrZWppLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/linda-ikeji/linda-ikeji.component.ts":
/*!******************************************************!*\
  !*** ./src/app/linda-ikeji/linda-ikeji.component.ts ***!
  \******************************************************/
/*! exports provided: LindaIkejiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LindaIkejiComponent", function() { return LindaIkejiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-detail.service */ "./src/app/news-detail.service.ts");



var LindaIkejiComponent = /** @class */ (function () {
    function LindaIkejiComponent(newsDetail) {
        this.newsDetail = newsDetail;
    }
    LindaIkejiComponent.prototype.ngOnInit = function () {
        this.lindaBlog = this.newsDetail.lindaIkejiBlogDetails;
        this.carouselImages = this.newsDetail.lindaHomepage;
    };
    LindaIkejiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-linda-ikeji',
            template: __webpack_require__(/*! raw-loader!./linda-ikeji.component.html */ "./node_modules/raw-loader/index.js!./src/app/linda-ikeji/linda-ikeji.component.html"),
            styles: [__webpack_require__(/*! ./linda-ikeji.component.css */ "./src/app/linda-ikeji/linda-ikeji.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_detail_service__WEBPACK_IMPORTED_MODULE_2__["NewsDetailService"]])
    ], LindaIkejiComponent);
    return LindaIkejiComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news-detail.service.ts":
/*!****************************************!*\
  !*** ./src/app/news-detail.service.ts ***!
  \****************************************/
/*! exports provided: NewsDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailService", function() { return NewsDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewsDetailService = /** @class */ (function () {
    function NewsDetailService(http) {
        this.http = http;
        this.PUNCH_URL = 'news/punchng';
        this.LEADERSHIP_URL = 'news/leadershipng';
        this.BUSINESS_DAY_URL = 'news/businessdayng';
        this.LINDA_IKEJI_URL = 'blog/lindaikejisblog';
        this.lindaBlog = [];
        this.businessdayObservable = this.http.get(this.BUSINESS_DAY_URL);
    }
    Object.defineProperty(NewsDetailService.prototype, "punchNewsDetails", {
        get: function () {
            return this.http.get(this.PUNCH_URL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsDetailService.prototype, "leadershipNewsDetails", {
        get: function () {
            return this.http.get(this.LEADERSHIP_URL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsDetailService.prototype, "businessNewsDetails", {
        get: function () {
            return this.businessdayObservable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsDetailService.prototype, "lindaIkejiBlogDetails", {
        get: function () {
            return this.http.get(this.LINDA_IKEJI_URL);
        },
        enumerable: true,
        configurable: true
    });
    NewsDetailService.prototype.homepageNews = function (url) {
        var siteNews = [];
        this.http.get(url).subscribe(function (result) {
            for (var i = 0; i < 3; i++) {
                var index = Math.floor(Math.random() * (result.length - 1));
                var news = result[index];
                siteNews.push(news);
            }
        });
        return siteNews;
    };
    Object.defineProperty(NewsDetailService.prototype, "punchHomepage", {
        // async getThreeImages(){
        //   let businessdayNews:any[] = await this.homepageNews(this.BUSINESS_DAY_URL);
        //   console.log(businessdayNews, "hhhhhh")
        //   let images = [businessdayNews[0]['image'], businessdayNews[1]['image'], businessdayNews[2]['image']]
        //   console.log(images, 'images')
        //     // this.businessdayObservable.subscribe((result:string[])=>{
        //     //   for(let i= 0; i<3; i++){
        //     //    const index= Math.floor(Math.random()* result.length-1)
        //     //    const src = result[index]['image']
        //     //   images.push(src)
        //     //   }
        //     // })
        //     return images
        //   }
        get: function () {
            var punchNews = this.homepageNews(this.PUNCH_URL);
            return punchNews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsDetailService.prototype, "leadershipHomepage", {
        get: function () {
            var leadershipNews = this.homepageNews(this.LEADERSHIP_URL);
            return leadershipNews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsDetailService.prototype, "lindaHomepage", {
        get: function () {
            var lindaNews = this.homepageNews(this.LINDA_IKEJI_URL);
            return lindaNews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsDetailService.prototype, "businessdayHomepage", {
        get: function () {
            var businessdayNews = this.homepageNews(this.BUSINESS_DAY_URL);
            return businessdayNews;
        },
        enumerable: true,
        configurable: true
    });
    NewsDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsDetailService);
    return NewsDetailService;
}());



/***/ }),

/***/ "./src/app/news-detail/news-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/news-detail/news-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/news-detail/news-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/news-detail/news-detail.component.ts ***!
  \******************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent() {
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
    };
    NewsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(/*! raw-loader!./news-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/news-detail/news-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-detail.component.css */ "./src/app/news-detail/news-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./src/app/punch/punch.component.css":
/*!*******************************************!*\
  !*** ./src/app/punch/punch.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bmNoL3B1bmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/punch/punch.component.ts":
/*!******************************************!*\
  !*** ./src/app/punch/punch.component.ts ***!
  \******************************************/
/*! exports provided: PunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunchComponent", function() { return PunchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-detail.service */ "./src/app/news-detail.service.ts");



var PunchComponent = /** @class */ (function () {
    function PunchComponent(newsDetails) {
        this.newsDetails = newsDetails;
    }
    PunchComponent.prototype.ngOnInit = function () {
        this.news = this.newsDetails.punchNewsDetails;
        this.carouselImages = this.newsDetails.punchHomepage;
        console.log(this.carouselImages, 'jjjjjjjjjjjj');
    };
    PunchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-punch',
            template: __webpack_require__(/*! raw-loader!./punch.component.html */ "./node_modules/raw-loader/index.js!./src/app/punch/punch.component.html"),
            styles: [__webpack_require__(/*! ./punch.component.css */ "./src/app/punch/punch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_detail_service__WEBPACK_IMPORTED_MODULE_2__["NewsDetailService"]])
    ], PunchComponent);
    return PunchComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chekwube/Desktop/projects/webscrapping_project/newsandgists/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map