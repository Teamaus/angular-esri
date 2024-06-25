import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AdapterCommandService } from '../adapter-command.service';

@Component({
  selector: 'dd-gen-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent implements OnInit,ControlValueAccessor {
  value:any = ""
  disable:boolean=false
  @ContentChildren('*') allContentChildren?: QueryList<any> 
  constructor(private adapterCommand:AdapterCommandService) {

   }
  writeValue(obj: any): void {
    //this.commandService.Execute(obj,this.allContentChildren)
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
