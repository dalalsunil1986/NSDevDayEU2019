import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptSvgModule } from "nativescript-svg/angular";

import { HttpClientModule } from "@angular/common/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SpeakerService } from "./services/speaker.service";
import { ScheduleService } from "./services/schedule.service";

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, HttpClientModule, NativeScriptModule, NativeScriptHttpClientModule, NativeScriptSvgModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [SpeakerService, ScheduleService]
})
export class AppModule {}
