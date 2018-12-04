import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  private form = this.fb.group({
    title: [''],
    year: [0],
    url : [''],
    thumbnail: [''],
  });

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
  }

}
