import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailPipe } from 'src/app/comom/pipes/email.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private pipe: EmailPipe) {}

  loginForm!: FormGroup;
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern: string = '^[0-9]+$';

  ngOnInit(): void {
    this.creatForm();
  }
  
  creatForm(){
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.emailPattern)]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.passwordPattern)]),
    });
  }

  get userEmail(){
    return this.loginForm.get('userEmail')?.value;
  }

  get userPassword(){
    return this.loginForm.get('userPassword')?.value;
  }

  extractUseName(){
    const userName = this.pipe.transform(this.userEmail);
    localStorage.setItem('userName', userName);
  }

  onSubmit(){
    this.extractUseName();
  }
}
