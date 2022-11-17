import { Injectable } from '@angular/core';
import * as xml2js from "xml2js";

@Injectable({
  providedIn: 'root'
})
export class Xml2jsonService {

  constructor() { }

  convertXML2Json(xmlString: string): Promise<any>{
    return new Promise((resolve, reject)=>{
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(xmlString, (err, result) => {
        if(err){
          reject(err);
        }else{
          if(result?.RSS?.CHANNEL[0]?.ITEM){
            resolve(result.RSS.CHANNEL[0].ITEM);
          }else{
            resolve([])
          }
        }
      });
    })    
  }
}
