import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  listUsers: User[] = [];
  formUser!: FormGroup;
  // emailUser: string = '';
  // senhaUser: string = '';

  constructor(private userService: UserService, private router: Router){}

  createForm(user: User){
    this.formUser = new FormGroup ({
      email: new FormControl(user.email),
      senha: new FormControl(user.password)
    })
  }
  
  ngOnInit(): void {
    this.getUsersList();
    this.createForm(new User());
    this.createLocalStorage(false);
  }

  getUsersList(){
    this.userService.getUsers().subscribe((users) => {
      this.listUsers = users;
    });
  }

  findUser(form: FormGroup){
    this.listUsers.find((user) => {
      if(user.email === form.value.email){
        this.user = user;
      }
    });
  }

  createLocalStorage(booleanValue: boolean) {
    localStorage.setItem('logged', `${booleanValue}`);
  }

  correctPassword(form: FormGroup, user: User) {
    if(user.password === form.value.senha){
      return true;
    }
    return false;
  }

  onSubmit(){
    this.findUser(this.formUser)
    
    if(this.correctPassword(this.formUser, this.user)) {
      localStorage.setItem('logged', 'true');
      this.createLocalStorage(true);
      this.router.navigate(['/']);
    }else{
      alert('passwor incorrect');
      this.createLocalStorage(false);
    }
    
  }
}

