import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotform !: FormGroup
  constructor( private formBuilder:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotform =this.formBuilder.group({
      username: ['',[Validators.required ,Validators.email]]
    })
  }
  onSubmit(){
    if (this.forgotform.valid) {
      console.log("valid data", this.forgotform.value);
      console.log("do api call")
      let data = {
        Email: this.forgotform.value.username
      }
      this.user.forgot(data).subscribe((result: any) => console.log(result))
    }
    else
    {
      console.log('invalid data',this.forgotform.value);
      console.log("api call will not occur")
    }
  }
}
