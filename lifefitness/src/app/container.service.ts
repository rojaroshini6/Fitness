import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost:3000/equipments');
  }



}
