import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Person = {
  role: String;
  name: String;
};

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private team: Person[] = [];

  getTeam() {
    return new Observable((subscriber) => {
      subscriber.next(this.team);
    })
  }

  addPerson(person: Person) {
    return new Observable((subscriber) => {
      this.team.push(person);
      subscriber.next(person);
    })
  }
}
