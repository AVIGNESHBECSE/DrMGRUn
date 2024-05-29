import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJournalPublicationComponent } from './create-journal-publication.component';

describe('CreateJournalPublicationComponent', () => {
  let component: CreateJournalPublicationComponent;
  let fixture: ComponentFixture<CreateJournalPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJournalPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJournalPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
