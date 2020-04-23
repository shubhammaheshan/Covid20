import { Component, OnInit } from '@angular/core';
import { WorldService } from './world.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  public worldData: any;
  public worldArrayData: any
  public loadingbar:boolean = true;
  public searchItem:string;
  public filterCondn:boolean = false;
  constructor(public service: WorldService) { }

  ngOnInit(): void {
    this.service.WorldData().subscribe((posres) => {
      this.worldArrayData = posres.Countries;
      this.worldData = posres.Global;
      this.loadingbar = false;
      this.filterCondn = true;
      // console.log(this.worldArrayData)
      // console.log(this.worldData)


       //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    });


    
   
   
  }
  public topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 

}
