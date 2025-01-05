import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';
import {AbstractControl,NonNullableFormBuilder, ReactiveFormsModule,ValidationErrors,} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';;

@Component({
  selector: 'app-sign-up-client',
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './sign-up-client.component.html',
  styleUrl: './sign-up-client.component.scss'
})
export class SignUpClientComponent {
  validateForm!:FormGroup;

  constructor(private fb :FormBuilder,
    private authService:AuthService,
    private notification:NzNotificationService,
    private router:Router,
  ){ }

  ngOnInit(){
      this.validateForm = this.fb.group({
        email:[null,[Validators.email,Validators.required]],
        name:[null,[Validators.required]],
        lastName:[null,[Validators.required]],
        phone:[null],
        password:[null,[Validators.required]],
        checkPassword:[null,[Validators.required , this.matchPasswordValidator()]],
      })
  }
  matchPasswordValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!this.validateForm) {
        return null;
      }
      return control.value === this.validateForm.get('password')?.value
        ? null
        : { passwordMismatch: true };
    };
  }
  

  submitForm(){
    this.authService.registerClient(this.validateForm.value).subscribe(res=>{
      this.notification.success('success','signUp successful' , {nzDuration:5000});
      this.router.navigateByUrl("/login");

    },error=>{
      this.notification.error('ERROR', '${error.error}',{nzDuration:5000});
    });
  }

}
