import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatButtonModule }   from '@angular/material/button';
import { MatCardModule }     from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule }     from '@angular/material/icon';
import { MatSliderModule }   from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

import { SliderComponent }   from './sample/slider/slider.component';
import { ButtonComponent }   from './sample/button/button.component';
import { CheckboxComponent } from './sample/checkbox/checkbox.component';
import { CardComponent }     from './sample/card/card.component';
import { DialogComponent } from './sample/dialog/dialog.component';
import { DialogPageComponent } from './sample/dialog/dialog-page/dialog-page.component';
import { TabsComponent } from './sample/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ButtonComponent,
    CheckboxComponent,
    CardComponent,
    DialogComponent,
    DialogPageComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatSliderModule,
    MatTabsModule
  ],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
