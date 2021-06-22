import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessesService } from './businesses/businesses.service';
import { BusinessComponent } from './business/business.component';
import { LicenceDisplayComponent } from './licence-display/licence-display.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BusinessesComponent, BusinessComponent, LicenceDisplayComponent, CustomerInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BusinessesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
