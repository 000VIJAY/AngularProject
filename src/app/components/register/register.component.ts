import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  show: boolean = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{2,}$'), Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-z]{3,}$')]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$'), Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.valid) {
      console.log("valid data", this.registerForm.value);
      console.log("do api call")
      let data = {
        FirstName: this.registerForm.value.firstname,
        LastName: this.registerForm.value.lastname,
        Email: this.registerForm.value.username,
        Password: this.registerForm.value.password
      }
      this.user.signup(data).subscribe((result: any) => console.log(result))
    }
    else {
      console.log('invalid data', this.registerForm.value);
      console.log("api call will not occur")
    }
  }
  toggleShow() {
    this.show = !this.show;
  }
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
