import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunchComponent } from './punch/punch.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { BusinessDayComponent } from './business-day/business-day.component';
import { HomeComponent } from './home/home.component';
import { LindaIkejiComponent } from './linda-ikeji/linda-ikeji.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news/punch', component: PunchComponent},
  {path: 'news/leadership', component: LeadershipComponent},
  {path: 'news/business_day', component: BusinessDayComponent},
  {path: 'blog/lindaikejisblog', component: LindaIkejiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
