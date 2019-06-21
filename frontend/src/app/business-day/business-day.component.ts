import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-business-day',
  templateUrl: './business-day.component.html',
  styleUrls: ['./business-day.component.css']
})


export class BusinessDayComponent implements OnInit {
businessDayDetails
carouselImages: any

  constructor(private newsDetails: NewsDetailService) {}


  ngOnInit() {
    // this.businessDayDetails = this.newsDetails.businessNewsDetails
    // this.carouselImages = this.newsDetails.businessdayHomepage(3)
  }

  

}
