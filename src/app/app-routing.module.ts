import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/speakers", pathMatch: "full" },
  { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
  { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
