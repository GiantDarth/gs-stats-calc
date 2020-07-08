import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatEditorComponent } from './stat-editor.component';

describe('StatEditorComponent', () => {
  let component: StatEditorComponent;
  let fixture: ComponentFixture<StatEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
