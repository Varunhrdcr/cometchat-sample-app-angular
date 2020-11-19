import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CometChatUserListComponent } from './comet-chat-user-list.component';

describe('CometChatUserListComponent', () => {
  let component: CometChatUserListComponent;
  let fixture: ComponentFixture<CometChatUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CometChatUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CometChatUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
