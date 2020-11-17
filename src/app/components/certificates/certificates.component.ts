import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Certificate } from '../../models/certificate';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
  providers: [CertificateService]
})
export class CertificatesComponent implements OnInit {
	public page_title;
	public certificates: Certificate[];

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _certificateService: CertificateService
	){
		this.page_title = "Mis certificados";
	}

	ngOnInit(): void {
		this.getCertificates();
	}

	getCertificates(){
		this._certificateService.getCertificates().subscribe(
			response => {
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
