import { Component, NgModule, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-rules',
  templateUrl: './create-rules.component.html',
  styleUrl: './create-rules.component.css',
})
export class CreateRulesComponent implements OnInit {
  rules: { label: string; value: string} [] = [];
  selectedRule: any;

  ngOnInit(): void {
    this.rules = [
      { label: 'Greater than', value: '1' },
      { label: 'Greater than or Equal To', value: '1' },
      { label: 'Less Than',  value: '1' },
      { label: 'Less Than or Equal To',  value: '1' },
      { label: 'Containing', value: '1' },
      { label: 'Not Containing,', value: '1' },
      { label: 'Beginning With', value: '1' },
      { label: 'Ending With', value: '1' },
      { label: 'Equal To', value: '1' },
      { label: 'Not Equal To', value: '1' },
    ];
  }
}

@NgModule({
  declarations: [CreateRulesComponent],
  imports: [FormsModule, DropdownModule],
  exports: [CreateRulesComponent],
})
export class DropDownList {}
