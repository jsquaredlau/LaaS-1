import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from "@angular/router";



import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header/page-header.component';
import { PanelComponent } from './panel/panel/panel.component';
import { CardComponent } from './panel/card/card.component';
import { NgInitDirective } from './shared/ng-init.directive';
import {AngularFireModule} from "angularfire2";

const appRoutes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'activated', component:  PanelComponent},
  { path: 'deactivated', component:  PanelComponent},
  { path: 'requests', component:  PanelComponent}
];

var firebaseConfig = {
  apiKey: "AIzaSyBQNNPknNbL21FqtJLDbZpd9DvC3Nqudnk",
  authDomain: "laas-1.firebaseapp.com",
  databaseURL: "https://laas-1.firebaseio.com",
  projectId: "laas-1",
  storageBucket: "laas-1.appspot.com",
  messagingSenderId: "622638005740"
};

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PanelComponent,
    CardComponent,
    NgInitDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
