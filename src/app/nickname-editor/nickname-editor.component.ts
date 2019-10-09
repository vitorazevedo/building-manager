import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NicknameValidators } from './nickname-editor.validators';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.sass']
})
export class NicknameEditorComponent implements OnInit {

  form = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ],
      [
        NicknameValidators.shouldBeUnique
      ]),
    nicknames: new FormArray([], [
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit() { }

  addNickname(nickname: HTMLInputElement) {
    if (nickname.value !== '') {
      this.nicknames.push(new FormControl(nickname.value));
      nickname.value = '';
    }
  }

  removeNickname(nickname: FormControl) {
    const index = this.nicknames.controls.indexOf(nickname);
    this.nicknames.removeAt(index);
  }

  submitForm() {
    console.log(this.form.value.nicknames);
  }

  get nickname() {
    return this.form.get('nickname');
  }

  get nicknames() {
    return this.form.get('nicknames') as FormArray;
  }
}
