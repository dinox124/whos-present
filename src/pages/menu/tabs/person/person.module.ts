import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonPage } from './person';

import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    PersonPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PersonPage),
  ],
})
export class PersonPageModule { }
