import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPrimeNgModule } from 'CustomPrimeNg/custom-prime-ng/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomPrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
