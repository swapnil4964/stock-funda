import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RssFeedsService {
  
  requestOptions: Object = {
    observe: "body",
    responseType: "text"
  };

  constructor(private httpClient: HttpClient) { }

  getResultNews(): Observable<any>{
    return this.httpClient.get<any>("https://www.moneycontrol.com/rss/results.xml", this.requestOptions)
  }
}
