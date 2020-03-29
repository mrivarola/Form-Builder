import { Component } from "@angular/core";
import { Control } from '../controls/model/control';

@Component({
  selector: "canvas-area",
  template: `
    <div class="controls-area">
        <ul>
            <li *ngFor="let control of controls">{{ control.label }}</li>
        </ul>
    </div>
  `,
  styles: [`
    div {
        position: relative;
        float: left;
        margin: 0;
        padding: 0;
    }

    .controls-area {
        width: calc(70% - 5px);
        height: 400px;
        float: left!important;
        border: 3px dashed #ccc;
        background-color: rgba(255,255,255,0.25);
    }
  `]
})
export class CanvasComponent {
    public controls: Array<Control> = [];

    constructor() {}
}
