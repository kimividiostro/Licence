import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessesService } from './businesses/businesses.service';
import { BusinessComponent } from './business/business.component';
import { LicenceDisplayComponent } from './licence-display/licence-display.component';

@NgModule({
  declarations: [AppComponent, BusinessesComponent, BusinessComponent, LicenceDisplayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BusinessesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
