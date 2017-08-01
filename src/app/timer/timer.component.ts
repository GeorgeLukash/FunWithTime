import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  running: boolean = false;
  timeArray: string[];
  value: number;
  s: any;
  constructor() { }

  ngOnInit() {

  }
  stop() {
    this.running = false;
    this.timeArray = null;    
  }
  start() {
    
    if (!this.running) {
      this.running = true;
      document.getElementById('timer').innerHTML = this.value+":0";
      this.startTimer();
    }
  }

  startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    this.timeArray = presentTime.split(/[:]+/);
    var m = Number(this.timeArray[0]);
    this.s = checkSecond(Number(this.timeArray[1]) - 1);
    if (this.s == 59) { m = m - 1 }

    document.getElementById('timer').innerHTML =
      m + ":" + this.s;
    setInterval(this.startTimer, 1000);
  }

}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
  if (sec < 0) { sec = "59" };
  return sec;
}
