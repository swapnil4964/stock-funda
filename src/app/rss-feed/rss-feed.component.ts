import { Component, OnInit } from '@angular/core';
import { RssFeedsService } from '../shared/rss-feeds.service';
import { Xml2jsonService } from '../shared/xml2json.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.scss']
})
export class RssFeedComponent implements OnInit {

  constructor(
    private rssFeed: RssFeedsService, 
    private xmlParser: Xml2jsonService,
    private sanitizer:DomSanitizer
    ) { }

  resultNews: any = [];
  loading = false;
  feedLoading = true
  selectedFeedUrl: any;

  ngOnInit(): void {}

  getRssFeedFromMoneycontrol(){
    this.loading = true;
    this.resultNews = [];
    this.selectedFeedUrl = null;
    this.rssFeed.getResultNewsMoneycontrol().subscribe(results=>{
      this.xmlParser.convertXML2Json(results).then(response=>{
        this.loading = false;
        response.forEach((element: any) => {
          element.DESCRIPTION[0] = element?.DESCRIPTION[0].replace('NULL', '');
        });
        this.resultNews = response;
      });
    }, err=>{
      this.loading = false;
    });
  }

  getRssFeedFromZBussiness(){
    this.resultNews = [];
    this.loading = true;
    this.selectedFeedUrl = null;
    this.rssFeed.getNewsZBusiness().subscribe(results=>{
      this.xmlParser.convertXML2Json(results).then(response=>{
        this.loading = false;
        response.forEach((element: any) => {
          element.DESCRIPTION[0] = element?.DESCRIPTION[0].replace('NULL', '');
        });
        this.resultNews = response;
      });
    }, err=>{
      this.loading = false;
    });
  }

  selectFeed(url: string){
    this.selectedFeedUrl = null;
    this.feedLoading = true;
    this.rssFeed.getHtmlPage(url).subscribe(res=>{
      this.feedLoading = false;
      this.selectedFeedUrl = this.sanitizer.bypassSecurityTrustHtml(res);
    })
  }

}
