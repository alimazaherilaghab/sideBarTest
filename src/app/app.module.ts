import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ChangePicComponent } from './change-pic/change-pic.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ProfComponent } from './prof/prof.component';
import { PasswordComponent } from './password/password.component';
import { LogOutComponent } from './log-out/log-out.component';
import { CashComponent } from './cash/cash.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "messages", component: MessagesComponent },
  { path: "info", component: InfoComponent },
  { path: "changepic", component: ChangePicComponent },
  { path: "changeinfo", component: ChangeInfoComponent },
  { path: "add", component: AddComponent },
  { path: "delete", component: DeleteComponent },
  { path: "prof", component: ProfComponent },
  { path: "password", component: PasswordComponent },
  { path: "cash", component: CashComponent },
  { path: "logout", component: LogOutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    MessagesComponent,
    ChangePicComponent,
    ChangeInfoComponent,
    AddComponent,
    DeleteComponent,
    ProfComponent,
    PasswordComponent,
    LogOutComponent,
    CashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
