import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { SignInComponent } from './landing/sign-in/sign-in.component';
import { SignOutComponent } from './landing/sign-out/sign-out.component';

@NgModule({
  declarations: [
     HomeComponent,
     ProductListComponent,
     ProductDetailComponent,
     UserDetailComponent,
     SignInComponent,
     SignOutComponent
  ],
  imports: [
     BrowserModule,
  ],
     providers: [],
     bootstrap: []
})
export class PagesModule { }