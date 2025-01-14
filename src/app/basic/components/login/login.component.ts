import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';
import {AbstractControl,NonNullableFormBuilder, ReactiveFormsModule,ValidationErrors,} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzContentComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:  [ReactiveFormsModule, NzButtonModule,RouterModule ,NzFormModule, NzInputModule,NzLayoutComponent, NzContentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validateForm!:FormGroup;

  constructor(private fb :FormBuilder,
    private authService:AuthService,
    private notification:NzNotificationService,
    private router:Router,
  ){ }



  ngOnInit(){
    this.validateForm = this.fb.group({
      //email:[null,[Validators.email,Validators.required]],
      username:[null,[Validators.required]],
      //lastName:[null,[Validators.required]],
      //phone:[null],
      password:[null,[Validators.required]],
      //checkPassword:[null,[Validators.required , this.matchPasswordValidator()]],
    })
  }

  submitForm(){
    this.authService.login(this.validateForm.get(["username"])!.value, this.validateForm.get(["password"])!.value).subscribe(res=>{
      console.log(res)
    },error =>{
      this.notification.error('ERROR', '${error.error}',{nzDuration:5000});
    });
  }
}
