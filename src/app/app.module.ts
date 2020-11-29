import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeCardsComponent } from './components/home-cards/home-cards.component';
import { HomeReviewsComponent } from './components/home-reviews/home-reviews.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomeOpenerComponent } from './components/home-opener/home-opener.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactusFormComponent } from './components/contactus-form/contactus-form.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeLogosComponent } from './components/home-logos/home-logos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactusComponent,
    OrderComponent,
    ProductsComponent,
    HomeCardsComponent,
    HomeReviewsComponent,
    HomeAboutComponent,
    HomeOpenerComponent,
    FooterComponent,
    NavbarComponent,
    ContactusFormComponent,
    HomeLogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
