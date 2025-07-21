import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KnowledgeMemorySettingsComponent } from './knowledge-memory-settings-component';

describe('MemorySettingsComponent', () => {
  let component: KnowledgeMemorySettingsComponent;
  let fixture: ComponentFixture<KnowledgeMemorySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeMemorySettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KnowledgeMemorySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
