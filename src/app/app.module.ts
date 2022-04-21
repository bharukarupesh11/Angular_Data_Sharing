import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { Appchild2Component } from './appchild2/appchild2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildcomponentComponent,
    Appchild2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
