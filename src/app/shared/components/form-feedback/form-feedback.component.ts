import { Component, Input } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-feedback',
  imports: [MatFormFieldModule],
  templateUrl: './form-feedback.component.html',
  styleUrl: './form-feedback.component.css',
})
export class FormFeedbackComponent {
  @Input({ required: true }) control!: FormControl

  ngOnInit() {

  }

  checkErrorInControl(control: FormControl) {
    if (!control.errors) {
      return;
    }

  }

  handleControlErrorWithMessages(control: FormControl) {
    const errors = control.errors;
    console.log(errors);
  }
}
