import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
const api_url='http://localhost:8080/api/homes/'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http :HttpClient) { }
  getAll() :Observable<Category[]>{
    return this.http.get<Category[]>(api_url+'findAllCategory')
  }
}