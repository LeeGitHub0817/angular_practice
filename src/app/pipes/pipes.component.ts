import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../customservice/service";


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  private msg:string = "Hello Angular!";
  private birthday = 1501251454145;
  private salary = 7000.1254;
  private sex = 0;
  constructor(private ser:ServiceService) { }

  ngOnInit() {
  }

  printIt(msg){
    this.ser.alertMsg(msg);
  }

  showIt(){
    this.ser.getData().subscribe((res)=>{
      console.log(res);
    }, (err)=>{
      console.log(err);
    })
  }

}
