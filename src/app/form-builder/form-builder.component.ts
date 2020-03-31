import { Component, Input, OnInit } from "@angular/core";
import { TranslatorService } from "./services/translator.service";

@Component({
  selector: "form-builder",
  template: `
    <div>
        <canvas-area></canvas-area>
        <controls></controls>
    </div>
  `
})
export class FormBuilderComponent implements OnInit {
    @Input() lang: string = "en";

    constructor(private translatorService: TranslatorService) {

    }

    public ngOnInit(): void {
        this.translatorService.setLanguage(this.lang);
    }
    
}
