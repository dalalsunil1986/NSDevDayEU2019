import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptSvgModule } from "nativescript-svg/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SpeakerService } from "./services/speaker.service";
import { ScheduleService } from "./services/schedule.service";
import { AboutService } from "./services/about.service";
import { LocationService } from "./services/location.service";

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptSvgModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [SpeakerService, ScheduleService, AboutService, LocationService]
})
export class AppModule {}
