import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  //声明数据
  isAgreed = true;
  score = 50;
  sex = 2;

  userList = [
    {name: "Tom", salary: 7000},
    {name: "Jerry", salary: 8000},
    {name: "Alex", salary: 10000},
    {name: "Jack", salary: 15000},
    {name: "Mary", salary: 20000}
  ];

  myColor = "#f1f1f1";
  myBorder =  "1px solid #f5f5f5";
  myStyleObj = {
    color: "#f1f1f1",
    backgroundColor: "#ffd000"
  }

  isDanger = true;
  isSuccess = true;

  imgSrc = "../../assets/hulalaku.jpg";
  title = "show me something!";

  text = "MOB";


  constructor() {  }

  ngOnInit() {
  }

  myClick1(title:string) {
    alert(title);
  }
  myClick2() {
    alert(this.title);
  }
}
