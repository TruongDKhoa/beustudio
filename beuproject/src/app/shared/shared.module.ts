import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModules } from './common/common.module';
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
  providers: [],
})
export class SharedModule { }
