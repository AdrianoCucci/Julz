import { OnInit, Input, HostBinding } from '@angular/core';
import { AppInput } from '../input';

export abstract class TextInput extends AppInput implements OnInit {
  @Input() public inputId: string;
  @Input() public required: boolean;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public value: string;

  @HostBinding("class.raised-label") public raisedLabel: boolean;

  public constructor() {
    super("text");
    this.required = false;
    this.placeholder = "";
    this.label = "";
    this.value = "";
    this.raisedLabel = false;
  }

  ngOnInit() {
    super.ngOnInit();

    if(!this.inputId) {
      throw new Error("Text input component is missing an ID.");
    }
    if(!this.required) {
      this.required = String(this.required) !== "false";
    }
  }
}
