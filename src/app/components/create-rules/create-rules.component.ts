import { Component, NgModule, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-rules',
  templateUrl: './create-rules.component.html',
  styleUrl: './create-rules.component.css'
})


export class CreateRulesComponent implements OnInit {
  items = [
    { title: 'Greater than', value: 'NY' },
    { title: 'Rome', value: 'RM' },
    { title: 'London', value: 'LDN' },
    { title: 'Istanbul', value: 'IST' },
    { title: 'Paris', value: 'PRS' },
  ];
  selectedItem: any;

  ngOnInit(): void {
    
  }
  
}

@NgModule({
  declarations: [CreateRulesComponent],
  imports: [
    FormsModule,
    DropdownModule
  ],
  exports: [CreateRulesComponent]
})

export class DropDownList {}