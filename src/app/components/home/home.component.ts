import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public page_title: string;
	public page_subtitle: string;
	public page_subtitle2: string;

	constructor() {
		this.page_title = "Bienvenido a mi web personal";
		this.page_subtitle = "Christian Godoy Villalobos";
		this.page_subtitle2 = "desarrollador web";
	}

	ngOnInit(): void {
	}

}
