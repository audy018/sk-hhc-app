import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { EmrPage } from '../pages/emr/emr';
import { EmrDetailPage } from '../pages/emr-detail/emr-detail';
import { SettingPage } from '../pages/setting/setting';
import { EntryPage } from '../pages/entry/entry';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage, 
    EmrPage,
    EmrDetailPage,
    SettingPage,
    EntryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    EmrPage,
    EmrDetailPage,
    SettingPage,
    EntryPage
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://localhost:3000' },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}