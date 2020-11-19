import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularChatUiKitModule } from 'angular-chat-ui-kit';
import { KitchenSinkAppComponent } from './Components/kitchen-sink-app/kitchen-sink-app.component'
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CometChatUserListComponent } from './UiComponents/comet-chat-user-list/comet-chat-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KitchenSinkAppComponent,
    HomePageComponent,
    CometChatUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularChatUiKitModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
