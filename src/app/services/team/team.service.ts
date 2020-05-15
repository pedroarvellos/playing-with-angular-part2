import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

export type Person = {
  id?: number;
  role: String;
  name: String;
};

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private address: string = "/roles";

  constructor(private httpClient: HttpClient) {}

  getTeam() {
    return this.httpClient.get<Person[]>(environment.apiAddress + this.address).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }

  addPerson(person: Person) {
    return this.httpClient.post<Person>(environment.apiAddress + this.address, person).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }

  updatePerson(person: Person) {
    return this.httpClient.put<Person>(environment.apiAddress + this.address, person).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }

  deletePerson(id: number) {
    return this.httpClient.delete<number>(environment.apiAddress + this.address + `/${id}`).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }
}
