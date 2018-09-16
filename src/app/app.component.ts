import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
    console.log('testing');
  }
  defaultSubscriptions = 'adv';
  subscriptionsList = [
    {
      key: 'bsc',
      value: 'Basic'
    },
    {
      key: 'adv',
      value: 'Advanced'
    },
    {
      key: 'pro',
      value: 'Professional'
    }
  ];

  @ViewChild('f')
  form: NgForm;
  formData = {
    email: '',
    subscriptions: '',
    password: ''
  };

  public ngOnInit() {
    //  this.defaultsubscription
  }


  public onSubmit() {
    this.formData.email = this.form.value.email;
    this.formData.subscriptions = this.form.value.subscriptions;
    this.formData.password = this.form.value.password;
  }
}
