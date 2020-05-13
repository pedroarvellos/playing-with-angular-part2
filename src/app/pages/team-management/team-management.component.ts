import { Component, OnInit } from "@angular/core";
import { Person, TeamService } from '../../services/team/team.service';

@Component({
  selector: "app-team-management",
  templateUrl: "./team-management.component.html",
  styleUrls: ["./team-management.component.scss"],
})
export class TeamManagementComponent implements OnInit {
  team: Person[] = [];
  selectedPerson: Person;

  constructor(private cardService: TeamService) {}

  ngOnInit() {
    this.cardService.getTeam().subscribe((team: Person[]) => {
      this.team = team;
    });
  }

  onSelectCard(person: Person) {
    this.team = this.team.filter((p) => p.id !== person.id);
    this.selectedPerson = person;
  }

  onCancel() {
    this.team.push(this.selectedPerson);
    this.selectedPerson = null;
  }

  onAdd(person: Person) {
    this.cardService.addPerson(person).subscribe(
      (res: Person) => this.team.push(res),
      (err) => console.log(err)
    );
  }

  onUpdate(person: Person) {
    this.cardService.updatePerson(person).subscribe(
      (res: Person) => {
        this.team.push(res);
      },
      (err) => console.log(err)
    );

    this.selectedPerson = null;
  }

  onDelete(id: number) {
    this.cardService.deletePerson(id).subscribe(
      (id: number) => {
        this.team = this.team.filter(person => id !== person.id);
      },
      (err) => console.log(err)
    );

    this.selectedPerson = null;
  }
}
