import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IndiaService } from './india.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]), 
  ]
})
export class IndiaComponent implements OnInit, AfterViewInit {
  public ArrayStateData: Array<any> = [];
  public StateData: any;
  public IndiaArrayData: any;
  public StateTotalData:any;
  public checkcon:boolean = false;
  status: boolean = true;
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered', 'deaths', 'lastupdatedtime',];
  expandedElement: PeriodicElement | null;
  // dataSource:any;
  // dataSource = new MatTableDataSource(this.IndiaArrayData);
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private service: IndiaService) { }

  ngOnInit(): void {

    if(window.navigator.onLine){

    }
    else{
      alert("check your connection")
    }
 
    this.getAllOwners();
    this.service.stateData().subscribe((posres) => {
      this.StateData = posres
    })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  clickEvent(data){
    console.log(data)
    // console.log(data.target.childNodes[0].childNodes[0])
    data.target.childNodes[0].childNodes[0].classList.remove("right");
    data.target.childNodes[0].childNodes[0].classList.add("down");
    // console.log(data.target.childNodes[0].childNodes[0])
    if(this.status=!this.status){
      data.target.childNodes[0].childNodes[0].classList.remove("down");
      data.target.childNodes[0].childNodes[0].classList.add("right");
    }



    // this.status = !this.status;       
}

  public getAllOwners = () => {
    this.service.IndiaData()
      .subscribe(res => {
       this.StateTotalData =  res.statewise.shift()
       this.checkcon = true
        // console.log(this.StateTotalData)
        this.dataSource.data = res.statewise;
      })
  }

  public filterData(value) {
    // console.log(value);
    // console.log(this.dataSource)
    this.dataSource.filter = value.trim().toLowerCase();
  }

  public displayData(val) {
    // console.log(val);
    this.ArrayStateData = []
    var data;
    for (data in this.StateData) {
      // console.log(data,this.StateData[data]);
      // console.log(data.toLowerCase())
      // console.log(val.state.toLowerCase())

      if (val.state.toLowerCase() == data.toLowerCase()) {
        // console.log(this.StateData[val.state].districtData)
        var data1;
        for (data1 in this.StateData[val.state].districtData) {
          // console.log(this.StateData[val.state].districtData[data1])
          this.ArrayStateData.push({ city: data1, data: this.StateData[val.state].districtData[data1] })
        }
        // console.log(this.ArrayStateData)

      }
    }
  }
}

