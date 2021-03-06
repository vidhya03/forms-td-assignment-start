import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HistoryService } from './history.service';
import { FormSubmit } from './formsubmit.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oldFormSubmit: FormSubmit;
  constructor(private history: HistoryService) {
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

    if (this.oldFormSubmit) {
      this.history.append(this.oldFormSubmit);
    }
    this.oldFormSubmit = new FormSubmit(
      this.form.value.email,
      this.form.value.subscriptions,
      this.form.value.password
    );
    this.form.setValue({
      email: '',
      subscriptions: '',
      password: ''
    });
    console.log(this.history.formSubmit);
  }
}
