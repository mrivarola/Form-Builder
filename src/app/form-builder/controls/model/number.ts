import { Control } from "./control";
import { ControlType } from "./control-type";

export class Number extends Control {

    constructor() {
        super();
        this.label = "Número";
    }

    public getType(): ControlType {
        return ControlType.number;
    }

}