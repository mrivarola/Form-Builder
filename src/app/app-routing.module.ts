import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TranslatorService } from "./form-builder/services/translator.service";
import { TranslatorPipe } from "./form-builder/pipes/translator.pipe";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, TranslatorPipe],
  providers: [TranslatorService],
  declarations: [TranslatorPipe]
})
export class AppRoutingModule { }
