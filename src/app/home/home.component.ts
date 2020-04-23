import { Component, OnInit } from '@angular/core';
import { WorldService } from '../World Module/world.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public checkcon:boolean;
public worldData:any;
  constructor(public service:WorldService) { }

  ngOnInit(): void {

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
    this.service.WorldData().subscribe((posres)=>{
      console.log(posres);
      this.worldData = posres.Global
      this.checkcon = true;
      // console.log(this.worldData)
    })
  }

  public topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
