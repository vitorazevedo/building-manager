import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NicknameEditorComponent } from './nickname-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NicknameEditorComponent', () => {
  let component: NicknameEditorComponent;
  let fixture: ComponentFixture<NicknameEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NicknameEditorComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
