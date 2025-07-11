import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorySettingsComponent } from './memory-settings-component';

describe('MemorySettingsComponent', () => {
  let component: MemorySettingsComponent;
  let fixture: ComponentFixture<MemorySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemorySettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemorySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
