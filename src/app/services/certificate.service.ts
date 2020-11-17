import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from '../models/certificate';
import { global } from './global';

@Injectable()
export class CertificateService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = global.url;
	}

	prueba(){
		return "Hola ,undo desde el certificate service";
	}

	getCertificates(): Observable<any>{
		return this._http.get(this.url+'certificates');
	}

	getCertificate(id): Observable<any>{
		return this._http.get(this.url+'certificate/'+id);
	}


}