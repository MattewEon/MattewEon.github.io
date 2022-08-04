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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plait-color-simulator/plait-color-simulator.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plait-color-simulator/plait-color-simulator.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n\t<div class=\"title\">\n\t\t<h1>PLAIT COLOR SIMULATOR</h1>\n\t\t<span class=\"subtitle\">By <a href=\"https://www.etsy.com/fr/shop/Eonswhips\" target=\"_blank\">Eon's Whips</a></span>\n\t</div>\n</div>\n\n<div class=\"body\">\n\t<div class=\"configuration\">\n\t\t<h3>CONFIGURATION</h3>\n\n\t\t<mat-form-field appearance=\"fill\">\n\t\t\t<mat-label>Threads number</mat-label>\n\t\t\t<input matInput [(ngModel)]=\"threads\" type=\"number\" required>\n\t\t</mat-form-field>\n\n\t\t<mat-checkbox [(ngModel)]=\"facing\" (ngModelChange)=\"onFacingChange()\">Facing Colors</mat-checkbox>\n\n\t\t<mat-slider min=\"0.5\" max=\"2\" step=\"0.1\" thumbLabel=\"true\" [(ngModel)]=\"zoom\"></mat-slider>\n\n\t\t<button (click)=\"save()\"></button>\n\n\t\t<div>\n\t\t\t<ng-container *ngFor=\"let i of strandsArray()\">\n\t\t\t\t<mat-form-field appearance=\"fill\">\n\t\t\t\t\t<mat-label>Color of the thread #{{i}}</mat-label>\n\t\t\t\t\t<input matInput [ngModel]=\"getLeftColor(i)\" [(ngModel)]=\"leftColors[i]\" type=\"color\" placeholder=\"test\">\n\t\t\t\t\t<input matInput [ngModel]=\"getRightColor(i)\" [(ngModel)]=\"rightColors[i]\" type=\"color\" *ngIf=\"!facing\">\n\t\t\t\t</mat-form-field>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"viewer\" [style.fontSize]=\"getZoom()\">\n\t\t<ng-container *ngFor=\"let i of brinArrayLess(1)\">\n\t\t\t<ng-container *ngFor=\"let j of [1,2,3,4,5,6]\">\n\t\t\t\t<div class=\"plat-level\" *ngFor=\"let k of brinArrayLess(i)\">\n\t\t\t\t\t<div class=\"plait-{{j}} left\" [style.background-color]=\"getLeftColor(k)\"></div>\n\t\t\t\t\t<div class=\"plait-{{j}} right\" [style.background-color]=\"getRightColor(k)\"></div>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</ng-container>\n\t</div>\n</div>\n\n<div class=\"footer\">\n\t<a href=\"https://www.instagram.com/eons.whips/\" target=\"_blank\">\n\t\t@EONS.WHIPS\n\t\t<img src=\"/assets/img/instagram.webp\" alt=\"instagram link\">\n\t</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
/* harmony import */ var _plait_color_simulator_plait_color_simulator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plait-color-simulator/plait-color-simulator.component */ "./src/app/plait-color-simulator/plait-color-simulator.component.ts");




const appRoutes = [
    { path: 'plait-color-simulator', component: _plait_color_simulator_plait_color_simulator_component__WEBPACK_IMPORTED_MODULE_3__["PlaitColorSimulatorComponent"], outlet: 'primary' },
    { path: 'plait-color-simulator/:config', component: _plait_color_simulator_plait_color_simulator_component__WEBPACK_IMPORTED_MODULE_3__["PlaitColorSimulatorComponent"], outlet: 'primary' },
    { path: '', redirectTo: 'plait-color-simulator', pathMatch: 'full' },
    // all other routes
    { path: '**', redirectTo: 'plait-color-simulator', outlet: 'primary' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'whips-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _plait_color_simulator_plait_color_simulator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plait-color-simulator/plait-color-simulator.component */ "./src/app/plait-color-simulator/plait-color-simulator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _plait_color_simulator_plait_color_simulator_component__WEBPACK_IMPORTED_MODULE_5__["PlaitColorSimulatorComponent"]
        ], imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/plait-color-simulator/plait-color-configuration.model.ts":
/*!**************************************************************************!*\
  !*** ./src/app/plait-color-simulator/plait-color-configuration.model.ts ***!
  \**************************************************************************/
/*! exports provided: PlaitColorConfigurationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaitColorConfigurationModel", function() { return PlaitColorConfigurationModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PlaitColorConfigurationModel {
    constructor() {
        this.leftColors = [];
        this.rightColors = [];
        this.facing = true;
    }
}


/***/ }),

