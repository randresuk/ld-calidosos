import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  passwordError: boolean = false;
  confirmPassword: string = '';

  constructor(public userService: UsersService, public router: Router,) {}

  register() {
    const user = { email: this.email, password: this.password };
  }

  return() {
    this.router.navigateByUrl("/login");
  }
}
