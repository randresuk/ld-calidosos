import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UsersService } from "../users/users.service";

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
  phone: string = '';

  constructor(public userService: UsersService, public dialog: MatDialog, private toastr: ToastrService, public router: Router) {}

  register() {
    if (!this.email|| !this.password || !this.confirmPassword || !this.phone) {
      this.toastr.error("Se deben llenar todos los campos");
    } else if (this.password != this.confirmPassword) {
      this.toastr.error("Las contraseñas deben coincidir");
    } else {
      this.toOtpValidation()
    }
  }

  toOtpValidation() {
    this.router.navigateByUrl("/otp-validation");
  }

  return() {
    this.router.navigateByUrl("/login");
  }
}
