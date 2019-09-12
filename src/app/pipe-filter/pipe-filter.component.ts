import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.css']
})
export class PipeFilterComponent implements OnInit {

  feeds = {
    title: '',
    rating: 8,
    students: 10,
    price: 1000,
    text: ''
  };
  constructor() {
    this.feeds = {
      title: 'Name',
      rating: 8,
      students: 10,
      price: 1000,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.`
    };
  }

  ngOnInit() {
  }

}
