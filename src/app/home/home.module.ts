import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListcomponentComponent } from './components/listcomponent/listcomponent.component';
import { GridcomponentComponent } from './components/gridcomponent/gridcomponent.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ListcomponentComponent, GridcomponentComponent]
})
export class HomePageModule {}
