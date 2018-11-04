import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private str_one:string = "Hello World";
  constructor(private http:HttpClient) { }

  alertMsg(str){
    alert(str);
  }

  getData(){
    var url = "http://localhost:3000/news/detail?nid=1";
    return this.http.get(url);
  }
}