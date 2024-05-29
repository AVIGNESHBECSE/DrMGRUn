import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConferencePublicationComponent } from './create-conference-publication.component';

describe('CreateConferencePublicationComponent', () => {
  let component: CreateConferencePublicationComponent;
  let fixture: ComponentFixture<CreateConferencePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConferencePublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConferencePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
