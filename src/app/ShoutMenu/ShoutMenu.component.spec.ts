import { TestBed, inject } from '@angular/core/testing';

import { ShoutMenuComponent } from './ShoutMenu.component';

describe('a ShoutMenu component', () => {
	let component: ShoutMenuComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ShoutMenuComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ShoutMenuComponent], (ShoutMenuComponent) => {
		component = ShoutMenuComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});