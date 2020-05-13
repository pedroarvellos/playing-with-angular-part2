import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Person } from "../../../../services/card.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit, OnChanges {
  @Input("selectedPerson") selectedPerson: Person;
  @Output("add") add = new EventEmitter<Person>();
  @Output("update") update = new EventEmitter<Person>();
  @Output("delete") delete = new EventEmitter<number>();
  @Output("cancel") cancel = new EventEmitter();
  maxValue: number = 30;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      role: ["", [Validators.required, Validators.maxLength(this.maxValue)]],
      name: ["", [Validators.required, Validators.maxLength(this.maxValue)]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentItem: SimpleChange = changes.selectedPerson;
    if (currentItem.currentValue) {
      this.role = currentItem.currentValue.role;
      this.name = currentItem.currentValue.name;
    }
  }

  get role() {
    return this.form.controls["role"];
  }

  set role(role) {
    this.form.controls["role"].setValue(role);
  }

  get name() {
    return this.form.controls["name"];
  }

  set name(name) {
    this.form.controls["name"].setValue(name);
  }

  onAdd() {
    const person: Person = { role: this.role.value, name: this.name.value };

    this.add.emit(person);
    this.role.reset();
    this.name.reset();
  }

  onUpdate() {
    const person: Person = {
      ...this.selectedPerson,
      ...{ role: this.role.value, name: this.name.value },
    };

    this.update.emit(person);

    this.role.reset();
    this.name.reset();
  }

  onDelete() {
    this.delete.emit(this.selectedPerson.id);
    
    this.role.reset();
    this.name.reset();
  }

  onCancel() {
    this.cancel.emit();
    
    this.role.reset();
    this.name.reset();
  }
}
