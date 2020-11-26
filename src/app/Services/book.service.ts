import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../Models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiURL: String = 'https://keycodebook-1.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  createBook(formData){
    return this.http.post<Book>(`${this.apiURL}/book/create`, formData)
  }

  getAll(){
    return this.http.get(`${this.apiURL}/book/getAll`)
  }

  updateBook(formData, idBook){
    return this.http.put<Book>(`${this.apiURL}/book/update/${idBook}`, formData)
  }

  deleteBook(idBook){
    return this.http.delete(`${this.apiURL}/book/delete/${idBook}`)
  }
}  