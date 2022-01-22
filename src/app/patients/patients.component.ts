import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PatientregestrationService } from '../patientregestration.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {


  patients: any;
  constructor(private _service: PatientregestrationService, private router:Router) { }

  ngOnInit() {
    let res = this._service.getPatientsFromRemote();
    res.subscribe((data) => this.patients = data);
  }
  headers = ["Nom", "Prénom", "Téléphone","Date Création Fiche", "Date De Naissance", "Métier/Scolarité", "Adresse", "Motif De Consultation", "Antécédents Médicaux", "Antécédents Dentaires"];

  passData(patient) {
    this._service.patient = patient
    this.router.navigate(["/intervention"])
  }

}