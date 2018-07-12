import { Injectable } from '@angular/core';

import { Patient } from '../../models/patient';
import { Api } from '../api/api';

@Injectable()
export class Patients {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/patients', params);
  }

  add(patient: Patient) {
  }

  delete(patient: Patient) {
  }

}
