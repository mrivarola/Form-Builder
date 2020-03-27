import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { CanvasComponent } from './form-builder/canvas/canvas.component';
import { ControlsComponent } from './form-builder/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    CanvasComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
