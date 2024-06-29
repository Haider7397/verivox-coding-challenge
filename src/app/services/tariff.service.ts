import { Injectable } from '@angular/core';
import { Tariff } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  baseUrl = "/api/tariffs"

  constructor(private http:HttpClient) {}

  getTariffs(){
    return this.http.get<Tariff[]>(this.baseUrl);
  }
}
