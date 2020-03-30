import { Control } from "./control";
import { ControlType } from "./control-type";

export class Button extends Control {

    constructor() {
        super();
        this.label = "Botón";
    }

    public getType(): ControlType {
        return ControlType.button;
    }

}
