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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n    margin-bottom: 0;\r\n}\r\n\r\nh4 {\r\n    margin-top: 0;\r\n}\r\n\r\n.resume-container {\r\n    background-color: white;\r\n    width: 75%;\r\n    height: 500px;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    overflow: auto;\r\n    border-radius: 5px;\r\n}\r\n\r\n.line-break {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    border-bottom: 2px black solid;\r\n    padding: 25px 0 25px 0;\r\n}\r\n\r\n.commit-log {\r\n    display: inline-block;\r\n    margin-top: 18px;\r\n    margin-left: 12%;\r\n    width: 75%;\r\n}\r\n\r\n.commit-log .commit {\r\n    display: inline-block;\r\n    padding: 10px;\r\n    width: 100%;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n}\r\n\r\n.commit-log .commit .commit-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.commit-log .commit .commit-content p {\r\n    margin: 0;\r\n    line-height: 28px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- resume.html should be displayed here -->\r\n<div [innerHTML]=\"resumeHTML\" class=\"resume-container\"></div>\r\n<div class=\"line-break\"></div>\r\n<h3>Latest Commit</h3>\r\n<div class=\"commit-log\" *ngIf=\"commits; else noCommits\">\r\n    <div class=\"commit\" *ngFor=\"let commit of commits\">\r\n        <div class=\"commit-content\">\r\n            <p>{{commit.timestamp}}</p>\r\n            <a href={{commit.url}} target=_blank><b>Commit Id: {{commit.id}}</b></a>\r\n            <p><i>{{commit.message}}</i></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #noCommits>\r\n  <h4><i>Don't forget to update your resume!</i></h4>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pusher_pusher_service__ = __webpack_require__("../../../../../src/pusher/pusher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(pusherService, sanitizer, ref, http) {
        this.pusherService = pusherService;
        this.sanitizer = sanitizer;
        this.ref = ref;
        this.http = http;
        this.ngrok = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].ngrok_url;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bindToChannel();
        this.http.get(this.ngrok).subscribe(function (data) {
            _this.resumeHTML = data['resume'];
            var commits = data['commits'];
            if (commits.length !== 0) {
                _this.commits = JSON.parse(data['commits']);
            }
            else {
            }
            _this.ref.detectChanges();
        });
    };
    AppComponent.prototype.bindToChannel = function () {
        var self = this;
        this.pusherService.resumeChannel.bind(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].pusher.event, function (resume) {
            self.resumeHTML = resume['html'];
            self.commits = JSON.parse(resume['commits']);
            self.ref.detectChanges();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'realtime-resume',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__pusher_pusher_service__["a" /* PusherService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pusher_pusher_service__ = __webpack_require__("../../../../../src/pusher/pusher.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__pusher_pusher_service__["a" /* PusherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
    production: false,
    pusher: {
        key: '0d1732e32f0dea340a96',
        cluster: 'us2',
        encrypted: true,
        channel: 'my-resume',
        event: 'update-resume'
    },
    ngrok_url: 'http://realtimeresume.azurewebsites.net/'
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

/***/ "../../../../../src/pusher/pusher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var PusherService = (function () {
    function PusherService() {
        this.pusher = new Pusher(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].pusher.key, {
            cluster: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].pusher.cluster,
            encrypted: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].pusher.encrypted
        });
        this.resumeChannel = this.pusher.subscribe(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].pusher.channel);
    }
    return PusherService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map