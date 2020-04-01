import { Control } from "./control";
import { ControlType } from "./control-type";

export class Button extends Control {

    constructor() {
        super();
        this.label.next("_buttonlabel");
    }

    public getType(): ControlType {
        return ControlType.button;
    }
}
