import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexResponsive,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ChartComponent,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: any;
};

@Component({
    selector: 'app-habilities-report',
    templateUrl: './habilities-report.component.html',
    styleUrls: ['./habilities-report.component.scss']
})
export class HabilitiesReportComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Know Stack technologies",
                    data: [80, 50, 110, 80, 10, 40, 95, 90, 30, 100, 120, 60]
                },
                {
                    name: "Soft Skills",
                    data: [20, 110, 90, 30, 100, 120, 60, 80, 50, 110, 80, 10]
                }
            ],
            chart: {
                height: 544,
                type: "radar",
                toolbar: {
                    show: false,
                }
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            yaxis: {
                show: false
            },
            colors: [
                "#757FEF", "#FF8A65"
            ],
            legend: {
                offsetY: 0,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            }
        };
    }

}