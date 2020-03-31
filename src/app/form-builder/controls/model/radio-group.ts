import { Control } from "./control";
import { ControlType } from "./control-type";

export class RadioGroup extends Control {

    constructor() {
        super();
        this.label = "_radiogrouplabel";
    }

    public getType(): ControlType {
        return ControlType.radioGroup;
    }

}
