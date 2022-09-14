import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './Gates/header/header.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './Gates/body/body.component';
import { PriceComponent } from './Gates/price/price.component';
import { FooterComponent } from './Gates/footer/footer.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, PriceComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
