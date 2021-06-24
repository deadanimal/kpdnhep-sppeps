import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictorial-archive',
  templateUrl: './pictorial-archive.component.html',
  styleUrls: ['./pictorial-archive.component.scss']
})
export class PictorialArchiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arkib = [
    { id: 1, name: 'Arkib Bergambar 1', imageLink:"assets/img/theme/img-1-1000x600.jpg" },
    { id: 2, name: 'Arkib Bergambar 2', imageLink:"assets/img/theme/img-1-1000x900.jpg" },
    { id: 5, name: 'Arkib Bergambar 3', imageLink:"assets/img/theme/profile-cover.jpg" },
    { id: 3, name: 'Arkib Bergambar 4', imageLink:"assets/img/theme/img-1-1000x600.jpg" },
    { id: 4, name: 'Arkib Bergambar 5', imageLink:"assets/img/theme/img-1-1000x900.jpg" },
    { id: 4, name: 'Arkib Bergambar 5', imageLink:"assets/img/theme/profile-cover.jpg" }
  ];

}
