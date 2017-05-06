import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'time',
  template: `
  				<p>{{date}}</p>
  			`
})
export class TimeComponent  {
	date;
	timer : number;

	constructor() {
		this.date = new Date();
		this.timer = 0;
	}

	ngOnInit() {
		this.timer = 0;
		let timer = Observable.timer(2000,1000);
		timer.subscribe(t=> {
			this.updateTime(t);
		});
	}

	updateTime(t) {
		this.timer = t;
		this.date = new Date();
	}
}
