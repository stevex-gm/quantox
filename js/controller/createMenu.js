APP.createMenu = data=>{
	console.log('createMenu');
	APP.menu = $lib.createObj({div:[], id:'menu'}, APP.root)[0];
	$lib.createObj(APP.view.menu(APP.hash), APP.menu);
	APP.createContent();
}