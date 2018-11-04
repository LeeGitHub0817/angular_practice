import { Pipe } from "@angular/core";

@Pipe({
  name: "sex"
})

export class SexPipe{
  transform(val){
    if(val == 0){
      return "male";
    }else if(val == 1){
      return "female";
    }else{
      return "secret";
    }
  }
}