import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineUpSettingsComponent } from './lineup-settings-component';

describe('LineUpSettingsComponent', () => {
  let component: LineUpSettingsComponent;
  let fixture: ComponentFixture<LineUpSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineUpSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LineUpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
