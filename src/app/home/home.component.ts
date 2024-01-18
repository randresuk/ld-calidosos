import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users/users.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  public primaryNavToggle = document.getElementById("primary-nav-toggle");

  constructor(public userService: UsersService, private toastr: ToastrService,) {}

  ngOnInit() {
    this.toastr.success('¡En hora buena!, ingreso exitoso.');
  }
}
