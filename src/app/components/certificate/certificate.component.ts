import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
	public page_title;

	constructor() {
		this.page_title = 'Mis certificados';
	}

	ngOnInit(): void {
	}

}
