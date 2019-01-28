(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");








var routes = [
    // { path: '',component: AppComponent },
    // use a colon and parameter name to include a parameter in the url
    // { path: 'gamma/:id', component: GammaComponent },
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/movies' },
    { path: 'cakes/new', component: _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"] },
    { path: 'reviews/new/:id', component: _review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"] },
    { path: 'movies', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'movies/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] }
    // the ** will catch anything that did not match any of the above routes
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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

module.exports = "\r\ndiv{\r\n\twidth: 400px;\r\n\tmargin: 5%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7O0FBRVgiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXZ7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG5cdG1hcmdpbjogNSU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n\n\t<h1>Squishy Tomatoes</h1>\n\n<!-- \t<button (click)=\"showCreate()\">New Cake</button> -->\n<!-- \t<button [routerLink]=\"['/list']\">Cake List</button>\n -->\t<router-outlet></router-outlet> \n</div>\n \n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    // ngOnInit will run when the component is initialized, after the constructor method.
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_13__["NgPipesModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tcolor: red;\r\n}\r\n\r\n.top{\r\n\twidth: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ye1xyXG5cdGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi50b3B7XHJcblx0d2lkdGg6IDYwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class = \"top\" >\n\t<h1>Submit a movie and your review</h1>\n\t<!-- Back-end validations -->\n\t<p class = \"error\">{{error.title}}</p>\n\t<p class = \"error\">{{error.name}}</p>\n\t<p class = \"error\">{{error.rating}}</p>\n\t<p class = \"error\">{{error.review}}</p>\n\t<!-- Front-end validations -->\n\n\n\n\t<p class = \"error\" *ngIf = \"newCake.title.length < 1\">Movies must have a title</p>\n\n\t<p class = \"error\" *ngIf = \"newCake.title.length >= 1 && newCake.title.length <3 \">Your title cannot be less than 3 characters long!</p>\n\n\t\t<p class = \"error\" *ngIf = \"newReview.reviewer.length < 1\">You must provide your name</p>\n\n\n\t\t<p class = \"error\" *ngIf = \"newReview.reviewer.length >= 1 && newReview.reviewer.length <3\">Your name cannot be less than 3 characters long!</p>\n\n\n\t\t<p class = \"error\" *ngIf = \"newReview.comment.length <1\">You must provide a review</p>\n\n\t\t<p class = \"error\" *ngIf = \"newReview.comment.length >= 1 && newReview.comment.length <3 \">Your review must be longer than 3 characters long</p>\n\n\n\n\t\t</div>\n\n\n\n\t\t<form (submit)=\"addCake()\">\n\t\t\t<!-- use the json pipe to see how newTask changes in real time -->\n\t\t\t<!-- \t    <p> {{ newCake | json }} </p> -->\n\t\t\t<!-- validations for entering baker info -->\n\n\t\t\t<ul><b>Movie Title: </b><input type=\"text\" name=\"newCake.title\" [(ngModel)] = \"newCake.title\" /></ul>\n\t\t\t<ul><b>Your Name: </b><input type=\"text\" name=\"newReview.reviewer\" [(ngModel)] = \"newReview.reviewer\" />\n\n\t\t\t</ul>\n\n\n\t\t\t<!-- \t    <b>Title: </b><input type=\"text\" name=\"newCake.imgurl\" [(ngModel)] = \"newCake.imgurl\" /> -->\n\t\t\t\n\t\t\t<ul><b>Stars: </b>\n\t\t\t\t<select input type = \"text\"  name=\"newReview.rating\" [(ngModel)] = \"newReview.rating\"  >\n\n\t\t\t\t\t<option value = \"1\">1</option>\n\t\t\t\t\t<option value = \"2\">2</option>\n\t\t\t\t\t<option value = \"3\">3</option>\n\t\t\t\t\t<option value = \"4\">4</option>\n\t\t\t\t\t<option value = \"5\">5</option>\n\n\t\t\t\t</select></ul>\n\n\t\t\t\t<ul><b>Your review: </b><input type=\"text\" name=\"newReview.comment\" [(ngModel)] = \"newReview.comment\" /></ul>\n\n\t\t\t\t<input  type=\"submit\" value=\"Submit\"/>\n\n\t\t\t</form>\n\n\t\t\t<button (click) = \"cancel()\">Cancel</button>\n\n<!-- \t\t\t{{newCake | json}}\n\n\n\t\t\t{{newReview | json}} -->\n\n<!-- \n\t[disabled]=\"newReview.reviewer.length < 1 || newReview.reviewer.length < 1\" -->\n\n"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.updateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.newCake = {
            name: "",
            title: "",
            reviews: []
        };
        this.newReview = {
            reviewer: "",
            rating: 1,
            comment: ""
        };
        this.error = {
            title: "",
            name: "",
            review: "",
            rating: ""
        };
        // this.showAll();
    };
    // showAll(): void{
    //   let observable = this._httpService.getAll();
    //   observable.subscribe(data => {
    //     this.cakes = data['cakes'];
    //     console.log(this.cakes);
    //   }); 
    // }  
    CreateComponent.prototype.addCake = function () {
        var _this = this;
        console.log("component:");
        console.log(this.newCake);
        console.log(this.newReview);
        this.newCake['name'] = this.newReview['reviewer'];
        var observable = this._httpService.addCake(this.newCake);
        observable.subscribe(function (data) {
            console.log("Within Observable:");
            console.log(data);
            if (data['error'] == null) {
                // console.log(data['cake']);
                // console.log(data['cake']._id);
                // this.newCake = {
                //   baker: "",
                //   imgurl: ""
                // };
                var observable_1 = _this._httpService.addReview(data['cake']._id, _this.newReview);
                observable_1.subscribe(function (data) {
                    console.log("Within Observable:");
                    console.log(data);
                    if (data['error'] == null) {
                        _this.newCake = {
                            baker: "",
                            imgurl: ""
                        };
                        _this.updateEmitter.emit(true);
                    }
                    else {
                        _this.error = data['error']['message'];
                    }
                });
                _this.updateEmitter.emit(true);
            }
            else {
                if (data['error']['errors']['name']) {
                    _this.error['name'] = "Name is required for a movie.";
                }
                if (data['error']['errors']['title']) {
                    _this.error['title'] = "Title is required for a movie.";
                }
                _this.error['rating'] = "Rating is required for a movie.";
                _this.error['review'] = "Review is required for a movie.";
                // console.log(data['error']['messsage']);
                // console.log(data['error']['errors']['name']);
                // console.log(data['error']['errors']['title']);
                // this.error = data['error']['message']; 
            }
        });
    };
    CreateComponent.prototype.cancel = function () {
        this.updateEmitter.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateComponent.prototype, "formToShow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateComponent.prototype, "updateEmitter", void 0);
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <div class = \"top\" >\n\t<h1>Upload your Cake for Review!</h1>\n\n\t\t<p class = \"error\">{{error}}</p>\n\n\t\t<p class = \"error\" *ngIf = \"newCake.imgurl.length >= 1 && newCake.imgurl.length <3 \">Your image cannot be blank!</p>\n\t\t<p class = \"error\" *ngIf = \"newCake.baker.length >= 1 && newCake.baker.length <3\">Your comment cannot be blank!</p>\n\n</div> -->\n\n<form (submit)=\"updateCake(childComponentVariable._id)\">\n\n\t<b>Baker:</b> <input type =\"text\" name = \"childComponentVariable.baker\" [(ngModel)] = \"childComponentVariable.baker\">\n\n\t<b>ImgUrl: </b> <input type = \"text\" name = \"childComponentVariable.imgurl\" [(ngModel)] = \"childComponentVariable.imgurl\">\n\n\t<input type = \"submit\" value = \"Submit Changes\"/>\n\n</form>\n\n<!-- {{childComponentVariable | json}}\n -->\n\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.dataGoingToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.updateCake = function (childId) {
        var _this = this;
        console.log(childId);
        console.log(this.childComponentVariable);
        var observable = this._httpService.updateCake(childId, this.childComponentVariable);
        observable.subscribe(function (data) {
            console.log("Within Observable:");
            console.log(data);
            console.log(_this.dataGoingToParent.emit(true));
            _this.dataGoingToParent.emit(true);
            // this.showAll();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "childComponentVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "dataGoingToParent", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.getAll();
        // this.deleteTask();
        // this.addCake(cake);
    }
    HttpService.prototype.getAll = function () {
        return this._http.get('/getAll');
    };
    // getTask(id){
    // // our http response is an Observable, store it in a variable
    // // let tempObservable = this._http.get('/tasks/:id');
    // // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // // tempObservable.subscribe(data => 
    // // 	console.log("Got our one task!", data)
    // // 	);
    // 	return this._http.get('/tasks/'+id);
    // }
    // deleteTask(){
    // // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.delete('/destroy/:id');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Delete this task!", data));
    // }
    HttpService.prototype.getCake = function (id) {
        console.log("http.service.ts");
        console.log(id);
        return this._http.get("/getCake/" + id);
    };
    HttpService.prototype.addCake = function (cake) {
        console.log("http.service.ts:");
        console.log(cake);
        // use the .post() method of HttpClient
        // num must be an object
        // provide the url of your post route - make sure this is set up in your server!
        return this._http.post('/new', cake);
    };
    HttpService.prototype.updateCake = function (id, updatedCake) {
        console.log("http.service.ts:");
        console.log(updatedCake);
        // use the .post() method of HttpClient
        // num must be an object
        // provide the url of your post route - make sure this is set up in your server!
        return this._http.put('/update/' + id, updatedCake);
    };
    HttpService.prototype.addReview = function (id, review) {
        console.log("http.service.ts: id:" + id);
        console.log(review);
        return this._http.put('/newReview/' + id, review);
    };
    HttpService.prototype.removeObj = function (id) {
        console.log("http.service.ts:");
        console.log(id);
        return this._http.delete('/removeObj/' + id);
    };
    HttpService.prototype.removeReview = function (id, obj) {
        console.log("http.service.ts:");
        console.log(id);
        console.log(obj);
        return this._http.post('/removeReview/' + id, obj);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\timg{\r\n\t\theight:300px;\r\n\t\twidth: 300px;\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\r\ntable{\r\n\toutline:2px solid black;\r\n\twidth: 800px;\r\n\tpadding: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0VBQ0MsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7Q0FDdEI7O0FBRUQ7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0aW1ne1xyXG5cdFx0aGVpZ2h0OjMwMHB4O1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdH1cclxuXHJcbnRhYmxle1xyXG5cdG91dGxpbmU6MnB4IHNvbGlkIGJsYWNrO1xyXG5cdHdpZHRoOiA4MDBweDtcclxuXHRwYWRkaW5nOiAzJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\t<!-- \t\t<p class = \"error\" *ngIf = \"newReview.rating.length < 1\">Your rating cannot be blank!</p>\n   <p class = \"error\" *ngIf = \"newReview.comment.length < 1\">Your comment cannot be blank!</p> -->\n\n<!--    {{cakes | json}}\n-->\n\n<div>\n\n<h1>Movie List</h1>\n\n<button (click)=\"showCreate()\">Add a new movie</button>\n<router-outlet></router-outlet> \n\n</div>\n\n<table *ngIf = \"cakes.length != 0\">\n\n  <thead>\n    <tr>\n      <th>Movie Title</th>\n      <!--         <th>Picture</th> -->\n      <th>Average Rating</th>\n      <th>Available Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n\n    <tr *ngFor = \"let i of cakes | orderBy: 'baker'\">\n      <td>{{i.title}}</td>\n      <!--         <td><img [routerLink]=\"['/view',i._id]\" type = \"image\" src = \"{{i.imgurl}}\" ></td> -->\n      <td>{{i.average}}</td>\n      <td>\n       <button [routerLink]=\"['/movies',i._id]\">Read Reviews</button>\n       <button [routerLink]=\"['/reviews','new',i._id]\">Write Review</button>\n<!--        <button (click)=\"onButtonClickShowForm(i._id)\">Edit</button> -->\n       <button (click)=\"removeObj(i._id)\">Delete</button>\n     </td>\n   </tr>\n </tbody>\n</table>\n\n<div class = \"right\">\n\n  <app-create *ngIf=\"showForm == true\" [formToShow]=\"\" (updateEmitter) = \"functionAfterChildDataReceived($event)\"></app-create>\n\n  <app-edit *ngIf = \"parentVariable != null\" [childComponentVariable]=\"parentVariable\" (dataGoingToParent) = \"hideEditForm($event)\"></app-edit>\n\n</div>\n\n<!-- (click) = \"childReview(i)\" -->"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListComponent = /** @class */ (function () {
    function ListComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.showForm = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.cakes = [];
        this.showAll();
    };
    ListComponent.prototype.showCreate = function () {
        this.showForm = true;
    };
    ListComponent.prototype.showAll = function () {
        var _this = this;
        var observable = this._httpService.getAll();
        observable.subscribe(function (data) {
            _this.cakes = data['cakes'];
            // console.log(this.cakes[0]);
            // console.log(this.cakes[1]);
            // console.log("Cake List Total:"+this.cakes.length);
            // console.log(this.cakes[0].reviews[0].rating);
            // console.log(this.cakes[0].reviews[1].rating);
            // console.log("Rating list Total for first Cake:"+this.cakes[0].reviews.length)
            // console.log("Rating list Total for second Cake:"+this.cakes[1].reviews.length)
            var sum = 0;
            console.log("Calculate Average Here:");
            for (var i = 0; i < _this.cakes.length; i++) {
                console.log("Inside first for loop");
                var sum = 0;
                for (var j = 0; j < _this.cakes[i].reviews.length; j++) {
                    console.log("Inside 2nd for loop");
                    sum = sum + parseInt(_this.cakes[i].reviews[j].rating);
                    console.log(sum);
                }
                //  console.log("Calculating average and pushing");
                // this.average = {average:(sum/this.cakes[i].reviews.length)};
                _this.average = sum / _this.cakes[i].reviews.length;
                _this.cakes[i]['average'] = _this.average;
                // .push(this.average);
                // console.log(this.average);
                // console.log("Finished: "+ this.cakes);
            }
            // console.log("Finished: "+ this.cakes[0]);
        });
    };
    ListComponent.prototype.functionAfterChildDataReceived = function (event) {
        console.log(event);
        if (event == true) {
            this.showForm = false;
            this.showAll();
        }
    };
    ListComponent.prototype.hideEditForm = function (event) {
        console.log("Outside of HideEditForm");
        console.log(event);
        if (event == true) {
            console.log("Within If of HideEditForm");
            console.log(this.parentVariable);
            this.parentVariable = null;
            this.showAll();
        }
    };
    ListComponent.prototype.onButtonClickShowForm = function (id) {
        var _this = this;
        console.log("On Button Click Show Form Component");
        console.log(id);
        var observable = this._httpService.getCake(id);
        observable.subscribe(function (data) {
            _this.parentVariable = data['cake'][0];
            console.log("Return values from database.");
            console.log(data['cake'][0]);
            console.log(_this.parentVariable);
        });
    };
    ListComponent.prototype.removeObj = function (id) {
        var _this = this;
        var observable = this._httpService.removeObj(id);
        observable.subscribe(function (data) {
            _this.showAll();
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\timg{\r\n\t\theight:300px;\r\n\t\twidth: 300px;\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\r\n.error{\r\n\tcolor:red;\r\n}\r\n\r\ndiv{\r\n\twidth: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztFQUNDLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0NBQ3RCOztBQUVEO0NBQ0MsU0FBUztBQUNWOztBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0aW1ne1xyXG5cdFx0aGVpZ2h0OjMwMHB4O1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdH1cclxuXHJcbi5lcnJvcntcclxuXHRjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbmRpdntcclxuXHR3aWR0aDogNTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <img src = \"{{cake.imgurl}}\">\n-->\n\n<div>\n\t<p class = \"error\" *ngIf = \"review.comment.length >= 1 && review.comment.length <3\">Your review cannot be less than 3 characters long!</p>\n\n\t<p class = \"error\" *ngIf = \"review.rating < 1\">Your rating cannot be blank!</p>\n\t<p class = \"error\" *ngIf = \"review.reviewer < 1\">You must provide your name</p>\n\t<p class = \"error\" *ngIf = \"review.comment < 1\">You must provide a review</p>\n\n\t<h1>Add a review for {{cake.title}}</h1>\n\t<form (submit) = \"addReview(cake._id)\">\n\n\t\t<ul><b>Your Name: </b><input type =\"text\" name =\"review.reviewer\" [(ngModel)] = \"review.reviewer\"></ul>\n\t\t<ul><b>Stars: </b>\n\t\t\t<select input type = \"text\"  name=\"review.rating\" [(ngModel)] = \"review.rating\"  >\n\n\t\t\t\t<option value = \"1\">1</option>\n\t\t\t\t<option value = \"2\">2</option>\n\t\t\t\t<option value = \"3\">3</option>\n\t\t\t\t<option value = \"4\">4</option>\n\t\t\t\t<option value = \"5\">5</option>\n\n\t\t\t</select></ul>\n\n\t\t\t<ul><b>Your Review: </b> \n\t\t\t\t<textarea name=\"review.comment\" [(ngModel)] = \"review.comment\"> </textarea>\n\t\t\t</ul>\n\n\t\t\t<br>\n\n\t\t\t<input [disabled] = \"review.comment.length < 3\"  type = \"submit\" value = \"Submit Review\">\n\n\t\t</form>\n\n\t</div>\n\n\t<button (click) = \"cancel()\">Cancel</button>\n\n<!-- \n\t{{review | json}} -->\n\n\n\n<!-- <p class = \"error\" *ngIf = \"review.rating.length = 0\">Your rating cannot be blank!</p>\n-->\n\n<!-- <p class = \"error\" *ngIf = \"review.comment.length > 1 && review.comment.length < 3\">Your comment cannot be less than 3 characters long!</p> -->\n\n\n<!--  -->\n\n\n<!-- \t{{review | json}} -->\n\n<!-- \n\t<form (submit)=\"addCake()\">\n\n\t    <b>Baker: </b><input type=\"text\" name=\"newCake.baker\" [(ngModel)] = \"newCake.baker\" />\n\t    <b>ImgUrl: </b><input type=\"text\" name=\"newCake.imgurl\" [(ngModel)] = \"newCake.imgurl\" />\n\t    <input [disabled]=\"newCake.baker.length < 1 || newCake.imgurl.length < 1\" type=\"submit\" value=\"Upload Cake\"/>\n\t</form> -->"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { HttpService } from '../http.service';
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.getCake(params['id']);
        });
        this.cake = {
            name: "",
            title: "",
            reviews: ""
        };
        this.review = {
            reviewer: "",
            rating: 1,
            comment: ""
        };
    };
    //on task component html, make a form to submit and on the submit run the below function with an observable to update data to the db and run this emit after (inside the subscribe)
    //this data will be transferred to the parent who is listening for this event on the parent html.
    //once the data transfers to the parent from the emit, the parent will run a function defined on the same line.
    ReviewComponent.prototype.getCake = function (id) {
        var _this = this;
        var observable = this._httpService.getCake(id);
        observable.subscribe(function (data) {
            _this.cake = data['cake'][0];
        });
    };
    ReviewComponent.prototype.addReview = function (id) {
        console.log("Component: " + id);
        console.log(this.review);
        var observable = this._httpService.addReview(id, this.review);
        observable.subscribe(function (data) {
            console.log("Data received from observable in component.");
        });
        // this.review = {
        //   rating: "",
        //   comment: ""
        // }
        this._router.navigate(['/']);
    };
    ReviewComponent.prototype.cancel = function () {
        this._router.navigate(['/']);
    };
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\timg{\r\n\t\theight:300px;\r\n\t\twidth: 300px;\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\r\n\t.bold{\r\n\t\tfont-weight: bold;\r\n\t}\r\n\r\n\ttable{\r\n\t\twidth: 500px;\r\n\t}\r\n\r\n\tth{\r\n\r\n\t\toutline: 1px solid black;\r\n\t}\r\n\r\n\ttd{\r\n\t\ttext-align: center;\r\n\t}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0VBQ0MsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7O0VBRUMsd0JBQXdCO0NBQ3pCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHRpbWd7XHJcblx0XHRoZWlnaHQ6MzAwcHg7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0fVxyXG5cclxuXHQuYm9sZHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0dGFibGV7XHJcblx0XHR3aWR0aDogNTAwcHg7XHJcblx0fVxyXG5cclxuXHR0aHtcclxuXHJcblx0XHRvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XHJcblx0fVxyXG5cclxuXHR0ZHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9Il19 */"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- <img src =\"{{cake.imgurl}}\"> -->\n\n<button (click) =\"removeObj(cake._id)\">Delete Movie</button>\n<!-- \n<form (submit) = \"addReview(cake._id)\">\n\n\t<ul><b>Rating: </b>\n\t\t<select input type = \"text\"  name=\"review.rating\" [(ngModel)] = \"review.rating\"  >\n\t\t\t<option value = \"1\">1</option>\n\t\t\t<option value = \"2\">2</option>\n\t\t\t<option value = \"3\">3</option>\n\t\t\t<option value = \"4\">4</option>\n\t\t\t<option value = \"5\">5</option>\n\t\t</select></ul>\n\n\t\t<b>Review: </b> \n\t\t<br>\n\t\t<textarea name=\"review.comment\" [(ngModel)] = \"review.comment\"> </textarea>\n\t\t<br>\n\t\t<input type = \"submit\" value = \"Submit Review\">\n\t</form> -->\n\n<!-- \t<ul><span class ='bold'>Baker: </span>{{cake.baker}}</ul>\n\n\t<p *ngIf = \"NaN\"></p> \n\t<ul><span class ='bold'>Average Rating: </span> \n\t\t<ul *ngIf = \"average\">{{average}}</ul>\n\t</ul> -->\n\n\t<h1>Reviews for {{cake.title}}</h1>\n\n\t<table>\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Reviewer</th>\n\t\t\t\t<th>Stars</th>\n\t\t\t\t<th>Reviews</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t</thead>\n\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let i of cake.reviews | orderBy: '-rating'\">\n\t\t\t\t<td>{{i.reviewer}}</td>\n\t\t\t\t<td>{{i.rating}}</td>\t\t\t\t\n\t\t\t\t<td>{{i.comment}}</td>\n\t\t\t\t<td><button (click) = \"deleteReview(i._id)\">Delete</button></td>\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewComponent = /** @class */ (function () {
    function ViewComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cake = {
            baker: "",
            imgurl: "",
            reviews: ""
        };
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.getCake(params['id']);
        });
        this.review = {
            rating: "",
            comment: ""
        };
        this.average;
        // console.log(this._route.snapshot.params.id);
        // this.getAverage();
    };
    ViewComponent.prototype.getCake = function (id) {
        var _this = this;
        console.log(id);
        var observable = this._httpService.getCake(id);
        observable.subscribe(function (data) {
            _this.cake = data['cake'][0];
            console.log(_this.cake);
            console.log("Calculate Average Here.");
            var sum = 0;
            // console.log(this.cake.reviews.length);
            // console.log(this.cake.reviews[0].rating);
            for (var i = 0; i < _this.cake.reviews.length; i++) {
                sum = sum + parseInt(_this.cake.reviews[i].rating);
            }
            console.log(sum);
            _this.average = (sum / _this.cake.reviews.length).toFixed(2);
            console.log(_this.average);
        });
    };
    ViewComponent.prototype.deleteReview = function (reviewId) {
        console.log("Child component: ");
        for (var i = 0; i < this.cake.reviews.length; i++) {
            console.log("In the for loop");
            if (this.cake.reviews[i]._id == reviewId) {
                var temp = this.cake.reviews[i];
                this.cake.reviews[i] = this.cake.reviews[this.cake.reviews.length - 1];
                this.cake.reviews[this.cake.reviews.length - 1] = temp;
                this.cake.reviews.pop();
            }
        }
        console.log("Outside of for loop: ");
        console.log(this.cake);
        var observable = this._httpService.removeReview(this.cake._id, this.cake);
        observable.subscribe(function (data) {
            console.log("Review Component Observable:");
            console.log(data);
        });
        this.getCake(this.cake._id);
    };
    ViewComponent.prototype.addReview = function (id) {
        console.log("Component: " + id);
        console.log(this.review);
        var observable = this._httpService.addReview(id, this.review);
        observable.subscribe(function (data) {
            console.log("Data received from observable in component.");
        });
        this.review = {
            rating: "",
            comment: ""
        };
        this.getCake(id);
    };
    ViewComponent.prototype.removeObj = function (id) {
        var _this = this;
        var observable = this._httpService.removeObj(id);
        observable.subscribe(function (data) {
            _this._router.navigate(['/']);
        });
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewComponent);
    return ViewComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Daniel Lam\desktop\javascript_stack\assignments\angular\movies\angular_app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map