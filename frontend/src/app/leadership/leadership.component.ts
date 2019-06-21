import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  news
  carouselImages: any[];
  constructor(private newsDetail: NewsDetailService) { }

  ngOnInit() {
    this.news = this.newsDetail.leadershipNewsDetails;
    this.carouselImages = this.newsDetail.leadershipHomepage(3);
  }

}
