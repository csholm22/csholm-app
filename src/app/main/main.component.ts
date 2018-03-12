import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  whatIam () {
    let text = [
        'Graphic Designer',
        'UX Designer',
        'UI Designer',
        'Frontend Web Developer',
        'Doodler',
        'Husband',
        'Cat Herder',
        'Dog Lover',
        'Hard-core Gamer',
        'Musician',
        'seeker & sharer of knowledge'
    ];
    let counter = 0;
    let elem = document.getElementById("changeText");
    let inst = setInterval(change, 2000);

    function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
        clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
      }
    }
  }

  constructor() { }

  ngOnInit() {
   this.whatIam();
  }

}
