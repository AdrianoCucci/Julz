import { Component, Input } from '@angular/core';
import { AppInput } from '../input';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends AppInput {
  @Input() public text: string;

  public constructor() {
    super("button");
  }
}
