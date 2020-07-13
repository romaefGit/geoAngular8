import { Component, OnInit} from '@angular/core';
import { MapService } from '@core/services/map.service';
import { CommerceService } from '../services/commerce.service';
import Chart from 'chart.js';
import randomColor from 'randomcolor';
declare const $: any;

@Component({
  selector: 'app-map-stats',
  templateUrl: './map-stats.component.html',
  styleUrls: ['./map-stats.component.css']
})
export class MapStatsComponent implements OnInit {
  commerces: any;
  commercesLayer: any;
  commercesGraph: any;
  showCommerce: boolean;
  showStatistics: boolean;

  statusOptionStats:boolean;
  statusOptionCommerce:boolean;

  animateLocationBtn: boolean;

  sizeCanvasLine: any = {
    width: 400,
    height: 200
  }

  constructor(private map: MapService, private commerceService: CommerceService) { }

  ngOnInit() {
    this.map.buildMap(); // Build the initial map
    this.listCommercesLayer();
    this.isMobileMenu();
    this.listStatistics();
    this.listCommerces();
  }

  /**
   * listCommerce - Is a Toggle to show and hide the list of commerces
   */
  listCommerce(){
    this.showCommerce = !this.showCommerce;
    this.statusOptionCommerce = true;
    this.statusOptionStats = false;
    this.showStatistics = false;
  }

  /**
   * listStatistics - Is a Toggle to show and hide the statistics
   */
  listStatistics(){
    this.showStatistics = !this.showStatistics;
    this.statusOptionStats = true;
    this.statusOptionCommerce = false;
    this.showCommerce = false;
    this.drawStatsGraph();
  }

  /**
   * showLocationOnMap - This catch the id of the commerce and search 
   * the coordinates in the array of this.commercesLayer, then
   * this use one function in the service of map called putMark()
   * to show the location on the map. Also the commerce section is hidden.
   * @param idCommerce[Number] - Id of commerce
   */
  showLocationOnMap(idCommerce){
    // console.log('idCommerce > ',idCommerce);
    let commerceInfo = this.commercesLayer.filter(x => x.properties.id === idCommerce);
    let coordinates = {
      lat: commerceInfo[0].geometry.coordinates[0],
      lng: commerceInfo[0].geometry.coordinates[1]
    }
    this.map.putMark(coordinates.lng, coordinates.lat);
    this.showCommerce = false;
    for (let index = 0; index < this.commerces.length; index++) {
      var commerce = this.commerces[index];
      if(commerce.id == idCommerce){
        this.commerces[index]['active'] = true;
      }else{
        this.commerces[index]['active'] = false;
      }
    }
    // console.log('coordinates > ',coordinates)
  }

  /**
   * separateValues - This divide the properties of an Array of objects
   * to make one array of values of that property and create one 
   * object of Arrays.
   * Example: 
   * 
   * [{'name':'BoB'},{'name':'Marie'}]
   * 
   * output:
   *
   * {
   *    'name': ['Bob','Marie']
   * }
   * 
   * also We can change the name of the final property
   * 
   *  {
   *    'labels': ['Bob','Marie']
   * }
   * @param graphData - graph data
   * @param properties - array of properties original names
   * @param groupNames - array of properties with ne names
   */
  separateValues(graphData, properties, groupNames){
    let result:object = {};
      for (let i = 0; i < properties.length; i++) {
        let property = properties[i];
        let propertyNewName = groupNames[i];
        var arrPropValues = graphData.map(function(obj){
          return obj[''+property];
        });
        result[''+propertyNewName] = arrPropValues;
      }
      return result;
  }


  /**
   * drawStatsGraph - This draw the graph in async way, waiting for 
   * the data of the service this.listCommercesGraph 
   */
  async drawStatsGraph(){
    let graphData = await this.listCommercesGraph();
    let properties = ['name','sales'];
    let groupNames = ['labels','values'];
    let dataToChart = this.separateValues(graphData, properties, groupNames); // data for the chart JSON

    var colorsInside = randomColor({ // Colors random of blue light pallete
      luminosity: 'light',
      count: dataToChart['labels'].length,
      hue: 'blue',
      format: 'rgb' // e.g. 'rgb(225,200,20)'
    });  

    var colorsBorder = randomColor({ // Colors random of blue dark pallete
      luminosity: 'dark',
      count: dataToChart['labels'].length,
      hue: 'blue',
      format: 'rgb' // e.g. 'rgb(225,200,20)'
    });

    var ctx = document.getElementById('salesChart'); // Shape of doughnut chart
    var salesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dataToChart['labels'],
            datasets: [{
                label: 'Number of sales',
                data: dataToChart['values'],
                backgroundColor: colorsInside,
                borderColor: colorsBorder,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive:true,
            animation:{
              animateScale:true
            }
        }
    });

    var ctx = document.getElementById('salesChartLine'); // Shape of Line statistic chart
    var salesChart = new Chart(ctx, {
        type: 'line',
        backgroundColor:['rgb(186, 249, 159)'],
        data: {
          labels: dataToChart['labels'],
          datasets: [{
            label: '# of sales',
            data: dataToChart['values'],
            backgroundColor: colorsInside,
            borderWidth: 1,
            pointRadius:5,
            fill: false,
            borderColor: "#55bae7",
            borderDash: [5, 5],
            pointHoverRadius:8
          }]
        },
        options: {
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
          },
          responsive:true,
          animation:{
            animateScale:true
          }
        }
    });

  }
  
  
  // ----------- SERVICES --------------

  listCommerces(){
      this.commerceService.getCommerces().subscribe((res)=>{
        if(res != null && res != [] && res != ''){
          // console.log('res > ',res);

          this.commerces = res;

          for (let index = 0; index < this.commerces.length; index++) {
            // const commerce = this.commerces[index];
            if(index == 0){
              this.commerces[index]['active'] = true;
            }else{
              this.commerces[index]['active'] = false;
            }
          }
        }
      })
  }

  listCommercesLayer(){
    this.commerceService.getCommercesLayer().subscribe((res)=>{
      if(res != null && res != [] && res != ''){
        console.log('res layer > ',res['features']);
        this.commercesLayer = res['features'];
        let initialCoordinates = {
          lat: this.commercesLayer[0].geometry.coordinates[1],
          lng: this.commercesLayer[0].geometry.coordinates[0]
        }
        // console.log('initialCoordinates > ',initialCoordinates);
        this.map.putMark(initialCoordinates.lat, initialCoordinates.lng);
      }
    })
  }

  async listCommercesGraph(){
    return new Promise((resolve, reject) => {
      this.commerceService.getCommercesGraph().subscribe((res)=>{
        if(res != null && res != [] && res != ''){
          // console.log('res graph > ',res);
          this.commercesGraph = res;
          resolve(res);
        }else{
          reject(null);
        }
      })
    })
  }

  // util functions
  isMobileMenu() {
    if ($(window).width() < 991) {
      this.sizeCanvasLine = {
        width: 400,
        height: 500
      }
    }else{
      this.sizeCanvasLine = {
        width: 400,
        height: 200
      }
    }
  };

  onResize(event) {
    this.isMobileMenu();
  }

  animationButtonLocation: string = 'animate__pulse';

}
