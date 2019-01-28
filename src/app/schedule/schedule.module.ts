import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ScheduleRoutingModule } from "./schedule-routing.module";
import { ScheduleComponent } from "./schedule.component";

import { MenuModule } from "./../menu/menu.module";

@NgModule({
  imports: [NativeScriptCommonModule, ScheduleRoutingModule, MenuModule],
  declarations: [ScheduleComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ScheduleModule {}
