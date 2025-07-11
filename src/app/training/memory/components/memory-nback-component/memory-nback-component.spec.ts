import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryNBackComponent } from './memory-nback-component';

describe('MemoryNBackComponent', () => {
  let component: MemoryNBackComponent;
  let fixture: ComponentFixture<MemoryNBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryNBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryNBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
