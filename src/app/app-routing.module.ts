import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamManagementComponent } from "./pages/team-management/team-management.component";
import { LogsComponent } from "./pages/logs/logs.component";

const routes: Routes = [
  { path: "teams", component: TeamManagementComponent },
  { path: "logs", component: LogsComponent },
  { path: "", component: TeamManagementComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
