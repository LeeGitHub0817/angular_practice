import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  //声明模型model数据
  name = "Tom";
  sex = "Male";
  year = 24;
  isMaried = false;
  birthday = new Date();
  address = "Feiji";
  phone = "18381317536";

  constructor() { }

  ngOnInit() {
  }

}
