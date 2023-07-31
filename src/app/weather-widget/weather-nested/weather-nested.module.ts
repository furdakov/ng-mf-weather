import { NgModule } from "@angular/core";
import { WeatherNestedComponent } from "./weather-nested.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: '', component: WeatherNestedComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeatherNestedComponent]
})
export class WeatherNestedModule {}
