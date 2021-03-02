import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route : ActivatedRoute, public globalvar: GlobalvarService,private router: Router) { }

paramtanggal;
paramisi;
paramjudul;

  ngOnInit() {
    this.paramjudul = this.globalvar.getjudul();
    this.paramtanggal = this.globalvar.gettanggal();
    this.paramisi = this.globalvar.getisi();
  }

  openfavourite(){
     this.router.navigate(["/favourite/"]);
  }

}