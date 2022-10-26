import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  @HostBinding("style.color") myColor: string = "";
  @HostBinding("style.fontSize") mySize: string = ""

  constructor() { }

  ngOnInit(): void {
      
  }

  @HostListener("mouseenter") mouseEnterEvent(eventData:Event){
    this.myColor = "red";
    this.mySize = "22px"
  }

  @HostListener("mouseleave") mouseLeaveEvent(eventData:Event){
    this.myColor = "initial";
    this.mySize = "initial"
  }

}
