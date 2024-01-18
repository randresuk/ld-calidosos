import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-otpValidation",
  templateUrl: "./otpValidation.component.html",
  styleUrls: ["./otpValidation.component.scss"]
})
export class OtpValidationComponent {
  otpValue: string = '';

  constructor(public userService: UsersService, public dialog: MatDialog, private toastr: ToastrService, public router: Router) {}

  validate() {
    if (!this.otpValue) {
      this.toastr.error("Se deben ingresar una OTP");
    } else {
        this.userService.validateOtp().subscribe(
            (res) => {
                this.toastr.error("Flag captured!");
                setTimeout(() => { this.router.navigateByUrl("/home") }, 3000);
            },
            (error: any) => {
              console.log(error);
              this.toastr.error('Otp inválida');
            }
          );
    }
  }

  toOtpValidation() {
    this.router.navigateByUrl("/otp-validation");
  }
}
