import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email = '';
  password = '';
  constructor(private service: DemoService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => console.log(params));
  }

  submit() {
    this.service.login({email: this.email, password: this.password});
  }

  setEmail() {
    console.log(this.email);
  }

  setPassword() {
    console.log(this.password);
  }

}
