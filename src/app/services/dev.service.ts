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

	addDev(token, dev): Observable<any>{
		let params = JSON.stringify(dev);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', token);

		return this._http.post(this.url + 'project', params, {headers: headers});
	}

	getDevs(): Observable<any>{
		return this._http.get(this.url+'projects');
	}

	getDev(id): Observable<any>{
		return this._http.get(this.url+'project/'+id);
	}

	delete(token, id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', token);

		return this._http.delete(this.url+'project/'+id, {headers: headers});
	}

	deleteImages(token, id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
								.set('Authorization', token);

		return this._http.delete(this.url+'project-images/'+id, {headers: headers});
	}


}