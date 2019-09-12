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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"jumbotron my-5 main-img\">\n    <h1 class=\"display-3 text-light\">Demo Angular App</h1>\n    <h2>\n      <span class=\"lead badge badge-light\">Components</span>\n    </h2>\n    <router-outlet></router-outlet>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp2/comp2.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp2/comp2.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"font-small fixed-bottom bg-light\">\n  <div class=\"text-center py-3\">\n    {{title}}\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/courses/courses.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/courses.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header bg-secondary text-light\">\n    Component *ngFor Directive\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Courses</h4>\n    <div class=\"container card-text  text-center\">\n      <div class=\"row text-center\">\n          <h4 class=\"col-4\">Name</h4>\n          <h4 class=\"col-4\" *ngFor=\"let course of courses\">{{course}}</h4>\n      </div>\n      <app-student [students]=\"students\" (msg)=\"getEvent($event)\"></app-student>\n      <div class=\"col-12\">\n        <h2 [class]=\"'badge badge-' + pfCss\" [innerHTML]=\"pf\"> </h2>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/democomp/demo.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/democomp/demo.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"carousel slide card-img-top\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item w-100 active\">\n        <img [src]=\"imgsrc1\" class =\"w-100\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item w-100\">\n        <img [src]=\"imgsrc2\" class =\"w-100\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item w-100\">\n        <img [src]=\"imgsrc3\" class =\"w-100\" alt=\"Third slide\">\n      </div>\n    </div>\n  </div>\n  <!-- <img [src]=\"imgsrc\" class=\"card-img-top\">\n  <img [src]=\"imgsrc1\" class=\"card-img-top\"> -->\n  <div class=\"card-header bg-secondary text-light\">\n    Demo Component\n  </div>\n  <div (click)=\"onDivClick($event)\" class=\"card-body\">\n    <h4 class=\"card-title\">Demo Component</h4>\n    <p class=\"card-text\">{{titles}}</p>\n    <button (click)=\"onButtonClick($event)\" type=\"button\" class=\"btn btn-success\" [class.active]=\"isActive\">Active or Not</button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header bg-secondary text-light\">\n    Form Component\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Fill in Details</h4>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input appInputFormatter appInputFormat='lowercase' [(ngModel)]=\"email\" (keyup.enter)=\"setEmail()\" type=\"email\" class=\"form-control\" id=\"email\"\n        aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input [(ngModel)]=\"password\" (keyup.enter)=\"setPassword()\" type=\"password\" class=\"form-control\"\n        id=\"password\" placeholder=\"Password\">\n    </div>\n    <button (click)=\"submit()\" class=\"btn btn-primary\">Submit</button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light bg-light position-top fixed-top\">\n  <a class=\"navbar-brand\">NRI</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <button (click)=\"route()\" class=\"nav-link btn btn-dark text-light\">Link</button>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/demo\">Demo</a>\n          <a class=\"dropdown-item\" routerLink=\"/courses\">Courses</a>\n          <a class=\"dropdown-item\" routerLink=\"/filters\">Filters</a>\n          <a class=\"dropdown-item\" routerLink=\"/templateForms\">Template Form</a>\n          <a class=\"dropdown-item\" routerLink=\"/reactiveForms\">Reactive Form</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/forms', '2', '3']\">Forms</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nopage/nopage.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nopage/nopage.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>nopage works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pipe-filter/pipe-filter.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pipe-filter/pipe-filter.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header bg-secondary text-light\">\n        Filters\n    </div>\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">Angular built-in Filters</h4>\n        <p class=\"card-text\">{{feeds.title | uppercase}}</p>\n        <p class=\"card-text\">{{feeds.rating | number:\"2.1-1\"}}</p>\n        <p class=\"card-text\">{{feeds.students | number}}</p>\n        <p class=\"card-text\">{{feeds.price | currency:\"AUD\"}}</p>\n        <hr class=\"my-2\">\n        <h4 class=\"card-title\">Angular Custom Filters</h4>\n        <p class=\"card-text\">{{feeds.text | summary:200}}</p>\n        <p class=\"card-text\">{{feeds.text | titleCase}}</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reactive-form/reactive-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reactive-form/reactive-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header bg-secondary text-light\">\n    Reactive Form Component\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Fill in Details</h4>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input formControlName=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\"\n          placeholder=\"Enter email\">\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"form.touched && !form.valid\">\n          <div *ngIf=\"form.controls.email.errors.required\">Email is a required field</div>\n          <div *ngIf=\"form.controls.email.errors.minlength\">Minimum 3 characters required for Email</div>\n          <div *ngIf=\"form.controls.email.errors.pattern\">Email doesn't match the pattern</div>\n          <div *ngIf=\"form.controls.email.errors.cannotContainSpace\">Email cannot contain space</div>\n          <div *ngIf=\"form.controls.password.errors.required\">Password is required</div>\n        </div>\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input formControlName=\"password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"password\"\n          placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"sendEvent($event)\" class=\"card-text mb-3\" ng-if=\"students\">\r\n  <div class=\"row\" *ngFor=\"let student of students\">\r\n    <div class=\"col-4\">\r\n      {{student.name}}\r\n    </div>\r\n    <div [class]=\"'col-4 ' + student.cssM\">\r\n      {{student.maths}}\r\n    </div>\r\n    <div [class]=\"'col-4 ' + student.cssP\">\r\n      {{student.physics}}\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/template-form/template-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template-form/template-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header bg-secondary text-light\">\n    Template Form Component\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Fill in Details</h4>\n    <form #f=\"ngForm\" (ngsubmit)=\"submit()\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input ngModel name=\"email\" #email=\"ngModel\" type=\"text\" required minlength=\"3\" maxlength=\"10\" pattern=\"[A-z]+\"\n          (change)=\"setEmail(email)\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\"\n          placeholder=\"Enter email\">\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n          <div *ngIf=\"email.errors.required\">This is a required field</div>\n          <div *ngIf=\"email.errors.minlength\">Minimum 3 characters required</div>\n          <div *ngIf=\"email.errors.pattern\">Doesn't match the pattern</div>\n        </div>\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input ngModel name=\"password\" #password=\"ngModel\" (change)=\"setPassword(password)\" type=\"password\"\n          class=\"form-control\" id=\"password\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\"[disabled]=\"!f.valid\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nopage_nopage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nopage/nopage.component */ "./src/app/nopage/nopage.component.ts");
/* harmony import */ var _democomp_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./democomp/demo.component */ "./src/app/democomp/demo.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _pipe_filter_pipe_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe-filter/pipe-filter.component */ "./src/app/pipe-filter/pipe-filter.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template-form/template-form.component */ "./src/app/template-form/template-form.component.ts");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");










