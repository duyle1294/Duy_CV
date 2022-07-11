import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { InfoComponent } from './components/info/info.component';
import { JobExpComponent } from './components/job-exp/job-exp.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    InfoComponent,
    JobExpComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
