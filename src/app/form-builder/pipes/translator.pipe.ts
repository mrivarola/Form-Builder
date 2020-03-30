import { Injectable, Pipe, PipeTransform } from "@angular/core";
import { TranslatorService } from "../services/translator.service";


@Pipe({
    name: "translatorPipe",
    pure: false
})

@Injectable()
export class TranslatorPipe implements PipeTransform {

    constructor(private translatorService: TranslatorService) {

    }

    public transform(value: string): string {
        let result = this.translatorService.translate(value);
        if (result) {
            return result;
        }
        return value;
    }
}
