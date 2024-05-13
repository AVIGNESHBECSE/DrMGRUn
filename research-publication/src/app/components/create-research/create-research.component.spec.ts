import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResearchComponent } from './create-research.component';

describe('CreateResearchComponent', () => {
  let component: CreateResearchComponent;
  let fixture: ComponentFixture<CreateResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
