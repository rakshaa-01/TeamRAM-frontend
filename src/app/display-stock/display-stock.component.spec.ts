import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DisplayStockComponent } from './display-stock.component';

describe('DisplayStockComponent', () => {
  let component: DisplayStockComponent;
  let fixture: ComponentFixture<DisplayStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayStockComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(DisplayStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
