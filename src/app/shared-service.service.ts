import { Injectable } from '@angular/core';
import {LoginDetail } from './model/loginDetail';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  getLoginDetails(formDetail: LoginDetail){
    return (formDetail.username.toLowerCase() === 'femina' && formDetail.password === 'azmi') ? true 
    : false;
  }
}
