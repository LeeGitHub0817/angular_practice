import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tsdatatype',
  templateUrl: './tsdatatype.component.html',
  styleUrls: ['./tsdatatype.component.css']
})
export class TsdatatypeComponent implements OnInit {

  name = "tom";
  age:number = 12;
  sex:string = "male";
  isMaried:boolean = false;
  works:object[] = [{
    proj1: "2333",
    proj2: "3332"
  }];
  list:any = "just do it";

  constructor() { }

  ngOnInit() {
  }

}
