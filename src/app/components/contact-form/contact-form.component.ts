import { Component, ViewChildren, QueryList } from '@angular/core';
import { FormInput } from '../input/form-input';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from 'src/app/interfaces/contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public contactForm: ContactForm;

  private readonly _httpClient: HttpClient;

  @ViewChildren("field") private _fields: QueryList<FormInput<any>>;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;

    this.contactForm = {
      email: "",
      subject: "",
      message: ""
    };
  }

  onFormSubmit() {
    let formIsValid: boolean = true;

    for(const field of this._fields) {
      if(!field.validate()) {
        formIsValid = false;
      }
    }

    this.sendMail();
    if(formIsValid) {
    }
  }

  test(event: any) {
    console.log(event);
  }

  private sendMail() {
    this._httpClient.post("./send-mail.php", {}).subscribe(result => {
      console.log(result);
    });
  }
}
