import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDemoComponent } from './remove-demo.component';

describe('RemoveDemoComponent', () => {
  let component: RemoveDemoComponent;
  let fixture: ComponentFixture<RemoveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
