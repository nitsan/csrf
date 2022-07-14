import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.testForm = fb.group({
      name: [''],
      phone: ['']
    });
  }
  onSubmit(): void {
    console.log(this.testForm.value);
  }
}
