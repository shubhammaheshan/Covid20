import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class WorldService {
    constructor(public http:HttpClient) { }

  public WorldData():Observable<any>{
    return this.http.get("https://api.covid19api.com/summary")
  }
}