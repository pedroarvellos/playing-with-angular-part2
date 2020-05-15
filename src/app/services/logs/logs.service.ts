import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

export type Log = {
  id: string;
  message: string;
};

@Injectable({
  providedIn: "root",
})
export class LogsService {
  private address: string = "/logs";
  constructor(private httpClient: HttpClient) {}

  getLogs() {
    return this.httpClient.get<Log[]>(environment.apiAddress + this.address).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }
}
