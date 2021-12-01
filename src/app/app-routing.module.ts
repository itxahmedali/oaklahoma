import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { ForbuyComponent } from './components/pages/forbuy/forbuy.component';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { LoginmodalsComponent } from './components/pages/loginmodals/loginmodals.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { PropertiesComponent } from './components/pages/properties/properties.component';
import { ArticleinnerComponent } from './components/pages/articleinner/articleinner.component';
import { PropertyinnerComponent } from './components/pages/propertyinner/propertyinner.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ResetComponent } from './components/pages/reset/reset.component';
import { TestCompoComponent } from './test-compo/test-compo.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'forbuy', component: ForbuyComponent },
  { path: 'forrent', component: ForbuyComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'login', component: LoginmodalsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'propertiesbuy', component: PropertiesComponent },
  { path: 'propertiesrent', component: PropertiesComponent },
  { path: 'propertyinner', component: PropertyinnerComponent },
  { path: 'articles-inner', component: ArticleinnerComponent },
  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'testComp', component: TestCompoComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
