import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component} from '@angular/core';

@Component({
  selector: 'ng-calculator',
  templateUrl: './app.component.html',
})
export class CalculatorComponent {

}
