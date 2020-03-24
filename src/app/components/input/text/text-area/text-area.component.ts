import { Component } from '@angular/core';
import { TextInput } from '../text-input';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends TextInput { }
