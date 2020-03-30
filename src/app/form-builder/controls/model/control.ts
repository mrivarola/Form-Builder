import { ControlType } from "./control-type";

export abstract class Control {
    public label: string;
    public img: string;
    public abstract getType(): ControlType;
}
