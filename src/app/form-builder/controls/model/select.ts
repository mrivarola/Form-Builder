import { Control } from "./control";
import { ControlType } from "./control-type";

export class Select extends Control {

    constructor() {
        super();
        this.label.next("_selectlabel");
    }

    public getType(): ControlType {
        return ControlType.select;
    }

}
