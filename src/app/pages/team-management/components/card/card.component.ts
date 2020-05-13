import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input("info") info;
  @Input("selectedPerson") selectedPerson;
  @Output("selectCardEvent") selectCardEvent = new EventEmitter();

  selectCard() {
    this.selectCardEvent.emit(this.info);
  }
}
