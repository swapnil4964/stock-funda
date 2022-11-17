import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RssFeedsService {
  
  requestOptions: Object = {
    observe: 'body',
    responseType: 'text',
    contentType: 'application/rss+xml; charset=utf-8'
  };

  constructor(private httpClient: HttpClient) { }

  getResultNewsMoneycontrol(): Observable<any>{
    return this.httpClient.get<any>("https://www.moneycontrol.com/rss/results.xml", this.requestOptions)
  }

  getNewsZBusiness(): Observable<any>{
    return this.httpClient.get<any>('https://www.zeebiz.com/india-markets.xml', this.requestOptions)
  }

  getHtmlPage(url: string): Observable<any>{
    return this.httpClient.get('https://www.moneycontrol.com/news/results/shardul-sec-consolidated-september-2022-net-sales-at-rs-1031-crore2343-y-o-y_16740201.html',{responseType:'text'});
  }
}
