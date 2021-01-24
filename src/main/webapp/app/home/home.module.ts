import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Projet4SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Projet4SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Projet4HomeModule {}
