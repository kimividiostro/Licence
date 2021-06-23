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
import { LicenceRenewComponent } from './licence-renew/licence-renew.component';

@NgModule({
  declarations: [AppComponent, BusinessesComponent, BusinessComponent, LicenceDisplayComponent, CustomerInputComponent, LicenceRenewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BusinessesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
