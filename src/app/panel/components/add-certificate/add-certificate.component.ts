import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Certificate } from '../../../models/certificate';
import { UserService } from '../../../services/user.service';
import { CertificateService } from '../../../services/certificate.service';

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css'],
  providers: [UserService, CertificateService]
})
export class AddCertificateComponent implements OnInit {
	public page_title: string;
	public certificate: Certificate<any>;
	public identity;
	public token;
	public status;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _certificateService: CertificateService
	){
		this.page_title = 'Subir un nuevo certificado';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.certificate = new Certificate('', '', '', null);
	}

	ngOnInit(): void {
	}

	onSubmit(form){
		this._certificateService.addCertificate(this.token, this.certificate).subscribe(
			response => {
				if(response.certificate){
					this.status = 'success';
					this.certificate = response.certificate;
					this._router.navigate(['/panel/certificados']);
				}else{
					this.status = 'error';
				}
			},
			error => {
				console.log(error);
				this.status = 'error';
			}
		);
	}

}