const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _democomp_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"] },
                { path: 'demo', component: _democomp_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"] },
                { path: 'courses', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__["CoursesComponent"] },
                { path: 'filters', component: _pipe_filter_pipe_filter_component__WEBPACK_IMPORTED_MODULE_6__["PipeFilterComponent"] },
                { path: 'templateForms', component: _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_8__["TemplateFormComponent"] },
                { path: 'reactiveForms', component: _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormComponent"] },
                { path: 'forms/:param1/:param2', component: _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"] },
                { path: '**', component: _nopage_nopage_component__WEBPACK_IMPORTED_MODULE_3__["NopageComponent"] },
            ])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-img {\r\n  background: url('mainbg.png') no-repeat center center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  background-size: cover;\r\n  background-blend-mode: multiply\r\n  /* background: url(\"../assets/mainbg.png\") fixed no-repeat; */\r\n}\r\n\r\ndiv{\r\n  color: brown !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxREFBK0Q7RUFDL0Qsb0NBQW9DO0VBSXBDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1pbWcge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9tYWluYmcucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5XHJcbiAgLyogYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL21haW5iZy5wbmdcIikgZml4ZWQgbm8tcmVwZWF0OyAqL1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgY29sb3I6IGJyb3duICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'demo-app';
        this.navbgc = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].navBGcolor;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _democomp_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./democomp/demo.component */ "./src/app/democomp/demo.component.ts");
