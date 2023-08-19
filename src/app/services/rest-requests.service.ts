import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  delStock(id: any): Observable<string> {
    return this.httpClient.delete(`${this.liveServerUrl}/stock/${id}`, { responseType: 'text'});
    //The below code also works for the above operation!
    //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    //return this.httpClient.delete(`${this.liveServerUrl}/stock/${id}`, {headers, responseType: 'text'});
  }
}
