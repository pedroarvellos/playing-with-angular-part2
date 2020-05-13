import { Component, OnInit } from "@angular/core";
import { Log, LogsService } from "../../services/logs/logs.service";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.scss"],
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logsService: LogsService) {}

  ngOnInit() {
    this.logsService.getLogs().subscribe(
      (res: Log[]) => (this.logs = res),
      (err) => console.log(err)
    );
  }
}
