import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BonusShareCalculatorComponent } from './bonus-share-calculator/bonus-share-calculator.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import { RssFeedsService } from './shared/rss-feeds.service';
import { Xml2jsonService } from './shared/xml2json.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BonusShareCalculatorComponent,
    SideNavComponent,
    RssFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RssFeedsService, Xml2jsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
