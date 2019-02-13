import { Injectable } from "@angular/core";
import { getString } from "application-settings";

@Injectable()
export class LocationService {
  private location: any;

  constructor() {
    const data = getString("data");
    this.location = JSON.parse(data).location;
  }

  getIntro(): string {
    return this.location.intro;
  }

  getAddress(): string {
    return this.location.address;
  }

  getParking(): string {
    return this.location.parking;
  }

  getPublicTransport(): string {
    return this.location.publictransport;
  }
}
