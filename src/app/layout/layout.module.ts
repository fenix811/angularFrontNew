import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [ FooterComponent, HeaderComponent, TabsComponent],
  imports: [
    CommonModule
  ],
  exports: [  FooterComponent, HeaderComponent, TabsComponent]
})
export class LayoutModule { }
