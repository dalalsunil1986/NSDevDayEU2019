import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { setString, getString, remove } from "application-settings";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { alert } from "tns-core-modules/ui/dialogs";

import { Config } from "./../config";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private page: Page, private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.page.actionBarHidden = true;

    if (Config.debug) {
      console.log("Remove data from Application Settings");
      remove("data");
    }
    let data = getString("data");
    let version: number = data !== undefined ? JSON.parse(data).version : 0;
    if (Config.debug) {
      console.log("Version from Application Settings (should be 0)", version);
    }

    // retrieve data from file
    if (data === undefined) {
      data = require("./../data/default.json");
      setString("data", JSON.stringify(data));
      data = getString("data");
      version = JSON.parse(data).version;
    }
    if (Config.debug) {
      console.log("Version from default.json", version);
    }

    // retrieve (new) data from server
    if (!Config.debug) {
      this.getData(version).subscribe(
        result => {
          this.onGetDataSuccess(result);
        },
        error => {
          console.log(error);
          const message =
            "\nUnable to retrieve (new) conference data from the server. Maybe an internet connection was unavailable.\n\nYou might not have the latest information.";
          this.showError(message);
        }
      );
    }
  }

  private createRequestHeader(version: number) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("appversion", version.toString());
    return headers;
  }

  private getData(version: number) {
    // console.log("version", version);
    const headers = this.createRequestHeader(version);
    // console.log("headers =", headers);
    return this.http.get(Config.apiUrl, { headers: headers, observe: "response" });
  }

  private onGetDataSuccess(res) {
    // console.log("status =", res.status);
    switch (res.status) {
      case 200:
        setString("data", JSON.stringify(res.body));
        // console.log("version", res.body.version);
        break;
      case 204:
        // do nothing: latest data available
        break;
      default:
        // other http status
        const message = `\nUnable to retrieve (new) conference data from the server. Please inform us at ${Config.email}.\n\nStatus: ${
          res.status
        }\n\nBody:\n${JSON.stringify(res.body)}`;
        this.showError(message);
    }
  }

  private showError(message) {
    const options = {
      title: "Oops!",
      message,
      okButtonText: "OK"
    };
    alert(options).then(() => {});
  }

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });
  }
}
