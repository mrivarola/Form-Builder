import { Control } from "./control";
import { ControlType } from "./control-type";

export class Textbox extends Control {

    constructor() {
        super();
        this.label.next("_textboxlabel");
    }

    public getType(): ControlType {
        return ControlType.textbox;
    }

}
