import { Interventions } from "./interventions";

export class Patient {
    id:string;
    nom: string;
    prenom:string;
    telephone:number;
    date_creation_fiche:string;
    date_naissance:string; 
    metier:string; 
    adresse:string;
    motif_consultation:string; 
    antecedants_medicaux:string; 
    antecedants_dentaires:string; 
    intervention:Interventions[]
    





    constructor(){
        
    }
}
