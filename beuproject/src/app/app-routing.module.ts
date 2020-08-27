import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
// import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
// import { LandingComponent } from './pages/landing/landing.component';
import { SignInComponent } from './pages/landing/sign-in/sign-in.component';
import { SignUpComponent } from './pages/landing/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
