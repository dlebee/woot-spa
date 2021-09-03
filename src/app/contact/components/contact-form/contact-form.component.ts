import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ContactService, ContactUsModel } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() completed = new EventEmitter<boolean>();

  loading = false;
  model: ContactUsModel = {
    fullName: null,
    email: null,
    message: null
  };

  lastErrors: any = {};
  lastErrorMessage: string | null = null;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  }

  execute() {

    // this protects from quick double clicks.
    if (this.loading)
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
