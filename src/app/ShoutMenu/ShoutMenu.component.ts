import { Component, OnInit } from '@angular/core';
import { Shouts } from '../shouts';
import { Router } from '@angular/router';
import { ShoutsService } from '../services/shouts.service';

@Component({
	selector: 'shouts-menu',
	template: require('./ShoutMenu.component.html'), 
	styles: [require("./ShoutMenu.component.css")] 
})

export class ShoutMenuComponent implements OnInit {

	item: Shouts = {
  	id: 37,
	  rating: 43,
	  userID: '69',
	  commentSectionId: 5,
	  title: 'okay!!',
	  message: 'suifaghrurguigfaqgfruqighrgugudfhuigfuhsiugf'
	};

	 shouts_menu: Shouts[] = [];

    constructor(
        private shoutService: ShoutsService,
        private router: Router
    ) { }

	ngOnInit() {
		this.shoutService.getShouts().then(shouts => this.shouts_menu = shouts);
        console.log(JSON.stringify(this.shouts_menu));
        console.log(this.shouts_menu);
	}

	showDetails(shout: Shouts): void 
	{
        let link = ['/detail', shout.id];
        this.router.navigate(link);
    }

}