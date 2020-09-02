import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
     FooterComponent,
     HeaderComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [
     FooterComponent,
     HeaderComponent
  ],
  providers: [],
})
export class CommonModules { }
