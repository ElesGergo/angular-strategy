import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class DaymentIqService implements BaseMethodStrategy {
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  form: FormGroup;

  continue() {
    return this.http.get('');
  }
}
