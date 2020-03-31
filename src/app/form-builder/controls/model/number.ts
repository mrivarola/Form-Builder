import { Control } from "./control";
import { ControlType } from "./control-type";

export class Number extends Control {

    constructor() {
        super();
        this.label = "_numericlabel";
    }

    public getType(): ControlType {
        return ControlType.number;
    }

}
