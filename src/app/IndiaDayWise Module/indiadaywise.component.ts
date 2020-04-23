import { Component, OnInit } from '@angular/core';
import { IndiaService } from 'src/app/India Module/india.service';

@Component({
  selector: 'app-indiadaywise',
  templateUrl: './indiadaywise.component.html',
  styleUrls: ['./indiadaywise.component.css']
})
export class IndiadaywiseComponent implements OnInit {
  public DailyData: any;
  constructor(public service: IndiaService) { }

  ngOnInit(): void {
    this.service.IndiaData().subscribe((posres) => {
      this.DailyData = posres.cases_time_series;
      this.DailyData.reverse()
      // console.log(this.DailyData);


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
