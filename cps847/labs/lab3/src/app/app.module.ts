import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { TimeComponent } from './components/time.component';
import { NavComponent } from './components/nav.component';
import { FooterComponent } from './components/footer.component';

@NgModule({
  declarations: [ AppComponent, IndexComponent, TimeComponent, NavComponent, FooterComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
