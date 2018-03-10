import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  whatIam () {
    let text = ["Coder", "Dog Lover", "Cool Dude"];
    let counter = 0;
    let elem = document.getElementById("changeText");
    let inst = setInterval(change, 2000);

    function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
      }
    }
  }

  constructor() { }

  ngOnInit() {
   this.whatIam();
  }

}
