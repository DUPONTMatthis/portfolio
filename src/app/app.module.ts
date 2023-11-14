import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404/error404.component';
import { CvComponent } from './pages/cv/cv.component';
import { CvPartComponent } from './shared/components/cv-part/cv-part.component';

@NgModule({
  declarations: [AppComponent, Error404Component, CvComponent, CvPartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
