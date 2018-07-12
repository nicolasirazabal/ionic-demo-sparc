import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PatientListPage } from './patient-list';

@NgModule({
  declarations: [
    PatientListPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientListPage),
    TranslateModule.forChild()
  ],
  exports: [
    PatientListPage
  ]
})
export class PatientListPageModule { }
