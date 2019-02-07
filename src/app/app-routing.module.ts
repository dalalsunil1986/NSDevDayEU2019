import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
  { path: "schedule", loadChildren: "~/app/schedule/schedule.module#ScheduleModule" },
  { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" },
  { path: "location", loadChildren: "~/app/location/location.module#LocationModule" },
  { path: "about", loadChildren: "~/app/about/about.module#AboutModule" }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
