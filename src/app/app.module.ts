import { NgModule } from '@angular/core';
// ng select
import { NgSelectModule } from '@ng-select/ng-select';
// ng pagination
import {NgxPaginationModule} from 'ngx-pagination';
// ng google map
import { AgmCoreModule } from '@agm/core';
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
import { TermsComponent } from './components/pages/terms/terms.component';
import { PropertyinnerComponent } from './components/pages/propertyinner/propertyinner.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ResetComponent } from './components/pages/reset/reset.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { NgwWowModule } from 'ngx-wow';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';


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
    TermsComponent,
    PropertyinnerComponent,
    ProfileComponent,
    ResetComponent,
    TestCompoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    NgSelectModule,
    FormsModule,
    NgxPaginationModule,
    NgwWowModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCab5ahH6KkodUavDwBCigXTL7ZbrkzS94'
    }),
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
