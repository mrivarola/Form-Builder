import { Component } from "@angular/core";
import { Control } from "./model/control";
import { Textbox } from "./model/textbox";

@Component({
  selector: "controls",
  template: `
        <div>
            <ul>
                <li *ngFor="let control of controls">{{ control.label }}</li>
            </ul>
        </div>
  `
})
export class ControlsComponent {
    public controls: Array<Control>

    constructor() {
        this.controls = [];
        this.controls.push(new Textbox());
    }
}
