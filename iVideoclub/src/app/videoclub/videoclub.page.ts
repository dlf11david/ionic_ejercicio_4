import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {

  constructor(private router: Router) { }

  verPaginaDetalle(id: any): void {
    this.router.navigate(['/detalle', id]);
  }


  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }

}
