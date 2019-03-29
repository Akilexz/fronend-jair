
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './../services/Login.service';
import { Login } from './../model/Login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginService: any;
  login: Login;

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginDataService: LoginService,
  ) { }

  ngOnInit() {
    this.login = new Login();
  }
crearOActualizarLogin(login:Login){
  this.loginDataService.crearOActualizarLogin(this.login)
  .Subscribe(data => {
    console.log(data);
    this.router.navigate(['cancelar']),
    alert ('enviado')

  });
}
}
