import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-linda-ikeji',
  templateUrl: './linda-ikeji.component.html',
  styleUrls: ['./linda-ikeji.component.css']
})
export class LindaIkejiComponent implements OnInit {
lindaBlog
  carouselImages: any[];
  constructor(private newsDetail: NewsDetailService) {
   }

  ngOnInit() {
    this.lindaBlog = this.newsDetail.lindaIkejiBlogDetails;
    this.carouselImages = this.newsDetail.lindaHomepage

  }

}
