import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ContactService, ContactUsModel } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  private _contactForm: FormGroup | null = null;

  @Output() completed = new EventEmitter<boolean>();
  @Input() title?: string = "Contact Us";

  loading = false;

  lastErrors: any = {};
  lastErrorMessage: string | null = null;
  
  @Input() set contactForm(form: FormGroup | null) {
    this._contactForm = form;
    this.contactFormChange.emit(this._contactForm); 
  }

  get contactForm() {
    return this._contactForm;
  }


  @Output() contactFormChange = new EventEmitter<FormGroup | null>();

  constructor(private contactService: ContactService,
    private fb: FormBuilder) 
  { 
    
  }

  ngOnInit(): void {
    if (!this.contactForm)
      this.contactForm = this.fb.group({
        fullName: [null, Validators.required],
        email: [null, [Validators.email, Validators.required]],
        message: [null, Validators.required]
      });
  }

  get isLoadingOrInvalid() {
    return this.loading || this.contactForm?.invalid;
  }

  get model() : ContactUsModel {
    return this.contactForm?.value as ContactUsModel;
  }

  execute() {

    // this protects from quick double clicks.
    if (this.isLoadingOrInvalid)
      return;

    this.lastErrors = {};
    this.lastErrorMessage = null;

    this.loading = true;
    this.contactService.send(this.model)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        success => {
          this.completed.emit(true);
        }, 
        fail => {
          if (fail.status == 400) {
            this.lastErrors = fail.err.errors;
          } else if (fail.status == 500) {
            this.lastErrorMessage = fail.err.message;
          } 
        }
      );
  }

}
