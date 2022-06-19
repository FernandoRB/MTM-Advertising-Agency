import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './Components/description/description.component';
import { GaleryComponent } from './Components/galery/galery.component';

import { InformationsComponent } from './Components/informations/informations.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    GaleryComponent,
    InformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
