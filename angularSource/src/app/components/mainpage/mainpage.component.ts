import { Component, OnInit } from '@angular/core';
import {Chart} from 'chartjs'
@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
   public title: string;
    public image: string;
    public train: string;
    public improveTitle: string;
     public goodTitle: string;

   
  constructor() { 
    this.title = "My Resumes";
    this.image = "http://clipartsign.com/upload/2016/10/31/clipart-file-or-document-icon.png";
    this.train = "Training!";
    this.improveTitle = "Things to work on!";
    this.goodTitle = "You are doing great!"

    
    // this.makeChart();
  }
/*
  makeChart(){
    var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
  }
  */
  ngOnInit() {
  }

}
