import { Component, Input } from '@angular/core';
import { TextInput } from '.';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends TextInput {
  @Input() public type: string;

  public constructor() {
    super();
    this.type = "text";
  }
}
