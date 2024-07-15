import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFormPageComponent } from './google-form-page.component';

describe('GoogleFormPageComponent', () => {
  let component: GoogleFormPageComponent;
  let fixture: ComponentFixture<GoogleFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
