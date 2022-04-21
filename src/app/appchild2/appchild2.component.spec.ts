import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Appchild2Component } from './appchild2.component';

describe('Appchild2Component', () => {
  let component: Appchild2Component;
  let fixture: ComponentFixture<Appchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
