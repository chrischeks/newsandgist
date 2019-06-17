import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PunchComponent } from './punch/punch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsDetailService } from './news-detail.service';
import { LeadershipComponent } from './leadership/leadership.component';
import { BusinessDayComponent } from './business-day/business-day.component';
import { HomeComponent } from './home/home.component';
import { LindaIkejiComponent } from './linda-ikeji/linda-ikeji.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PunchComponent,
    NavbarComponent,
    LeadershipComponent,
    BusinessDayComponent,
    HomeComponent,
    LindaIkejiComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [NewsDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }