import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { NewsletterService } from '../newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService
  ){}

  newsletterForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]]
  });

  formError = {
    show: false,
    message: ''
  }

  formSuccess=false;

  disableForm=false; 



  submitForm() {
    this.disableForm = true;
    if(this.newsletterForm.valid){
      this.newsletterService.subscribeUser(this.newsletterForm.value.email!).subscribe({
        next: data => {
          this.formSuccess = true;
          this.resetForm();
        },
        error: error => {
          this.handleError('show', error);

        }
      })
    }
  }

  resetForm() {
    setTimeout(() => {
      this.newsletterForm.reset();
    }, 1500)
  }

  handleError(type: string, message: string) {
    if(type === 'reset'){
      this.formError = {
        show: false,
        message: '' 
      }
    }else {
      this.formError = {
        show: true,
        message: message 
      }
    }
  }

}
