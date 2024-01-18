import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { constants } from "../../util/constants";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  name: string;
  password: string;
  closeResult = '';

  constructor(
    private toastr: ToastrService,
    public userService: UsersService,
    public router: Router,
    public dialog: MatDialog,
  ) {
    this.name = '';
    this.password = '';
  }

  login() {
    const user = { name: this.name, password: this.password };
    this.userService.login(user).subscribe(
      (res) => {
        console.log(res)
        if (res.message == constants.CAPTURED_FLAG) {
          this.openDialog();
          this.toastr.success(res.message);
        }
        else {
          this.router.navigateByUrl("/home");
          this.toastr.error('Ingreso fallido');
        }
      },
      (error: any) => {
        console.log(error);
        this.toastr.error('Ingreso fallido');
      }
    );
  }

  register() {
    this.router.navigateByUrl("/register");
  }

  private openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <mat-dialog-content class="mat-typography">
    <h3>Develop across all platforms</h3>
    </mat-dialog-content>
    <mat-dialog-actions >
      <button mat-button mat-dialog-close>Got it</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule],
})
export class DialogContentExampleDialog { }
