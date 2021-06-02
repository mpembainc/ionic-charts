import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: any[];
  labels: any[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: Partial<ChartOptions>;
  public barOptions: Partial<ChartOptions>;
  public areaOptions: Partial<ChartOptions>;
  public radial: Partial<ChartOptions>;

  constructor() {
    this.spackLine();
    this.barChart();
    this.areaChart();
    this.radialChart();
  }

  spackLine() {
    this.options = {
      chart: {
        type: 'line',
        height: 100,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69],
        },
      ],
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          left: 110,
          bottom: 10,
        },
      },
      colors: ['#fff'],
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return ''; // remove title in tooltip
            },
          },
        },
      },
    };
  }

  barChart() {
    this.barOptions = {
      chart: {
        type: 'bar',
        height: 180,
        width: '100%',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: 'Clothing',
          data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51],
        },
        {
          name: 'Foods',
          data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6],
        },
      ],
      labels: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      grid: {
        borderColor: '#343E59',
        padding: {
          right: 0,
          left: 0,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: '#78909c',
          },
        },
      },
      title: {
        text: 'Monthly Sales',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#78909c',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        labels: {
          colors: '#78909c',
        },
      },
    };
  }

  areaChart() {
    this.areaOptions = {
      chart: {
        type: 'area',
        height: 180,
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: 'Sales',
          data: [
            47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
            53, 61, 27, 54, 43, 19, 46,
          ],
        },
      ],
      stroke: {
        width: 2,
        colors: ['#ffd3a5'],
      },
      fill: {
        colors: ['#ffd3a5'],
        gradient: {
          gradientToColors: ['#2b2d3e'],
          opacityTo: 0.2,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
      colors: ['#DCE6EC'],
      title: {
        text: '$424,652',
        offsetX: 30,
        style: {
          fontSize: '24px',
          color: '#78909c',
        },
      },
      subtitle: {
        text: 'Sales',
        offsetX: 30,
        style: {
          fontSize: '14px',
          color: '#78909c',
        },
      },
    };
  }

  radialChart() {
    this.radial = {
      chart: {
        type: 'radialBar',
        height: 180,
      },
      series: [70],
      plotOptions: {
        radialBar: {
          track: {
            background: '#c7c7c7',
            margin: 0,
            strokeWidth: '70%',
          },
          dataLabels: {
            name: {
              color: '#fff',
              offsetY: -10,
              fontSize: '14px',
            },
            value: {
              color: '#fff',
              fontSize: '20px',
              offsetY: 0,
            },
          },
          hollow: {
            size: '65%',
          },
        },
      },
      fill: {
        colors: ['#fd6585'],
      },
      labels: ['Tasks'],
    };
  }
}
