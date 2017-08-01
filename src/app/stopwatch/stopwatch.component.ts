import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  running: boolean = false;
  times: number[];
  time: any;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.times = [0, 0, 0];
  }

  start() {
    if (!this.time) this.time = performance.now();
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.step.bind(this));
    }
  }


  step(timestamp) {
    if (!this.running) return;
    this.calculate(timestamp);
    this.time = timestamp;
    this.print();
    requestAnimationFrame(this.step.bind(this));
  }

  lap() {
    document.getElementById("results").style.display = "block";
    let times = this.times;
    let li = document.createElement('li');
    li.innerText = this.format(times);
    document.getElementById('results').appendChild(li);
  }


  stop() {
    this.running = false;
    this.time = null;
  }


  restart() {
    this.reset();
    this.clear();
    this.start();
  }

  clear() {
    document.getElementById("results").style.display = "none";
    while (document.getElementById('results').lastChild)
      document.getElementById('results').removeChild(document.getElementById('results').lastChild);
  }


  calculate(timestamp) {
    var diff = timestamp - this.time;
    this.times[2] += diff / 10;
    if (this.times[2] >= 100) {
      this.times[1] += 1;
      this.times[2] -= 100;
    }
    if (this.times[1] >= 60) {
      this.times[0] += 1;
      this.times[1] -= 60;
    }
  }


  print() {
    document.getElementById('stopwatch').innerHTML = this.format(this.times);
  }

  format(times) {
    return `\ ${pad0(times[0], 2)}:\ ${pad0(times[1], 2)}:\ ${pad0(Math.floor(times[2]), 2)}`;
  }
}


function pad0(value, count) {
  var result = value.toString();
  for (; result.length < count; --count)
    result = '0' + result;
  return result;
}