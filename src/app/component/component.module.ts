import { IonicModule } from '@ionic/angular';
import { TopoLoginComponent } from './topo-login/topo-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TopoLoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TopoLoginComponent
  ]
})
export class ComponentModule { }
