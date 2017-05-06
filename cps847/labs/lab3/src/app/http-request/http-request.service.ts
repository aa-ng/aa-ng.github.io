import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpRequestService {
  base_url : string;
  service : string;
  location : string;
  units : string;
  key : string;

  constructor(private http: Http){
    console.log('weather service initialized');
    this.base_url = 'http://api.openweathermap.org/data/2.5';
    this.service = '/weather?q=';
    this.location = '/toronto';
    this.units = '&units=metric';
    this.key = '&APPID=a0376b589fd728ffccbe4ccf6e2a5a39';
  }

  getWeather(){
    //this.weather = this.base_url+this.location+this.units+this.key;
    return this.http.get('http://date.jsontest.com')
      .map(res => res.json());
  }
}
