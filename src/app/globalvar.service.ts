import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
private Datajudul: string = "usercoba";
private Dataisi: string = "usercoba";
private Datatanggal: string = "usercoba";

  constructor() { }

public getjudul() {
    return this.Datajudul;
  }
  public setjudul(judul: string) {
    this.Datajudul = judul;
  }

public getisi() {
    return this.Dataisi;
  }
  public setisi(isi: string) {
    this.Dataisi = isi;
  }

  public gettanggal() {
    return this.Datatanggal;
  }
  public settanggal(tanggal: string) {
    this.Datatanggal = tanggal;
  }
}