/* harmony import */ var _comp2_comp2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp2/comp2.component */ "./src/app/comp2/comp2.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _nopage_nopage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nopage/nopage.component */ "./src/app/nopage/nopage.component.ts");
/* harmony import */ var _pipe_filter_pipe_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe-filter/pipe-filter.component */ "./src/app/pipe-filter/pipe-filter.component.ts");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _title_case_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./title-case.pipe */ "./src/app/title-case.pipe.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/demo.service */ "./src/app/services/demo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _directives_input_format_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/input-format.directive */ "./src/app/directives/input-format.directive.ts");
/* harmony import */ var _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./template-form/template-form.component */ "./src/app/template-form/template-form.component.ts");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _democomp_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
            _comp2_comp2_component__WEBPACK_IMPORTED_MODULE_7__["Component2"],
            _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__["CoursesComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _nopage_nopage_component__WEBPACK_IMPORTED_MODULE_10__["NopageComponent"],
            _pipe_filter_pipe_filter_component__WEBPACK_IMPORTED_MODULE_11__["PipeFilterComponent"],
            _summary_pipe__WEBPACK_IMPORTED_MODULE_12__["Summary"],
            _title_case_pipe__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_14__["FormComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_15__["StudentComponent"],
            _directives_input_format_directive__WEBPACK_IMPORTED_MODULE_18__["InputFormatDirective"],
            _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_19__["TemplateFormComponent"],
            _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [_services_demo_service__WEBPACK_IMPORTED_MODULE_16__["DemoService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _comp2_comp2_component__WEBPACK_IMPORTED_MODULE_7__["Component2"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comp2/comp2.component.css":
/*!*******************************************!*\
  !*** ./src/app/comp2/comp2.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-text{\r\n    color:rgb(198, 94, 207);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcDIvY29tcDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXAyL2NvbXAyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10ZXh0e1xyXG4gICAgY29sb3I6cmdiKDE5OCwgOTQsIDIwNyk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comp2/comp2.component.ts":
/*!******************************************!*\
  !*** ./src/app/comp2/comp2.component.ts ***!
  \******************************************/
/*! exports provided: Component2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component2", function() { return Component2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Component2 = class Component2 {
    constructor() {
        this.title = 'Demo Angular Project';
    }
};
Component2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'comp2-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comp2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp2/comp2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comp2.component.css */ "./src/app/comp2/comp2.component.css")).default]
    })
], Component2);



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/*!***********************************************!*\
  !*** ./src/app/courses/courses.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY291cnNlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/demo.service */ "./src/app/services/demo.service.ts");



let CoursesComponent = class CoursesComponent {
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
        this.pf = '';
        this.pfCss = '';
        service.getCourses().subscribe(res => {
            this.courses = res;
            this.cd.markForCheck();
        });
        service.getStudents().subscribe(res => {
            this.students = res;
            this.cd.markForCheck();
        });
    }
    ngOnInit() {
    }
    getEvent(data) {
        const maths = data.children[1].innerHTML;
        const physics = data.children[2].innerHTML;
        this.pf = maths < 40 && physics < 40 ? 'Failed in Both !' : physics < 40 ? 'Failed in Physics !' : maths < 40 ? 'Failed in Maths !' : 'Passed !';
        this.pfCss = this.pf == 'Passed !' ? 'success' : 'danger';
        console.log('Changed View');
    }
};
CoursesComponent.ctorParameters = () => [
    { type: _services_demo_service__WEBPACK_IMPORTED_MODULE_2__["DemoService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-courses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/courses/courses.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses.component.css")).default]
    })
], CoursesComponent);



/***/ }),

