import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isSignDivVisible: boolean = true; // Set to true to show sign-up form by default
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  signUpObj: any = { firstname: '', lastname: '', email: '', password: '' };
  loginObj: any = { email: '', password: '' };

  constructor(private http: HttpClient) { }

  onRegister() {
    let bodyData = {
      "firstname": this.signUpObj.firstname,
      "lastname": this.signUpObj.lastname,
      "email": this.signUpObj.email,
      "password": this.signUpObj.password,
    };

    this.http.post("http://localhost:9992/student/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Successfully");
    });
  }

  redirectToRegister() {
    // Redirect to the register page or handle signup logic here
    window.location.href = 'http://localhost:4200';
  }

  onLogin() {
    // Handle login logic here
  }

  save() {
    this.onRegister();
  }
}
