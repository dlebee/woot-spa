import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  completed: boolean = false;
  contactUsTitle: string = "My Contact Us";
  form: FormGroup | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
