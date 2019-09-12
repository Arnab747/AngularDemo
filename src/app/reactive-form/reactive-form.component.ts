import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form = new FormGroup ({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ]
    ),
    password: new FormControl('', Validators.required)
  });
  constructor(private service: DemoService, private router: ActivatedRoute) {
  }

  ngOnInit() {

  }

  submit(form) {
    console.log(form);
    this.service.login(form.value);
  }

}
