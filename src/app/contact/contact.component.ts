import { Component } from '@angular/core';
import { RequestService } from '../libs/request.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: [''],
  });

  subjectsForm = [
    'Give me work',
    'Got a proposal', 
    'Advertise',
    'Other'
  ];

  onSuccess = false; 

  onError = {
    show: false,
    message: ''
  }

  constructor(
    private requestService:RequestService,
    private fb:FormBuilder
  ){}

  submitForm(){
    
    if(this.contactForm.valid) {
      this.resetError();
      this.requestService.sendMessage(this.contactForm.value).subscribe({
        next: data => { 
          this.onSuccess = true;
          this.contactForm.reset()
        },
        error: error => { 
          this.onError = {
            show: true, 
            message: 'Sorry, something happened.'
          }
        }
      })

    } else {
      this.onError = {
        show: true,
        message: 'The form is not valid.'
      }
    }
  }

  resetError(){
    this.onError = {
      show: false,
      message: ''
    }
  }


}
