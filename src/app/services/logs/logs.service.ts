import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

export type Log = {
  id: string;
  message: string;
};

@Injectable({
  providedIn: "root",
})
export class LogsService {
  private address: string = "http://localhost:8080/logs";
  constructor(private httpClient: HttpClient) {}

  getLogs() {
    return this.httpClient.get<Log[]>(this.address).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }
}
