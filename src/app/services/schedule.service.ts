import { Injectable } from "@angular/core";
import { Schedule } from "./../models/schedule.model";
import { getString } from "application-settings";

@Injectable()
export class ScheduleService {
  private schedule: Array<Schedule> = [];

  constructor() {
    const data = getString("data");
    this.schedule = JSON.parse(data).schedule;
  }

  private dynamicSort(property: string) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  getSchedule(): Schedule[] {
    this.schedule.sort(this.dynamicSort("time"));
    return this.schedule;
  }
}
