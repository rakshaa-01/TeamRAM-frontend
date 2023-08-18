import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockComponent } from './add-stock.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddStockComponent', () => {
  let component: AddStockComponent;
  let fixture: ComponentFixture<AddStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStockComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(AddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
