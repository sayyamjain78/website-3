import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardHomeComponent} from './home/dashboard-home.component';
import {UserListComponent} from './user-list/user-list.component';
import {CommunityListComponent} from './community/community-list.component';
import {ActivityCardComponent} from './activity-card/activity-card.component';
import {NotFoundModule} from '../not-found/not-found.module';
import {SmartTableModule} from './smart-table/smart-table.module';
import { UserEditModalComponent } from './user-list/user-edit-modal/user-edit-modal.component';
import {CommunityHomeComponent} from './community/community-home/community-home.component';
import {ProfileCardComponent} from './profile/profile-card/profile-card.component';
import {UserProfileComponent} from './profile/user-profile.component';
import {ProfileInfoComponent} from './profile/profile-info/profile-info.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    SmartTableModule,
    Ng2SmartTableModule,
    NotFoundModule,
    DashboardRoutingModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    CommunityHomeComponent,
    CommunityListComponent,
    UserListComponent,
    ActivityCardComponent,
    UserEditModalComponent,
    ProfileCardComponent,
    UserProfileComponent,
    ProfileInfoComponent,
  ],
  entryComponents: [
    UserEditModalComponent,
  ],
  providers: [],
})
export class DashboardModule { }
