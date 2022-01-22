import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsComponent } from './patients/patients.component';
import { InterventionComponent } from './intervention/intervention.component';



const routes: Routes = [
  { path:'add-patient', component:AddPatientComponent},
  { path:'patients', component:PatientsComponent},
  { path:'intervention', component:InterventionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
