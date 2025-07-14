import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociationSettingsComponent } from './association-settings-component';

describe('AssociationSettingsComponent', () => {
  let component: AssociationSettingsComponent;
  let fixture: ComponentFixture<AssociationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
