import { Component, OnInit } from '@angular/core';
import { PatientregestrationService } from '../patientregestration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  intervention = {
    date: "",
    acte: "",
    recu: "",
    idPatient: ""
  }
  constructor(private _service: PatientregestrationService, private router: Router) { }
  rowsP = []
  listeIntervention = []

  ngOnInit() {
    if (!this._service.patient) {
      this.router.navigate(["/patients"])
    }
    this.
      rowsP = [
        {
          "Nom": this._service.patient.nom,
          "Prénom": this._service.patient.prenom,
          "Téléphone": this._service.patient.telephone,
          "Date De Naissance": this._service.patient.date_naissance,
          "Métier/Scolarité": this._service.patient.metier,
          "Adresse": this._service.patient.adresse,
          "Motif De Consultation": this._service.patient.motif_consultation,
          "Antécédents Médicaux": this._service.patient.antecedants_medicaux,
          "Antécédents Dentaires": this._service.patient.antecedants_dentaires

        },
      ]
    this.intervention.idPatient = this._service.patient.id
    this.getInter()

  }

  patient = ["Nom", "Prénom", "Téléphone", "Date De Naissance", "Métier/Scolarité", "Adresse", "Motif De Consultation", "Antécédents Médicaux", "Antécédents Dentaires"];



  interventions = ["Date de Consultation", "Acte", "Recu"];

  rowsI = [
    {
      "Date de Consultation": "12/01/2022",
      "Acte": "implant",
      "Recu": "50dt"

    },]

  addIntervention() {
    if(this.intervention.acte&& this.intervention.date&&this.intervention.recu  )
    this._service.addIntervention(this.intervention).subscribe(d => {
      this.getInter()
      this
        .intervention = {
        date: "",
        acte: "",
        recu: "",
        idPatient: this._service.patient.id
      }
    })
  }
  getInter() {
    this._service.getIntervention(this._service.patient.id).subscribe(d => {
      this.rowsI = d.map(elm => {
        return {
          "Date de Consultation": elm.date,
          "Acte": elm.acte,
          "Recu": elm.recu
        }
      })
    })
  }
}
