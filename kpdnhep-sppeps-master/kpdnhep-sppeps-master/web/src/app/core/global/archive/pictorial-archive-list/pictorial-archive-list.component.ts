import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictorial-archive-list',
  templateUrl: './pictorial-archive-list.component.html',
  styleUrls: ['./pictorial-archive-list.component.scss']
})
export class PictorialArchiveListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arkib = [
    { id: 1, name: 'Arkib Bergambar 1', year:"2021", imageLink:"assets/img/theme/team-1.jpg" },
    { id: 2, name: 'Arkib Bergambar 2', year:"2020", imageLink:"assets/img/theme/team-2.jpg" },
    { id: 5, name: 'Arkib Bergambar 3', year:"2019", imageLink:"assets/img/theme/team-3.jpg" },
    { id: 3, name: 'Arkib Bergambar 4', year:"2018", imageLink:"assets/img/theme/team-4.jpg" },
    { id: 4, name: 'Arkib Bergambar 5', year:"2017", imageLink:"assets/img/theme/team-5.jpg" },
    { id: 1, name: 'Arkib Bergambar 1', year:"2016", imageLink:"assets/img/theme/team-1.jpg" },
  ];

  // imgLink = "assets/img/theme/";

}
