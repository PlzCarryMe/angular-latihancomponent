import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DetailComponent } from "./detail/detail.component";
import { FavouriteComponent } from "./favourite/favourite.component";

import { RouterModule, Routes } from "@angular/router";
import { GlobalvarService } from './globalvar.service';

const ROUTES: Routes = [
  { path: "detail", component: DetailComponent },
  { path: "favourite", component: FavouriteComponent },
  { path: "input", component: AppComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [AppComponent,HelloComponent,DetailComponent,FavouriteComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobalvarService]
})
export class AppModule {}
