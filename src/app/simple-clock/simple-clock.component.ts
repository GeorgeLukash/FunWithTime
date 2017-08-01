import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-clock',
  templateUrl: './simple-clock.component.html',
  styleUrls: ['./simple-clock.component.css']
})

export class SimpleClockComponent implements OnInit {

  timeTemplate: string = "00:00:00";
  clockHandler: number;
  target: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.start();
  }

  getTime() {
    var date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(current => current >= 10 ? current : "0" + current).join(":");
  }

  start(): void {
    const space = document.getElementById("clock-space");
    this.clockHandler = setInterval(function (parent) {
      space.innerHTML = this.getTime();
    }.bind(this), 1000);
  }

  stop(): void {
    clearInterval(this.clockHandler);
  }
}
