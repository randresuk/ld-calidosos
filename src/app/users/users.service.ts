import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class UsersService {
  private loginUrlBck: string = 'http://localhost:8080/calidosos/login';
  private validateOtpUrlBck: string = 'http://localhost:8080/calidosos/validate-otp';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(this.loginUrlBck, { name: user.name, password: user.password });
  }

  validateOtp(): Observable<any> {
    return this.http.post(this.validateOtpUrlBck, null);
  }
}
