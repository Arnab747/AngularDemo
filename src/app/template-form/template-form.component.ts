import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  private email = '';
  private password = '';
  constructor(private service: DemoService, private router: ActivatedRoute) {
  }

  ngOnInit() {

  }

  submit() {
    this.service.login({email: this.email, password: this.password});
  }

  setEmail(email) {
    this.email = email.viewModel;
  }

  setPassword(password) {
    this.password = password.viewModel;
  }

}