/***/ "./src/app/plait-color-simulator/plait-color-simulator.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/plait-color-simulator/plait-color-simulator.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n:host > div.header, :host > div.footer {\n  margin: 2em 10em 1em 10em;\n}\n:host > div.header {\n  display: inline-flex;\n  padding: 1em;\n  border-radius: 0.2em;\n  background: rgba(255, 255, 255, 0.2);\n}\n:host > div.header > div.title {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\n:host > div.header > div.title h1 {\n  font-family: muli, sans-serif;\n  font-weight: lighter;\n  color: #94765e;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n  margin: 0 0 0.2em 0;\n  font-size: 3em;\n}\n:host > div.header > div.title span.subtitle {\n  color: white;\n  font-family: liebelotte, sans-serif;\n  font-size: 2em;\n  background: rgba(102, 41, 146, 0.75);\n  margin: 0;\n  padding: 0.2em 0.4em;\n  border-radius: 0.1em;\n  box-shadow: 0.3em 0.2em 0.3em -2px rgba(0, 0, 0, 0.2);\n}\n:host > div.header > div.title span.subtitle > a:visited {\n  color: inherit;\n}\n:host > div.body {\n  background: white;\n  flex: 1;\n}\n:host > div.body > div.configuration {\n  padding: 0 10em;\n}\n:host > div.body > div.configuration > h3 {\n  font-size: 1.3em;\n}\n:host > div.body > div.configuration ::ng-deep .mat-form-field-infix {\n  width: 130px;\n}\n:host > div.body > div.configuration mat-checkbox {\n  margin-left: 1em;\n}\n:host > div.body > div.configuration input[type=color] {\n  width: 120px;\n}\n:host > div.body > div.viewer {\n  line-height: 0;\n  display: flex;\n  padding: 0 5.5em 0 4em;\n  overflow: scroll;\n}\n:host > div.body > div.viewer > .plat-level {\n  width: 2em;\n  height: calc(2 * 6 * 2em);\n  margin: 0 0.4137em;\n}\n:host > div.body > div.viewer > .plat-level > div {\n  border: dashed 1px black;\n  display: inline-block;\n  width: 2em;\n  height: 12em;\n  transform-origin: center center;\n}\n:host > div.body > div.viewer > .plat-level > div.left {\n  transform: translateX(1.4133em) translateY(1.758em) rotate(-45deg);\n  border-radius: 0.5em 2em 0 0;\n}\n:host > div.body > div.viewer > .plat-level > div.right {\n  transform: translateY(-1.758em) rotate(45deg);\n  display: inline-block;\n  border-radius: 0 0 2em 0.5em;\n}\n:host > div.footer {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  padding: 1em;\n  background: rgba(255, 255, 255, 0.2);\n}\n:host > div.footer > a {\n  display: flex;\n  align-items: center;\n  font-family: moli, sans-serif;\n  color: #94765e;\n  text-decoration: none;\n}\n:host > div.footer img {\n  height: 2em;\n  margin: 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoaWV1Z2FsbG8vUHJvamVjdHMvd2hpcHMtYXBwL3NyYy9hcHAvcGxhaXQtY29sb3Itc2ltdWxhdG9yL3BsYWl0LWNvbG9yLXNpbXVsYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhaXQtY29sb3Itc2ltdWxhdG9yL3BsYWl0LWNvbG9yLXNpbXVsYXRvci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXRoaWV1Z2FsbG8vUHJvamVjdHMvd2hpcHMtYXBwL3NyYy9zYXNzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERDtBREtFO0VBQ0MseUJBQUE7QUNISDtBRE1FO0VBQ0Msb0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtBQ0pIO0FETUc7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0pKO0FETUk7RUFDQyw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0U1Qkc7RUY2QkgsMkNBQUE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7QUNMTDtBRFFJO0VBQ0MsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxREFBQTtBQ05MO0FEUUs7RUFBYyxjQUFBO0FDTG5CO0FEVUU7RUFDQyxpQkFBQTtFQUNBLE9BQUE7QUNSSDtBRFVHO0VBQ0MsZUFBQTtBQ1JKO0FEVUk7RUFBTyxnQkFBQTtBQ1BYO0FEU0k7RUFBa0MsWUFBQTtBQ050QztBRFFJO0VBQWUsZ0JBQUE7QUNMbkI7QURPSTtFQUFvQixZQUFBO0FDSnhCO0FET0c7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRE9JO0VBQ0MsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNMTDtBRE9LO0VBQ0Msd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7QUNOTjtBRFFNO0VBQ0Msa0VBQUE7RUFDQSw0QkFBQTtBQ05QO0FEU007RUFDQyw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNQUDtBRGNFO0VBQ0MsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsb0NBQUE7QUNiSDtBRGVHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRWhISTtFRmlISixxQkFBQTtBQ2JKO0FEZ0JHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL3BsYWl0LWNvbG9yLXNpbXVsYXRvci9wbGFpdC1jb2xvci1zaW11bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0PiBkaXYge1xuXG5cdFx0Ji5oZWFkZXIsICYuZm9vdGVyIHtcblx0XHRcdG1hcmdpbjogMmVtIDEwZW0gMWVtIDEwZW07XG5cdFx0fVxuXG5cdFx0Ji5oZWFkZXIge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRwYWRkaW5nOiAxZW07XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwLjJlbTtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblxuXHRcdFx0PiBkaXYudGl0bGUge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZW5kO1xuXG5cdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbGlnaHRlcjtcblx0XHRcdFx0XHRjb2xvcjogJGJlaWdlO1xuXHRcdFx0XHRcdHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2IoMCAwIDAgLyAyMCUpO1xuXG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgMC4yZW0gMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDNlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNwYW4uc3VidGl0bGUge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRmb250LWZhbWlseTogbGllYmVsb3R0ZSwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDJlbTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkcHVycGxlLCAuMjUpO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjJlbSAwLjRlbTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjFlbTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwLjNlbSAwLjJlbSAwLjNlbSAtMnB4IHJnYigwIDAgMCAvIDIwJSk7XG5cblx0XHRcdFx0XHQ+IGE6dmlzaXRlZCB7IGNvbG9yOiBpbmhlcml0OyB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJvZHkge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRmbGV4OiAxO1xuXG5cdFx0XHQ+IGRpdi5jb25maWd1cmF0aW9uIHtcblx0XHRcdFx0cGFkZGluZzogMCAxMGVtO1xuXG5cdFx0XHRcdD4gaDMgeyBmb250LXNpemU6IDEuM2VtOyB9XG5cblx0XHRcdFx0OjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHdpZHRoOiAxMzBweDsgfVxuXG5cdFx0XHRcdG1hdC1jaGVja2JveCB7IG1hcmdpbi1sZWZ0OiAxZW07IH1cblxuXHRcdFx0XHRpbnB1dFt0eXBlPWNvbG9yXSB7IHdpZHRoOiAxMjBweDsgfVxuXHRcdFx0fVxuXG5cdFx0XHQ+IGRpdi52aWV3ZXIge1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0cGFkZGluZzogMCA1LjVlbSAwIDRlbTtcblx0XHRcdFx0b3ZlcmZsb3c6IHNjcm9sbDtcblxuXHRcdFx0XHQ+IC5wbGF0LWxldmVsIHtcblx0XHRcdFx0XHR3aWR0aDogMmVtO1xuXHRcdFx0XHRcdGhlaWdodDogY2FsYygyICogNiAqIDJlbSk7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAuNDEzN2VtO1xuXG5cdFx0XHRcdFx0PiBkaXYge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBkYXNoZWQgMXB4IGJsYWNrO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDJlbTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTJlbTtcblxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0Ji5sZWZ0IHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNDEzM2VtKSB0cmFuc2xhdGVZKDEuNzU4ZW0pIHJvdGF0ZSgtNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjVlbSAyZW0gMCAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLnJpZ2h0IHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjc1OGVtKSByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAgMCAyZW0gMC41ZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5mb290ZXIge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogZW5kO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDFlbTtcblxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG5cdFx0XHQ+IGEge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRmb250LWZhbWlseTogbW9saSwgc2Fucy1zZXJpZjtcblx0XHRcdFx0Y29sb3I6ICRiZWlnZTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0fVxuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHRoZWlnaHQ6IDJlbTtcblx0XHRcdFx0bWFyZ2luOiAwIDFlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0ID4gZGl2LmhlYWRlciwgOmhvc3QgPiBkaXYuZm9vdGVyIHtcbiAgbWFyZ2luOiAyZW0gMTBlbSAxZW0gMTBlbTtcbn1cbjpob3N0ID4gZGl2LmhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG46aG9zdCA+IGRpdi5oZWFkZXIgPiBkaXYudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZW5kO1xufVxuOmhvc3QgPiBkaXYuaGVhZGVyID4gZGl2LnRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogIzk0NzY1ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luOiAwIDAgMC4yZW0gMDtcbiAgZm9udC1zaXplOiAzZW07XG59XG46aG9zdCA+IGRpdi5oZWFkZXIgPiBkaXYudGl0bGUgc3Bhbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGxpZWJlbG90dGUsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgNDEsIDE0NiwgMC43NSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC4yZW0gMC40ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuICBib3gtc2hhZG93OiAwLjNlbSAwLjJlbSAwLjNlbSAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbjpob3N0ID4gZGl2LmhlYWRlciA+IGRpdi50aXRsZSBzcGFuLnN1YnRpdGxlID4gYTp2aXNpdGVkIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG46aG9zdCA+IGRpdi5ib2R5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZsZXg6IDE7XG59XG46aG9zdCA+IGRpdi5ib2R5ID4gZGl2LmNvbmZpZ3VyYXRpb24ge1xuICBwYWRkaW5nOiAwIDEwZW07XG59XG46aG9zdCA+IGRpdi5ib2R5ID4gZGl2LmNvbmZpZ3VyYXRpb24gPiBoMyB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG46aG9zdCA+IGRpdi5ib2R5ID4gZGl2LmNvbmZpZ3VyYXRpb24gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOiAxMzBweDtcbn1cbjpob3N0ID4gZGl2LmJvZHkgPiBkaXYuY29uZmlndXJhdGlvbiBtYXQtY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuOmhvc3QgPiBkaXYuYm9keSA+IGRpdi5jb25maWd1cmF0aW9uIGlucHV0W3R5cGU9Y29sb3JdIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuOmhvc3QgPiBkaXYuYm9keSA+IGRpdi52aWV3ZXIge1xuICBsaW5lLWhlaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCA1LjVlbSAwIDRlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbjpob3N0ID4gZGl2LmJvZHkgPiBkaXYudmlld2VyID4gLnBsYXQtbGV2ZWwge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IGNhbGMoMiAqIDYgKiAyZW0pO1xuICBtYXJnaW46IDAgMC40MTM3ZW07XG59XG46aG9zdCA+IGRpdi5ib2R5ID4gZGl2LnZpZXdlciA+IC5wbGF0LWxldmVsID4gZGl2IHtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMTJlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbn1cbjpob3N0ID4gZGl2LmJvZHkgPiBkaXYudmlld2VyID4gLnBsYXQtbGV2ZWwgPiBkaXYubGVmdCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjQxMzNlbSkgdHJhbnNsYXRlWSgxLjc1OGVtKSByb3RhdGUoLTQ1ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW0gMmVtIDAgMDtcbn1cbjpob3N0ID4gZGl2LmJvZHkgPiBkaXYudmlld2VyID4gLnBsYXQtbGV2ZWwgPiBkaXYucmlnaHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNzU4ZW0pIHJvdGF0ZSg0NWRlZyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJlbSAwLjVlbTtcbn1cbjpob3N0ID4gZGl2LmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cbjpob3N0ID4gZGl2LmZvb3RlciA+IGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogbW9saSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM5NDc2NWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0ID4gZGl2LmZvb3RlciBpbWcge1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luOiAwIDFlbTtcbn0iLCIkYmVpZ2U6IHJnYigxNDggMTE4IDk0KTtcbiRwdXJwbGU6IHJnYigxMDIgNDEgMTQ2KTtcbiRkYXJrLWJsdWU6IHJnYig1OCAxMDYgMTU0KTtcbiRsaWdodC1ibHVlOiByZ2IoMTIxIDEyNSAyNTQpO1xuJGdyZWVuOiByZ2IoNDMgODIgNTMpOyJdfQ== */");

