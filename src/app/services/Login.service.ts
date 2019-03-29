import { Login } from './../model/Login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const URL = 'http://localhost:8080/gestionPagos/';
const API_URL = URL + 'getLogin/';
const API_URL_CREATE = URL + 'saveOrUpdateLogin';
const API_URL_DELATE = URL + 'deleteLogin';
@Injectable()

export class LoginService {
    [x: string]: any;
    apiUrl: string;
    constructor(private http: HttpClient) { }

    buscarLogin(): Observable<Login[]> {
        return this.http.get<Login[]>(API_URL);
    }

    crearOActualizarLogin(login: Login): any {
        console.log('login', login)
        return this.http.post(API_URL_CREATE, login);
    }
    // delateOrdenGasto(ordenGastos: OrdenGastos): Observable<OrdenGastos[]> {
    //     return this.http.post<OrdenGastos[]>(API_URL_DELATE, ordenGastos);
    // }
}
