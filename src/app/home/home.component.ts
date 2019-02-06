import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { setString, getString } from "application-settings";
import { HttpClient } from "@angular/common/http";

import { Config } from "./../config";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private page: Page, private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.getData();
  }

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });
  }

  private callApi() {
    const url = Config.apiUrl;
    return this.http.get(url);
  }

  private getData() {
    let lData = getString("dataJson");
    let lVersion: number = lData !== undefined ? JSON.parse(lData).version : 0;

    if (lData === undefined) {
      let defaultData = require("./../data/default.json");
      setString("dataJson", JSON.stringify(defaultData));
    }

    if (!Config.emulator) {
      this.callApi().subscribe(res => {
        setString("dataJson", JSON.stringify(res));
      });
    } else {
      console.log("Emulator: no call made");
    }
  }
}
