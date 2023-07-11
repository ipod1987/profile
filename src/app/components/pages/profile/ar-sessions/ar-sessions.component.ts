import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexGrid,
    ApexXAxis,
    ApexFill,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    colors: any;
};

@Component({
    selector: 'app-habilities-sessions',
    templateUrl: './ar-sessions.component.html',
    styleUrls: ['./ar-sessions.component.scss']
})
export class HabilitiesSessionsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    title = 'Technical Habilities (Years)';
    technologiesExperience = [
        "Java",
        "Javascript",
        "Php",
        "Typescript",
        "SOAP, REST, Graphql",
        "AngularJs, Angular 2+(5,6,7,8,9,10,15)",
        "Reactjs",
        "SQL (Mysql, Postrgresql, Informix, Oracle, Sql Server), Mongodb",
        "NoSQL Mongodb, Firebase",
        "Java SpringBoot",
        "GIT, GIT Flow, SVN",
        "HTML5 and CSS3",
        "Docker"
    ];
    yearsExperience = [10, 8, 6, 4, 6, 6, 4, 12, 3, 4, 8, 10, 2];

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Experience",
                    data: this.yearsExperience,
                }
            ],
            chart: {
                type: "bar",
                height: 544,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#757FEF"
            ],
            stroke: {
                width: 0,
                show: true,
                colors: ["transparent"]
            },
            xaxis: {
                categories: this.technologiesExperience,
                labels: {
                    show: true,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                },
                axisBorder: {
                    show: false
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + " years";
                    }
                }
            },
            legend: {
                offsetY: 5,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            },
            grid: {
                show: true,
                borderColor: "#EDEFF5",
                strokeDashArray: 5
            }
        };
    }

}