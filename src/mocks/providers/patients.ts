import { Injectable } from '@angular/core';

import { Patient } from '../../models/patient';

@Injectable()
export class Patients {
  patients: Patient[] = [];

  defaultPatient: any = {
    "name": "Roberto Pérez",
    "profilePic": "assets/img/sparc/patients/2.PNG",
    "value": "20% de riesgo",
        "unity": "",
    "date": "",
    "history":[]
  };


  constructor() {
    let patients = [
      {
        "name": "Armando Paredes",
        "profilePic": "assets/img/sparc/patients/2.PNG",
        "value": "40% de riesgo",
        "unity": "",
        "date": "",
        "history":[]
      },
      {
        "name": "Juan Gómez",
        "profilePic": "assets/img/sparc/patients/3.PNG",
        "value": "30% de riesgo",
        "unity": "",
        "date": "",
        "history":[]
      },
      {
        "name": "Blanca Gimenez",
        "profilePic": "assets/img/sparc/patients/5.PNG",
        "value": "40% de riesgo",
        "unity": "",
        "date": "",
        "history":[]
      },
      {
        "name": "Franca Di Tomasso",
        "profilePic": "assets/img/sparc/patients/6.PNG",
        "value": "10% de riesgo",
        "unity": "",
        "date": "",
        "history":[]
      }
    ];

    for (let patient of patients) {
      this.patients.push(new Patient(patient));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.patients;
    }

    return this.patients.filter((patient) => {
      for (let key in params) {
        let field = patient[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return patient;
        } else if (field == params[key]) {
          return patient;
        }
      }
      return null;
    });
  }

  add(patient: Patient) {
    this.patients.push(patient);
  }

  delete(patient: Patient) {
    this.patients.splice(this.patients.indexOf(patient), 1);
  }
}
