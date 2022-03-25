const Routes = {
	home: '/',
	resume: 'https://docs.google.com/document/d/1OOHycUcBDg2OrI9cFXekymovHYsKSR6PtFPt2sGXX9Q/edit',
	github: 'https://github.com/VladADragos/',
	contact: '/contact',
	about: '/about',
	projects: {
		catbook: {
			demo: 'http://www.catbook.se/',
			source: 'https://github.com/VladADragos/Catbook'
		},
		routiner: {
			demo: 'http://www.routiner.se/',
			source: 'https://github.com/VladADragos/Routiner'
		}
	},
	portfolio: {
		index: '/portfolio',
		detail: param => `/portfolio/item=${param}`
	}
};

export default Routes;
