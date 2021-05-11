import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-wisher-form',
  templateUrl: './wisher-form.page.html',
  styleUrls: ['./wisher-form.page.scss'],
})
export class WisherFormPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dob: ['',[Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')], Validators.maxLength[10], Validators.minLength[10]]
    })
  }

  get getControl(){
    return this.ionicForm.controls;
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
       onlyself: true
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }
  
}
