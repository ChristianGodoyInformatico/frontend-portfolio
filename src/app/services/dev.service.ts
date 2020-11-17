import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dev } from '../models/dev';
import { global } from './global';

@Injectable()
export class DevService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = global.url;
	}

	prueba(){
		return "Hola ,undo desde el dev service";
	}

	getDevs(): Observable<any>{
		return this._http.get(this.url+'projects');
	}

	getDev(id): Observable<any>{
		return this._http.get(this.url+'project/'+id);
	}


}