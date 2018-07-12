import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Patient } from '../../models/patient';
import { Patients } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-patient-list',
  templateUrl: 'patient-list.html'
})
export class PatientListPage {
  currentPatients: Patient[];

  constructor(public navCtrl: NavController, public patients: Patients, public modalCtrl: ModalController) {
    this.currentPatients = this.patients.query();
  }

  /**
   * The view loaded, let's query our patients for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the patient to add a new patient. This shows our PatientCreatePage in a
   * modal and then adds the new patient to our data source if the patient created one.
   */
  addPatient() {
    let addModal = this.modalCtrl.create('PatientCreatePage');
    addModal.onDidDismiss(patient => {
      if (patient) {
        this.patients.add(patient);
      }
    })
    addModal.present();
  }

  /**
   * Delete an patient from the list of patients.
   */
  deletePatient(patient) {
    this.patients.delete(patient);
  }

  /**
   * Navigate to the detail page for this patient.
   */
  openPatient(patient: Patient) {
    this.navCtrl.push('PatientDetailPage', {
      patient: patient
    });
  }
}
