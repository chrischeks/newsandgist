import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsDetailService {
  PUNCH_URL = 'http://localhost:8080/news/punchng';
  LEADERSHIP_URL = 'http://localhost:8080/news/leadershipng';
  BUSINESS_DAY_URL = 'http://localhost:8080/news/businessdayng';
  LINDA_IKEJI_URL = 'http://localhost:8080/blog/lindaikejisblog';
  lindaBlog =[];
  businessdayObservable = this.http.get(this.BUSINESS_DAY_URL)
  

  constructor(private http: HttpClient) { }

  get punchNewsDetails() {
    return this.http.get(this.PUNCH_URL)
  }

  get leadershipNewsDetails() {
    return this.http.get(this.LEADERSHIP_URL)
  }

  get businessNewsDetails() {
    return this.businessdayObservable
  }

  get lindaIkejiBlogDetails() {
    return this.http.get(this.LINDA_IKEJI_URL)
     
  }

  
  homepageNews(url) {
    let siteNews: any[] = [];
    this.http.get(url).subscribe((result: string[]) => {
      for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * (result.length - 1))
        const news = result[index]
        siteNews.push(news)
      }
    })
    return siteNews
  }

  // async getThreeImages(){
  //   let businessdayNews:any[] = await this.homepageNews(this.BUSINESS_DAY_URL);
  //   console.log(businessdayNews, "hhhhhh")
  //   let images = [businessdayNews[0]['image'], businessdayNews[1]['image'], businessdayNews[2]['image']]
  //   console.log(images, 'images')
  //     // this.businessdayObservable.subscribe((result:string[])=>{
  //     //   for(let i= 0; i<3; i++){
  //     //    const index= Math.floor(Math.random()* result.length-1)
  //     //    const src = result[index]['image']
  //     //   images.push(src)
  //     //   }
  //     // })
  //     return images
  //   }
  
  

  get punchHomepage(){
    const punchNews:any[] = this.homepageNews(this.PUNCH_URL);
    return punchNews
  }

  get leadershipHomepage(){
    const leadershipNews:any[] = this.homepageNews(this.LEADERSHIP_URL);
    return leadershipNews
  }

  get lindaHomepage(){
    const lindaNews:any[] = this.homepageNews(this.LINDA_IKEJI_URL);
    return lindaNews
  }

  get businessdayHomepage(){
    const businessdayNews:any[] = this.homepageNews(this.BUSINESS_DAY_URL);
    return businessdayNews
  }


}
