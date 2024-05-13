import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResearchComponent } from './delete-research.component';

describe('DeleteResearchComponent', () => {
  let component: DeleteResearchComponent;
  let fixture: ComponentFixture<DeleteResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
