import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
punchNews;
leadershipNews;
businessdayNews;
lindaNews;
  constructor(private newsDetails: NewsDetailService) { }

 async ngOnInit() {
    this.punchNews = await this.newsDetails.punchHomepage(3);
    this.leadershipNews = await this.newsDetails.leadershipHomepage(3);
    // this.businessdayNews = await this.newsDetails.businessdayHomepage(3);
    this.lindaNews = await this.newsDetails.lindaHomepage(3);
  }

}
