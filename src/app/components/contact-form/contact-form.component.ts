import { Component, ViewChildren, QueryList, HostBinding } from '@angular/core';
import { FormInput } from '../input/form-input';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from 'src/app/interfaces/contact-form';
import { environment } from 'src/environments/environment';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public readonly contactForm: ContactForm;
  public submitBtnIcon: IconDefinition;

  private readonly _httpClient: HttpClient;

  @HostBinding("class.emailing") private _emailing: boolean;
  @HostBinding("class.sent-success") private _sentSuccess: boolean;
  @HostBinding("class.sent-fail") private _sentFail: boolean;

  @ViewChildren("field") private _fields: QueryList<FormInput<any>>;

  private _emailSentResult: string;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;

    this.contactForm = {
      email: "",
      subject: "Contact Form From Julz Website",
      message: ""
    };

    this.submitBtnIcon = faPaperPlane;
  }

  onFormSubmit() {
    let formIsValid: boolean = true;

    for(const field of this._fields) {
      if(!field.validate()) {
        formIsValid = false;
      }
    }

    if(formIsValid) {
      this.sendMail();
    }
  }

  private async sendMail() {
    if(!this._emailing) {
      this._emailing = true;
      this._emailSentResult = null;
      this._sentSuccess = false;
      this._sentFail = false;
      this.submitBtnIcon = faSyncAlt;

      try {
        const response: any = await this._httpClient.post(`${environment.serverUrl}/sendmail`, this.contactForm).toPromise();
        console.log(response);

        if(response.error) {
          throw response.error;
        }
        else {
          this._emailSentResult = "Email sent successfully!";
          this._sentSuccess = true;
          this.contactForm.email = "";
          this.contactForm.message = "";
        }
      }
      catch(error) {
        this._emailSentResult = "Sorry, something went wrong. Please try again later.";
        this._sentFail = true;
      }
      finally {
        this._emailing = false;
        this.submitBtnIcon = faPaperPlane;
      }
    }
  }

  public get emailing(): boolean {
    return this._emailing;
  }

  public get emailSentResult(): string {
    return this._emailSentResult;
  }
}