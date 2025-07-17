import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeViewPageComponent } from './knowledge-view-page-component';

describe('KnowledgeViewPageComponent', () => {
  let component: KnowledgeViewPageComponent;
  let fixture: ComponentFixture<KnowledgeViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
