import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: String = 'https://keycodebook-1.herokuapp.com'

  constructor(
    private http: HttpClient
  ) { }

  createUser(formData){
    return this.http.post<User>(`${this.apiURL}/user/create`, formData)
  }

  login(formData){
    return this.http.post<User>(`${this.apiURL}/login`, formData)
  }
}

