import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Dev } from '../../models/dev';
import { DevService } from '../../services/dev.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [DevService]
})
export class ProjectsComponent implements OnInit {
	public page_title: string;
	public devs: Dev[];

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private _devService: DevService
	){
		this.page_title = 'Mis proyectos realizados'
	}

	ngOnInit(): void {
		this.getDevs();
	}

	getDevs(){
		this._devService.getDevs().subscribe(
			response => {
				if(response.devs){
					this.devs = response.devs;
				}
			},
			error => {
				console.log(error);
			}
		);
	}

}
