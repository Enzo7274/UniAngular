import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgControl } from '@angular/forms';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent {
 class_validate = "needs-validation";
 form_login = new FormGroup({
 username: new FormControl('', Validators.required),
 password: new FormControl('', Validators.required)
 });
 constructor(private router: Router, private authService: AuthService) {
 }
 valida_campos_dados(): boolean{
 if (this.form_login.invalid) {
 this.class_validate = "was-validated";
 return false;
 }else{
 this.class_validate = "needs-validation";
 return true;
 }
 }
 async logar(){
 if(this.valida_campos_dados()){
 let user = {"username": this.form_login.get('username')?.value, "password":
this.form_login.get('password')?.value}
 await this.authService.login(user);
 this.router.navigateByUrl('/v1/api/login');
 }
 }
}