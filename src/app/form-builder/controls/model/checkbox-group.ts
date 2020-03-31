import { Control } from "./control";
import { ControlType } from "./control-type";

export class CheckboxGroup extends Control {

    constructor() {
        super();
        this.label = "_checkboxlabel";
    }

    public getType(): ControlType {
        return ControlType.checkboxGroup;
    }

}
