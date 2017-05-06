"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var TimeComponent = (function () {
    function TimeComponent() {
        this.date = new Date();
        this.timer = 0;
    }
    TimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = 0;
        var timer = Rx_1.Observable.timer(2000, 1000);
        timer.subscribe(function (t) {
            _this.updateTime(t);
        });
    };
    TimeComponent.prototype.updateTime = function (t) {
        this.timer = t;
        this.date = new Date();
    };
    return TimeComponent;
}());
TimeComponent = __decorate([
    core_1.Component({
        selector: 'time',
        template: "\n  \t\t\t\t<p>{{date}}</p>\n  \t\t\t"
    }),
    __metadata("design:paramtypes", [])
], TimeComponent);
exports.TimeComponent = TimeComponent;
//# sourceMappingURL=time.component.js.map