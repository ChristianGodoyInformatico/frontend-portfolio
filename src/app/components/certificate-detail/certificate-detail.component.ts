import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Certificate } from '../../models/certificate';
import { CertificateService } from '../../services/certificate.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-certificate-detail',
  templateUrl: './certificate-detail.component.html',
  styleUrls: ['./certificate-detail.component.css'],
  providers: [CertificateService]
})
export class CertificateDetailComponent implements OnInit {
	public url: string;
	public pdfSrc: string;
	public certificate: Certificate;
	public certificateName: string;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private _certificateService: CertificateService
	) {
		this.url = global.url;
		this.certificateName;
	}

	ngOnInit(): void {
		this._route.params.subscribe(params => {
			var id = params['id'];

			this.getCertificate(id);
		});
	}

	getCertificate(id){
		this._certificateService.getCertificate(id).subscribe(
			response => {
				if(response.certificate){
					this.certificate = response.certificate;
					this.pdfSrc = this.url+'pdf/'+response.certificate.pdf;
				}else{
					// REDIRECCION
					console.log("error");
				}
			},
			error => {
				console.log(error);
			}
		);
	}

}
