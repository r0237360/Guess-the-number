import { Component, OnInit } from '@angular/core';
import { GeneratedFile } from '@angular/compiler';
import _ from 'lodash';

@Component({
  selector: 'app-nummer',
  templateUrl: './nummer.component.html',
  styleUrls: ['./nummer.component.css']
})
export class NummerComponent implements OnInit {

  getal:number = 0;
  result:string = "";
  tel:number = 0;
  start = Date.now();
  einde = Date.now();
  constructor() {

   }

  ngOnInit(): void {
  }

  Genereer(){
    
    this.tel = 0;
    this.result = "Veel geluk met het spel";
    this.getal = _.random(0, 1001);
    console.log(this.getal);
    this.start = Date.now();
  }

  Geluk(){
    
    this.result = "Veel geluk met je volgende gok.";

  }

  Bereken(){
    var res = this.einde - this.start;
    return this.MillisToMinutesAndSeconds(res);

  }


  MillisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes +" minuten en "+ (Number(seconds) < 10 ? '0' : '') + seconds + " seconden";
  }
  



  Guess(gokje){
   
    this.tel ++ ;
    var test:number = Number(gokje);
    if (test == this.getal)
    {
      this.einde = Date.now();
      var time = this.Bereken();
      this.result = "Proficiat het getal was inderdaad " + this.getal + ". Je hebt dit geraden in " + this.tel + " pogingen. En je deed dit in een tijd van " + time ;
    } else if (test > this.getal){

      this.result = "Sorry je hebt het getal niet juist. Het getal dat je zoekt is kleiner."
    }else 
      {
        this.result = "Sorry je hebt het getal niet juist. Het getal dat je zoekt is groter."
      }
 }
}
