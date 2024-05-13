import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintResearchComponent } from './print-research.component';

describe('PrintResearchComponent', () => {
  let component: PrintResearchComponent;
  let fixture: ComponentFixture<PrintResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
