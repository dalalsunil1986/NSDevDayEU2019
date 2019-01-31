import { Injectable } from "@angular/core";
// import { Schedule } from "./../models/schedule.model";
// import { getString } from "application-settings";

declare var Promise: any;

@Injectable()
export class ScheduleService {
  // private schedule: Array<Schedule> = [];
  private schedule = [];

  constructor() {
    let dataJson = require("./../data/data.json");
    // JSON.parse(dataJson);
    // this._speakers = JSON.parse(dataJson).speakers;
    this.schedule = dataJson.schedule;
  }

  private dynamicSort(property) {
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

  // getSchedule(): Schedule[] {
  getSchedule() {
    this.schedule.sort(this.dynamicSort("time"));
    return this.schedule;
  }
}
