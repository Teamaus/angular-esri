import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MFPDVService {
  objData = [{a:12},{b:14,c:15}]
  
  constructor() { }
  getData(pf:string[]):Observable<any>{
    let _getData=(ind:number,prevData:any):Observable<any>=>{
        if (ind==pf.length-1){
          return of([...prevData,this.objData[ind]])
        
        }
        return of([...prevData,this.objData[ind]]).pipe(switchMap(data=>_getData(ind+1,data)))
    }
    return _getData(0,[])
  }
}
