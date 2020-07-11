import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../services/commerce.service';
import Chart from 'chart.js';
import randomColor from 'randomcolor';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }


}