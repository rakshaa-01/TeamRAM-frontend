import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Stock } from '../dataModel/Stock';

@Injectable({
  providedIn: 'root'
})
export class RestRequestsService {
  constructor(private httpClient: HttpClient) { }
  liveServerUrl: string = environment.liveServerUrl;
  private apiUrl: string = 'https://v588nmxc10.execute-api.us-east-1.amazonaws.com/default/tickerList';

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
  
  updateStock(id: number, stockDetails: Stock): Observable<Stock> {
    const url = `${this.liveServerUrl}/stock/${id}`;
    return this.httpClient.put<Stock>(url, stockDetails);
  }
}