/***/ }),

/***/ "./src/app/plait-color-simulator/plait-color-simulator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/plait-color-simulator/plait-color-simulator.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlaitColorSimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaitColorSimulatorComponent", function() { return PlaitColorSimulatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _plait_color_configuration_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plait-color-configuration.model */ "./src/app/plait-color-simulator/plait-color-configuration.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PlaitColorSimulatorComponent = class PlaitColorSimulatorComponent {
    constructor(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.leftColors = [];
        this.rightColors = [];
        this.threads = 5;
        this.facing = true;
        this.zoom = 0.75;
        let encodedConfig = this.route.snapshot.paramMap.get('config');
        if (encodedConfig) {
            let config = JSON.parse(atob(encodedConfig));
            Object.assign(this, config);
        }
    }
    strandsArray() {
        return Array(this.threads).fill(0).map((x, i) => i);
    }
    brinArrayLess(less) {
        if (this.threads < less) {
            return [];
        }
        else {
            return Array(this.threads - less).fill(0).map((x, i) => i);
        }
    }
    getLeftColor(i) {
        return this.leftColors[i] || '#FFFFFF';
    }
    getRightColor(i) {
        return this.facing
            ? this.leftColors[i] || '#FFFFFF'
            : this.rightColors[i] || '#FFFFFF';
    }
    onFacingChange() {
        if (!this.facing) {
            for (let i of this.strandsArray()) {
                if (!this.rightColors[i]) {
                    this.rightColors[i] = this.leftColors[i];
                }
            }
        }
    }
    getZoom() {
        return this.sanitizer.bypassSecurityTrustStyle(this.zoom + 'em');
    }
    save() {
        let config = new _plait_color_configuration_model__WEBPACK_IMPORTED_MODULE_3__["PlaitColorConfigurationModel"]();
        config.leftColors = this.leftColors;
        config.rightColors = this.rightColors;
        config.threads = this.threads;
        config.facing = this.facing;
        this.router.navigateByUrl('plait-color-simulator/' + btoa(JSON.stringify(config)));
    }
};
PlaitColorSimulatorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
PlaitColorSimulatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'plait-color-simulator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./plait-color-simulator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plait-color-simulator/plait-color-simulator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./plait-color-simulator.component.scss */ "./src/app/plait-color-simulator/plait-color-simulator.component.scss")).default]
    })
], PlaitColorSimulatorComponent);



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mathieugallo/Projects/whips-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map