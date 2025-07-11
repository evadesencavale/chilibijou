import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryQuestionComponent } from './memory-question-component';

describe('MemoryQuestionComponent', () => {
  let component: MemoryQuestionComponent;
  let fixture: ComponentFixture<MemoryQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
