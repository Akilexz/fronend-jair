import { OrdenGastos } from '../model/OrdenGasto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const URL = 'http://localhost:8080/gestionPagos/';
const API_URL = URL + 'getOrdenGastos/';
const API_URL_CREATE = URL + 'saveOrUpdate/ordenGastos';
const API_URL_DELATE = URL + 'deleteOrdenGastos/';
@Injectable()

export class OrdenGastoService {
    [x: string]: any;
    apiUrl: string;
    constructor(private http: HttpClient) { }

    buscarOrdenGasto(): Observable<OrdenGastos[]> {
        return this.http.get<OrdenGastos[]>(API_URL);
    }

    crearOActualizarOrdenGasto(ordenGasto: OrdenGastos): any {
        console.log('ordenGastos', ordenGasto)
        return this.http.post(API_URL_CREATE, ordenGasto);
    }
    // delateOrdenGasto(ordenGastos: OrdenGastos): Observable<OrdenGastos[]> {
    //     return this.http.post<OrdenGastos[]>(API_URL_DELATE, ordenGastos);
    // }
}
