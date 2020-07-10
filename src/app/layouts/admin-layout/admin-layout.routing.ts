import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MapStatsComponent } from '../../map-stats/map-stats.component'

export const AdminLayoutRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'map-stats', component: MapStatsComponent },
];