/***/ "./src/app/democomp/demo.component.css":
/*!*********************************************!*\
  !*** ./src/app/democomp/demo.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-text{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtb2NvbXAvZGVtby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGVtb2NvbXAvZGVtby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGV4dHtcclxuICAgIGNvbG9yOnJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/democomp/demo.component.ts":
/*!********************************************!*\
  !*** ./src/app/democomp/demo.component.ts ***!
  \********************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoComponent = class DemoComponent {
    constructor() {
        this.titles = 'This is a Demo Component!!';
        this.imgsrc1 = 'http://lorempixel.com/400/50';
        this.imgsrc2 = 'http://lorempixel.com/400/100';
        this.imgsrc3 = 'http://lorempixel.com/400/200';
        this.isActive = true;
    }
    onButtonClick($event) {
        event.stopPropagation();
        console.log('Button is Clicked');
    }
    onDivClick($event) {
        console.log('Div is Clicked');
    }
};
DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'demo-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/democomp/demo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo.component.css */ "./src/app/democomp/demo.component.css")).default]
    })
], DemoComponent);



/***/ }),

/***/ "./src/app/directives/input-format.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/input-format.directive.ts ***!
  \******************************************************/
/*! exports provided: InputFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormatDirective", function() { return InputFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputFormatDirective = class InputFormatDirective {
    constructor(el) {
        this.el = el;
    }
    onFocus() {
        console.log('on focus');
    }
    onBlur() {
        console.log('on blur');
        const value = this.el.nativeElement.value;
        if (this.format == 'lowercase') {
            this.el.nativeElement.value = value.toLowerCase();
        }
        else {
            this.el.nativeElement.value = value.toUpperCase();
        }
    }
};
InputFormatDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appInputFormat')
], InputFormatDirective.prototype, "format", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')
], InputFormatDirective.prototype, "onFocus", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')
], InputFormatDirective.prototype, "onBlur", null);
InputFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appInputFormatter]'
    })
], InputFormatDirective);



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/demo.service */ "./src/app/services/demo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FormComponent = class FormComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
        this.router.paramMap.subscribe(params => console.log(params));
    }
    submit() {
        this.service.login({ email: this.email, password: this.password });
    }
    setEmail() {
        console.log(this.email);
    }
    setPassword() {
        console.log(this.password);
    }
};
FormComponent.ctorParameters = () => [
    { type: _services_demo_service__WEBPACK_IMPORTED_MODULE_2__["DemoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    route() {
        this.router.navigate(['/forms', '3', '4']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/nopage/nopage.component.css":
/*!*********************************************!*\
  !*** ./src/app/nopage/nopage.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vcGFnZS9ub3BhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/nopage/nopage.component.ts":
/*!********************************************!*\
  !*** ./src/app/nopage/nopage.component.ts ***!
  \********************************************/
/*! exports provided: NopageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NopageComponent", function() { return NopageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NopageComponent = class NopageComponent {
    constructor() { }
    ngOnInit() {
    }
};
NopageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nopage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nopage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nopage/nopage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nopage.component.css */ "./src/app/nopage/nopage.component.css")).default]
    })
], NopageComponent);



/***/ }),

/***/ "./src/app/pipe-filter/pipe-filter.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pipe-filter/pipe-filter.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpcGUtZmlsdGVyL3BpcGUtZmlsdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pipe-filter/pipe-filter.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pipe-filter/pipe-filter.component.ts ***!
  \******************************************************/
/*! exports provided: PipeFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeFilterComponent", function() { return PipeFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PipeFilterComponent = class PipeFilterComponent {
    constructor() {
        this.feeds = {
            title: '',
            rating: 8,
            students: 10,
            price: 1000,
            text: ''
        };
        this.feeds = {
            title: 'Name',
            rating: 8,
            students: 10,
            price: 1000,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.`
        };
    }
    ngOnInit() {
    }
};
PipeFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pipe-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pipe-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pipe-filter/pipe-filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pipe-filter.component.css */ "./src/app/pipe-filter/pipe-filter.component.css")).default]
    })
], PipeFilterComponent);



