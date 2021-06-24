import { Component, OnInit, TemplateRef, ViewChild, NgZone } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-fi-collection-statistics',
  templateUrl: './fi-collection-statistics.component.html',
  styleUrls: ['./fi-collection-statistics.component.scss']
})
export class FiCollectionStatisticsComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  constructor(private zone: NgZone) {
    // this.fetch(data => {
    //   this.rows = data;
    // });
  }



  reset() {
    this.getCharts()

    this.tableRows = this.temp
  }

  //start data table
  //
  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `assets/data/application-status-officer-view.json`);

  //   req.onload = () => {
  //     const data = JSON.parse(req.response);
  //     cb(data);
  //   };

  //   req.send();
  // }

  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateStateFilter(event) {
    const val = event.target.value.toLowerCase();
    console.log("bb", val)

    // const nric = (<HTMLInputElement>document.getElementById('nric')).value;;
    // console.log("AAA", nric)

    // filter our data
    console.log(this.temp)
    const temp = this.temp.filter(function (d) {
      return (
        (d.state.toLowerCase().indexOf(val) !== -1 || !val)
      );
    });

    console.log("aaa",temp)

    // update the rows
    this.tableRows = temp;
    console.log("BBB",this.tableRows)

    console.log("ccc",this.temp)
    if (val == "semua")
    {
      this.tableRows = this.temp;
    }
    console.log("BBB",this.tableRows)
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    console.log("bb", val)

    // const nric = (<HTMLInputElement>document.getElementById('nric')).value;;
    // console.log("AAA", nric)

    // filter our data
    console.log(this.temp)
    const temp = this.temp.filter(function (d) {
      return (
        (d.permit.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.state.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.nric.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.name.toLowerCase().indexOf(val) !== -1 || !val)
      );
    });
    console.log("aaa",temp)
    // update the rows
    this.tableRows = temp;
    console.log("BBB",this.tableRows)
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;
  }

  //table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  SelectionType = SelectionType;

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = +$event.target.value;
  }

  //data
  tableRows = [
    {
      permit: "11001",
      approveDate: new Date(2021, 0, 1),
      endDate: new Date(2022, 0, 1),
      name: "Mustafa bin Ali",
      nric: "980207086758",
      state: "Selangor",
      status: "Disenaraihitam",
      applicationType:"Baharu",
      validity: "1 Tahun",
      paymentTotal: "20",
      paymentYear: "2017",
      paymentDate: new Date(2021, 0, 4),
    },
    {
      permit: "11002",
      approveDate: new Date(2021, 0, 2),
      endDate: new Date(2022, 0, 2),
      name: "Roslan bin Dahlan",
      nric: "950323097867",
      state: "Kedah",
      status: "Disenaraihitam",
      applicationType:"Pembaharuan",
      validity: "1 Tahun",
      paymentTotal: "20",
      paymentYear: "2015",
      paymentDate: new Date(2021, 0, 5),
    },
    {
      permit: "11003",
      approveDate: new Date(2021, 0, 2),
      endDate: new Date(2023, 0, 2),
      name: "Nora binti Arshad",
      nric: "891207880932",
      state: "W. P. Kuala Lumpur",
      status: "Disenaraihitam",
      applicationType:"Rayuan",
      validity: "2 Tahun",
      paymentTotal: "20",
      paymentYear: "2016",
      paymentDate: new Date(2021, 0, 6),
    },
    {
      permit: "11004",
      approveDate: new Date(2021, 0, 5),
      endDate: new Date(2023, 0, 5),
      name: "Aliya binti Harun",
      nric: "930402037984",
      state: "Perlis",
      status: "Disenaraihitam",
      applicationType:"Rayuan",
      validity: "1 Tahun",
      paymentTotal: "20",
      paymentYear: "2018",
      paymentDate: new Date(2021, 0, 7),
    },
    {
      permit: "11004",
      approveDate: new Date(2021, 0, 7),
      endDate: new Date(2022, 0, 7),
      name: "Amin bin Redzuan",
      nric: "940409089979",
      state: "Kedah",
      status: "Disenaraihitam",
      applicationType:"Pendua",
      validity: "2 Tahun",
      paymentTotal: "20",
      paymentYear: "2020",
      paymentDate: new Date(2021, 0, 7),
    },
    {
      permit: "11004",
      approveDate: new Date(2021, 0, 5),
      endDate: new Date(2023, 0, 5),
      name: "Aliya binti Harun",
      nric: "930402037984",
      state: "Kedah",
      status: "Disenaraihitam",
      applicationType:"Pendua",
      validity: "2 Tahun",
      paymentTotal: "20",
      paymentYear: "2021",
      paymentDate: new Date(2021, 0, 9),
    },
    {
      permit: "11004",
      approveDate: new Date(2021, 0, 7),
      endDate: new Date(2022, 0, 7),
      name: "Amin bin Redzuan",
      nric: "940409089979",
      state: "Kedah",
      status: "Disenaraihitam",
      applicationType:"Baharu",
      validity: "1 Tahun",
      paymentTotal: "20",
      paymentYear: "2021",
      paymentDate: new Date(2021, 0, 9),
    },
  ]

  //end datatable


  ngOnInit(): void {
    // this.fetch(data => {
    //   cache our list
    //   this.temp = data;

    //   push our inital complete list
    //   this.rows = data;
    // });
    this.temp = this.tableRows

    this.getCharts();

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        // if (this.chart) {
        //   console.log('Chart disposed')
        //   this.chart.dispose()
        // }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
        if (this.chart2) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
      }
    )
  }

  //Charts

  private chart: any
  private chart1: any
  private chart2: any

  tempChartData = []
  tempChartData2 = []

  getCharts() {
    this.zone.runOutsideAngular(() => {
      // this.getChart()
      this.getChart1()
      this.getChart2()
    })
  }

  data1 = [{
    "date": new Date(2021, 0, 1),
    "Lelaki": 450,
    "Perempuan": 162,
  }, {
    "date": new Date(2021, 0, 2),
    "Lelaki": 669,
    "Perempuan": 841
  }, {
    "date": new Date(2021, 0, 3),
    "Lelaki": 1200,
    "Perempuan": 199
  }, {
    "date": new Date(2021, 0, 4),
    "Lelaki": 867,
    "Perempuan": 500,
  }, {
    "date": new Date(2021, 0, 5),
    "Lelaki": 185,
    "Perempuan": 669
  }, {
    "date": new Date(2021, 0, 6),
    "Lelaki": 150,
    "Perempuan": 200
  }, {
    "date": new Date(2021, 0, 7),
    "Lelaki": 1220,
    "Perempuan": 350,
  }];

  getChart1() {
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = this.data1;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    function createSeries(field, name) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.name = name;
      series.tooltipText = "{dateX}: [b]{valueY}[/]";
      series.strokeWidth = 2;

      // series.smoothing = "monotoneX";

      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = am4core.color("#fff");
      bullet.circle.strokeWidth = 2;

      return series;
    }

    createSeries("Lelaki", "Lelaki");
    createSeries("Perempuan", "Perempuan");
    // createSeries("value3", "Series #3");

    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();

    //scrollbar
    chart.scrollbarX = new am4core.Scrollbar();
  }


  data2 = [{
    "date": new Date(2021, 0, 1),
    "year": "2016",
    "europe": 2.5,
    "namerica": 2.5,
    "asia": 2.1,
    "lamerica": 0.3,
    "meast": 0.2,
    "africa": 0.1
  }, {
    "date": new Date(2021, 0, 2),
    "year": "2017",
    "europe": 2.6,
    "namerica": 2.7,
    "asia": 2.2,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }, {
    "date": new Date(2021, 0, 3),
    "year": "2018",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }, {
    "date": new Date(2021, 0, 4),
    "year": "2018",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }, {
    "date": new Date(2021, 0, 5),
    "year": "2018",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }, {
    "date": new Date(2021, 0, 6),
    "year": "2018",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  },
  {
    "date": new Date(2021, 0, 7),
    "year": "2018",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }

  ];

  getChart2() {
    let chart = am4core.create("chartdiv2", am4charts.XYChart);


    // Add data
    chart.data = this.data2

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;

    // Create axes
    // let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    // categoryAxis.dataFields.category = "year";
    // categoryAxis.renderer.grid.template.location = 0;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = false;
    valueAxis.renderer.labels.template.disabled = false;
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name) {

      // Set up series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      // series.tooltipText = "{dateX}: [b]{valueY}[/]";
      series.sequencedInterpolation = true;
      // series.strokeWidth = 2;

      // Set up series
      // let series = chart.series.push(new am4charts.ColumnSeries());
      // series.name = name;
      // series.dataFields.valueY = field;
      // series.dataFields.categoryX = "year";
      // series.sequencedInterpolation = true;

      // Make it stacked
      series.stacked = true;

      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

      // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;

      return series;
    }



    createSeries("europe", "Europe");
    createSeries("namerica", "North America");
    createSeries("asia", "Asia-Pacific");
    createSeries("lamerica", "Latin America");
    createSeries("meast", "Middle-East");
    createSeries("africa", "Africa");

    // Legend
    chart.legend = new am4charts.Legend();

    //scrollbar
    chart.scrollbarX = new am4core.Scrollbar();
  }


  //filter charts
  filterCharts() {
    const startDate = new Date((<HTMLInputElement>document.getElementById('start-date')).value);
    const endDate = new Date((<HTMLInputElement>document.getElementById('end-date')).value);

    console.log("AAA", startDate, endDate)

    //filter chart1
    this.tempChartData = this.data1;
    console.log("temp", this.tempChartData);
    console.log(new Date(this.data1[1].date));

    const filteredData = this.data1.filter(el => new Date(el.date).getTime() >= startDate.getTime() && new Date(el.date).getTime() <= endDate.getTime());
    console.log(filteredData);

    this.data1 = filteredData;
    console.log("data1", this.data1);



    //filter chart2
    this.tempChartData2 = this.data2;
    console.log("temp", this.tempChartData2);

    const filteredData2 = this.data2.filter(el => new Date(el.date).getTime() >= startDate.getTime() && new Date(el.date).getTime() <= endDate.getTime());
    console.log(filteredData);

    this.data2 = filteredData2;
    console.log("data2", this.data2);


    this.getCharts();
    //return original data
    this.data1 = this.tempChartData;
    console.log("data", this.data1);
    this.data2 = this.tempChartData2;
    console.log("data", this.data1);


    //filtertable

    const filteredTable = this.temp.filter(el => new Date(el.approveDate).getTime() >= startDate.getTime() && new Date(el.approveDate).getTime() <= endDate.getTime());
    // const temp = this.temp.filter(function (d) {
    //   return (
    //     (d.approveDate.indexOf(startDate) !== -1 || !startDate) 
    //   );
    // });
    console.log("filteredTable",filteredTable)
    // update the rows
    this.tableRows = filteredTable;
    console.log("BBB",this.tableRows)
  }

}