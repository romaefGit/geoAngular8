import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MapStatsComponent } from '../../map-stats/map-stats.component'

export const AdminLayoutRoutes: Routes = [
    { path: '', component: MapStatsComponent },
    { path: 'map-stats', component: MapStatsComponent },
    { path: 'dashboard', component: DashboardComponent },
];
