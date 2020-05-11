import { Component, OnInit } from "@angular/core";
import { CardService, Person } from "./services/card.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  team: Person[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getTeam().subscribe((team: Person[]) => {
      this.team = team;
    })
  }
}
