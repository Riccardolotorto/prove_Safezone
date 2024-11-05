import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CrimesRateChicagoComponent } from './crimes-rate-chicago/crimes-rate-chicago.component';


@NgModule({
  declarations: [
    AppComponent,
    CrimesRateChicagoComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
