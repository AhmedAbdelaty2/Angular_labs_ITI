import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {

  testPower:number = 5;
  testString:string = "Ahmed-Mahmoud-Abdelaty";

  query:string = "";
  testArray:string[] = ["Ahmed","Sallam","Zakarya"];

  constructor() { }

  ngOnInit(): void {
  }

}
