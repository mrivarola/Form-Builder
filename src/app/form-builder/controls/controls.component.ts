import { Component } from "@angular/core";
import { Control } from "./model/control";
import { Button } from './model/button';
import { CheckboxGroup } from './model/checkbox-group';
import { Date } from './model/date';
import { Number } from './model/number';
import { RadioGroup } from './model/radio-group';
import { Select } from './model/select';
import { Textbox } from './model/textbox';

@Component({
  selector: "controls",
  template: `
        <div>
            <ul>
                <li *ngFor="let control of controls">{{ control.label }}</li>
            </ul>
        </div>
  `,
  styles: [`
        li {
            margin: 12px;
            padding: 15px 25px;
            font-size: 15px;
            cursor: move;
            text-align: right;
            text-decoration: none;
            outline: none;
            color: #fff;
            background-color: #5e87d4;
            border: none;
            border-radius: 15px;
            box-shadow: 0 5px #999;
        }
  
        li:hover { background-color: #305fb5 }
  
        li:active {
            background-color: #21417d;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }
  `]
})
export class ControlsComponent {
    private getControlsArray(): Array<Control> {
        let controls: Array<Control> = [];
        controls.push(new Button());
        controls.push(new CheckboxGroup());
        controls.push(new Date());
        controls.push(new Number());
        controls.push(new RadioGroup());
        controls.push(new Select());
        controls.push(new Textbox());
        return controls;
    }
    
    public controls: Array<Control>


    constructor() {
        this.controls = this.getControlsArray();
    }
}
