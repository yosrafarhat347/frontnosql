import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsComponent } from './patients/patients.component';

import { RouterModule } from '@angular/router';
import { InterventionComponent } from './intervention/intervention.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
   
    AppComponent,
    AddPatientComponent,
    PatientsComponent,
    
    InterventionComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
