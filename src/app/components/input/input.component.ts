import { EventEmitter, Component, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Person, CardService } from "../../services/card.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  maxValue: number = 30;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      role: ["", [Validators.required, Validators.maxLength(this.maxValue)]],
      name: ["", [Validators.required, Validators.maxLength(this.maxValue)]],
    });
  }

  get role() {
    return this.form.controls["role"];
  }

  get name() {
    return this.form.controls["name"];
  }

  onSubmit() {
    const person: Person = { role: this.role.value, name: this.name.value };

    this.cardService
      .addPerson(person)
      .subscribe((person: Person) => console.log(person));

    this.role.reset();
    this.name.reset();
  }
}
