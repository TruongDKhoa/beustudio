import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModules } from './common/common.module';
import { ProductServices } from './services/product.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CommonModules
  ],
  exports: [
     CommonModule,
     CommonModules
  ],
  providers: [ProductServices],
})
export class SharedModule { }