/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aXZlLWZvcm0vcmVhY3RpdmUtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function() { return ReactiveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/demo.service */ "./src/app/services/demo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _usernameValidators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usernameValidators */ "./src/app/reactive-form/usernameValidators.ts");






let ReactiveFormComponent = class ReactiveFormComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _usernameValidators__WEBPACK_IMPORTED_MODULE_5__["UsernameValidators"].cannotContainSpace
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    submit(form) {
        console.log(form);
        this.service.login(form.value);
    }
};
ReactiveFormComponent.ctorParameters = () => [
    { type: _services_demo_service__WEBPACK_IMPORTED_MODULE_2__["DemoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ReactiveFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reactive-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reactive-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reactive-form/reactive-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reactive-form.component.css */ "./src/app/reactive-form/reactive-form.component.css")).default]
    })
], ReactiveFormComponent);



/***/ }),

/***/ "./src/app/reactive-form/usernameValidators.ts":
/*!*****************************************************!*\
  !*** ./src/app/reactive-form/usernameValidators.ts ***!
  \*****************************************************/
/*! exports provided: UsernameValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidators", function() { return UsernameValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UsernameValidators {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/services/demo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/demo.service.ts ***!
  \******************************************/
/*! exports provided: DemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoService", function() { return DemoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DemoService = class DemoService {
    constructor(http) {
        this.http = http;
        this.data = 'Yo Bro!!';
    }
    getCourses() {
        return this.http.get('http://localhost:3000/courses');
    }
    getStudents() {
        return this.http.get('http://localhost:3000/students');
    }
    login(obj) {
        return this.http.post('http://localhost:3000/login', obj).subscribe(res => console.log(res));
    }
};
DemoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DemoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DemoService);



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentComponent = class StudentComponent {
    constructor() {
        this.msg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
        if (this.students) {
            this.students = this.students.map((x) => {
                x.cssM = x.maths >= 40 ? 'text-info' : 'text-danger';
                x.cssP = x.physics >= 40 ? 'text-info' : 'text-danger';
                return x;
            });
        }
    }
    sendEvent(event) {
        this.msg.emit(event.target.parentNode);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudentComponent.prototype, "students", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StudentComponent.prototype, "msg", void 0);
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")).default]
    })
], StudentComponent);



/***/ }),

/***/ "./src/app/summary.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summary.pipe.ts ***!
  \*********************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Summary = class Summary {
    transform(value, limit) {
        limit = limit ? limit : 20;
        return !value ? value : value.substring(0, limit) + '...';
    }
};
Summary = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'summary'
    })
], Summary);



/***/ }),

/***/ "./src/app/template-form/template-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/template-form/template-form.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlLWZvcm0vdGVtcGxhdGUtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/template-form/template-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/template-form/template-form.component.ts ***!
  \**********************************************************/
/*! exports provided: TemplateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFormComponent", function() { return TemplateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/demo.service */ "./src/app/services/demo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TemplateFormComponent = class TemplateFormComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    submit() {
        this.service.login({ email: this.email, password: this.password });
    }
    setEmail(email) {
        this.email = email.viewModel;
    }
    setPassword(password) {
        this.password = password.viewModel;
    }
};
TemplateFormComponent.ctorParameters = () => [
    { type: _services_demo_service__WEBPACK_IMPORTED_MODULE_2__["DemoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TemplateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-template-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./template-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/template-form/template-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./template-form.component.css */ "./src/app/template-form/template-form.component.css")).default]
    })
], TemplateFormComponent);



/***/ }),

/***/ "./src/app/title-case.pipe.ts":
/*!************************************!*\
  !*** ./src/app/title-case.pipe.ts ***!
  \************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TitleCasePipe = class TitleCasePipe {
    constructor() {
        this.pre = ['of', 'on', 'the', 'in', 'ad', 'sit'];
    }
    transform(value, ...args) {
        return value.split(' ').map((x) => !this.pre.includes(x) ? x.substring(0, 1).toUpperCase() + x.substring(1) : x).join(' ');
    }
};
TitleCasePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'titleCase'
    })
], TitleCasePipe);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true,
    navBGcolor: 'red'
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Training\demo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map