import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(public userService:UserService) { }

  public userModel = new User();

  ngOnInit(): void {
    this.userService.getAllData().subscribe({
      next:(userData) => {
        this.userService.userData = userData;
      },
      error:(err) => {
        console.log(err);
      }
    });
  }

  submit() {
    this.userService.createUser(this.userModel).subscribe({
      next:(userData) => {
        this.reset();
        this.userService.userData.push(userData);
      },
      error:(err) => {}      
    })
  }

  reset() {
    this.userModel =  {
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      security_q_1: '',
      sq_1_ans: '',
      security_q_2: '',
      sq_2_ans: '',
    }
  }

}
