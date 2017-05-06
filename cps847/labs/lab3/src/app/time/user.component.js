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
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'Alex Ng';
        this.title = 'Welcome to my first Angular 2 App';
        this.address = {
            street: '120 Main Street',
            city: 'Toronto',
            province: 'ON'
        };
        this.hobbies = ['Programming', ' Reading', 'Drawing', 'Games'];
        this.date = new Date();
        this.showHobbies = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies)
            this.showHobbies = false;
        else
            this.showHobbies = true;
    };
    UserComponent.prototype.refresh = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n  \t\t\t\t<h1>Welcome to {{title}}</h1>\n  \t\t\t\t<p>Hello {{name}}</p>\n  \t\t\t\t<p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.province}}</p>\n  \t\t\t\t<time></time>\n  \t\t\t\t<div class='center'>\n  \t\t\t\t\t<button id='hobbies' (click)=\"toggleHobbies()\">\n  \t\t\t\t\t\t{{!showHobbies ? 'Show' : 'Hide'}} hobbies\n  \t\t\t\t\t</button>\n  \t\t\t\t</div>\n  \t\t\t\t<div *ngIf='showHobbies'>\n\t  \t\t\t\t<p>Hobbies</p>\n\t  \t\t\t\t<ul>\n\t  \t\t\t\t\t<li *ngFor='let hobby of hobbies'>\n\t  \t\t\t\t\t\t{{hobby}}\n\t  \t\t\t\t\t</li>\n\t  \t\t\t\t</ul>\n\t  \t\t\t</div>\n  \t\t\t",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map