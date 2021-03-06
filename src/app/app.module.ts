import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { InputComponent } from "./pages/team-management/components/input/input.component";
import { CardComponent } from "./pages/team-management/components/card/card.component";
import { HoverCardDirective } from "./pages/team-management/directives/hover-card.directive";
import { HttpClientModule } from '@angular/common/http';
import { TeamManagementComponent } from './pages/team-management/team-management.component';
import { LogsComponent } from './pages/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CardComponent,
    HoverCardDirective,
    TeamManagementComponent,
    LogsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
