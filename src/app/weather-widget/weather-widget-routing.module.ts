import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetComponent } from './weather-widget.component';

const routes: Routes = [
  {
    path: '', component: WeatherWidgetComponent,
    children: [
      {
        path: 'nested', loadChildren: () => import('./weather-nested/weather-nested.module')
          .then(m => m.WeatherNestedModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherWidgetRoutingModule {}
