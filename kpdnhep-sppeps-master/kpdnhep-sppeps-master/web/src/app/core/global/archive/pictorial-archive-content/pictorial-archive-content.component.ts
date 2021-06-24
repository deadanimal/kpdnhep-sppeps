import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictorial-archive-content',
  templateUrl: './pictorial-archive-content.component.html',
  styleUrls: ['./pictorial-archive-content.component.scss']
})
export class PictorialArchiveContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  arkib = [
    {
      program: 'Siaran Langsung Malaysia Hari Ini (Isu Cap Dagangan - Kartel)',
      location: "Damansara, Selangor",
      information: "Kempen Beli Barangan Malaysia merupakan susulan daripada Kempen Beli Barangan Buatan Malaysia yang telah dilancarkan pada tahun 1998. Penjenamaan semula kempen ini bertujuan untuk menggalakkan pengguna membeli barangan buatan Malaysia dan membantu pengusaha tempatan dalam menghadapi pertumbuhan ekonomi yang kurang memberangsangkan. Ia juga bagi mewujud dan meningkatkan kesedaran masyarakat tentang kualiti barangan dan perkhidmatan yang ditawarkan di Malaysia setaraf dengan piawaian antarabangsa.",
      imageLink: "assets/img/theme/ali-pazani.jpg"
    }
  ]

  slides = [
    {image: 'assets/img/theme/team-1.jpg'},
    {image: 'assets/img/theme/team-2.jpg'},
    {image: 'assets/img/theme/team-3.jpg'}
  ];
  showIndicator = true;
 
  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }

  itemsPerSlide = 3;
 
  slides2 = [
    {image: 'assets/images/nature/1.jpg'},
    {image: 'assets/images/nature/2.jpg'},
    {image: 'assets/images/nature/3.jpg'},
    {image: 'assets/images/nature/4.jpg'},
    {image: 'assets/images/nature/5.jpg'},
    {image: 'assets/images/nature/6.jpg'},
    {image: 'assets/images/nature/7.jpg'},
    {image: 'assets/images/nature/8.jpg'},
    {image: 'assets/images/nature/1.jpg'},
    {image: 'assets/images/nature/2.jpg'}
  ];
}

