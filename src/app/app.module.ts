/* Created By : Sangwin Gawande (https://sangw.in) */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Created By : Sangwin Gawande (https://sangw.in) */