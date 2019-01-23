import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MunsService {

  constructor() { }

  // muns = [
  //   new mun("Jaipuria Model United Nation", 6, "Defend. Deliberate. Deliver"),
  //   new mun("Seth Anandram Jaipuria Model United Nations", 4, "xyz.....")
  // ]
  muns = [
    {
      name : "Jaipuria Model United nations",
      editions: 6,
      description: "Defend. Deliberate. Deliver"
    },
    {
      name: "Seth Anandram Jaipuria Model United Nations",
      editions: 4,
      description: "xyz...."
    }
  ]
}
