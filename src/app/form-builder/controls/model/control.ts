import { ControlType } from "./control-type";
import { Observable, BehaviorSubject } from "rxjs";

export abstract class Control {
    protected label: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public label$: Observable<string> = this.label.asObservable();
    public img: string;
    public abstract getType(): ControlType;
}
