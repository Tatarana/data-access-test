import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  dateToday: string;

  constructor() { }

  ngOnInit() {
    this.dateToday = new Date().toDateString();
  }

}