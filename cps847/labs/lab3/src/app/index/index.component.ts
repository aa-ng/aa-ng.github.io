import { Component } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['../app.component.css'],
  providers: [WeatherService]
})
export class IndexComponent  {
	name : string;
	title : string;
	address : address;
	hobbies : string[];
	showHobbies : boolean;

	constructor(private weatherService: WeatherService) {
		this.name = 'Alex Ng';
		this.title = 'Welcome to my first Angular 2 App';
		this.address = {
			street : '120 Main Street',
			city : 'Toronto',
			province : 'ON'
		};
		this.hobbies = ['Programming',' Reading','Drawing','Games'];
		this.showHobbies = false;
    this.weatherService.getWeather().subscribe(posts => {
      console.log(posts);
    });
	}
	toggleHobbies() {
		if (this.showHobbies)
			this.showHobbies = false;
		else
			this.showHobbies = true;
	}
	addHobby(hobby : string) {
    this.hobbies.push(hobby);
	}
  deleteHobby(index : number) {
    this.hobbies.splice(index, 1);
  }
}

interface address {
	street : string;
	city : string;
	province : string;
}
