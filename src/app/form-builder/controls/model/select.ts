import { Control } from "./control";
import { ControlType } from "./control-type";

export class Select extends Control {

    constructor() {
        super();
        this.label = "Lista desplegable";
    }

    public getType(): ControlType {
        return ControlType.select;
    }

}