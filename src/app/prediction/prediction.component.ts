import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})

export class PredictionComponent implements OnInit {
  plotData = [];
  layout = {};
 
  public  graph = {
    data: [
            ],
    layout: {}
};


  constructor() {

   }
  
  ngOnInit() {
    var trace1 = {
 
      x: ["04 Mon","05 Tue","06 Wed","07 Thu","08 Fri","09 Sat","Today Sun","11 Mon","12 Tue","13 Wed","14 Thu","15 Fri","16 Sat"],
      y: [61889.0,63624.0,63382.0,68331.0,75910.0,90736.0,98204.0,61889.0,63624.0,63382.0,68331.0,75910.0,90736.0],
       marker: {
        color: '#AC439C'},
       
      type: 'scatter',
    };
    var layout = {
      title: 'Line Dash',
      
      yaxis: {
        range: [50000, 150000],
        autorange: false
      }
      
    };
    
    var data = [trace1];
    this.graph.data=data;
    this.graph.layout=layout;
   this.plotData=["predictionTimeLine",this.graph.data,this.graph.layout];
   
  }
   
}
