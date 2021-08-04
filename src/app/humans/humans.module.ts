import {NgModule} from "@angular/core";
import {HumanComponent} from "./human/human.component";
import {ListComponent} from "./list/list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HumanComponent,
    ListComponent
  ],
  exports: [
    ListComponent,
    HumanComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HumansModule {
}
