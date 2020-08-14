import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemComponent } from './component/item.component';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ItemService } from './service/item.service';

@NgModule({
  declarations: [
    AppComponent, //
    ItemComponent,
  ],
  imports: [
    BrowserModule, //
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'FirebaseAngular'),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
