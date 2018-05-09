webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-doors></app-doors>\n<app-new-age></app-new-age>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-height-box {\n  height: 100vh;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_age_new_age_component__ = __webpack_require__("../../../../../src/app/new-age/new-age.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doors_doors_component__ = __webpack_require__("../../../../../src/app/doors/doors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__doors_doors_component__["a" /* DoorsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__new_age_new_age_component__["a" /* NewAgeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/doors/doors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"opening-doors\" [class.opened]=\"opened\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/doors/doors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .opening-doors {\n  position: fixed;\n  overflow-x: hidden;\n  left: 0;\n  top: 0;\n  z-index: 10000;\n  width: 100%;\n  height: 100%; }\n  :host .opening-doors:after, :host .opening-doors:before {\n    content: \" \";\n    position: absolute;\n    height: 100%;\n    width: 149%;\n    top: 0;\n    border-radius: 50px;\n    transform: skewX(-45deg);\n    transition: 3s all cubic-bezier(0.25, 0.8, 0.25, 1);\n    z-index: 1; }\n  :host .opening-doors.opened:after {\n    right: -250%; }\n  :host .opening-doors.opened:before {\n    left: -250%; }\n  :host .opening-doors:after {\n    right: -100%;\n    background: teal; }\n  :host .opening-doors:before {\n    left: -100%;\n    background: deepskyblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/doors/doors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoorsComponent = (function () {
    function DoorsComponent() {
        this.delay = 500;
    }
    DoorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.opened = true;
        }, this.delay);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DoorsComponent.prototype, "opened", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], DoorsComponent.prototype, "delay", void 0);
    DoorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-doors',
            template: __webpack_require__("../../../../../src/app/doors/doors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/doors/doors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DoorsComponent);
    return DoorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-age/new-age.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">Start Bootstrap</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#download\">Download</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#features\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<header class=\"masthead\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100\">\n      <div class=\"col-lg-7 my-auto\">\n        <div class=\"header-content mx-auto\">\n          <h1 class=\"mb-5\">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>\n          <a href=\"#download\" class=\"btn btn-outline btn-xl js-scroll-trigger\">Start Now for Free!</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5 my-auto\">\n        <div class=\"device-container\">\n          <div class=\"device-mockup iphone6_plus portrait white\">\n            <div class=\"device\">\n              <div class=\"screen\">\n                <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\n                <img src=\"./assets/img/demo-screen-1.jpg\" class=\"img-fluid\" alt=\"\">\n              </div>\n              <div class=\"button\">\n                <!-- You can hook the \"home button\" to some JavaScript events or just remove it -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<section class=\"download bg-primary text-center\" id=\"download\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 mx-auto\">\n        <h2 class=\"section-heading\">Discover what all the buzz is about!</h2>\n        <p>Our app is available on any mobile device! Download now to get started!</p>\n        <div class=\"badges\">\n          <a class=\"badge-link\" href=\"#\"><img src=\"./assets/img/google-play-badge.svg\" alt=\"\"></a>\n          <a class=\"badge-link\" href=\"#\"><img src=\"./assets/img/app-store-badge.svg\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"features\" id=\"features\">\n  <div class=\"container\">\n    <div class=\"section-heading text-center\">\n      <h2>Unlimited Features, Unlimited Fun</h2>\n      <p class=\"text-muted\">Check out what you can do with this app theme!</p>\n      <hr>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 my-auto\">\n        <div class=\"device-container\">\n          <div class=\"device-mockup iphone6_plus portrait white\">\n            <div class=\"device\">\n              <div class=\"screen\">\n                <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\n                <img src=\"./assets/img/demo-screen-1.jpg\" class=\"img-fluid\" alt=\"\">\n              </div>\n              <div class=\"button\">\n                <!-- You can hook the \"home button\" to some JavaScript events or just remove it -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8 my-auto\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-screen-smartphone text-primary\"></i>\n                <h3>Device Mockups</h3>\n                <p class=\"text-muted\">Ready to use HTML/CSS device mockups, no Photoshop required!</p>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-camera text-primary\"></i>\n                <h3>Flexible Use</h3>\n                <p class=\"text-muted\">Put an image, video, animation, or anything else in the screen!</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-present text-primary\"></i>\n                <h3>Free to Use</h3>\n                <p class=\"text-muted\">As always, this theme is free to download and use for any purpose!</p>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"feature-item\">\n                <i class=\"icon-lock-open text-primary\"></i>\n                <h3>Open Source</h3>\n                <p class=\"text-muted\">Since this theme is MIT licensed, you can use it commercially!</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"cta\">\n  <div class=\"cta-content\">\n    <div class=\"container\">\n      <h2>Stop waiting.<br>Start building.</h2>\n      <a href=\"#contact\" class=\"btn btn-outline btn-xl js-scroll-trigger\">Let's Get Started!</a>\n    </div>\n  </div>\n  <div class=\"overlay\"></div>\n</section>\n\n<section class=\"contact bg-primary\" id=\"contact\">\n  <div class=\"container\">\n    <h2>We\n      <i class=\"fa fa-heart\"></i>\n      new friends!</h2>\n    <ul class=\"list-inline list-social\">\n      <li class=\"list-inline-item social-twitter\">\n        <a href=\"#\">\n          <i class=\"fa fa-twitter\"></i>\n        </a>\n      </li>\n      <li class=\"list-inline-item social-facebook\">\n        <a href=\"#\">\n          <i class=\"fa fa-facebook\"></i>\n        </a>\n      </li>\n      <li class=\"list-inline-item social-google-plus\">\n        <a href=\"#\">\n          <i class=\"fa fa-google-plus\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n\n<footer>\n  <div class=\"container\">\n    <p>&copy; Your Website 2018. All Rights Reserved.</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\">\n        <a href=\"#\">Privacy</a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a href=\"#\">Terms</a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a href=\"#\">FAQ</a>\n      </li>\n    </ul>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/new-age/new-age.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-age/new-age.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewAgeComponent = (function () {
    function NewAgeComponent() {
    }
    NewAgeComponent.prototype.ngOnInit = function () {
    };
    NewAgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-new-age',
            template: __webpack_require__("../../../../../src/app/new-age/new-age.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-age/new-age.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewAgeComponent);
    return NewAgeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map