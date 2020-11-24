import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Certificate } from '../../../models/certificate';
import { UserService } from '../../../services/user.service';
import { CertificateService } from '../../../services/certificate.service';

@Component({
  selector: 'app-list-certificate',
  templateUrl: './list-certificate.component.html',
  styleUrls: ['./list-certificate.component.css'],
  providers: [UserService, CertificateService]
})
export class ListCertificateComponent implements OnInit {
	public page_title: string;
	public certificates: Array<Certificate>;
	public identity;
	public token;
	public status;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _certificateService: CertificateService
	){
		this.page_title = 'Mis certificados profesionales';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
	}

	ngOnInit(): void {
		this.getCertificates();
	}

	getCertificates(){
		this._certificateService.getCertificates().subscribe(
			response =>{
				if(response.certificates){
					this.certificates = response.certificates;
				}
			},
			error => {
				console.log(error);
			}	
		);
	}


}
