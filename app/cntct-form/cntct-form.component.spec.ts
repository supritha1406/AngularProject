import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CntctFormComponent } from './cntct-form.component';

describe('CntctFormComponent', () => {
  let component: CntctFormComponent;
  let fixture: ComponentFixture<CntctFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CntctFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CntctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
