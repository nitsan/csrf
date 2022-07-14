import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testForm: FormGroup;
  result: any;
  formError: string = '';

  constructor(fb: FormBuilder, private appService: AppService) {
    this.testForm = fb.group({
      name: [''],
      phone: [''],
      _csrf: ['']
    });
    this.appService.getToken().subscribe((res) => {
      this.testForm.patchValue({_csrf: res.csrfToken});
    });
  }

  onSubmit(): void {
    console.log(this.testForm.value);
    this.appService.sendFormData(this.testForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.result = res;
      },
      error: (err) => {
        this.formError = err.message;
      }
    });
  }

  hackFormData(): void {
    this.appService.sendFormData({name: 'Messi was here!', phone: '10'}).subscribe({
      next: (res) => {
        console.log(res);
        this.result = res;
      },
      error: (err) => {
        this.formError = err.message;
      }
    });
  }
}
