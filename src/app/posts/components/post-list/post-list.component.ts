import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
  posts = [
  { body : ' test 1'},
  { body : ' test 2'},
  { body : ' test 12'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
