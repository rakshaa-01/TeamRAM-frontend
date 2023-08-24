import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RestRequestsService } from 'app/services/rest-requests.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-view-chart',
  templateUrl: './view-chart.component.html',
  styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements AfterViewInit{
  constructor(private restService: RestRequestsService) { }
  

  @ViewChild('buyChartCanvas', { static: true }) buyChartCanvas: ElementRef;
  @ViewChild('sellChartCanvas', { static: true }) sellChartCanvas: ElementRef;
  @ViewChild('bubbleChartCanvas', { static: true }) bubbleChartCanvas: ElementRef;
  private buyChart: Chart;
  private sellChart: Chart;
  private bubbleChart: Chart;

  ngAfterViewInit(): void {
    this.restService.getStocks().subscribe(data => {

    //Bubble chart configuration
    const labels = data.map(item => item.stockTicker);
    const prices = data.map(item => item.price);
    const volumes = data.map(item => item.volume);

    const maxVolume = Math.max(...volumes);

    const bubbleChartData = data.map(item => ({
      x: item.price,
      y: item.volume,
      r: (item.volume / maxVolume) * 70,
    }));
    const ctx = this.bubbleChartCanvas.nativeElement.getContext('2d');

    //BUY, SELL bar chart configuration
    const buyData = data.filter(item => item.buyOrSell === 'BUY');
    const sellData = data.filter(item => item.buyOrSell === 'SELL');

    const buyLabels = buyData.map(item => item.stockTicker);
    const buyPrices = buyData.map(item => item.price);

    const sellLabels = sellData.map(item => item.stockTicker);
    const sellPrices = sellData.map(item => item.price);

    const buyCtx = this.buyChartCanvas.nativeElement.getContext('2d');
    const sellCtx = this.sellChartCanvas.nativeElement.getContext('2d');
    
    this.bubbleChart = new Chart(ctx, {
      type: 'bubble',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Stock Data',
            data: bubbleChartData,
            backgroundColor: 'rgb(60, 60, 60)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Stock Price (USD)',
              font: {
                weight: 'bold', 
                size: 12,
              },
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Volume (nos.)',
              font: {
                weight: 'bold', 
                size: 12,
              },
            },
          },
        },
      },
    });


    this.buyChart = new Chart(buyCtx, {
      type: 'bar',
      data: {
        labels: buyLabels,
        datasets: [
          {
            label: 'Price (BUY)',
            data: buyPrices,
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    this.sellChart = new Chart(sellCtx, {
      type: 'bar',
      data: {
        labels: sellLabels,
        datasets: [
          {
            label: 'Price (SELL)',
            data: sellPrices,
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


  });
  }

}
