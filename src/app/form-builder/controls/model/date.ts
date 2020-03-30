import { Control } from "./control";
import { ControlType } from "./control-type";

export class Date extends Control {

    constructor() {
        super();
        this.label = "_datelabel";
    }

    public getType(): ControlType {
        return ControlType.date;
    }

}
