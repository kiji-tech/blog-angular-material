import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatButtonModule }   from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule }     from '@angular/material/icon';
import { MatSliderModule }   from '@angular/material/slider';
import { MatCardModule }     from '@angular/material/card';

import { SliderComponent }   from './sample/slider/slider.component';
import { ButtonComponent }   from './sample/button/button.component';
import { CheckboxComponent } from './sample/checkbox/checkbox.component';
import { CardComponent }     from './sample/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ButtonComponent,
    CheckboxComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule
  ],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
