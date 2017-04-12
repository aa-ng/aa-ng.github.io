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
var weather_service_1 = require("../services/weather.service");
var IndexComponent = (function () {
    function IndexComponent(weatherService) {
        this.weatherService = weatherService;
        this.name = 'Alex Ng';
        this.title = 'Welcome to my first Angular 2 App';
        this.address = {
            street: '120 Main Street',
            city: 'Toronto',
            province: 'ON'
        };
        this.hobbies = ['Programming', ' Reading', 'Drawing', 'Games'];
        this.showHobbies = false;
        this.weatherService.getWeather().subscribe(function (posts) {
            console.log(posts);
        });
    }
    IndexComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies)
            this.showHobbies = false;
        else
            this.showHobbies = true;
    };
    IndexComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    IndexComponent.prototype.deleteHobby = function (index) {
        this.hobbies.splice(index, 1);
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'index',
        template: "\n  \t\t\t\t<h1>Welcome to {{title}}</h1>\n  \t\t\t\t<p>Hello {{name}}</p>\n  \t\t\t\t<p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.province}}</p>\n  \t\t\t\t<form>\n            <label>Name</label>\n            <input type='text' name='name' placeholder='name' [(ngModel)]='name'><br>\n            <label>Email</label>\n            <input type='text' name='email' placeholder='email' [(ngModel)]='email'><br>\n            <label>Street</label>\n            <input type='text' name='street' placeholder='street' [(ngModel)]='address.street'><br>\n            <label>City</label>\n            <input type='text' name='city' placeholder='city' [(ngModel)]='address.city'><br>\n            <label>Province</label>\n            <input type='text' name='province' placeholder='province' [(ngModel)]='address.province'><br>\n          </form>\n          <form (submit)='addHobby(hobby.value)'>\n            <label>Add a hobbie</label>\n            <input type='text' #hobby ><br>\n          </form>\n  \t\t\t\t<div class='center'>\n  \t\t\t\t\t<button id='hobbies' (click)=\"toggleHobbies()\">\n  \t\t\t\t\t\t{{!showHobbies ? 'Show' : 'Hide'}} hobbies\n  \t\t\t\t\t</button>\n  \t\t\t\t</div>\n  \t\t\t\t<div *ngIf='showHobbies'>\n\t  \t\t\t\t<p>Hobbies</p>\n\t  \t\t\t\t<ul>\n\t  \t\t\t\t\t<li *ngFor='let hobby of hobbies; let i = index;'>\n\t  \t\t\t\t\t\t{{hobby}}\n                <button (click)='deleteHobby(i)'>delete</button>\n\t  \t\t\t\t\t</li>\n\t  \t\t\t\t</ul>\n\t  \t\t\t</div>\n  \t\t\t",
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map