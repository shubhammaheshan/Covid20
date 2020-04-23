import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiaService {

  constructor(public http:HttpClient) { }

  public IndiaData():Observable<any>{
    return this.http.get("https://api.covid19india.org/data.json")
  }

  public stateData():Observable<any>{
    return this.http.get("https://api.covid19india.org/state_district_wise.json")

}
}
