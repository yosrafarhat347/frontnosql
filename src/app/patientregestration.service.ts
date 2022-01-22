import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientregestrationService {
//insert http client using dependency injection
constructor(private _http: HttpClient) { }
 options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
patient


public addIntervention(intervention):Observable<any>{
  return this._http.post("http://localhost:9099/addIntervention/",intervention,this.options)
}


public getIntervention(idPatient):Observable<any>{
  return this._http.get("http://localhost:9099/findByPatient/"+idPatient,this.options)
}

public registerPatientFromRemote(patient:Patient):Observable<any>{
  return this._http.post("http://localhost:9099/addPatient/",patient,this.options)
}

public getPatientsFromRemote(){
  return this._http.get("http://localhost:9099/findAllPatients/")
}
public getPatientByID(id){
  return this._http.get("http://localhost:9099/findAllPatients/"+id)

}



}
