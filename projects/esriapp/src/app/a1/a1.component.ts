import { Component, OnInit, forwardRef } from '@angular/core';
import { IA, IAToken } from '../ia';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css'],
  providers:[{provide:IAToken,useExisting:forwardRef(()=>A1Component),multi:true}]
})
export class A1Component implements OnInit,IA {

  constructor() { 
    console.log("C1")
  }

  ngOnInit(): void {
  }

}
