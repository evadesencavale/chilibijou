import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypherLearningSettingsComponent } from './cypher-learning-settings-component';

describe('CypherLearningSettingsComponent', () => {
  let component: CypherLearningSettingsComponent;
  let fixture: ComponentFixture<CypherLearningSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CypherLearningSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CypherLearningSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
