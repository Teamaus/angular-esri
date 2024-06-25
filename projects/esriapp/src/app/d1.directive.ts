import { Directive } from '@angular/core';

@Directive({
  selector: 'app-a1'
})
export class D1Directive {

  constructor() { 
    console.log("D1=>new1")
  }

}
