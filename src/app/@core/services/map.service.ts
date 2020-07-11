import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;

  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 4.6240716;
  lng = -74.1509265;
  zoom = 15;

  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  
  buildMap() {

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  putMark(lat, lng){
    this.map.flyTo({
      center: [
        lng,
        lat
      ],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
    var marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(this.map);
  }
}