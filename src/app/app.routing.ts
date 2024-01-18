import { Route, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { OtpValidationComponent } from "./otpValidation/otpValidation.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "otp-validation", component: OtpValidationComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
