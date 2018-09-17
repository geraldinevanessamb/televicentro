// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/indexfrist/',
    	url: 'indexfrist.html',
    	name: 'indexfrist',
  		},
		{
		path: '/envivo/',
    	url: 'envivo.html',
    	name: 'envivo',
  		},
		{
		path: '/noticias/',
    	url: 'noticias.html',
    	name: 'noticias',
  		},
		{
		path: '/tvcplay/',
    	url: 'tvcplay.html',
    	name: 'tvcplay',
  		},
		{
		path: '/programas/',
    	url: 'programas.html',
    	name: 'programas',
  		},
		{
		path: '/deportes/',
    	url: 'deportes.html',
    	name: 'deportes',
  		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		{
		path: '/setting/',
    	url: 'setting.html',
    	name: 'setting',
  		},
		{
		path: '/aboutdulce/',
    	url: 'aboutdulce.html',
    	name: 'aboutdulce',
  		},
		{
		path: '/aboutindira/',
    	url: 'aboutindira.html',
    	name: 'aboutindira',
  		},
		{
		path: '/aboutdaniel/',
    	url: 'aboutdaniel.html',
    	name: 'aboutdaniel',
  		},
		{
		path: '/aboutgeraldine/',
    	url: 'aboutgeraldine.html',
    	name: 'aboutgeraldine',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

