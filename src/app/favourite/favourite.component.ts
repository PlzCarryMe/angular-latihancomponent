import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor( public globalvar: GlobalvarService) { }

paramtanggal;
paramisi;
paramjudul;

  ngOnInit() {
    this.paramjudul = this.globalvar.getjudul();
    this.paramtanggal = this.globalvar.gettanggal();
    this.paramisi = this.globalvar.getisi();
  }

}