import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

export type Person = {
  id?: number;
  role: String;
  name: String;
};

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private address: string = "http://localhost:8080/roles";

  constructor(private httpClient: HttpClient) {}

  getTeam() {
    return this.httpClient.get<Person[]>(this.address).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }

  addPerson(person: Person) {
    return this.httpClient.post<Person>(this.address, person).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }

  updatePerson(person: Person) {
    return this.httpClient.put<Person>(this.address, person).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }

  deletePerson(id: number) {
    return this.httpClient.delete<number>(this.address + `/${id}`).pipe(
      map((res) => res),
      catchError((err) => err)
    );
  }
}
