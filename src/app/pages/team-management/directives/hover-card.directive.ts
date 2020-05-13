import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHoverCard]",
})
export class HoverCardDirective {
  @Input("appHoverCard") color: string;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.pointOut(true);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.pointOut(false);
  }

  private pointOut(isHovering: boolean) {
    if(isHovering)  this.el.nativeElement.style.backgroundColor = this.color;
    else this.el.nativeElement.style.backgroundColor = null;
  }
}
