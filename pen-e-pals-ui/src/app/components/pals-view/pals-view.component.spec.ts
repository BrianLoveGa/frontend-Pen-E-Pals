import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalsViewComponent } from './pals-view.component';

describe('PalsViewComponent', () => {
  let component: PalsViewComponent;
  let fixture: ComponentFixture<PalsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
