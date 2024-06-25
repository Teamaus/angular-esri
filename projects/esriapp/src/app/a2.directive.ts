import { Directive, ElementRef, Inject } from '@angular/core';
import { IA, IAToken } from './ia';

@Directive({
  selector: 'app-a1,app-b1'
})
export class A2Directive {

  constructor(@Inject(IAToken) private ia:IA) { 
    console.log("D1=>>",ia)
    
    
  }

}
