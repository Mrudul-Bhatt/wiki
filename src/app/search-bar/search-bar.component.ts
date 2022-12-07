import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  //@Output decorator is used to emit an event from the child component to the parent component
  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(value: Event): void {
    this.term = (value.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
