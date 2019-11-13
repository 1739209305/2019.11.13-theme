import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfmodeComponent } from './pdfmode.component';

describe('PdfmodeComponent', () => {
  let component: PdfmodeComponent;
  let fixture: ComponentFixture<PdfmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
