import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  public searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.minLength(1)]],
    });
  }

  formCheck(): boolean {
    if (this.searchForm.controls.search.valid === true) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit() {
    //let searchObject = { name: this.searchForm.controls.name.value };
    console.log('Successful search');
    console.log('You searched: ' + this.searchForm.controls.search.value);

    let searchArray = this.searchForm.controls.search.value.split(' ');
    console.log('Search query: ', searchArray);
  }
}
