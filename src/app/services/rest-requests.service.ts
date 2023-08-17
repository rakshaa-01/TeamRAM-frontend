import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../dataModel/Stock';

@Injectable({
  providedIn: 'root'
})
export class RestRequestsService {

  constructor(private httpClient: HttpClient) { }
  liveServerUrl: string= "http://localhost:8080";

  getStocks(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.liveServerUrl}/stocks`);
    
  }

  addStock(stock:Stock): Observable<Stock>{
    return this.httpClient.post<Stock>(`${this.liveServerUrl}/stocks`,stock)
  }
}
