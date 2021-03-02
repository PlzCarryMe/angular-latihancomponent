import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from "../globalvar.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor( public globalvar: GlobalvarService, private router: Router) { }

paramtanggal;
paramisi;
paramjudul;

  ngOnInit() {
    this.paramjudul = this.globalvar.getjudul();
    this.paramtanggal = this.globalvar.gettanggal();
    this.paramisi = this.globalvar.getisi();
  }

  back(){
    this.router.navigate(["/detail/"]);
  }

}