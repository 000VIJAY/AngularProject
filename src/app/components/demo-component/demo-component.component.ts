import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponentComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
submit(){
  let data = {
    email: "yadav@gmail.com",
    password: "Vijay@123"
  }
  this.user.signin(data).subscribe((res:any)=>console.log(res))
}
}
