import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MapStatsComponent } from '../../map-stats/map-stats.component';
import { MapComponent } from '../../@core/components/map/map.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HoverClassDirective } from '../../hover-class.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    MapStatsComponent,
    MapComponent,
    HoverClassDirective
  ],
  exports: [
    DashboardComponent,
    MapStatsComponent,
    MapComponent
  ]
})

export class AdminLayoutModule {}
