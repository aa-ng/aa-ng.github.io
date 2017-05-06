import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TimeComponent } from './time/time.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child.component';
import { HttpRequestComponent } from './http-request/http-request.component';

@NgModule({
  declarations: [ AppComponent, IndexComponent, TimeComponent, NavComponent, FooterComponent, ParentComponent, ChildComponent, ChildComponent, HttpRequestComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, HttpModule]
})
export class AppModule { }
