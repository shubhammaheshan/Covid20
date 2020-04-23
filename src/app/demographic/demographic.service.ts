import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalDataSummary } from './globaldata';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemographicService {

  constructor(private http: HttpClient) { }
  public WorldData():Observable<any>{
    return this.http.get("https://api.covid19api.com/summary")
  }
 
}
