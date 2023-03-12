import { Component } from '@angular/core';
import { Router, RouterModule, RouterLinkWithHref } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  router: Router;


  title = 'sideBarTest';

  home: boolean = true;
  profile: boolean = false;
  message: boolean = false;
  info: boolean = false;
  setting: boolean = false;

  messagen: boolean = false;

  profilen1: boolean = false;
  profilen2: boolean = false;
  profilen3: boolean = false;
  profilen4: boolean = false;

  settingn1: boolean = false;
  settingn2: boolean = false;
  settingn3: boolean = false;
  settingn4: boolean = false;



  homeClick(): boolean {

    this.home = true;
    this.messagen = false;
    this.info = false;
    this.settingn1 = false;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false
    this.profilen1 = false;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;
    return false;
  }

  profileClick(): boolean {
    this.profile = !this.profile;
    return false;
  }

  messageClick(): boolean {
    this.message = !this.message;
    return false;
  }

  messagenClick(): boolean {

    this.messagen = true;

    this.home = false;
    this.info = false;
    this.profilen1 = false;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;

    this.settingn1 = false;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false;
    return false;
  }

  infoClick(): boolean {

    this.info = true;
    this.home = false;
    this.messagen = false;
    this.profilen1 = false;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;

    this.settingn1 = false;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false;

    return false;
  }

  settingClick(): boolean {
    this.setting = !this.setting;
    return false;
  }


  profilen1Click(): boolean {

    this.profilen1 = true;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.settingn1 = false;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false;
    return false;
  }

  profilen2Click(): boolean {

    this.profilen2 = true;
    this.profilen1 = false;
    this.profilen3 = false;
    this.profilen4 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.settingn1 = false;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false;
    return false;
  }

  profilen3Click(): boolean {

    this.profilen3 = true;
    this.profilen2 = false;
    this.profilen1 = false;
    this.profilen4 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.settingn1 = false;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false;
    return false;
  }

  profilen4Click(): boolean {

    this.profilen4 = true;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen1 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.settingn1 = false;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false;
    return false;
  }

  // setting items functions

  settingN1Click(): boolean {

    this.settingn1 = true;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn4 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.profilen1 = false;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;
    return false;
  }

  settingN2Click(): boolean {

    this.settingn2 = true;
    this.settingn1 = false;
    this.settingn3 = false;
    this.settingn4 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.profilen1 = false;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;
    return false;
  }

  settingN3Click(): boolean {

    this.settingn3 = true;
    this.settingn2 = false;
    this.settingn1 = false;
    this.settingn4 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.profilen1 = false;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;
    return false;
  }

  settingN4Click(): boolean {

    this.settingn4 = true;
    this.settingn2 = false;
    this.settingn3 = false;
    this.settingn1 = false;

    this.home = false;
    this.messagen = false;
    this.info = false;
    this.profilen1 = false;
    this.profilen2 = false;
    this.profilen3 = false;
    this.profilen4 = false;
    return false;
  }


}
