import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testForm: FormGroup;
  result: any;

  constructor(fb: FormBuilder, private httpClient: HttpClient) {
    this.testForm = fb.group({
      name: [''],
      phone: ['']
    });
  }

  onSubmit(): void {
    console.log(this.testForm.value);
    this.httpClient.post('/api//update-form', this.testForm.value).subscribe((res) => {
      console.log(res);
      this.result = res;
    });
  }

  hackFormData(): void {
    this.httpClient.post('/api//update-form', {name: 'Messi was here!', phone: '10'}).subscribe((res) => {
      console.log(res);
      this.result = res;
    });
  }
}
