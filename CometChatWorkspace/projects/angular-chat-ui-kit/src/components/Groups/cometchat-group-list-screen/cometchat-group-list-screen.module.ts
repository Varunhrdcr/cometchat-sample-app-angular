import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CometchatGroupListScreenComponent } from "./cometchat-group-list-screen/cometchat-group-list-screen.component";
import { CometchatGroupListModule } from "../cometchat-group-list/cometchat-group-list.module";
import { CometchatMessageListScreenModule } from "../../Messages/cometchat-message-list-screen/cometchat-message-list-screen.module";
import { CometchatMessageThreadModule } from "../../Messages/cometchat-message-thread/cometchat-message-thread.module";

import { CometchatImageViewModule } from "../../Messages/cometchat-image-view/cometchat-image-view.module";
import { CometchatGroupDetailModule } from "../cometchat-group-detail/cometchat-group-detail.module";
import { CometchatIncomingCallModule } from "../../Calls/cometchat-incoming-call/cometchat-incoming-call.module";
import { CometchatCallScreenModule } from "../../Calls/cometchat-call-screen/call-screen.module";

@NgModule({
  declarations: [CometchatGroupListScreenComponent],
  imports: [
    CommonModule,
    CometchatGroupListModule,
    CometchatMessageListScreenModule,
    CometchatMessageThreadModule,
    CometchatGroupDetailModule,
    CometchatImageViewModule,
    CometchatIncomingCallModule,
    CometchatCallScreenModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [CometchatGroupListScreenComponent],
})
export class CometchatGroupListScreenModule {}
