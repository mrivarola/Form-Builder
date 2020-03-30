import { Injectable } from "@angular/core";
import { i18n } from "../i18n/translate";

@Injectable()
export class TranslatorService {
    private dictionary: object = i18n["es"];

    private isSomeCase(value: string, upper: boolean): boolean {
        for (let n = 0; n < value.length; n++) {
            if ((upper && value[n] === value[n].toLowerCase()) ||
                (!upper && value[n] === value[n].toUpperCase())) {
                return false;
            }
        }
        return true;
    }

    public setLanguage(lang: string): void {
        this.dictionary = i18n[lang];
    }

    public translate(value: string): string {
        let values = value.split(" ");
        let result = new Array<string>();
        values.forEach(v => {
            let lowerValue = v.toLowerCase();
            let translated = this.dictionary[lowerValue];
            if (translated) {
                if (this.isSomeCase(v, true)) {
                    result.push(translated.toUpperCase());
                } else if (this.isSomeCase(v, false)) {
                    result.push(translated.toLowerCase());
                } else {
                    result.push(translated.charAt(0).toUpperCase() + translated.slice(1));
                }
            } else {
                result.push(v);
            }
        })
        return result.join(" ");
    }
}
