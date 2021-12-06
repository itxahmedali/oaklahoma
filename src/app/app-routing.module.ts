import { NotfoundComponent } from './components/pages/notfound/notfound.component';
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
  // { path: '/*path', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent, data:{title:'Buy Oklahoma'} },
  { path: 'forbuy', component: ForbuyComponent, data:{title:'Buy Oklahoma | For Buy'} },
  { path: 'forrent', component: ForbuyComponent, data:{title:'Buy Oklahoma | For Rent'} },
  { path: 'aboutus', component: AboutusComponent, data:{title:'Buy Oklahoma | About Us'} },
  { path: 'articles', component: ArticlesComponent, data:{title:'Buy Oklahoma | Articles'} },
  { path: 'login', component: LoginmodalsComponent, data:{title:'Buy Oklahoma | Login'} },
  { path: 'signup', component: SignupComponent, data:{title:'Buy Oklahoma | Signup'} },
  { path: 'contactus', component: ContactusComponent, data:{title:'Buy Oklahoma | Contact Us'} },
  { path: 'propertiesbuy', component: PropertiesComponent, data:{title:'Buy Oklahoma | Properties Buy'} },
  { path: 'propertiesrent', component: PropertiesComponent, data:{title:'Buy Oklahoma |  Properties Rent'} },
  { path: 'propertyinner', component: PropertyinnerComponent, data:{title:'Buy Oklahoma | Properties Inner'} },
  { path: 'articles-inner', component: ArticleinnerComponent, data:{title:'Buy Oklahoma | Articles Inner'} },
  { path: 'forgot', component: ForgotpasswordComponent, data:{title:'Buy Oklahoma | Forgot Password'} },
  { path: 'terms', component: TermsComponent, data:{title:'Buy Oklahoma | Terms Of Use'} },
  { path: 'privacy', component: TermsComponent, data:{title:'Buy Oklahoma | Privacy Notice'} },
  { path: 'profile', component: ProfileComponent, data:{title:'Buy Oklahoma | Profile'} },
  { path: 'reset', component: ResetComponent, data:{title:'Buy Oklahoma | Reset Password'} },
  { path: 'testComp', component: TestCompoComponent, data:{title:'Buy Oklahoma | Test'} },
  { path: '404', component: NotfoundComponent, data:{title:'Buy Oklahoma | 404'} },
  { path: '**', redirectTo: '404', data:{title:'Buy Oklahoma | 404'} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
