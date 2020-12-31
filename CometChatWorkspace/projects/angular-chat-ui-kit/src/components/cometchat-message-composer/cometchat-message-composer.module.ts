import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatMessageComposerComponent } from "./cometchat-message-composer/cometchat-message-composer.component";
import { ReplyPreviewModule } from "../reply-preview/reply-preview.module";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { StickerViewModule } from "../sticker-view/sticker-view.module";
import { CometchatCreatePollViewModule } from "../cometchat-create-poll-view/cometchat-create-poll-view.module";
@NgModule({
  declarations: [CometchatMessageComposerComponent],
  imports: [
    CommonModule,
    ReplyPreviewModule,
    PickerModule,
    StickerViewModule,
    CometchatCreatePollViewModule,
  ],
  exports: [CometchatMessageComposerComponent],
})
export class CometchatMessageComposerModule {}
