import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForbuyComponent } from './components/pages/forbuy/forbuy.component';
import { ForrentComponent } from './components/pages/forrent/forrent.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { LoginmodalsComponent } from './components/pages/loginmodals/loginmodals.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { PropertiesComponent } from './components/pages/properties/properties.component';
import { ArticleinnerComponent } from './components/pages/articleinner/articleinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ForbuyComponent,
    ForrentComponent,
    AboutusComponent,
    ArticlesComponent,
    ContactusComponent,
    LoginmodalsComponent,
    SignupComponent,
    ForgotpasswordComponent,
    PropertiesComponent,
    ArticleinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
