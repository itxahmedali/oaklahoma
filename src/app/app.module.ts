import { NgModule } from '@angular/core';
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
import { ArticleComponent } from './components/pages/articles/article/article.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { LoginmodalsComponent } from './components/pages/loginmodals/loginmodals.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { PropertiesComponent } from './components/pages/properties/properties.component';
import { SearchComponent } from './components/pages/forbuy/search/search.component';
import { FiltersComponent } from './components/pages/forbuy/search/filters/filters.component';

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
    ArticleComponent,
    ContactusComponent,
    LoginmodalsComponent,
    SignupComponent,
    ForgotpasswordComponent,
    PropertiesComponent,
    SearchComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
