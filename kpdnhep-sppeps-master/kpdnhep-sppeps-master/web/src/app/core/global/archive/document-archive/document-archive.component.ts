import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-archive',
  templateUrl: './document-archive.component.html',
  styleUrls: ['./document-archive.component.scss']
})
export class DocumentArchiveComponent implements OnInit {

  iconlink = ""

  arkib = [
    { id: 1, name: 'manual pengguna', icon:'fab fa-accusoft' },
    { id: 2, name: 'akta 1', icon:'fas fa-gavel' },
    { id: 5, name: 'akta 2', icon: 'fas fa-book'},
    { id: 3, name: 'akta 3', icon: 'fas fa-book'},
    { id: 4, name: 'akta 4', icon: 'fas fa-book'},
    { id: 4, name: 'akta 4', icon: 'fas fa-book'},
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
