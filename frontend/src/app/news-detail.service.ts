import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsDetailService {
  BASE_URL =''
  PUNCH_URL = `${this.BASE_URL}news/punchng`;
  LEADERSHIP_URL = `${this.BASE_URL}news/leadershipng`;
  BUSINESS_DAY_URL = `${this.BASE_URL}news/businessdayng`;
  LINDA_IKEJI_URL = `${this.BASE_URL}blog/lindaikejisblog`;

  constructor(private http: HttpClient) { }
  
  get punchNewsDetails() {
    
    return this.http.get(this.PUNCH_URL)
  }

  get leadershipNewsDetails() {
    return this.http.get(this.LEADERSHIP_URL)
  }


  get lindaIkejiBlogDetails() {
    return this.http.get(this.LINDA_IKEJI_URL)
     
  }

  
  private homepageNews(url, numberOfRetrival) {
    let siteNews: any[] = [];
    this.http.get(url).subscribe((result: string[]) => {
      for (let i = 0; i < numberOfRetrival; i++) {
        const index = Math.floor(Math.random() * (result.length - 1))
        const news = result[index]
        siteNews.push(news)
      }
    })
    return siteNews
  }
  

  punchHomepage(numberOfRetrival){
    const punchNews:any[] = this.homepageNews(this.PUNCH_URL, numberOfRetrival);
    return punchNews
  }

  leadershipHomepage(numberOfRetrival){
    const leadershipNews:any[] = this.homepageNews(this.LEADERSHIP_URL, numberOfRetrival);
    return leadershipNews
  }

  lindaHomepage(numberOfRetrival){
    const lindaNews:any[] = this.homepageNews(this.LINDA_IKEJI_URL, numberOfRetrival);
    return lindaNews
  }

  // businessdayHomepage(numberOfRetrival){
  //   const businessdayNews:any[] = this.homepageNews(this.BUSINESS_DAY_URL,numberOfRetrival);
  //   return businessdayNews
  // }


}
