import { Component, OnInit } from '@angular/core';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private pentadbir: PentadbirService) { }

  rows;
  category =  ['Umum', 'Kepenggunaan'];
  title;
  content;

  ngOnInit(): void {
    // this.accordion();
    this.pentadbir.getActiveSoalanLazim().subscribe(res=>{
      this.rows = res
      console.log(res)

      if (res.kategori_id === 1){
        if(res.status === 'Aktif'){
          this.title = res.tajuk_ms;
          this.content = res.kandungan_ms;
        }
      } else {
        if(res.status === 'Aktif'){
          this.title = res.tajuk_ms;
          this.content = res.kandungan_ms;
        }
      }
    })
  }

  // isContentOpen: boolean = false;
  oneAtATime: boolean = true;



  // faq = [
  //   {
  //     category: "Umum",
  //     contents: [
  //       {
  //         title: "Apakah syarat-syarat untuk menjadi Ejen Pemilikan Semula?",
  //         content: "Warganegara Malaysia"
  //       },
  //       {
  //         title: "Bilakah syarat ini mula dikuatkuasa?",
  //         content: "25 Februari 2021",
  //       },
  //       {
  //         title: "Apakah hak-hak pengguna?",
  //         content: "Melaporkan kepada pihak 4 berkuasa",
  //       },
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti",
  //       }
  //     ]
  //   },
  //   {
  //     category: "Kepenggunaan",
  //     contents: [
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti"
  //       },
  //       {
  //         title: "Apakah hak-hak pengguna?",
  //         content: "Melaporkan kepada pihak 4 berkuasa",
  //       },
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti",
  //       }
  //     ]
  //   },
  //   {
  //     category: "Tribunal Tuntutan Pengguna Malaysia",
  //     contents: [
  //       {
  //         title: "Apakah hak-hak pengguna?",
  //         content: "Melaporkan kepada pihak 4 berkuasa",
  //       },
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti",
  //       },
  //       {
  //         title: "Apakah hak-hak pengguna?",
  //         content: "Melaporkan kepada pihak 4 berkuasa",
  //       }
  //     ]
  //   },
  //   {
  //     category: "Perdagangan",
  //     contents: [
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti",
  //       },
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti",
  //       },
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti",
  //       }
  //     ]
  //   },
  //   {
  //     category: "Dasar dan perancangan",
  //     contents: [
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti"
  //       },
  //       {
  //         title: "Apakah hak-hak pengguna?",
  //         content: "Melaporkan kepada pihak 4 berkuasa",
  //       },
  //       {
  //         title: "Bagaimana menjadi pengguna yang bijak?",
  //         content: "Memilih barangan yang berkualiti",
  //       }
  //     ]
  //   },
  // ]
}
