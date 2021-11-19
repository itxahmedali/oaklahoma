import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { ForbuyComponent } from './components/pages/forbuy/forbuy.component';
import { ForrentComponent } from './components/pages/forrent/forrent.component';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { LoginmodalsComponent } from './components/pages/loginmodals/loginmodals.component';

import { HomeComponent } from './components/pages/home/home.component';
import { SignupComponent } from './components/pages/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'forbuy', component:ForbuyComponent},
  {path:'forrent', component:ForrentComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'articles', component:ArticlesComponent},
  {path:'login', component:LoginmodalsComponent},
  {path:'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }