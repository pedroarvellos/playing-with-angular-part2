import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { HoverCardDirective } from './directives/hover-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CardComponent,
    HoverCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
