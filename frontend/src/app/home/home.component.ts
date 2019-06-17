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
    this.punchNews = await this.newsDetails.punchHomepage;
    console.log(this.punchNews, 'punch')
    this.leadershipNews = await this.newsDetails.leadershipHomepage;
    console.log(this.leadershipNews, 'leadership')
    this.businessdayNews = await this.newsDetails.businessdayHomepage;
    console.log(this.businessdayNews, 'businessday')
    this.lindaNews = await this.newsDetails.lindaHomepage;
    console.log(this.lindaNews, 'linda')
  }

}
