import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypherLearningComponent } from './cypher-learning-component';

describe('CypherLearningComponent', () => {
  let component: CypherLearningComponent;
  let fixture: ComponentFixture<CypherLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CypherLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CypherLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
