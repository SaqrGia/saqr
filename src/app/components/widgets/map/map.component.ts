import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule,LeafletModule, LeafletMarkerClusterModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map!: L.Map;
  markers: L.Marker[] = [];
  markerCluster!: L.MarkerClusterGroup 
  markerClusterGroup!: L.MarkerClusterGroup;
  markerClusterData = [];
  createSideBarResult: any;

  constructor(private renderer: Renderer2) {}


  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }),
      
    ],
    scrollWheelZoom : false,
    zoom: 7,
    center: { lat: 15.195, lng:  46.734 } 
  }

  layersControl = {
    baseLayers: {
      'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
maxZoom: 22, attribution: '...' }),
      'Satellite View Map': L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', { 
maxZoom: 22, attribution: '...',  subdomains:['mt0','mt1','mt2','mt3']})
    },
    overlays: {

    }
      }


  initMarkers() {
    const initialMarkers = [
      {ribbon: 'Marker 2 Ribbon',
      title: 'Marker 2 Title',
      price: 200,
      marker_image: 'marker2.jpg',
      position: { lat: 15.360849223665118, lng: 44.18597355146162 },
        draggable: true
      },
      {
        ribbon: 'Marker 2 Ribbon',
      title: 'Marker 2 Title',
      price: 200,
      marker_image: 'marker2.jpg',
        position: { lat: 15.360849223165118, lng: 44.18597355146122 },
        draggable: false
      },
      {
        position: { lat:  15.366521014347057, lng: 44.203853473009445 },
        draggable: true
      },
      {
        position: { lat:  15.20097661579787, lng: 44.98630845600735 },
        draggable: true
      },
      {
        position: { lat:  15.202477872230418, lng:  44.96452876381625 },
        draggable: true
      }
    ];



    this.markerClusterGroup = L.markerClusterGroup();

  for (let index = 0; index < initialMarkers.length; index++) {
    const data = initialMarkers[index];
    const marker = this.generateMarker(data, index);
    this.markerClusterGroup.addLayer(marker);

    const popupContent = `
    <div class="ts-marker-wrapper">
      <b>${data.position.lat},  ${data.position.lng}</b>
     
      ${data.title}
    </div>
    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
  const popup = L.popup().setContent(popupContent);
  marker.bindPopup(popup);
    
  }
  this.map.addLayer(this.markerClusterGroup);
  }
  


  generateMarker(data: any, index: number) {
    const markerIcon = L.icon({
      iconUrl: 'assets/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      popupAnchor: [0, -34],
      tooltipAnchor: [0, -24],
      shadowUrl: 'assets/marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [13, 41]
    });

    return L.marker(data.position, {
      draggable: data.draggable,
      icon: markerIcon
    })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
      
  }

  onMapReady($event: L.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  } 
  layers = [

  ];
}
