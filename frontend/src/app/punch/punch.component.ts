import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
export class PunchComponent implements OnInit {
  news;
  carouselImages: any;

  constructor(private newsDetails: NewsDetailService) {
  }

  ngOnInit() {
    this.news = this.newsDetails.punchNewsDetails;
    this.carouselImages = this.newsDetails.punchHomepage(3);
  }

}
