import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { InfoComponent } from './info/info.component';
import { MunsComponent } from './muns/muns.component';
import { AccountComponent } from './account/account.component';
import { JmunComponent } from './muns/jmun/jmun.component';
import { JmunDetailsComponent } from './muns/jmun/jmun-details/jmun-details.component';

const routes: Routes = [
  {path: '', component: SplashScreenComponent},
  {path: 'info', component: InfoComponent},
  {path: 'muns', component: MunsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'muns/jmun', component: JmunComponent },
  {path: 'muns/jmun/details', component: JmunDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SplashScreenComponent];