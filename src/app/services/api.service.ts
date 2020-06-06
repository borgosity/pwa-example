import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL: string = "https://www.techiediaries.com/api/data.json";

  constructor(private httpClient: HttpClient) { }

  fetch(): Observable<Item[]> {
    return <Observable<Item[]>>this.httpClient.get(this.baseURL);
  }
}
