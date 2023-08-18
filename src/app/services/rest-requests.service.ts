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
    return this.httpClient.get<Stock[]>(`${this.liveServerUrl}/stock`);
  }

  addStock(stock: Stock): Observable<Stock>{
    return this.httpClient.post<Stock>(`${this.liveServerUrl}/stock`,stock)
  }

  delStock(id: any): Observable<any> {
    return this.httpClient.delete<void>(`${this.liveServerUrl}/stock/${id}`);
  }
}
