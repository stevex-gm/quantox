let LOAD = {};

LOAD.model = ['getFitnessData.js'];

LOAD.view = [
	'welcome.js',
	'circle.js',
	'content.js',
	'footer.js',
	'header.js',
	'icon.js',
	'info.js',
	'menu.js'
];

LOAD.controller = [
	'createHeader.js',
	'createMenu.js',
	'createContent.js',
	'onClickMenu.js'
];

LOAD.resources = [
	'moment.js'
];

LOAD.libs = [
	'lib.js',
	'tag.js'
];

LOAD.conf = [
	'config.js'
];

LOAD.app = ['app.js'];

LOAD.css = [
	'./css/style.css'
];

LOAD.all = '';

LOAD.js = (folder, arr)=>{

	return new Promise(async res=>{

		for(let i=0; i<arr.length; i++){
			let  data = await (await fetch(`./${folder}/`+arr[i])).text();
			LOAD.all += '\n'+data;
		}
		res('Done');

	});

}

(async ()=>{

	for(let i=LOAD.css.length-1; i>-1; --i){
        let css = document.createElement('link');
        css.type = 'text/css';
        css.rel = 'stylesheet';
        css.href = LOAD.css[i];
        let title = document.getElementsByTagName('title')[0];
        title.parentNode.insertBefore(css,title.nextSibling);
	}


	await LOAD.js('lib', LOAD.libs);
	await LOAD.js('resources', LOAD.resources);
	await LOAD.js('js/conf', LOAD.conf);
	await LOAD.js('js/view', LOAD.view);
	await LOAD.js('js/model', LOAD.model);
	await LOAD.js('js/controller', LOAD.controller);
	await LOAD.js('js', LOAD.app);

	let app;
	eval("app = function () { " + LOAD.all + "\nreturn APP; }();");
	app.start();

})()