import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientregestrationService } from '../patientregestration.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient = new Patient();
  msg = "";

  constructor(private _service: PatientregestrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  addPatient() {

    this._service.registerPatientFromRemote(this.patient).subscribe(
      data => {
        this._router.navigate(["/patients"])
        console.log("response received");
      },
      error => {
        console.log("exception occured");
        this.msg = error.error;

      }
    );

  }

}
