import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './sample/button/button.component';
import { SliderComponent } from './sample/slider/slider.component';

const routes: Routes = [
    { 'path' : '', 'redirectTo' : 'button', 'pathMatch' : 'full' }
  , { 'path' : 'button', 'component' : ButtonComponent }
  , { 'path' : 'slider', 'component' : SliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
