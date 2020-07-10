import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';

@Component({
  selector: 'app-map-stats',
  templateUrl: './map-stats.component.html',
  styleUrls: ['./map-stats.component.css']
})
export class MapStatsComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.buildMap();
  }

}
