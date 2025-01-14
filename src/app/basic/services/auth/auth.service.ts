import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/';
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerClient(signUpRequestDTO:any):Observable <any>{
    return this.http.post(BASIC_URL + "client/sign_up" , signUpRequestDTO);
  } 
  
  registerCompany(signUpRequestDTO:any):Observable <any>{
    return this.http.post(BASIC_URL + "company/sign_up" , signUpRequestDTO);
  }
  
  login(username:String , password:String){
    return this.http.post(BASIC_URL + "authenticate" , {username , password},{observe:"response" })
    .pipe(
      map((res: HttpResponse<any>) =>{
        console.log(res.body)
        const tokenLength =res.headers.get(AUTH_HEADER)?.length;
        const tokenbearer =res.headers.get(AUTH_HEADER)?.substring(7,tokenLength);
        console.log(tokenbearer);
        return res;
      })
    );
  }
  
}
