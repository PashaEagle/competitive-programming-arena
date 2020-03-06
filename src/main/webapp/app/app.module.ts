import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CompetitiveProgrammingArenaSharedModule } from 'app/shared/shared.module';
import { CompetitiveProgrammingArenaCoreModule } from 'app/core/core.module';
import { CompetitiveProgrammingArenaAppRoutingModule } from './app-routing.module';
import { CompetitiveProgrammingArenaHomeModule } from './home/home.module';
import { CompetitiveProgrammingArenaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CompetitiveProgrammingArenaSharedModule,
    CompetitiveProgrammingArenaCoreModule,
    CompetitiveProgrammingArenaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CompetitiveProgrammingArenaEntityModule,
    CompetitiveProgrammingArenaAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class CompetitiveProgrammingArenaAppModule {}
