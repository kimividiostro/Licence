import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessesService } from './businesses/businesses.service';

@NgModule({
  declarations: [AppComponent, BusinessesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BusinessesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
