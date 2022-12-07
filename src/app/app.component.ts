import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];

  constructor(private readonly wikipediaService: WikipediaService) {}

  onTerm(value: string) {
    console.log(value);
    this.wikipediaService.search(value).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}
