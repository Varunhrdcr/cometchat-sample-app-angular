/**
 * @fileoverview added by tsickle
 * Generated from: components/Messages/cometchat-message-thread/cometchat-message-thread.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatMessageThreadComponent } from "./cometchat-message-thread/cometchat-message-thread.component";
import { CometchatSenderTextMessageBubbleModule } from "../cometchat-sender-text-message-bubble/cometchat-sender-text-message-bubble.module";
import { CometchatMessageListModule } from "../cometchat-message-list/cometchat-message-list.module";
import { CometchatMessageComposerModule } from "../cometchat-message-composer/cometchat-message-composer.module";
import { CometchatReceiverTextMessageBubbleModule } from "../cometchat-receiver-text-message-bubble/cometchat-receiver-text-message-bubble.module";
import { CometchatSenderFileMessageBubbleModule } from "../cometchat-sender-file-message-bubble/cometchat-sender-file-message-bubble.module";
import { CometchatReceiverFileMessageBubbleModule } from "../cometchat-receiver-file-message-bubble/cometchat-receiver-file-message-bubble.module";
import { CometchatSenderImageMessageBubbleModule } from "../cometchat-sender-image-message-bubble/cometchat-sender-image-message-bubble.module";
import { CometchatReceiverImageMessageBubbleModule } from "../cometchat-receiver-image-message-bubble/cometchat-receiver-image-message-bubble.module";
import { CometchatSenderVideoMessageBubbleModule } from "../cometchat-sender-video-message-bubble/cometchat-sender-video-message-bubble.module";
import { CometchatReceiverVideoMessageBubbleModule } from "../cometchat-receiver-video-message-bubble/cometchat-receiver-video-message-bubble.module";
import { CometchatSenderAudioMessageBubbleModule } from "../cometchat-sender-audio-message-bubble/cometchat-sender-audio-message-bubble.module";
import { CometchatReceiverAudioMessageBubbleModule } from "../cometchat-receiver-audio-message-bubble/cometchat-receiver-audio-message-bubble.module";
import { CometchatSenderStickerMessageBubbleModule } from "../Extensions/cometchat-sender-sticker-message-bubble/cometchat-sender-sticker-message-bubble.module";
import { CometchatReceiverStickerMessageBubbleModule } from "../Extensions/cometchat-receiver-sticker-message-bubble/cometchat-receiver-sticker-message-bubble.module";
import { CometchatSenderPollMessageBubbleModule } from "../Extensions/cometchat-sender-poll-message-bubble/cometchat-sender-poll-message-bubble.module";
import { CometchatReceiverPollMessageBubbleModule } from "../Extensions/cometchat-receiver-poll-message-bubble/cometchat-receiver-poll-message-bubble.module";
var CometchatMessageThreadModule = /** @class */ (function () {
    function CometchatMessageThreadModule() {
    }
    CometchatMessageThreadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CometchatMessageThreadComponent],
                    imports: [
                        CommonModule,
                        CometchatSenderTextMessageBubbleModule,
                        CometchatReceiverTextMessageBubbleModule,
                        CometchatSenderFileMessageBubbleModule,
                        CometchatReceiverFileMessageBubbleModule,
                        CometchatSenderImageMessageBubbleModule,
                        CometchatReceiverImageMessageBubbleModule,
                        CometchatSenderAudioMessageBubbleModule,
                        CometchatReceiverAudioMessageBubbleModule,
                        CometchatSenderVideoMessageBubbleModule,
                        CometchatReceiverVideoMessageBubbleModule,
                        CometchatMessageListModule,
                        CometchatMessageComposerModule,
                        CometchatSenderStickerMessageBubbleModule,
                        CometchatReceiverStickerMessageBubbleModule,
                        CometchatSenderPollMessageBubbleModule,
                        CometchatReceiverPollMessageBubbleModule,
                    ],
                    exports: [CometchatMessageThreadComponent],
                },] }
    ];
    return CometchatMessageThreadModule;
}());
export { CometchatMessageThreadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tZXRjaGF0LW1lc3NhZ2UtdGhyZWFkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2hhdC11aS1raXQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL01lc3NhZ2VzL2NvbWV0Y2hhdC1tZXNzYWdlLXRocmVhZC9jb21ldGNoYXQtbWVzc2FnZS10aHJlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDaEgsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDN0ksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDckcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDakgsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDbkosT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDN0ksT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFDbkosT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDaEosT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDdEosT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDaEosT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDdEosT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDaEosT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDdEosT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sc0dBQXNHLENBQUM7QUFDakssT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sMEdBQTBHLENBQUM7QUFDdkssT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sZ0dBQWdHLENBQUM7QUFDeEosT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sb0dBQW9HLENBQUM7QUFFOUo7SUFBQTtJQXVCMkMsQ0FBQzs7Z0JBdkIzQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQy9DLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHNDQUFzQzt3QkFDdEMsd0NBQXdDO3dCQUN4QyxzQ0FBc0M7d0JBQ3RDLHdDQUF3Qzt3QkFDeEMsdUNBQXVDO3dCQUN2Qyx5Q0FBeUM7d0JBQ3pDLHVDQUF1Qzt3QkFDdkMseUNBQXlDO3dCQUN6Qyx1Q0FBdUM7d0JBQ3ZDLHlDQUF5Qzt3QkFDekMsMEJBQTBCO3dCQUMxQiw4QkFBOEI7d0JBQzlCLHlDQUF5Qzt3QkFDekMsMkNBQTJDO3dCQUMzQyxzQ0FBc0M7d0JBQ3RDLHdDQUF3QztxQkFDekM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsK0JBQStCLENBQUM7aUJBQzNDOztJQUMwQyxtQ0FBQztDQUFBLEFBdkI1QyxJQXVCNEM7U0FBL0IsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0TWVzc2FnZVRocmVhZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbWV0Y2hhdC1tZXNzYWdlLXRocmVhZC9jb21ldGNoYXQtbWVzc2FnZS10aHJlYWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21ldGNoYXRTZW5kZXJUZXh0TWVzc2FnZUJ1YmJsZU1vZHVsZSB9IGZyb20gXCIuLi9jb21ldGNoYXQtc2VuZGVyLXRleHQtbWVzc2FnZS1idWJibGUvY29tZXRjaGF0LXNlbmRlci10ZXh0LW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0TWVzc2FnZUxpc3RNb2R1bGUgfSBmcm9tIFwiLi4vY29tZXRjaGF0LW1lc3NhZ2UtbGlzdC9jb21ldGNoYXQtbWVzc2FnZS1saXN0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0TWVzc2FnZUNvbXBvc2VyTW9kdWxlIH0gZnJvbSBcIi4uL2NvbWV0Y2hhdC1tZXNzYWdlLWNvbXBvc2VyL2NvbWV0Y2hhdC1tZXNzYWdlLWNvbXBvc2VyLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0UmVjZWl2ZXJUZXh0TWVzc2FnZUJ1YmJsZU1vZHVsZSB9IGZyb20gXCIuLi9jb21ldGNoYXQtcmVjZWl2ZXItdGV4dC1tZXNzYWdlLWJ1YmJsZS9jb21ldGNoYXQtcmVjZWl2ZXItdGV4dC1tZXNzYWdlLWJ1YmJsZS5tb2R1bGVcIjtcbmltcG9ydCB7IENvbWV0Y2hhdFNlbmRlckZpbGVNZXNzYWdlQnViYmxlTW9kdWxlIH0gZnJvbSBcIi4uL2NvbWV0Y2hhdC1zZW5kZXItZmlsZS1tZXNzYWdlLWJ1YmJsZS9jb21ldGNoYXQtc2VuZGVyLWZpbGUtbWVzc2FnZS1idWJibGUubW9kdWxlXCI7XG5pbXBvcnQgeyBDb21ldGNoYXRSZWNlaXZlckZpbGVNZXNzYWdlQnViYmxlTW9kdWxlIH0gZnJvbSBcIi4uL2NvbWV0Y2hhdC1yZWNlaXZlci1maWxlLW1lc3NhZ2UtYnViYmxlL2NvbWV0Y2hhdC1yZWNlaXZlci1maWxlLW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0U2VuZGVySW1hZ2VNZXNzYWdlQnViYmxlTW9kdWxlIH0gZnJvbSBcIi4uL2NvbWV0Y2hhdC1zZW5kZXItaW1hZ2UtbWVzc2FnZS1idWJibGUvY29tZXRjaGF0LXNlbmRlci1pbWFnZS1tZXNzYWdlLWJ1YmJsZS5tb2R1bGVcIjtcbmltcG9ydCB7IENvbWV0Y2hhdFJlY2VpdmVySW1hZ2VNZXNzYWdlQnViYmxlTW9kdWxlIH0gZnJvbSBcIi4uL2NvbWV0Y2hhdC1yZWNlaXZlci1pbWFnZS1tZXNzYWdlLWJ1YmJsZS9jb21ldGNoYXQtcmVjZWl2ZXItaW1hZ2UtbWVzc2FnZS1idWJibGUubW9kdWxlXCI7XG5pbXBvcnQgeyBDb21ldGNoYXRTZW5kZXJWaWRlb01lc3NhZ2VCdWJibGVNb2R1bGUgfSBmcm9tIFwiLi4vY29tZXRjaGF0LXNlbmRlci12aWRlby1tZXNzYWdlLWJ1YmJsZS9jb21ldGNoYXQtc2VuZGVyLXZpZGVvLW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0UmVjZWl2ZXJWaWRlb01lc3NhZ2VCdWJibGVNb2R1bGUgfSBmcm9tIFwiLi4vY29tZXRjaGF0LXJlY2VpdmVyLXZpZGVvLW1lc3NhZ2UtYnViYmxlL2NvbWV0Y2hhdC1yZWNlaXZlci12aWRlby1tZXNzYWdlLWJ1YmJsZS5tb2R1bGVcIjtcbmltcG9ydCB7IENvbWV0Y2hhdFNlbmRlckF1ZGlvTWVzc2FnZUJ1YmJsZU1vZHVsZSB9IGZyb20gXCIuLi9jb21ldGNoYXQtc2VuZGVyLWF1ZGlvLW1lc3NhZ2UtYnViYmxlL2NvbWV0Y2hhdC1zZW5kZXItYXVkaW8tbWVzc2FnZS1idWJibGUubW9kdWxlXCI7XG5pbXBvcnQgeyBDb21ldGNoYXRSZWNlaXZlckF1ZGlvTWVzc2FnZUJ1YmJsZU1vZHVsZSB9IGZyb20gXCIuLi9jb21ldGNoYXQtcmVjZWl2ZXItYXVkaW8tbWVzc2FnZS1idWJibGUvY29tZXRjaGF0LXJlY2VpdmVyLWF1ZGlvLW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0U2VuZGVyU3RpY2tlck1lc3NhZ2VCdWJibGVNb2R1bGUgfSBmcm9tIFwiLi4vRXh0ZW5zaW9ucy9jb21ldGNoYXQtc2VuZGVyLXN0aWNrZXItbWVzc2FnZS1idWJibGUvY29tZXRjaGF0LXNlbmRlci1zdGlja2VyLW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0UmVjZWl2ZXJTdGlja2VyTWVzc2FnZUJ1YmJsZU1vZHVsZSB9IGZyb20gXCIuLi9FeHRlbnNpb25zL2NvbWV0Y2hhdC1yZWNlaXZlci1zdGlja2VyLW1lc3NhZ2UtYnViYmxlL2NvbWV0Y2hhdC1yZWNlaXZlci1zdGlja2VyLW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0U2VuZGVyUG9sbE1lc3NhZ2VCdWJibGVNb2R1bGUgfSBmcm9tIFwiLi4vRXh0ZW5zaW9ucy9jb21ldGNoYXQtc2VuZGVyLXBvbGwtbWVzc2FnZS1idWJibGUvY29tZXRjaGF0LXNlbmRlci1wb2xsLW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29tZXRjaGF0UmVjZWl2ZXJQb2xsTWVzc2FnZUJ1YmJsZU1vZHVsZSB9IGZyb20gXCIuLi9FeHRlbnNpb25zL2NvbWV0Y2hhdC1yZWNlaXZlci1wb2xsLW1lc3NhZ2UtYnViYmxlL2NvbWV0Y2hhdC1yZWNlaXZlci1wb2xsLW1lc3NhZ2UtYnViYmxlLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb21ldGNoYXRNZXNzYWdlVGhyZWFkQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb21ldGNoYXRTZW5kZXJUZXh0TWVzc2FnZUJ1YmJsZU1vZHVsZSxcbiAgICBDb21ldGNoYXRSZWNlaXZlclRleHRNZXNzYWdlQnViYmxlTW9kdWxlLFxuICAgIENvbWV0Y2hhdFNlbmRlckZpbGVNZXNzYWdlQnViYmxlTW9kdWxlLFxuICAgIENvbWV0Y2hhdFJlY2VpdmVyRmlsZU1lc3NhZ2VCdWJibGVNb2R1bGUsXG4gICAgQ29tZXRjaGF0U2VuZGVySW1hZ2VNZXNzYWdlQnViYmxlTW9kdWxlLFxuICAgIENvbWV0Y2hhdFJlY2VpdmVySW1hZ2VNZXNzYWdlQnViYmxlTW9kdWxlLFxuICAgIENvbWV0Y2hhdFNlbmRlckF1ZGlvTWVzc2FnZUJ1YmJsZU1vZHVsZSxcbiAgICBDb21ldGNoYXRSZWNlaXZlckF1ZGlvTWVzc2FnZUJ1YmJsZU1vZHVsZSxcbiAgICBDb21ldGNoYXRTZW5kZXJWaWRlb01lc3NhZ2VCdWJibGVNb2R1bGUsXG4gICAgQ29tZXRjaGF0UmVjZWl2ZXJWaWRlb01lc3NhZ2VCdWJibGVNb2R1bGUsXG4gICAgQ29tZXRjaGF0TWVzc2FnZUxpc3RNb2R1bGUsXG4gICAgQ29tZXRjaGF0TWVzc2FnZUNvbXBvc2VyTW9kdWxlLFxuICAgIENvbWV0Y2hhdFNlbmRlclN0aWNrZXJNZXNzYWdlQnViYmxlTW9kdWxlLFxuICAgIENvbWV0Y2hhdFJlY2VpdmVyU3RpY2tlck1lc3NhZ2VCdWJibGVNb2R1bGUsXG4gICAgQ29tZXRjaGF0U2VuZGVyUG9sbE1lc3NhZ2VCdWJibGVNb2R1bGUsXG4gICAgQ29tZXRjaGF0UmVjZWl2ZXJQb2xsTWVzc2FnZUJ1YmJsZU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0NvbWV0Y2hhdE1lc3NhZ2VUaHJlYWRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21ldGNoYXRNZXNzYWdlVGhyZWFkTW9kdWxlIHt9XG4iXX0=