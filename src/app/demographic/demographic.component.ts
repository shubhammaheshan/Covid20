import { Component, OnInit } from '@angular/core';
import { DemographicService } from './demographic.service';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent implements OnInit {
  public worldArrayData: any
  constructor(public service: DemographicService) { }

  ngOnInit(): void {
    this.service.WorldData().subscribe((posres) => {
      this.worldArrayData = posres.Global;
      console.log(this.worldArrayData)
    }
    )
  }
}
