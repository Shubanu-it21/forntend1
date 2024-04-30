import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isSignDivVisible: boolean = false;
  signUpObj: any = { name: '', email: '', password: '', role: '' };
  loginObj: any = { email: '', password: '' };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log('Register button clicked');
    console.log('Registration Data:', this.signUpObj);
    this.http.post("http://localhost:9992/student/create", this.signUpObj).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Successfully");
      this.clearSignUpForm();
    }, (error) => {
      console.error('Registration failed:', error);
      alert("Registration failed. Please try again.");
    });
  }
  redirectToRegister() {
    // Redirect to the register page or handle signup logic here
    window.location.href = 'http://localhost:4200/register';
  }
  gotoform(){
    window.location.href = 'http://localhost:4200/form';
  }

  onLogin() {
    console.log('Login button clicked');
    console.log('Login Data:', this.loginObj);
    const bodyData = {
      email: this.loginObj.email,
      password: this.loginObj.password
    };

    this.http.post("http://localhost:9992/student/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Logged in Successfully");
      this.clearLoginForm();
    }, (error) => {
      console.error('Login failed:', error);
      alert("Login failed. Please try again.");
    });
  }

  clearSignUpForm() {
    this.signUpObj = { name: '', email: '', password: '', role: '' };
  }

  clearLoginForm() {
    this.loginObj = { email: '', password: '' };
  }
}




