import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$'), Validators.minLength(8)]],
      confirmnewPassword: ['', [Validators.required]]
    },
      { validator: MustMatch('newpassword', 'confirmnewPassword') 
    });
  }
  onSubmit() {
    if (this.resetForm.valid) {
      console.log("valid data", this.resetForm.value);
      console.log("do api call")
      let data = {
        newPassword: this.resetForm.value.newpassword,
        confirmNewPassword: this.resetForm.value.confirmnewPassword
      }
      this.user.reset(data).subscribe((result: any) => console.log(result))
    }
    else {
      console.log('invalid data', this.resetForm.value);
      console.log("api call will not occur")
    }
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
