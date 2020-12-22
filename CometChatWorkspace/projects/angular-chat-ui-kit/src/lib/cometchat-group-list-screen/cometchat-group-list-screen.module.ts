import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatGroupListScreenComponent } from "./cometchat-group-list-screen/cometchat-group-list-screen.component";
import { CometChatGroupListModule } from "../comet-chat-group-list/comet-chat-group-list.module";
import { CometchatMessageListScreenModule } from "../cometchat-message-list-screen/cometchat-message-list-screen.module";
import { MessageThreadModule } from "../message-thread/message-thread.module";

import { ImageViewModule } from "../image-view/image-view.module";
import { CometchatGroupDetailModule } from "../cometchat-group-detail/cometchat-group-detail.module";

@NgModule({
  declarations: [CometchatGroupListScreenComponent],
  imports: [
    CommonModule,
    CometChatGroupListModule,
    CometchatMessageListScreenModule,
    MessageThreadModule,
    CometchatGroupDetailModule,
    ImageViewModule,
  ],
  exports: [CometchatGroupListScreenComponent],
})
export class CometchatGroupListScreenModule {}
