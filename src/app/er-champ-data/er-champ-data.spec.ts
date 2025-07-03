import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErChampData } from './er-champ-data';

describe('ErChampData', () => {
  let component: ErChampData;
  let fixture: ComponentFixture<ErChampData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErChampData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErChampData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
