import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeMemoryComponent } from './knowledge-memory-component';

describe('KnowledgeMemoryComponent', () => {
  let component: KnowledgeMemoryComponent;
  let fixture: ComponentFixture<KnowledgeMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeMemoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
