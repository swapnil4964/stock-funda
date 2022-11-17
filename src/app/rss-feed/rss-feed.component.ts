import { Component, OnInit } from '@angular/core';
import { RssFeedsService } from '../shared/rss-feeds.service';
import { Xml2jsonService } from '../shared/xml2json.service';


@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.scss']
})
export class RssFeedComponent implements OnInit {

  constructor(private rssFeed: RssFeedsService, private xmlParser: Xml2jsonService) { }

  resultNews: any = [];

  ngOnInit(): void {
    this.getRssFeed();
  }

  getRssFeed(){
    this.rssFeed.getResultNews().subscribe(results=>{
      this.xmlParser.convertXML2Json(results).then(response=>{
        response.forEach((element: any) => {
          element.DESCRIPTION[0] = element?.DESCRIPTION[0].replace('NULL', '');
        });
        this.resultNews = response;
      });
    });
  }

}
